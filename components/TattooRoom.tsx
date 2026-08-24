"use client";

import { useLocale } from "@/lib/i18n";

interface MasterItem {
  name: string;
  role: string;
  location: string;
  photo?: string;
  initials: string;
}

export default function TattooRoom() {
  const { t } = useLocale();

  return (
    <section id="tattoo" className="py-20 bg-[hsl(24_15%_10%)] text-white relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("tattoo.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4 leading-none">
            {String(t("tattoo.title"))}
          </h2>
          <p className="text-white/80 text-base max-w-3xl leading-relaxed">
            {String(t("tattoo.subtitle"))}
          </p>
        </div>

        {/* Oversized Statement Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-[hsl(38_92%_50%/0.08)] border border-[hsl(38_92%_50%/0.3)]">
          <p className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-[hsl(38_92%_50%)] text-center">
            "{String(t("tattoo.quote"))}"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Text Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-5 rounded-lg bg-[hsl(24_18%_7%)] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-[hsl(38_92%_50%)] block mb-1">
                ФАХОВИЙ СТАНДАРТ 01
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                {String(t("tattoo.feature1Title"))}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {String(t("tattoo.feature1Desc"))}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[hsl(24_18%_7%)] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-[hsl(38_92%_50%)] block mb-1">
                ФАХОВИЙ СТАНДАРТ 02
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                {String(t("tattoo.feature2Title"))}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {String(t("tattoo.feature2Desc"))}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[hsl(24_18%_7%)] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-[hsl(38_92%_50%)] block mb-1">
                ФАХОВИЙ СТАНДАРТ 03
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                {String(t("tattoo.feature3Title"))}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {String(t("tattoo.feature3Desc"))}
              </p>
            </div>

            <a
              href="#booking"
              className="inline-block px-8 py-4 rounded text-xs font-extrabold uppercase tracking-widest bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] hover:bg-[hsl(38_92%_42%)] transition-all shadow-xl"
            >
              Консультація та замовлення ескізу →
            </a>
          </div>

          {/* Visual Showcase 2-Photo Cluster */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-[hsl(38_92%_50%/0.3)] shadow-2xl bg-black mb-6">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2024/12/certificate-768x549.png"
                alt={String(t("tattoo.certAlt"))}
                className="w-full h-auto object-cover opacity-90"
              />
              <div className="p-4 bg-black/90 border-t border-white/10">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[hsl(38_92%_50%)] block mb-0.5">
                  RESIDENT ARTISTS IN-HOUSE
                </span>
                <p className="text-xs font-bold text-white">
                  Андрій та Анастасія — резиденти Tattoo Room (вул. Павлівська 18)
                </p>
              </div>
            </div>

            {/* Overlapped Secondary Photo */}
            <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-black max-w-xs ml-auto -mt-12 z-10 hidden sm:block">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5822-1024x683.jpg"
                alt={String(t("tattoo.hairAlt"))}
                className="w-full h-36 object-cover opacity-85"
              />
              <p className="p-2.5 text-[10px] text-white/80 bg-black/90 uppercase font-bold tracking-wider">
                — Авторські ескізи та контури бороди вогнем
              </p>
            </div>
          </div>
        </div>

        {/* Real Proof Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/15 text-center">
          <div>
            <span className="font-display text-4xl font-black text-[hsl(38_92%_50%)]">{String(t("tattoo.stat1Val"))}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/60 block mt-1">{String(t("tattoo.stat1Desc"))}</span>
          </div>
          <div>
            <span className="font-display text-4xl font-black text-[hsl(38_92%_50%)]">{String(t("tattoo.stat2Val"))}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/60 block mt-1">{String(t("tattoo.stat2Desc"))}</span>
          </div>
          <div>
            <span className="font-display text-4xl font-black text-[hsl(38_92%_50%)]">{String(t("tattoo.stat3Val"))}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/60 block mt-1">{String(t("tattoo.stat3Desc"))}</span>
          </div>
          <div>
            <span className="font-display text-4xl font-black text-[hsl(38_92%_50%)]">{String(t("tattoo.stat4Val"))}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/60 block mt-1">{String(t("tattoo.stat4Desc"))}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
