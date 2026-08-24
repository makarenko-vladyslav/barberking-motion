"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [selectedServices, setSelectedServices] = useState<string[]>(["haircut"]);
  const [masterCategory, setMasterCategory] = useState<"barber" | "topBarber" | "grandMaster">("grandMaster");
  const [selectedBranch, setSelectedBranch] = useState<"pavlivska" | "great" | "varshavsky" | "urlivska">("pavlivska");

  const servicesMap = pricing.baseServices as Record<string, { name: string; price: number }>;
  const masterMultipliers = pricing.masterCategories as Record<string, { label: string; multiplier: number }>;
  const branchMultipliers = pricing.branchMultipliers as Record<string, number>;

  const toggleService = (key: string) => {
    if (selectedServices.includes(key)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== key));
      }
    } else {
      setSelectedServices([...selectedServices, key]);
    }
  };

  const rawSum = selectedServices.reduce((acc, key) => acc + (servicesMap[key]?.price || 0), 0);
  const masterMult = masterMultipliers[masterCategory]?.multiplier || 1.0;
  const branchMult = branchMultipliers[selectedBranch] || 1.0;

  const calculatedTotal = Math.round(rawSum * masterMult * branchMult);
  const estimatedTime = selectedServices.length * 35;

  return (
    <section id="calculator" className="py-20 bg-[hsl(24_15%_10%)] text-white relative border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("calculator.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-3">
            {String(t("calculator.title"))}
          </h2>
          <p className="text-white/70 text-sm">
            {String(t("calculator.subtitle"))}
          </p>
        </div>

        {/* Interactive Card */}
        <div className="bg-[hsl(24_18%_7%)] border border-white/15 rounded-xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Options Left */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {/* Select Services Checklist */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[hsl(38_92%_50%)] mb-3 block">
                  {String(t("calculator.selectServices"))}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.entries(servicesMap).map(([key, item]) => {
                    const active = selectedServices.includes(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleService(key)}
                        className={`px-3.5 py-2.5 rounded text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                          active
                            ? "bg-[hsl(38_92%_50%/0.18)] border-[hsl(38_92%_50%)] text-white"
                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        <span className="truncate pr-2">{item.name}</span>
                        <span className="font-bold text-[hsl(38_92%_50%)] shrink-0">
                          {item.price} {String(t("calculator.currency"))}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Select Master Level */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2 block">
                  {String(t("calculator.selectCategory"))}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(masterMultipliers).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setMasterCategory(key as "barber" | "topBarber" | "grandMaster")}
                      className={`py-2 rounded text-xs font-bold uppercase transition-all border ${
                        masterCategory === key
                          ? "bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] border-[hsl(38_92%_50%)]"
                          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Location Branch */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2 block">
                  {String(t("calculator.selectLocation"))}
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value as "pavlivska" | "great" | "varshavsky" | "urlivska")}
                  className="w-full bg-white/5 border border-white/15 rounded p-3 text-xs text-white focus:outline-none focus:border-[hsl(38_92%_50%)]"
                >
                  <option value="pavlivska" className="bg-black">{String(t("calculator.opt1"))}</option>
                  <option value="great" className="bg-black">{String(t("calculator.opt2"))}</option>
                  <option value="varshavsky" className="bg-black">{String(t("calculator.opt3"))}</option>
                  <option value="urlivska" className="bg-black">{String(t("calculator.opt4"))}</option>
                </select>
              </div>
            </div>

            {/* Total Display Right */}
            <div className="lg:col-span-5 bg-[hsl(24_15%_13%)] border border-white/10 rounded-lg p-6 flex flex-col justify-between text-center lg:text-left">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/60 block mb-1">
                  {String(t("calculator.totalEstimate"))}
                </span>
                <div className="font-display text-5xl sm:text-6xl font-extrabold text-[hsl(38_92%_50%)] my-2">
                  {calculatedTotal} <span className="text-2xl text-white/80">{String(t("calculator.currency"))}</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-white/70 mb-6">
                  <span>{String(t("calculator.timeLabel"))}</span>
                  <span className="font-bold text-white">~{estimatedTime} {String(t("calculator.minutes"))}</span>
                </div>

                <div className="space-y-2 text-left text-xs text-white/60 border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span>{String(t("calculator.selectedServicesLabel"))}</span>
                    <span className="text-white font-semibold">{selectedServices.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{String(t("calculator.discountLabel"))}</span>
                    <span className="text-[hsl(38_92%_50%)] font-semibold">{String(t("calculator.discountVal"))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{String(t("calculator.barLabel"))}</span>
                    <span className="text-white font-semibold">{String(t("calculator.barVal"))}</span>
                  </div>
                </div>
              </div>

              <a
                href="#booking"
                className="w-full py-3.5 rounded text-xs font-extrabold uppercase tracking-widest bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] hover:bg-[hsl(38_92%_42%)] transition-all shadow-lg text-center block"
              >
                {String(t("calculator.bookCalculated"))}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
