"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ServiceItem {
  id: string;
  category: "hair" | "beard" | "complex" | "care" | "tattoo";
  title: string;
  price: string;
  duration: string;
  description: string;
  badge?: string;
  image?: string;
  isFeatured?: boolean;
}

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const servicesList: ServiceItem[] = [
    {
      id: "1",
      category: "complex",
      title: String(t("services.item1Title")),
      price: "1 150 UAH",
      duration: "75 хв",
      description: String(t("services.item1Desc")),
      badge: String(t("services.item1Badge")),
      image: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6955-1024x682.jpg",
      isFeatured: true
    },
    {
      id: "2",
      category: "hair",
      title: String(t("services.item2Title")),
      price: "750 UAH",
      duration: "50 хв",
      description: String(t("services.item2Desc")),
      badge: "ХІТ"
    },
    {
      id: "3",
      category: "beard",
      title: String(t("services.item3Title")),
      price: "550 UAH",
      duration: "35 хв",
      description: String(t("services.item3Desc"))
    },
    {
      id: "4",
      category: "beard",
      title: String(t("services.item4Title")),
      price: "600 UAH",
      duration: "45 хв",
      description: String(t("services.item4Desc")),
      badge: "ПРЕМІУМ"
    },
    {
      id: "5",
      category: "hair",
      title: String(t("services.item5Title")),
      price: "550 UAH",
      duration: "30 хв",
      description: String(t("services.item5Desc"))
    },
    {
      id: "6",
      category: "complex",
      title: String(t("services.item6Title")),
      price: "1 150 UAH",
      duration: "80 хв",
      description: String(t("services.item6Desc")),
      badge: "СЕМЕЙНЕ"
    },
    {
      id: "7",
      category: "care",
      title: String(t("services.item7Title")),
      price: String(t("services.item7Price")),
      duration: "25 хв",
      description: String(t("services.item7Desc"))
    },
    {
      id: "8",
      category: "care",
      title: String(t("services.item8Title")),
      price: "100 UAH",
      duration: "15 хв",
      description: String(t("services.item8Desc"))
    },
    {
      id: "9",
      category: "tattoo",
      title: String(t("services.item9Title")),
      price: String(t("services.item9Price")),
      duration: String(t("services.item9Duration")),
      description: String(t("services.item9Desc")),
      badge: "ЕКСКЛЮЗИВ"
    }
  ];

  const filteredServices = servicesList.filter((item) => {
    const matchesCategory = activeTab === "all" || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredItem = filteredServices.find((s) => s.isFeatured) || servicesList[0];
  const listItems = filteredServices.filter((s) => s.id !== featuredItem.id);

  return (
    <section id="services" className="py-20 bg-[hsl(24_18%_7%)] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("services.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("services.title"))}
          </h2>
          <p className="text-white/75 text-sm sm:text-base">
            {String(t("services.subtitle"))}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: "all", label: String(t("services.tabs.all")) },
              { id: "hair", label: String(t("services.tabs.hair")) },
              { id: "beard", label: String(t("services.tabs.beard")) },
              { id: "complex", label: String(t("services.tabs.complex")) },
              { id: "care", label: String(t("services.tabs.care")) },
              { id: "tattoo", label: String(t("services.tabs.tattoo")) },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] shadow-md"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder={String(t("services.searchPlaceholder"))}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/15 rounded text-xs text-white placeholder-white/40 focus:outline-none focus:border-[hsl(38_92%_50%)]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
              >
                ЗАКРИТИ
              </button>
            )}
          </div>
        </div>

        {/* Signature Featured Item Banner */}
        {featuredItem && activeTab === "all" && !searchQuery && (
          <div className="mb-10 bg-[hsl(24_15%_12%)] border-2 border-[hsl(38_92%_50%)] rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[260px] bg-black">
              <img
                src={featuredItem.image}
                alt={featuredItem.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(24_15%_12%)] lg:bg-gradient-to-r lg:from-transparent lg:to-[hsl(24_15%_12%)]" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] text-[10px] font-black uppercase tracking-widest rounded">
                {featuredItem.badge}
              </span>
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
                    {featuredItem.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/60 bg-white/10 px-2.5 py-1 rounded">
                    ЧАС: {featuredItem.duration}
                  </span>
                </div>
                <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-xl">
                  {featuredItem.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block">{String(t("services.fixedCost"))}</span>
                  <span className="font-display text-3xl sm:text-4xl font-black text-[hsl(38_92%_50%)]">
                    {featuredItem.price}
                  </span>
                </div>
                <a
                  href="#booking"
                  className="px-6 py-3 rounded text-xs font-extrabold uppercase tracking-widest bg-[hsl(38_92%_50%)] text-[hsl(24_18%_7%)] hover:bg-[hsl(38_92%_42%)] transition-all shadow-lg"
                >
                  {String(t("services.bookBtn"))}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Structured Offer Rows List */}
        <div className="space-y-4">
          {listItems.map((service) => (
            <div
              key={service.id}
              className="bg-[hsl(24_15%_12%)] border border-white/10 hover:border-[hsl(38_92%_50%/0.5)] rounded-lg p-5 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[hsl(38_92%_50%)] transition-colors truncate">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="px-2 py-0.5 rounded bg-[hsl(38_92%_50%/0.2)] text-[hsl(38_92%_50%)] border border-[hsl(38_92%_50%/0.4)] text-[9px] font-extrabold uppercase tracking-wider shrink-0">
                      {service.badge}
                    </span>
                  )}
                  {/* Dotted Leader Line */}
                  <span className="hidden md:inline-block border-b border-dotted border-white/20 flex-1 mx-2" />
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 shrink-0">
                  <span className="text-xs font-semibold text-white/60">
                    ЧАС: {service.duration}
                  </span>
                  <span className="font-display text-2xl font-extrabold text-[hsl(38_92%_50%)]">
                    {service.price}
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/65 leading-relaxed max-w-3xl mb-3">
                {service.description}
              </p>

              <div className="flex items-center justify-end pt-2 border-t border-white/5">
                <a
                  href="#booking"
                  className="text-[11px] font-extrabold uppercase tracking-widest text-[hsl(38_92%_50%)] hover:underline"
                >
                  ЗАПИСАТИСЯ НА ПОСЛУГУ →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote & Secondary CTA Link */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="italic">
            {String(t("services.footnote"))}
          </p>
          <a
            href="#calculator"
            className="font-extrabold uppercase tracking-wider text-[hsl(38_92%_50%)] hover:underline shrink-0"
          >
            {String(t("services.calcCTA"))} →
          </a>
        </div>
      </div>
    </section>
  );
}
