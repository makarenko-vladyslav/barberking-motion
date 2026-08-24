"use client";

import { useLocale } from "@/lib/i18n";
import { Marquee, Reveal } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();

  const proofItems = [
    "4.9/5 В GOOGLE MAPS · 674 ВІДГУКИ",
    "255 000+ ВИКОНАНИХ СТРИЖОК",
    "ВЛАСНИЙ БЕЗКОШТОВНИЙ ПАРКІНГ",
    "ПОТРІЙНА МЕДИЧНА СТЕРИЛІЗАЦІЯ",
    "ПРЕМІАЛЬНИЙ ВІСКІ ТА ЕСПРЕСО",
    "АВТОНОМНА ТАТУ-КІМНАТА TATTOO ROOM",
    "ЛЬВІВ · ВУЛ. ШЕВЧЕНКА 31А",
  ];

  return (
    <section className="bg-[hsl(220,18%,13%)] border-y border-[hsl(220,15%,20%)] py-8 relative z-20 overflow-hidden">
      <Reveal duration={0.6} ease={[0.33, 1, 0.68, 1]} stagger={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block">
              ПІДТВЕРДЖЕНІ ПОКАЗНИКИ
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-xl relative overflow-hidden group">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mb-1">
                СТРИЖКИ
              </div>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[hsl(38,90%,50%)]">
                {t("stats.haircuts") as string}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-medium">
                {t("stats.haircutsLabel") as string}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-xl relative overflow-hidden group">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mb-1">
                ГОСТІ
              </div>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[hsl(38,90%,50%)]">
                {t("stats.clients") as string}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-medium">
                {t("stats.clientsLabel") as string}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-xl relative overflow-hidden group">
              <div className="text-[10px] text-[hsl(38,90%,50%)] uppercase tracking-widest font-mono mb-1">
                РЕЙТИНГ
              </div>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[hsl(38,90%,50%)]">
                {t("stats.rating") as string}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-medium">
                {t("stats.ratingLabel") as string}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-xl relative overflow-hidden group">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mb-1">
                ДОСВІД
              </div>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[hsl(38,90%,50%)]">
                {t("stats.experience") as string}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-medium">
                {t("stats.experienceLabel") as string}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Infinite Ticker Strip */}
      <Marquee duration={22} className="py-2.5 bg-[hsl(38,90%,50%)] text-[hsl(220,20%,9%)] font-extrabold text-xs tracking-widest uppercase shadow-inner">
        {proofItems.map((item, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-black/30 font-extrabold">―</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
