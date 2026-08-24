"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function TattooRoom() {
  const { t } = useLocale();
  const features = (t("tattoo.features") as string[]) || [];

  return (
    <section id="tattoo" className="py-24 bg-[hsl(220,18%,13%)] border-y border-zinc-800 relative scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 2-Photo Overlapped Cluster Layout */}
          <div className="lg:col-span-6 relative">
            <Reveal duration={0.72} ease={[0.33, 1, 0.68, 1]} stagger={0.06}>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700 max-w-md">
                <img
                  src="https://images.pexels.com/photos/37764947/pexels-photo-37764947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Tattoo Room process"
                  loading="lazy"
                  className="w-full h-[360px] sm:h-[420px] object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[hsl(38,90%,50%)] text-[hsl(220,20%,9%)] font-extrabold text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                  TATTOO ROOM
                </div>
              </div>
            </Reveal>

            {/* Overlapped Second Photo */}
            <Reveal delay={0.2} duration={0.72} ease={[0.33, 1, 0.68, 1]} stagger={0.06}>
              <div className="hidden sm:block absolute -bottom-8 -right-4 lg:right-0 z-20 w-64 rounded-2xl overflow-hidden border-2 border-[hsl(38,90%,50%)] shadow-2xl bg-zinc-900">
                <img
                  src="https://images.pexels.com/photos/18301169/pexels-photo-18301169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Tattoo Equipment Sterility"
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-zinc-950 text-[10px] font-mono text-zinc-300">
                  Медична стерильність картриджів Cheyenne
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Copy & Features */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1} duration={0.72} ease={[0.33, 1, 0.68, 1]} stagger={0.06}>
              <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block mb-2">
                {t("tattoo.kicker") as string}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
                {t("tattoo.title") as string}
              </h2>
              <p className="mt-3 text-zinc-200 font-semibold text-base sm:text-lg">
                {t("tattoo.subtitle") as string}
              </p>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                {t("tattoo.desc") as string}
              </p>

              {/* Quote caption */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-900/80 border-l-2 border-[hsl(38,90%,50%)]">
                <p className="text-xs text-zinc-300 italic">"{t("tattoo.quote") as string}"</p>
                <span className="text-[10px] uppercase font-bold text-[hsl(38,90%,50%)] mt-1 block">
                  {t("tattoo.artist") as string}
                </span>
              </div>

              <div className="mt-6 space-y-2.5">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-[hsl(38,90%,50%)] font-bold text-xs font-mono">―</span>
                    <span className="text-xs sm:text-sm text-zinc-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[hsl(38,90%,50%)] hover:bg-[hsl(35,95%,42%)] text-[hsl(220,20%,9%)] font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl transition-transform active:scale-95 text-center"
                >
                  Записатись на консультацію
                </a>
                <a
                  href="tel:+380662636339"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-xl text-center"
                >
                  +380 66 263 6339
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
