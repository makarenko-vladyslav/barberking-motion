"use client";

import { useLocale } from "@/lib/i18n";

interface Master {
  name: string;
  role: string;
  location: string;
  photo?: string;
  initials: string;
}

export default function Team() {
  const { t } = useLocale();

  const teamList = (t("team.members") as Master[]) || [];

  return (
    <section id="team" className="py-20 bg-[hsl(24_18%_7%)] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("team.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("team.title"))}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            {String(t("team.subtitle"))}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {teamList.map((m, idx) => (
            <div
              key={idx}
              className="bg-[hsl(24_15%_12%)] border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-[hsl(38_92%_50%/0.5)] transition-all group"
            >
              {/* Photo or Initials Avatar */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-white/10 group-hover:border-[hsl(38_92%_50%)] transition-colors relative bg-black flex items-center justify-center">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display text-2xl font-extrabold text-[hsl(38_92%_50%)] bg-[hsl(24_18%_10%)]">
                    {m.initials}
                  </div>
                )}
              </div>

              <h3 className="font-display text-lg font-bold text-white uppercase leading-tight mb-1 group-hover:text-[hsl(38_92%_50%)] transition-colors">
                {m.name}
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(38_92%_50%)] mb-1">
                {m.role}
              </span>
              <span className="text-[9px] text-white/50 truncate w-full mb-3">
                {m.location}
              </span>

              <a
                href="#booking"
                className="mt-auto text-[10px] font-extrabold uppercase tracking-widest text-white/70 hover:text-[hsl(38_92%_50%)] pt-2 border-t border-white/10 w-full block py-1"
              >
                ЗАПИСАТИСЯ ДО МАЙСТРА
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
