"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Locations from "@/components/Locations";
import TattooRoom from "@/components/TattooRoom";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";
import { useLocale } from "@/lib/i18n";

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><Ticker /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Calculator /></Reveal>

        {/* Interstitial 1: Statement Hairline Strip */}
        <Reveal>
          <div className="bg-[hsl(24_15%_10%)] border-y border-white/10 py-6 text-center">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 text-xs font-extrabold uppercase tracking-[0.25em] text-white/50">
              <span className="h-[1px] bg-white/20 flex-1 max-w-xs" />
              <span>{String(t("interstitial.standards"))}</span>
              <span className="h-[1px] bg-white/20 flex-1 max-w-xs" />
            </div>
          </div>
        </Reveal>

        <Reveal><Locations /></Reveal>
        <Reveal><TattooRoom /></Reveal>

        {/* Interstitial 2: Watermark Statement Band */}
        <Reveal>
          <div className="bg-[hsl(38_92%_50%/0.08)] border-y border-[hsl(38_92%_50%/0.2)] py-10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <span className="font-display text-2xl sm:text-4xl font-black uppercase tracking-wider text-[hsl(38_92%_50%)]">
                {String(t("interstitial.methodology"))}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal><Team /></Reveal>
        <Reveal><Gallery /></Reveal>

        {/* Interstitial 3: Press & Trust Strip */}
        <Reveal>
          <div className="bg-[hsl(24_18%_7%)] border-y border-white/10 py-5">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-white/60">
              <span>{String(t("interstitial.branchesParking"))}</span>
              <span className="text-[hsl(38_92%_50%)]">◆</span>
              <span>{String(t("interstitial.freeBar"))}</span>
              <span className="text-[hsl(38_92%_50%)]">◆</span>
              <span>{String(t("interstitial.sterility"))}</span>
            </div>
          </div>
        </Reveal>

        <Reveal><VideoSection /></Reveal>
        <Reveal><WhyUs /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><BookingSection /></Reveal>
      </main>
      <Footer />
    </>
  );
}
