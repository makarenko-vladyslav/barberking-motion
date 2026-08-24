"use client";

import { Marquee } from "@/components/motion";

export function InterstitialWatermark({ text }: { text: string }) {
  return (
    <div aria-hidden="true" className="py-6 bg-[hsl(220,20%,9%)] border-y border-zinc-800/60 overflow-hidden select-none pointer-events-none">
      <div className="text-[12vw] sm:text-[10vw] font-display font-extrabold uppercase text-zinc-800/30 tracking-tighter text-center whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}

export function InterstitialHairline({ label }: { label: string }) {
  return (
    <div className="py-4 bg-[hsl(220,20%,9%)] border-y border-zinc-800/80 flex items-center justify-center gap-6 px-4">
      <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent to-zinc-800" />
      <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)]">
        {label}
      </span>
      <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent to-zinc-800" />
    </div>
  );
}

export function InterstitialStatement({ statement }: { statement: string }) {
  return (
    <div className="py-12 bg-gradient-to-r from-zinc-950 via-[hsl(220,18%,13%)] to-zinc-950 border-y border-zinc-800 text-center px-4">
      <p className="text-xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white max-w-4xl mx-auto">
        {statement}
      </p>
    </div>
  );
}
