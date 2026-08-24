"use client";

import { useEffect } from "react";

/** Nothing may stay hidden longer than this, whatever the page turns out to be. */
const FAILSAFE_MS = 2500;

/**
 * Content that carries its own entrance: a heading, a line of copy, a picture, a
 * button, a list item. `<ul>` and `<ol>` are absent on purpose — a list revealed
 * whole is one slab, while its items cascade.
 *
 * Links need a class to qualify. A bare `<a>` is usually inline inside a
 * paragraph, and the paragraph is already an item; a classed one is a button or
 * a card link, which is a piece of the page in its own right.
 */
const CONTENT =
  "h1,h2,h3,h4,h5,h6,p,li,img,picture,video,figure,blockquote,button,a[class],table,form,iframe,canvas,svg";

/** Chrome that must not fade: a fixed bar mid-fade over content reads as a bug. */
const SKIP = "header,nav";

/**
 * Structure, never an item. Sections are alike siblings of each other, so
 * without this the page's own sections read as a set and each one arrives as a
 * slab — the very thing this layer exists to stop.
 */
const LANDMARK = "body,main,section,header,footer,aside,nav";

/**
 * Reveals content as it is scrolled to.
 *
 * Four attempts at doing this through the markup failed for the same reason:
 * they depended on the shape the model happened to write. The last one — stage
 * a container, cascade its direct children — was measured on a real site and
 * reached 26 of 158 content elements. Everything living one wrapper deeper than
 * the rule expected simply appeared, which is what the owner saw as "half the
 * site still has no animation".
 *
 * So the rule now names what to move instead of describing where it sits: the
 * content tags themselves, plus any set of alike siblings (a grid of cards, a
 * list of prices). Walking stops at whatever is marked, so a card arrives as a
 * card rather than as three separate pieces of itself.
 *
 * Two decisions carry the rest, and both were bought with a failure:
 *
 *  - each element is observed, never its container. A barbershop's ticker is a
 *    2623px-wide strip: an observer watching it never fires, so its words were
 *    hidden and stayed hidden. The words themselves are on screen and fire fine.
 *  - a timer reveals anything still hidden after FAILSAFE_MS. Deciding "is this
 *    already animated?" is a race — framer-motion writes its transform after
 *    this effect runs — and a race is not something to defend content with.
 *
 * Nothing is hidden until JavaScript has marked it. If this never runs, the page
 * is simply static: content stuck at `opacity: 0` is the one failure mode that
 * must never happen.
 */
export function MotionLayer() {
  useEffect(() => {
    const items = findMotionItems(document);
    if (items.length === 0) return;

    for (const { el, index } of items) {
      el.dataset.motionItem = "";
      el.style.setProperty("--motion-index", String(index));
      // Timing is set on the parent, where custom properties inherit down to
      // every sibling at once: a wall of photographs cascades faster than a
      // column of quotes, and a hero takes its time.
      const parent = el.parentElement;
      if (parent && !parent.dataset.motionRole) parent.dataset.motionRole = inferRole(parent);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.motionItem = "seen";
          io.unobserve(entry.target); // once — re-firing on scroll-back is nausea
        }
      },
      // Fires just before the element is fully in view, so the movement finishes
      // as the reader arrives rather than starting under their eyes.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    for (const { el } of items) io.observe(el);

    const failsafe = setTimeout(() => {
      for (const { el } of items) el.dataset.motionItem = "seen";
      io.disconnect();
    }, FAILSAFE_MS);

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return null;
}

/** An element to reveal, and its position among the siblings it arrives with. */
export interface MotionItem {
  readonly el: HTMLElement;
  readonly index: number;
}

/**
 * Everything on the page that should arrive rather than appear.
 *
 * Exported so the behaviour can be tested against real markup instead of being
 * asserted about in prose.
 */
export function findMotionItems(root: Document | HTMLElement): MotionItem[] {
  const items: MotionItem[] = [];
  const doc = "body" in root ? root.body : root;
  if (doc) walk(doc, items, 0);
  return items;
}

/** Element children only — text nodes and comments cannot be animated. */
function kids(el: Element): HTMLElement[] {
  return Array.from(el.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
}

/**
 * True when this element is one of several alike siblings — a card in a grid, a
 * row in a price list, a slide in a strip.
 *
 * Sameness is judged by tag and by shape, never by class: a card written as
 * `<div><img><h3><p>` and one written with an extra wrapper are the same thing
 * to a reader and different strings to a matcher. Shape is what separates a real
 * set from two layout columns that merely happen to both be `<div>` — count them
 * as a set and each column arrives as a slab, taking its contents with it.
 */
function isSetMember(el: HTMLElement): boolean {
  if (el.matches(LANDMARK)) return false;
  const siblings = el.parentElement ? kids(el.parentElement) : [];
  return (
    siblings.length >= 2 &&
    siblings.every((s) => s.tagName === el.tagName && s.children.length === el.children.length)
  );
}

/**
 * True when something else already drives this element — a `<Reveal>` holding
 * its opacity, a slider positioning its track. Adding a second animation to the
 * same property is a fight the element loses.
 *
 * A driven element is skipped but still walked into: on sites built before this
 * layer, one `<Reveal>` wraps a whole section, and its contents are exactly what
 * needs to cascade.
 */
function isDriven(el: HTMLElement): boolean {
  return el.style.opacity !== "" || el.style.transform !== "";
}

function walk(node: HTMLElement, out: MotionItem[], depth: number): void {
  if (depth > 12) return; // a real page never nests content this deep

  let index = 0;
  for (const child of kids(node)) {
    if (child.matches(SKIP)) continue;

    if (!isDriven(child) && (child.matches(CONTENT) || isSetMember(child))) {
      out.push({ el: child, index });
      index += 1;
      continue; // a card arrives as a card, not as three pieces of itself
    }

    walk(child, out, depth + 1);
  }
}

/**
 * How a group of siblings should feel, judged by what it holds — never by its
 * name. A component called `Gallery` routinely holds three bullet points, and
 * one called `Advantages` a photo wall.
 */
export function inferRole(el: HTMLElement): string {
  if (el.querySelector("video")) return "hero";
  if (el.querySelectorAll("img, picture").length >= 3) return "gallery";
  if (/«|»|”|“|відгук|review|testimonial/i.test(el.textContent ?? "")) return "proof";
  return "section";
}
