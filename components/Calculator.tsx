"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Calculator() {
  const { t } = useLocale();

  const [serviceType, setServiceType] = useState<"cut" | "beard" | "combo">("combo");
  const [includeCare, setIncludeCare] = useState(false);
  const [includeWax, setIncludeWax] = useState(false);
  const [isFatherSon, setIsFatherSon] = useState(false);

  const calculateEstimate = () => {
    let base = 950;
    if (serviceType === "cut") base = 600;
    if (serviceType === "beard") base = 450;
    if (serviceType === "combo") base = 950;

    if (isFatherSon) base += 300;
    if (includeCare) base += 250;
    if (includeWax) base += 150;

    return base;
  };

  const calculateTime = () => {
    let time = 75;
    if (serviceType === "cut") time = 50;
    if (serviceType === "beard") time = 40;
    if (serviceType === "combo") time = 75;

    if (isFatherSon) time += 30;
    if (includeCare) time += 20;
    if (includeWax) time += 15;

    return time;
  };

  const total = calculateEstimate();
  const duration = calculateTime();

  return (
    <section id="calculator" className="py-24 bg-[hsl(38,25%,96%)] text-[hsl(220,25%,12%)] relative scroll-mt-16 overflow-hidden">
      {/* Light Ground Background Decorative Element */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 z-0 pointer-events-none opacity-[0.04] whitespace-nowrap text-[18vw] font-display font-extrabold text-[hsl(220,25%,12%)] tracking-tighter"
      >
        CALCULATOR
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,40%)] block mb-2">
              ІНТЕРАКТИВНИЙ РОЗРАХУНОК
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-zinc-900">
              Розрахуйте тривалість та вартість візиту
            </h2>
            <p className="mt-3 text-zinc-600 text-sm max-w-xl mx-auto leading-relaxed">
              Оберіть бажані процедури для персонального розрахунку часу та підсумкової вартості.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-zinc-200">
            {/* Step 1: Base Service */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-widest font-extrabold text-zinc-500">
                  1. ОСНОВНА ПОСЛУГА
                </label>
                <span className="text-[11px] text-zinc-400 font-mono">Обов'язковий вибір</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "combo", title: "Комплекс: Стрижка + Борода", price: "950 грн", time: "75 хв" },
                  { id: "cut", title: "Чоловіча стрижка", price: "600 грн", time: "50 хв" },
                  { id: "beard", title: "Стрижка бороди", price: "450 грн", time: "40 хв" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setServiceType(item.id as any)}
                    className={`p-4 rounded-2xl text-left border-2 transition-all ${
                      serviceType === item.id
                        ? "border-[hsl(38,90%,50%)] bg-[hsl(38,90%,50%)]/10 text-zinc-900 font-bold shadow-md"
                        : "border-zinc-200 text-zinc-700 hover:border-zinc-300"
                    }`}
                  >
                    <div className="text-sm font-bold">{item.title}</div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-100">
                      <span className="text-xs text-[hsl(38,90%,40%)] font-extrabold">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono">{item.time}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div className="mb-8 pt-6 border-t border-zinc-100">
              <label className="block text-xs uppercase tracking-widest font-extrabold text-zinc-500 mb-3">
                2. ДОДАТКОВИЙ ДОГЛЯД
              </label>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeCare}
                      onChange={(e) => setIncludeCare(e.target.checked)}
                      className="w-4 h-4 accent-[hsl(38,90%,50%)] rounded"
                    />
                    <div>
                      <span className="text-sm font-semibold text-zinc-800 block">
                        Чорна маска & догляд за обличчям
                      </span>
                      <span className="text-[11px] text-zinc-400">Глибоке очищення пор та тонізація</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-zinc-700">+250 грн</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeWax}
                      onChange={(e) => setIncludeWax(e.target.checked)}
                      className="w-4 h-4 accent-[hsl(38,90%,50%)] rounded"
                    />
                    <div>
                      <span className="text-sm font-semibold text-zinc-800 block">
                        Воскова гігієна (вуха, ніс, брови)
                      </span>
                      <span className="text-[11px] text-zinc-400">Видалення небажаного волосся</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-zinc-700">+150 грн</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isFatherSon}
                      onChange={(e) => setIsFatherSon(e.target.checked)}
                      className="w-4 h-4 accent-[hsl(38,90%,50%)] rounded"
                    />
                    <div>
                      <span className="text-sm font-semibold text-zinc-800 block">
                        Додати стрижку для сина (до 12 років)
                      </span>
                      <span className="text-[11px] text-zinc-400">Паралельна стрижка у двох майстрів</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-zinc-700">+300 грн</span>
                </label>
              </div>
            </div>

            {/* Total Estimate Card */}
            <div className="bg-[hsl(220,20%,9%)] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-zinc-800">
              <div>
                <div className="flex items-center gap-3 text-xs text-zinc-400 uppercase tracking-wider font-bold">
                  <span>Орієнтовний час: {duration} хв</span>
                  <span>·</span>
                  <span>Власна парковка</span>
                </div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-[hsl(38,90%,50%)] mt-1">
                  від {total} грн
                </div>
              </div>

              <a
                href="#contact"
                className="w-full sm:w-auto bg-[hsl(38,90%,50%)] hover:bg-[hsl(35,95%,42%)] text-[hsl(220,20%,9%)] font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl text-center shadow-lg transition-transform active:scale-95"
              >
                Забронювати на цей час
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
