"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Contact() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Комплекс: Стрижка + Борода",
    date: "",
    barber: "МАТЛАБ",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[hsl(220,18%,13%)] relative scroll-mt-16 border-t border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location details */}
          <Reveal duration={0.68} ease={[0.33, 1, 0.68, 1]} stagger={0.05}>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block mb-2">
                {t("contact.kicker") as string}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
                {t("contact.title") as string}
              </h2>

              <div className="mt-8 space-y-6">
                <div className="bg-[hsl(220,20%,9%)] p-6 rounded-2xl border border-zinc-800 shadow-xl">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">
                    {t("contact.addressLabel") as string}
                  </div>
                  <div className="text-lg font-bold text-white mt-1">
                    {t("contact.addressValue") as string}
                  </div>
                  <div className="mt-2 text-xs font-bold text-[hsl(38,90%,50%)]">
                    ― {t("contact.parkingNote") as string}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[hsl(220,20%,9%)] p-6 rounded-2xl border border-zinc-800 shadow-xl">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">
                      {t("contact.phoneLabel") as string}
                    </div>
                    <a
                      href="tel:+380662636339"
                      className="text-lg font-bold text-[hsl(38,90%,50%)] hover:underline mt-1 block"
                    >
                      +380 66 263 6339
                    </a>
                  </div>

                  <div className="bg-[hsl(220,20%,9%)] p-6 rounded-2xl border border-zinc-800 shadow-xl">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">
                      {t("contact.hoursLabel") as string}
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      {t("contact.hoursValue") as string}
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-2xl overflow-hidden border border-zinc-800 h-[220px] relative shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps?q=Shevchenka+St,+31,+Lviv&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    title="Barberking Lviv Map"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Booking Form Card */}
          <Reveal delay={0.2} duration={0.68} ease={[0.33, 1, 0.68, 1]} stagger={0.05}>
            <div className="bg-[hsl(220,20%,9%)] p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
              <h3 className="text-2xl font-display font-extrabold uppercase text-white mb-2">
                {t("contact.formTitle") as string}
              </h3>
              <p className="text-xs text-zinc-400 mb-8">
                {t("contact.formSubtitle") as string}
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-950/60 border border-emerald-800 rounded-2xl text-emerald-300 text-center">
                  <div className="text-2xl font-bold mb-2">Заявку прийнято</div>
                  <p className="text-sm">{t("contact.successMsg") as string}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-zinc-400 mb-1">
                      {t("contact.fieldName") as string}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Олександр"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[hsl(38,90%,50%)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-zinc-400 mb-1">
                      {t("contact.fieldPhone") as string}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+380 67 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[hsl(38,90%,50%)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-zinc-400 mb-1">
                      {t("contact.fieldService") as string}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[hsl(38,90%,50%)] focus:outline-none"
                    >
                      <option>Комплекс: Стрижка + Борода (950 грн)</option>
                      <option>Професійна чоловіча стрижка (600 грн)</option>
                      <option>Стрижка бороди (450 грн)</option>
                      <option>Королівське гоління (400 грн)</option>
                      <option>Консультація Tattoo Room</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-zinc-400 mb-1">
                      {t("contact.fieldMaster") as string}
                    </label>
                    <select
                      value={formData.barber}
                      onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[hsl(38,90%,50%)] focus:outline-none"
                    >
                      <option>Будь-який вільний майстер</option>
                      <option>МАТЛАБ (Grand Barber)</option>
                      <option>КИРИЛО (Ambassador)</option>
                      <option>СЕРГІЙ (Grand Barber)</option>
                      <option>ЄГОР (Barber)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-zinc-400 mb-1">
                      {t("contact.fieldDate") as string}
                    </label>
                    <input
                      type="datetime-local"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[hsl(38,90%,50%)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-[hsl(38,90%,50%)] hover:bg-[hsl(35,95%,42%)] text-[hsl(220,20%,9%)] font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl shadow-xl transition-transform active:scale-95"
                  >
                    {t("contact.submit") as string}
                  </button>

                  <div className="text-[10px] text-zinc-500 text-center font-mono mt-2">
                    {t("contact.trustNote") as string}
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
