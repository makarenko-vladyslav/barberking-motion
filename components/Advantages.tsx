"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

type AdvantageCard = {
  stat: string;
  title: string;
  desc: string;
};

export default function Advantages() {
  const { t } = useLocale();
  const cards = (t("advantages.cards") as AdvantageCard[]) || [];

  return (
    <section id="advantages" className="py-24 bg-[hsl(220,20%,9%)] relative scroll-mt-16 overflow-hidden">
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-0 z-0 pointer-events-none opacity-[0.02] whitespace-nowrap text-[22vw] font-display font-extrabold text-white tracking-tighter"
      >
        STANDARDS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block mb-2">
              {t("advantages.kicker") as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
              {t("advantages.title") as string}
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t("advantages.subtitle") as string}
            </p>
          </div>
        </Reveal>

        {/* Featured Pull-Quote Statement */}
        <Reveal delay={0.1} duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-[hsl(220,18%,13%)] to-zinc-900 border border-[hsl(38,90%,50%)]/40 shadow-2xl relative">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white italic max-w-4xl leading-snug">
              "{t("advantages.quote") as string}"
            </div>
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[hsl(38,90%,50%)]">
              {t("advantages.quoteAuthor") as string}
            </div>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full bg-[hsl(220,18%,13%)] p-8 rounded-2xl border border-zinc-800/80 hover:border-[hsl(38,90%,50%)] transition-all duration-300 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="text-xs text-[hsl(38,90%,50%)] font-mono font-bold tracking-widest uppercase mb-2">
                    СТАНДАРТ {card.stat}
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase text-white mb-3 group-hover:text-[hsl(38,90%,50%)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Barberking Lviv</span>
                  <span className="text-[hsl(38,90%,50%)] font-bold">―</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
