"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(24_22%_4%)] text-white pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 relative z-10">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-4xl font-extrabold tracking-wider text-white mb-2 block">
              BARBERKING
            </a>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] font-bold block mb-4">
              МЕРЕЖА ЧОЛОВІЧИХ БАРБЕРШОПІВ У КИЄВІ
            </span>
            <p className="text-xs text-white/60 leading-relaxed mb-6 max-w-sm">
              {String(t("footer.tagline"))}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/barberking_kv/"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded bg-white/10 hover:bg-[hsl(38_92%_50%)] hover:text-black text-[11px] font-extrabold uppercase tracking-wider transition-all"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.facebook.com/BarberKingkh/"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded bg-white/10 hover:bg-[hsl(38_92%_50%)] hover:text-black text-[11px] font-extrabold uppercase tracking-wider transition-all"
              >
                FACEBOOK
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="font-display text-lg font-bold text-[hsl(38_92%_50%)] uppercase mb-4">
              {String(t("footer.navigation"))}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors py-1 block">{String(t("footer.link1"))}</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors py-1 block">{String(t("footer.link2"))}</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors py-1 block">{String(t("footer.link3"))}</a></li>
              <li><a href="#tattoo" className="hover:text-white transition-colors py-1 block">{String(t("footer.link4"))}</a></li>
              <li><a href="#team" className="hover:text-white transition-colors py-1 block">{String(t("footer.link5"))}</a></li>
            </ul>
          </div>

          {/* Branches Col */}
          <div>
            <h4 className="font-display text-lg font-bold text-[hsl(38_92%_50%)] uppercase mb-4">
              Філії у Києві
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>{String(t("footer.b1"))}</li>
              <li>{String(t("footer.b2"))}</li>
              <li>{String(t("footer.b3"))}</li>
              <li>{String(t("footer.b4"))}</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display text-lg font-bold text-[hsl(38_92%_50%)] uppercase mb-4">
              {String(t("footer.contacts"))}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="tel:0951079215" className="font-bold text-white hover:text-[hsl(38_92%_50%)] py-1 block">095 107 92 15</a></li>
              <li>{String(t("footer.email"))}</li>
              <li className="pt-2 text-[10px] text-white/50">{String(t("footer.workingHours"))}</li>
            </ul>
          </div>
        </div>

        {/* Giant Watermark Display Text Bleeding Off Bottom Edge */}
        <div
          className="w-full font-display font-black text-[15vw] sm:text-[16vw] text-white/[0.04] leading-none select-none tracking-tighter uppercase text-center block overflow-hidden -mb-6"
          aria-hidden="true"
        >
          BARBERKING
        </div>

        {/* Legal Row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <div>
            © 2026 BARBERKING. {String(t("footer.rights"))}
          </div>
          <div>
            {String(t("footer.developer"))}
          </div>
        </div>
      </div>
    </footer>
  );
}
