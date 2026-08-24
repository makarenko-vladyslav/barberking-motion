"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

type TeamMember = {
  name: string;
  role: string;
  experience: string;
  specialty: string;
};

export default function Team() {
  const { t } = useLocale();
  const members = (t("team.members") as TeamMember[]) || [];

  return (
    <section id="team" className="py-24 bg-[hsl(220,20%,9%)] relative scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block mb-2">
              {t("team.kicker") as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
              {t("team.title") as string}
            </h2>
            <p className="mt-4 text-zinc-400 text-sm">
              {t("team.subtitle") as string}
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-[hsl(220,18%,13%)] rounded-2xl p-6 border border-zinc-800 text-center flex flex-col justify-between h-full group hover:border-[hsl(38,90%,50%)] transition-all shadow-xl">
                <div>
                  {/* Initials Avatar Box per rule */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-[hsl(38,90%,50%)]/10 border-2 border-[hsl(38,90%,50%)] text-[hsl(38,90%,50%)] font-display font-extrabold text-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-inner">
                    {m.name.slice(0, 2)}
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wider">
                    {m.name}
                  </h3>
                  <div className="text-xs font-bold text-[hsl(38,90%,50%)] tracking-widest uppercase mt-1">
                    {m.role}
                  </div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-1 font-mono">
                    {m.experience}
                  </div>

                  <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
                    {m.specialty}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <a
                    href="#contact"
                    className="block w-full py-2.5 bg-zinc-900 hover:bg-[hsl(38,90%,50%)] hover:text-[hsl(220,20%,9%)] text-zinc-300 font-extrabold text-[11px] uppercase tracking-widest rounded-lg transition-colors"
                  >
                    Записатись до майстра
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
