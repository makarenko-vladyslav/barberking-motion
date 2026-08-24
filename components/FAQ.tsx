"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList = (t("faq.list") as FAQItem[]) || [];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[hsl(24_15%_10%)] text-white relative border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("faq.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("faq.title"))}
          </h2>
          <p className="text-white/70 text-sm">
            {String(t("faq.subtitle"))}
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[hsl(24_18%_7%)] border border-white/10 rounded-lg overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-display text-xl font-bold uppercase text-white hover:text-[hsl(38_92%_50%)] transition-colors focus:outline-none"
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="text-[hsl(38_92%_50%)] text-xs font-bold uppercase tracking-widest shrink-0">
                    {isOpen ? "ЗГОРНУТИ" : "РОЗГОРНУТИ"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-white/75 leading-relaxed border-t border-white/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
