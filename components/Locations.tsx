"use client";

import { useLocale } from "@/lib/i18n";

export default function Locations() {
  const { t } = useLocale();

  const branches = [
    {
      key: "branch1",
      title: String(t("locations.branch1.title")),
      address: String(t("locations.branch1.address")),
      metro: String(t("locations.branch1.metro")),
      hours: String(t("locations.branch1.hours")),
      parking: String(t("locations.branch1.parking")),
      features: String(t("locations.branch1.features")),
      mapUrl: "https://www.google.com/maps?q=вул.+Павлівська+18+Київ&output=embed"
    },
    {
      key: "branch2",
      title: String(t("locations.branch2.title")),
      address: String(t("locations.branch2.address")),
      metro: String(t("locations.branch2.metro")),
      hours: String(t("locations.branch2.hours")),
      parking: String(t("locations.branch2.parking")),
      features: String(t("locations.branch2.features")),
      mapUrl: "https://www.google.com/maps?q=Дніпровська+Набережна+15К+Київ&output=embed"
    },
    {
      key: "branch3",
      title: String(t("locations.branch3.title")),
      address: String(t("locations.branch3.address")),
      metro: String(t("locations.branch3.metro")),
      hours: String(t("locations.branch3.hours")),
      parking: String(t("locations.branch3.parking")),
      features: String(t("locations.branch3.features")),
      mapUrl: "https://www.google.com/maps?q=Олександра+Олеся+8А+Київ&output=embed"
    },
    {
      key: "branch4",
      title: String(t("locations.branch4.title")),
      address: String(t("locations.branch4.address")),
      metro: String(t("locations.branch4.metro")),
      hours: String(t("locations.branch4.hours")),
      parking: String(t("locations.branch4.parking")),
      features: String(t("locations.branch4.features")),
      mapUrl: "https://www.google.com/maps?q=Урлівська+11/44+Київ&output=embed"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-[hsl(24_18%_7%)] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("locations.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("locations.title"))}
          </h2>
          <p className="text-white/75 text-sm sm:text-base">
            {String(t("locations.subtitle"))}
          </p>
        </div>

        {/* 4 Branches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((b) => (
            <div
              key={b.key}
              className="bg-[hsl(24_15%_12%)] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[hsl(38_92%_50%/0.5)] transition-all duration-300 shadow-xl"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <h3 className="font-display text-3xl font-extrabold text-[hsl(38_92%_50%)] uppercase">
                    {b.title}
                  </h3>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-[10px] font-extrabold tracking-widest text-white/80">
                    ВІДЧИНЕНО
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-white/80 mb-6">
                  <p className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-white/50 uppercase font-bold">{String(t("locations.addressLabel"))}</span>
                    <strong className="text-white">{b.address}</strong>
                  </p>
                  <p className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-white/50 uppercase font-bold">{String(t("locations.landmarkLabel"))}</span>
                    <span>{b.metro}</span>
                  </p>
                  <p className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-white/50 uppercase font-bold">{String(t("locations.hoursLabel"))}</span>
                    <span>{b.hours}</span>
                  </p>
                  <p className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-white/50 uppercase font-bold">{String(t("locations.parkingLabel"))}</span>
                    <span>{b.parking}</span>
                  </p>
                  <p className="flex justify-between pt-1">
                    <span className="text-[hsl(38_92%_50%)] uppercase font-bold">{String(t("locations.servicesLabel"))}</span>
                    <span className="text-white/90">{b.features}</span>
                  </p>
                </div>

                {/* Google Maps Embed iframe */}
                <div className="w-full h-44 rounded overflow-hidden border border-white/10 relative">
                  <iframe
                    src={b.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: String(t("locations.mapFilter")) }}
                    allowFullScreen
                    loading="lazy"
                    title={b.title}
                  />
                </div>
              </div>

              <div className="px-6 py-4 bg-black/40 border-t border-white/10 flex items-center justify-between">
                <a
                  href="tel:0951079215"
                  className="text-xs font-bold text-white hover:text-[hsl(38_92%_50%)] transition-colors py-1"
                >
                  095 107 92 15
                </a>
                <a
                  href="#booking"
                  className="px-4 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] hover:bg-[hsl(38_92%_42%)] transition-all"
                >
                  Записатися сюди
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
