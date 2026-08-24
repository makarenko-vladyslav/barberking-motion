"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem, Carousel } from "@/components/motion";

type Review = {
  author: string;
  role: string;
  text: string;
  rating: string;
  date: string;
};

export default function Testimonials() {
  const { t } = useLocale();
  const reviews = (t("testimonials.reviews") as Review[]) || [];

  return (
    <section id="reviews" className="py-24 bg-[hsl(220,18%,13%)] relative scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.6} ease={[0.33, 1, 0.68, 1]} stagger={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block mb-2">
              {t("testimonials.kicker") as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
              {t("testimonials.title") as string}
            </h2>
            <p className="mt-3 text-zinc-400 text-sm">
              {t("testimonials.subtitle") as string}
            </p>
          </div>
        </Reveal>

        {/* Featured Big Quote Banner */}
        <Reveal delay={0.1} duration={0.6} ease={[0.33, 1, 0.68, 1]} stagger={0.1}>
          <div className="mb-12 p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-[hsl(38,90%,50%)]/50 shadow-2xl relative">
            <div className="text-4xl text-[hsl(38,90%,50%)] font-serif leading-none mb-2">“</div>
            <p className="text-lg sm:text-2xl font-display font-bold text-white leading-relaxed italic">
              {t("testimonials.featuredQuote") as string}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-zinc-800 pt-4">
              <div>
                <span className="text-sm font-bold text-white block">{t("testimonials.featuredAuthor") as string}</span>
                <span className="text-xs text-zinc-500">{t("testimonials.featuredMeta") as string}</span>
              </div>
              <span className="text-xs font-mono font-bold text-[hsl(38,90%,50%)]">
                4.9/5 · Google Maps (674 відгуки)
              </span>
            </div>
          </div>
        </Reveal>

        {/* Carousel without prev/next arrows */}
        <Carousel className="max-w-4xl mx-auto">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-2">
              <div className="bg-[hsl(220,20%,9%)] p-8 rounded-2xl border border-zinc-800 shadow-xl flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[hsl(38,90%,50%)] font-extrabold text-xs tracking-widest font-mono">
                      ОЦІНКА {rev.rating} · GOOGLE MAPS
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono">{rev.date}</span>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{rev.author}</div>
                    <div className="text-xs text-zinc-500">{rev.role}</div>
                  </div>
                  <span className="text-[10px] font-mono text-[hsl(38,90%,50%)] uppercase">
                    ВЕРЕФІКОВАНИЙ ВІЗИТ
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
