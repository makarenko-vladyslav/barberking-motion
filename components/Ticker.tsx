"use client";

import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function Ticker() {
  const { t } = useLocale();

  const items = [
    String(t("ticker.item1")),
    String(t("ticker.item2")),
    String(t("ticker.item3")),
    String(t("ticker.item4")),
    String(t("ticker.item5")),
    String(t("ticker.item6")),
  ];

  return (
    <div className="relative w-full bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] py-3.5 overflow-hidden border-y border-[hsl(38_92%_42%)]">
      <Marquee speed={40}>
        <div className="flex items-center font-display font-extrabold text-xl sm:text-2xl tracking-wider uppercase">
          {items.map((item, idx) => (
            <span key={idx} className="mx-8 flex items-center gap-8">
              <span>{item}</span>
              <span className="text-xs opacity-60 font-sans">◆</span>
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
