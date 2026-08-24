"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ() {
  const { t } = useLocale();
  const items = (t("faq.items") as FAQItem[]) || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[hsl(220,20%,9%)] relative scroll-mt-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block mb-2">
              {t("faq.kicker") as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
              {t("faq.title") as string}
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
              <div className="bg-[hsl(220,18%,13%)] border border-zinc-800 rounded-2xl overflow-hidden transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {item.q}
                  </span>
                  <span className="text-[hsl(38,90%,50%)] font-extrabold text-xl font-mono">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>

                {openIndex === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Secondary Question CTA */}
        <Reveal delay={0.2} duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="mt-12 text-center pt-8 border-t border-zinc-800 text-xs text-zinc-400">
            <span>Маєте додаткові запитання? Зателефонуйте адміністратору: </span>
            <a href="tel:+380662636339" className="text-[hsl(38,90%,50%)] font-bold hover:underline">
              +380 66 263 6339
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
