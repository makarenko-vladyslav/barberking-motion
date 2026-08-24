"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-[hsl(24_18%_7%)]">
      {/* Background Video Loop with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://kyiv.bking.com.ua/wp-content/themes/bking/images/banner2.jpg"
          className="w-full h-full object-cover scale-105 opacity-35 filter brightness-90 contrast-110"
        >
          <source src="https://videos.pexels.com/video-files/7426382/7426382-hd_2048_864_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(24_18%_7%)] via-[hsl(24_18%_7%/0.65)] to-black/80" />
      </div>

      {/* Decorative Atmospheric Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(38_92%_50%/0.12)] blur-[140px] rounded-full pointer-events-none" />

      {/* Giant Decorative Watermark Layer */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none text-[18vw] font-black uppercase text-white/[0.03] text-center whitespace-nowrap overflow-hidden leading-none z-0 tracking-tight"
        aria-hidden="true"
      >
        BARBERKING
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col items-center text-center">
        {/* Eyebrow Kicker Badge with Real Meta */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[hsl(38_92%_50%/0.4)] mb-6 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[hsl(38_92%_50%)] animate-ping" />
          <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.25em] text-[hsl(38_92%_50%)] uppercase">
            {String(t("hero.kicker"))}
          </span>
        </div>

        {/* Expressive Display Headline with Styled Accent Word */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white max-w-5xl leading-[0.92] mb-6 text-balance drop-shadow-lg">
          КОРОЛІВСЬКИЙ ДОГЛЯД ТА{" "}
          <em className="font-serif italic font-normal text-[hsl(38_92%_50%)] border-b-2 border-[hsl(38_92%_50%/0.3)] px-1 not-italic-mobile">
            ЧОЛОВІЧИЙ
          </em>{" "}
          СТИЛЬ
        </h1>

        {/* Lead Copy Paragraph */}
        <p className="text-base sm:text-xl text-white/85 max-w-2xl font-normal leading-relaxed mb-8 text-balance">
          {String(t("hero.subtitle"))}
        </p>

        {/* CTA Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mb-10">
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 rounded text-xs font-extrabold uppercase tracking-widest bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] hover:bg-[hsl(38_92%_42%)] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[hsl(38_92%_50%/0.25)] text-center"
          >
            {String(t("hero.ctaPrimary"))}
          </a>
          <a
            href="#locations"
            className="w-full sm:w-auto px-6 py-4 rounded text-xs font-extrabold uppercase tracking-widest bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-center backdrop-blur-sm"
          >
            {String(t("hero.ctaSecondary"))} →
          </a>
        </div>

        {/* Rotating Circular Text Seal Badge */}
        <div className="relative w-28 h-28 my-4 hidden sm:block">
          <div className="absolute inset-0 rounded-full border border-[hsl(38_92%_50%/0.3)] animate-spin-slow flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9px] font-extrabold tracking-[0.22em] uppercase fill-[hsl(38_92%_50%)]">
                <textPath href="#circlePath">
                  BARBERKING · EST. 2014 · GRAND MASTERS · KYIV ·
                </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-display text-xl font-black text-white leading-none">10+</span>
            <span className="text-[8px] font-extrabold tracking-wider uppercase text-white/70">{String(t("hero.yearsText"))}</span>
          </div>
        </div>

        {/* 3-Item Meta Strip with Hairlines */}
        <div className="w-full max-w-4xl py-4 border-y border-white/15 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-white/80">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38_92%_50%)]" />
            {String(t("hero.meta1"))}
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>{String(t("hero.meta2"))}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="text-[hsl(38_92%_50%)]">{String(t("hero.ratingText"))}</span>
        </div>

        {/* Flanking Mini Copy Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full text-left text-[11px] uppercase tracking-wider text-white/60 mb-6">
          <div className="border-l-2 border-[hsl(38_92%_50%)] pl-3">
            {String(t("hero.flankLeft"))}
          </div>
          <div className="border-l-2 border-white/20 pl-3">
            {String(t("hero.flankRight"))}
          </div>
        </div>
      </div>

      {/* Classic Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-white/60 mb-2">{String(t("hero.scrollText"))}</span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-[hsl(38_92%_50%)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
