"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

type ServiceItem = {
  id: string;
  category: string;
  title: string;
  price: string;
  duration: string;
  desc: string;
  tag?: string | null;
  featured?: boolean;
};

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState("all");

  const items = (t("services.items") as ServiceItem[]) || [];

  const filtered =
    activeTab === "all" ? items : items.filter((item) => item.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[hsl(220,20%,9%)] relative scroll-mt-16 overflow-hidden">
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-20 right-0 z-0 pointer-events-none opacity-[0.02] whitespace-nowrap text-[20vw] font-display font-extrabold text-white tracking-tighter"
      >
        PRICING
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block mb-2">
              {t("services.kicker") as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
              {t("services.title") as string}
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t("services.subtitle") as string}
            </p>
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={0.1} duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: "all", label: t("services.categories.all") as string },
              { id: "combos", label: t("services.categories.combos") as string },
              { id: "hair", label: t("services.categories.hair") as string },
              { id: "beard", label: t("services.categories.beard") as string },
              { id: "care", label: t("services.categories.care") as string },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[hsl(38,90%,50%)] text-[hsl(220,20%,9%)] shadow-lg shadow-[hsl(38,90%,50%)]/20"
                    : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Editorial Leader-Line Price List */}
        <Stagger className="space-y-4 max-w-4xl mx-auto">
          {filtered.map((item) => (
            <StaggerItem key={item.id}>
              <div 
                className={`group p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden ${
                  item.featured
                    ? "bg-zinc-900 border-[hsl(38,90%,50%)]/80 ring-1 ring-[hsl(38,90%,50%)]/30"
                    : "bg-[hsl(220,18%,13%)] hover:bg-zinc-900 border-zinc-800/80 hover:border-[hsl(38,90%,50%)]/50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[hsl(38,90%,50%)] transition-colors">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[hsl(38,90%,50%)]/20 text-[hsl(38,90%,50%)] text-[10px] font-extrabold tracking-widest uppercase">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  
                  {/* Dotted Leader Line */}
                  <div className="hidden sm:block flex-1 border-b border-dashed border-zinc-700/60 mx-4" />

                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-mono">
                      {item.duration}
                    </span>
                    <span className="font-display font-extrabold text-xl text-[hsl(38,90%,50%)] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
                    Преміальна косметика Uppercut / Reuzel
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold text-[hsl(38,90%,50%)] hover:text-amber-300 transition-colors"
                  >
                    <span>Записатися</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Section Footnote Line & Secondary CTA */}
        <Reveal delay={0.2} duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="mt-12 text-center pt-8 border-t border-zinc-800/80 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <span className="font-mono text-zinc-500">
              {t("services.footnote") as string}
            </span>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-extrabold uppercase tracking-wider hover:border-[hsl(38,90%,50%)] transition-colors"
            >
              <span>{t("cta.calc") as string}</span>
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
