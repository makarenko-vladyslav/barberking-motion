"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(220,22%,7%)] text-zinc-400 pt-16 pb-12 border-t border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Col 1: Wordmark & Tagline */}
          <div className="md:col-span-1">
            <span className="font-display font-extrabold text-3xl tracking-wider text-white block">
              BARBERKING
            </span>
            <div className="text-[10px] tracking-[0.25em] text-[hsl(38,90%,50%)] font-semibold uppercase mt-0.5">
              ЛЬВІВ · ВУЛ. ШЕВЧЕНКА 31А
            </div>
            <p className="mt-4 text-xs text-zinc-500 leading-relaxed">
              {t("footer.tagline") as string}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-xs uppercase tracking-widest font-extrabold text-white mb-4">
              Навігація
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[hsl(38,90%,50%)] transition-colors">Послуги та ціни</a></li>
              <li><a href="#calculator" className="hover:text-[hsl(38,90%,50%)] transition-colors">Калькулятор візиту</a></li>
              <li><a href="#tattoo" className="hover:text-[hsl(38,90%,50%)] transition-colors">Tattoo Room</a></li>
              <li><a href="#team" className="hover:text-[hsl(38,90%,50%)] transition-colors">Наші барбери</a></li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div>
            <div className="text-xs uppercase tracking-widest font-extrabold text-white mb-4">
              Контакти
            </div>
            <ul className="space-y-2 text-xs">
              <li className="text-zinc-300 font-semibold">м. Львів, вул. Шевченка 31А</li>
              <li><a href="tel:+380662636339" className="text-[hsl(38,90%,50%)] font-bold">+380 66 263 6339</a></li>
              <li>barberking.lv@gmail.com</li>
              <li className="text-zinc-500">Пн – Нд: 10:00 – 21:00</li>
            </ul>
          </div>

          {/* Col 4: Perks & Social */}
          <div>
            <div className="text-xs uppercase tracking-widest font-extrabold text-white mb-4">
              Соціальні мережі
            </div>
            <div className="flex gap-3 text-xs">
              <a
                href="https://www.instagram.com/barberking_kh/"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-[hsl(38,90%,50%)] text-zinc-200 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/BarberKingkh/"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-[hsl(38,90%,50%)] text-zinc-200 transition-colors"
              >
                Facebook
              </a>
            </div>
            <div className="mt-4 text-[11px] text-zinc-500 font-mono">
              {t("footer.creditVoice") as string}
            </div>
          </div>
        </div>

        {/* Giant Bleeding Wordmark at Footer Base */}
        <div 
          aria-hidden="true" 
          className="my-8 overflow-hidden pointer-events-none select-none text-center"
        >
          <span className="font-display font-black text-[15vw] leading-none text-zinc-900/60 tracking-tighter block uppercase">
            BARBERKING
          </span>
        </div>

        {/* Bottom Legal & Studio Credit Row */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            © 2026 BARBERKING LVIV. {t("footer.rights") as string}
          </div>

          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[hsl(38,90%,50%)] transition-colors underline underline-offset-4"
            >
              {t("footer.developer") as string}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
