"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

type ProcessStep = {
  num: string;
  title: string;
  desc: string;
  time: string;
  detail: string;
};

export default function Process() {
  const { t } = useLocale();
  const steps = (t("process.steps") as ProcessStep[]) || [];

  return (
    <section className="py-24 bg-[hsl(38,25%,96%)] text-[hsl(220,25%,12%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,40%)] block mb-2">
              {t("process.kicker") as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-zinc-900 tracking-tight">
              {t("process.title") as string}
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xl relative h-full flex flex-col justify-between group hover:border-[hsl(38,90%,50%)] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-100">
                    <span className="font-display font-extrabold text-2xl text-[hsl(38,90%,40%)]">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold uppercase text-zinc-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-100 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {step.detail}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
