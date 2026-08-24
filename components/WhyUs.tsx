"use client";

import { useLocale } from "@/lib/i18n";

export default function WhyUs() {
  const { t } = useLocale();

  const standards = [
    {
      num: "01",
      title: String(t("whyUs.item1Title")),
      desc: String(t("whyUs.item1Desc"))
    },
    {
      num: "02",
      title: String(t("whyUs.item2Title")),
      desc: String(t("whyUs.item2Desc"))
    },
    {
      num: "03",
      title: String(t("whyUs.item3Title")),
      desc: String(t("whyUs.item3Desc"))
    },
    {
      num: "04",
      title: String(t("whyUs.item4Title")),
      desc: String(t("whyUs.item4Desc"))
    }
  ];

  return (
    <section id="whyUs" className="py-20 bg-[hsl(24_15%_10%)] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("whyUs.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("whyUs.title"))}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            {String(t("whyUs.subtitle"))}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-xl bg-[hsl(24_18%_7%)] border border-white/10 hover:border-[hsl(38_92%_50%)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl font-extrabold text-[hsl(38_92%_50%)] block mb-2">
                  СТАНДАРТ {item.num}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
