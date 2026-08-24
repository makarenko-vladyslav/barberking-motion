"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#advantages", label: t("nav.advantages") as string },
    { href: "#tattoo", label: t("nav.tattoo") as string },
    { href: "#team", label: t("nav.team") as string },
    { href: "#reviews", label: t("nav.reviews") as string },
    { href: "#contact", label: t("nav.contact") as string },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(220,20%,9%)]/95 backdrop-blur-md py-3 border-b border-[hsl(220,15%,18%)] shadow-xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a href="#" className="group flex flex-col focus:outline-none">
          <span className="font-display font-extrabold text-2xl tracking-wider text-white group-hover:text-[hsl(38,90%,50%)] transition-colors">
            BARBERKING
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[hsl(38,90%,50%)] font-semibold uppercase -mt-1">
            ЛЬВІВ · 31А
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-zinc-300 hover:text-[hsl(38,90%,50%)] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA + Language */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-zinc-900/80 border border-zinc-800 rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setLocale("uk")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === "uk"
                  ? "bg-[hsl(38,90%,50%)] text-[hsl(220,20%,9%)] font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === "en"
                  ? "bg-[hsl(38,90%,50%)] text-[hsl(220,20%,9%)] font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="tel:+380662636339"
            className="text-xs tracking-wider text-zinc-200 hover:text-[hsl(38,90%,50%)] font-bold transition-colors whitespace-nowrap"
          >
            +380 66 263 6339
          </a>

          <a
            href="#contact"
            className="bg-[hsl(38,90%,50%)] hover:bg-[hsl(35,95%,42%)] text-[hsl(220,20%,9%)] font-extrabold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg transition-transform active:scale-95 shadow-lg shadow-[hsl(38,90%,50%)]/15"
          >
            {t("cta.book") as string}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-full p-0.5 text-xs">
            <button
              onClick={() => setLocale("uk")}
              className={`px-2 py-0.5 rounded-full ${
                locale === "uk" ? "bg-[hsl(38,90%,50%)] text-black font-bold" : "text-zinc-400"
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-0.5 rounded-full ${
                locale === "en" ? "bg-[hsl(38,90%,50%)] text-black font-bold" : "text-zinc-400"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-zinc-200 hover:text-[hsl(38,90%,50%)] focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[hsl(220,20%,9%)]/98 backdrop-blur-xl z-40 flex flex-col justify-between p-6 overflow-y-auto lg:hidden">
          <div className="space-y-4 pt-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[hsl(38,90%,50%)] font-extrabold mb-4">
              НАВІГАЦІЯ
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-xl font-display font-bold uppercase tracking-wider text-zinc-100 hover:text-[hsl(38,90%,50%)] py-2 border-b border-zinc-800/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 space-y-4">
            <a
              href="tel:+380662636339"
              className="block text-center text-lg font-bold text-[hsl(38,90%,50%)]"
            >
              +380 66 263 6339
            </a>
            <p className="text-xs text-center text-zinc-400">
              Львів, вул. Шевченка, 31А · Безкоштовний паркінг
            </p>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[hsl(38,90%,50%)] text-[hsl(220,20%,9%)] font-extrabold py-3.5 rounded-xl uppercase text-sm tracking-wider shadow-lg"
            >
              {t("cta.book") as string}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
