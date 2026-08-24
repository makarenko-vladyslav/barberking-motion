"use client";

import { useEffect } from "react";

/** Nothing may stay hidden longer than this, whatever the page turns out to be. */
const FAILSAFE_MS = 2500;

/**
 * Reveals content as it is scrolled to — the children of a section, and the
 * cards inside every grid within it.
 *
 * Three earlier attempts worked through the markup and all failed the same way:
 * they depended on how the model happened to write it. A 30-mechanic directive
 * produced zero mechanics; parameterised primitives were never handed props;
 * rewriting `<Reveal>` calls by regular expression reached one call site in
 * twenty-seven, because the other twenty-six wrap a single container. That last
 * one is exactly what the owner saw: "the animation is on the whole section, not
 * on the content in it".
 *
 * So this works a level below the markup. It finds GROUPS — a container with
 * several children, which is what a gallery, a price list or a service grid
 * always is — numbers those children, and reveals each one as it is reached. No
 * class names are read and no file names are trusted: a component called
 * `Gallery` routinely holds three bullet points, and one called `Advantages` a
 * photo wall.
 *
 * Two decisions carry the whole thing, and both were bought with a failure:
 *
 *  - each ITEM is observed, never its container. A barbershop's ticker is a
 *    2623px-wide strip: an observer watching it never fires, so its words were
 *    hidden and stayed hidden. The words themselves are on screen and fire fine.
 *  - a timer reveals anything still hidden after FAILSAFE_MS. Deciding "is this
 *    element already animated?" is a race — framer-motion writes its transform
 *    after this effect runs — and a race is not something to defend content with.
 *    The timer is a guarantee rather than another guess.
 *
 * Nothing is hidden until JavaScript has marked it. If this never runs, the page
 * is simply static: content stuck at `opacity: 0` is the one failure mode that
 * must never happen.
 */
export function MotionLayer() {
  useEffect(() => {
    const items: HTMLElement[] = [];
    const groups = findMotionGroups(document);

    for (const group of groups) {
      // A child that is itself a group must not also arrive as a slab: its cards
      // are what the reader sees moving, and animating both is card-in-card.
      const children = animatableChildren(group).filter((c) => !groups.has(c));
      if (children.length < 2) continue; // nothing left to cascade

      group.dataset.motionRole = inferRole(group);
      children.forEach((child, i) => {
        child.dataset.motionItem = "";
        child.style.setProperty("--motion-index", String(i));
        items.push(child);
      });
    }
    if (items.length === 0) return;

    const reveal = (el: HTMLElement) => {
      el.dataset.motionItem = "seen";
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          io.unobserve(entry.target); // once — re-firing on scroll-back is nausea
        }
      },
      // Fires just before the element is fully in view, so the movement finishes
      // as the reader arrives rather than starting under their eyes.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    for (const item of items) io.observe(item);

    const failsafe = setTimeout(() => {
      for (const item of items) reveal(item);
      io.disconnect();
    }, FAILSAFE_MS);

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return null;
}

/**
 * Every container in the document whose children should arrive one after
 * another. Exported so the behaviour can be tested against real markup rather
 * than asserted about in prose.
 */
export function findMotionGroups(root: Document | HTMLElement): Set<HTMLElement> {
  const groups = new Set<HTMLElement>();
  for (const section of root.querySelectorAll<HTMLElement>("section")) {
    collectGroups(section, groups);
  }
  return groups;
}

/** Element children only — text nodes and comments cannot be animated. */
function kids(el: HTMLElement): HTMLElement[] {
  return Array.from(el.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
}

/**
 * The children of a group this layer may move.
 *
 * An element carrying an inline opacity or transform is held by something else
 * — a `<Reveal>` mid-entrance, a slider positioning its track — and adding a
 * second animation to the same property produces a fight the element loses.
 * This catches what is already visible at mount; the failsafe timer covers what
 * starts moving afterwards.
 */
export function animatableChildren(group: HTMLElement): HTMLElement[] {
  return kids(group).filter(
    (c) => !c.hasAttribute("data-motion-item") && c.style.opacity === "" && c.style.transform === "",
  );
}

/**
 * A container worth cascading: several children that are alike.
 *
 * Sameness is judged by tag rather than by class, because a card written as
 * `<div><img><h3><p>` and one written with an extra wrapper are the same thing
 * to a reader and different strings to a matcher.
 */
function isGroup(el: HTMLElement): boolean {
  const children = kids(el);
  if (children.length < 3) return false;
  const first = children[0]!;
  return children.every((c) => c.tagName === first.tagName);
}

/**
 * Walk a section and collect everything that should cascade: the section's own
 * children, plus any grid or list nested inside it.
 *
 * Nested groups win over their parent — only the deepest container's children
 * are numbered, so a gallery's cards cascade rather than the gallery arriving as
 * one slab. That is the whole point of the exercise.
 */
function collectGroups(node: HTMLElement, out: Set<HTMLElement>, depth = 0): void {
  if (depth > 4) return; // deeper than this is layout scaffolding, not content

  if (kids(node).length >= 2) out.add(node);

  for (const child of kids(node)) {
    if (isGroup(child)) {
      out.add(child);
      continue; // a group's children are cards, not further groups
    }
    collectGroups(child, out, depth + 1);
  }
}

/** What the group is, judged by its contents — never by its name. */
function inferRole(el: HTMLElement): string {
  if (el.querySelector("video")) return "hero";
  if (el.querySelectorAll("img, picture").length >= 3) return "gallery";
  if (/«|»|”|“|відгук|review|testimonial/i.test(el.textContent ?? "")) return "proof";
  return "section";
}
