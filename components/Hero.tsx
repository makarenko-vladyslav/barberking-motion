"use client";

import { useLocale } from "@/lib/i18n";
import { TextReveal, Reveal } from "@/components/motion";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[hsl(220,20%,9%)] select-none">
      {/* Background Watermark Layer - Absolute 0 height pointer events none */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.03] whitespace-nowrap text-[22vw] font-display font-extrabold text-white tracking-tighter"
      >
        BARBERKING
      </div>

      {/* Video Background Layer with Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          className="w-full h-full object-cover scale-105 filter brightness-40 contrast-110"
        >
          <source
            src="https://videos.pexels.com/video-files/6113144/6113144-hd_1280_720_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark radial and gradient scrim overlays for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,9%)] via-[hsl(220,20%,9%)]/65 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-[hsl(220,20%,9%)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 my-auto">
        {/* Rotating Circular Text Seal Badge */}
        <div className="hidden md:flex justify-end pr-8 mb-2 pointer-events-none">
          <div className="relative w-24 h-24 rounded-full border border-[hsl(38,90%,50%)]/30 flex items-center justify-center bg-zinc-950/40 backdrop-blur-md shadow-2xl animate-[spin_20s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[hsl(38,90%,50%)] font-mono text-[8px] tracking-[0.22em] uppercase fill-current">
              <path id="sealPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text>
                <textPath href="#sealPath" startOffset="0%">
                  {t("hero.sealText") as string}
                </textPath>
              </text>
            </svg>
            <div className="absolute text-[10px] font-display font-black text-white tracking-widest">
              BK
            </div>
          </div>
        </div>

        <Reveal duration={0.88} ease={[0.33, 1, 0.68, 1]}>
          {/* Eyebrow Kicker with REAL Meta */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-[hsl(38,90%,50%)]/40 backdrop-blur-md mb-6 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[hsl(38,90%,50%)] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-[hsl(38,90%,50%)]">
              {t("hero.metaKicker") as string}
            </span>
          </div>
        </Reveal>

        {/* Dynamic Typography H1 */}
        <Reveal delay={0.1} duration={0.88} ease={[0.33, 1, 0.68, 1]}>
          <TextReveal
            text={t("hero.title") as string}
            as="h1"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white uppercase tracking-tight leading-[1.02] max-w-5xl mx-auto drop-shadow-2xl"
          />
        </Reveal>

        {/* Lede Subtitle */}
        <Reveal delay={0.2} duration={0.88} ease={[0.33, 1, 0.68, 1]}>
          <p className="mt-5 text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance drop-shadow-md">
            {t("hero.subtitle") as string}
          </p>
        </Reveal>

        {/* CTA Pair */}
        <Reveal delay={0.3} duration={0.88} ease={[0.33, 1, 0.68, 1]}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-[hsl(38,90%,50%)] hover:bg-[hsl(35,95%,42%)] text-[hsl(220,20%,9%)] font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-2xl shadow-[hsl(38,90%,50%)]/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center"
            >
              {t("cta.book") as string}
            </a>
            <a
              href="tel:+380662636339"
              className="w-full sm:w-auto bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-xl backdrop-blur-md transition-all text-center"
            >
              {t("cta.call") as string}
            </a>
          </div>
        </Reveal>

        {/* 3-Item Meta Strip with Hairline Separators */}
        <Reveal delay={0.4} duration={0.88} ease={[0.33, 1, 0.68, 1]}>
          <div className="mt-10 max-w-3xl mx-auto pt-6 border-t border-zinc-800/80">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 text-xs font-semibold text-zinc-300 bg-zinc-950/60 backdrop-blur-md rounded-2xl border border-zinc-800/80 overflow-hidden shadow-2xl">
              <div className="py-3 px-4 flex flex-col items-center justify-center gap-0.5">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Графік</span>
                <span className="font-bold text-white text-xs">{t("hero.schedule") as string}</span>
              </div>
              <div className="py-3 px-4 flex flex-col items-center justify-center gap-0.5">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Локація</span>
                <span className="font-bold text-white text-xs">{t("hero.location") as string}</span>
              </div>
              <div className="py-3 px-4 flex flex-col items-center justify-center gap-0.5">
                <span className="text-[10px] text-[hsl(38,90%,50%)] uppercase tracking-widest font-mono">Оцінка</span>
                <span className="font-bold text-white text-xs">{t("hero.rating") as string}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Flanking Mini-Copy Columns (Desktop) */}
        <div className="hidden lg:grid grid-cols-2 gap-12 max-w-4xl mx-auto mt-8 text-left text-[11px] text-zinc-400 font-mono leading-relaxed opacity-80 border-t border-zinc-800/40 pt-4">
          <div className="flex gap-3 items-start">
            <span className="text-[hsl(38,90%,50%)] font-bold">―</span>
            <p>{t("hero.leftCopy") as string}</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[hsl(38,90%,50%)] font-bold">―</span>
            <p>{t("hero.rightCopy") as string}</p>
          </div>
        </div>
      </div>

      {/* Classic Scroll Cue Indicator */}
      <div className="relative z-10 mt-6 flex flex-col items-center justify-center gap-1 opacity-70">
        <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
          SCROLL
        </span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-[hsl(38,90%,50%)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
