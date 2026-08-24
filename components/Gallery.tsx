"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLocale();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://kyiv.bking.com.ua/wp-content/themes/bking/images/price-banner.jpg",
      caption: String(t("gallery.cap1"))
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/themes/bking/images/map-banner.jpg",
      caption: String(t("gallery.cap2"))
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6059-1024x683.jpg",
      caption: String(t("gallery.cap3"))
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5902-2-1024x683.jpg",
      caption: String(t("gallery.cap4"))
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/themes/bking/images/banner2.jpg",
      caption: String(t("gallery.cap5"))
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5822-1024x683.jpg",
      caption: String(t("gallery.cap6"))
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-[hsl(24_15%_10%)] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("gallery.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("gallery.title"))}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            {String(t("gallery.subtitle"))}
          </p>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img.url)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-black shadow-lg"
            >
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[hsl(38_92%_50%)] transition-colors">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg">
            <button
              type="button"
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-black/80 text-white border border-white/20 hover:text-[hsl(38_92%_50%)] text-xs font-bold uppercase"
            >
              ЗАКРИТИ
            </button>
            <img src={selectedImg} alt="Enlarged view" className="w-full h-auto max-h-[85vh] object-contain mx-auto" />
          </div>
        </div>
      )}
    </section>
  );
}
