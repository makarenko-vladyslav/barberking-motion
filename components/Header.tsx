"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#services", label: String(t("nav.services")) },
    { href: "#calculator", label: String(t("nav.calculator")) },
    { href: "#locations", label: String(t("nav.locations")) },
    { href: "#tattoo", label: String(t("nav.tattoo")) },
    { href: "#team", label: String(t("nav.team")) },
    { href: "#gallery", label: String(t("nav.gallery")) },
    { href: "#reviews", label: String(t("nav.reviews")) },
    { href: "#faq", label: String(t("nav.faq")) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(24_18%_7%/0.95)] backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark Logo */}
        <a href="#" className="group flex flex-col focus:outline-none py-1">
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-white group-hover:text-[hsl(38_92%_50%)] transition-colors">
            BARBERKING
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] font-semibold -mt-1">
            {String(t("nav.brandSub"))}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-wider font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[hsl(38_92%_50%)] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(38_92%_50%)] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Right */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="tel:0951079215"
            className="text-xs font-bold tracking-wider text-white hover:text-[hsl(38_92%_50%)] transition-colors flex items-center gap-2 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(38_92%_50%)] animate-pulse" />
            095 107 92 15
          </a>

          {/* Language Switcher */}
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/10 text-[10px] font-bold">
            <button
              type="button"
              onClick={() => setLocale("uk")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === "uk"
                  ? "bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              UA
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === "en"
                  ? "bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#booking"
            className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] hover:bg-[hsl(38_92%_42%)] transition-all shadow-lg shadow-[hsl(38_92%_50%/0.2)]"
          >
            {String(t("nav.book"))}
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-3 py-2.5 rounded bg-white/10 text-xs font-bold uppercase tracking-wider text-white hover:text-[hsl(38_92%_50%)] focus:outline-none border border-white/15"
          aria-label={String(t("nav.toggleMenu"))}
        >
          {mobileMenuOpen ? "ЗАКРИТИ" : "МЕНЮ"}
        </button>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[hsl(24_18%_7%)] flex flex-col justify-between p-6 sm:p-10 lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-extrabold text-white">BARBERKING</span>
              <span className="text-[10px] tracking-widest text-[hsl(38_92%_50%)]">{String(t("nav.brandSub"))}</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded bg-white/10 text-xs font-bold text-white hover:text-[hsl(38_92%_50%)] uppercase border border-white/15"
            >
              ЗАКРИТИ
            </button>
          </div>

          <nav className="flex flex-col space-y-4 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl uppercase tracking-wider text-white hover:text-[hsl(38_92%_50%)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col space-y-4 border-t border-white/10 pt-6">
            <a
              href="tel:0951079215"
              className="text-lg font-bold text-[hsl(38_92%_50%)] text-center py-3 border border-[hsl(38_92%_50%/0.3)] rounded"
            >
              095 107 92 15
            </a>

            <div className="flex items-center justify-between py-1">
              <span className="text-xs text-white/60">{String(t("nav.languageLabel"))}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => { setLocale("uk"); setMobileMenuOpen(false); }}
                  className={`px-3 py-2 rounded text-xs font-bold ${locale === 'uk' ? 'bg-[hsl(38_92%_50%)] text-black' : 'bg-white/10 text-white'}`}
                >
                  УКР
                </button>
                <button
                  type="button"
                  onClick={() => { setLocale("en"); setMobileMenuOpen(false); }}
                  className={`px-3 py-2 rounded text-xs font-bold ${locale === 'en' ? 'bg-[hsl(38_92%_50%)] text-black' : 'bg-white/10 text-white'}`}
                >
                  ENG
                </button>
              </div>
            </div>

            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 text-sm font-bold uppercase tracking-wider rounded bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] shadow-lg"
            >
              {String(t("nav.book"))}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
