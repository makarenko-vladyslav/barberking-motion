"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingSection() {
  const { t } = useLocale();

  const [form, setForm] = useState({
    branch: "pavlivska",
    service: "haircut",
    master: "any",
    name: "",
    phone: "",
    date: "",
    time: "12:00"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-[hsl(24_18%_7%)] text-white relative border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with INVITATION Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("booking.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("booking.title"))}
          </h2>
          <p className="text-white/75 text-sm sm:text-base">
            {String(t("booking.subtitle"))}
          </p>
        </div>

        <div className="bg-[hsl(24_15%_12%)] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[hsl(38_92%_50%/0.08)] blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12">
              <div className="px-4 py-2 rounded bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] text-sm font-black uppercase tracking-widest inline-block mb-4">
                ЗАПИС ПІДТВЕРДЖЕНО
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2 uppercase">
                {String(t("booking.successTitle"))}
              </h3>
              <p className="text-sm text-white/70 max-w-md mx-auto mb-6">
                {String(t("booking.successDesc"))}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded text-xs font-extrabold uppercase tracking-widest bg-white/10 text-white hover:bg-white/20"
              >
                ЗРОБИТИ НОВИЙ ЗАПИС
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Booking Form Left */}
              <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                      {String(t("booking.formBranch"))}
                    </label>
                    <select
                      value={form.branch}
                      onChange={(e) => setForm({ ...form, branch: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded p-3 text-xs text-white focus:outline-none focus:border-[hsl(38_92%_50%)]"
                    >
                      <option value="pavlivska" className="bg-black">{String(t("booking.opt1"))}</option>
                      <option value="great" className="bg-black">{String(t("booking.opt2"))}</option>
                      <option value="varshavsky" className="bg-black">{String(t("booking.opt3"))}</option>
                      <option value="urlivska" className="bg-black">{String(t("booking.opt4"))}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                      {String(t("booking.formService"))}
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded p-3 text-xs text-white focus:outline-none focus:border-[hsl(38_92%_50%)]"
                    >
                      <option value="haircut" className="bg-black">{String(t("booking.srv1"))}</option>
                      <option value="combo" className="bg-black">{String(t("booking.srv2"))}</option>
                      <option value="beard" className="bg-black">{String(t("booking.srv3"))}</option>
                      <option value="royalShave" className="bg-black">{String(t("booking.srv4"))}</option>
                      <option value="tattoo" className="bg-black">{String(t("booking.srv5"))}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                      {String(t("booking.formName"))} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Дмитро"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded p-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[hsl(38_92%_50%)]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                      {String(t("booking.formPhone"))} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="095 123 45 67"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded p-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[hsl(38_92%_50%)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                      {String(t("booking.formDate"))}
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded p-3 text-xs text-white focus:outline-none focus:border-[hsl(38_92%_50%)]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                      {String(t("booking.formTime"))}
                    </label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded p-3 text-xs text-white focus:outline-none focus:border-[hsl(38_92%_50%)]"
                    >
                      <option value="10:00" className="bg-black">10:00</option>
                      <option value="12:00" className="bg-black">12:00</option>
                      <option value="14:00" className="bg-black">14:00</option>
                      <option value="16:00" className="bg-black">16:00</option>
                      <option value="18:00" className="bg-black">18:00</option>
                      <option value="20:00" className="bg-black">20:00</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded text-xs font-extrabold uppercase tracking-widest bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] hover:bg-[hsl(38_92%_42%)] transition-all shadow-xl mt-4"
                >
                  {String(t("booking.submitBtn"))}
                </button>
              </form>

              {/* Structured Hours & Tel Info Right */}
              <div className="lg:col-span-4 bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[hsl(38_92%_50%)] block mb-3">
                    ГРАФІК ТА ПРЯМИЙ ЗВ'ЯЗОК
                  </span>

                  <div className="space-y-2 text-xs text-white/80 mb-6 border-b border-white/10 pb-4">
                    <div className="flex justify-between">
                      <span className="text-white/50">ПН – ПТ:</span>
                      <span className="font-bold">10:00 – 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">СБ – НД:</span>
                      <span className="font-bold">10:00 – 21:00</span>
                    </div>
                    <div className="flex justify-between text-[hsl(38_92%_50%)] font-bold">
                      <span>{String(t("booking.respLabel"))}</span>
                      <span>{String(t("booking.respVal"))}</span>
                    </div>
                  </div>

                  <a
                    href="tel:0951079215"
                    className="block p-3 rounded bg-white/5 hover:bg-white/10 text-center text-xs font-extrabold uppercase tracking-wider text-[hsl(38_92%_50%)] border border-[hsl(38_92%_50%/0.3)] mb-4"
                  >
                    {String(t("booking.directCall"))}
                  </a>
                </div>

                <p className="text-[10px] text-white/50 leading-relaxed border-t border-white/10 pt-3">
                  {String(t("booking.trustLine"))}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
