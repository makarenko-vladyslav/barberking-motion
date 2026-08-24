"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ReviewItem {
  name: string;
  branch: string;
  desc: string;
  text: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const [activeSlide, setActiveSlide] = useState(0);

  const reviews = (t("reviews.list") as ReviewItem[]) || [];

  return (
    <section id="reviews" className="py-20 bg-[hsl(24_18%_7%)] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("reviews.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("reviews.title"))}
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-3">
            {String(t("reviews.subtitle"))}
          </p>
          <div className="inline-block px-4 py-1 rounded bg-white/10 text-xs font-extrabold uppercase tracking-widest text-[hsl(38_92%_50%)]">
            {String(t("reviews.ratingMeta"))}
          </div>
        </div>

        {/* Display Quote Container */}
        <div className="max-w-4xl mx-auto bg-[hsl(24_15%_12%)] border border-white/15 rounded-2xl p-8 sm:p-12 relative shadow-2xl">
          <span className="font-serif text-8xl text-[hsl(38_92%_50%/0.3)] leading-none absolute top-4 left-6 select-none" aria-hidden="true">
            “
          </span>

          {reviews[activeSlide] && (
            <div className="relative z-10">
              <p className="font-display text-2xl sm:text-3xl font-bold uppercase leading-relaxed text-white mb-8 italic">
                "{reviews[activeSlide].text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-white">
                    {reviews[activeSlide].name}
                  </h3>
                  <p className="text-xs font-extrabold uppercase text-[hsl(38_92%_50%)]">
                    {reviews[activeSlide].branch} · <span className="text-white/60 font-normal">{reviews[activeSlide].desc}</span>
                  </p>
                </div>

                {/* Slider Dots Indicator */}
                <div className="flex items-center gap-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSlide === idx
                          ? "w-8 bg-[hsl(38_92%_50%)]"
                          : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
