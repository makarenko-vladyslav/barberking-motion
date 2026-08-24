"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Gallery() {
  const { t } = useLocale();

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/9315046/pexels-photo-9315046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: "Інтер'єр Barberking Lviv",
    },
    {
      url: "https://images.pexels.com/photos/10775080/pexels-photo-10775080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: "Класична атмосфера та робочі місця",
    },
    {
      url: "https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Процес королівського гоління",
    },
    {
      url: "https://images.pexels.com/photos/7518735/pexels-photo-7518735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Стрижка машинкою та фейд",
    },
    {
      url: "https://images.pexels.com/photos/10775080/pexels-photo-10775080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Моделювання бороди",
    },
    {
      url: "https://images.pexels.com/photos/8867160/pexels-photo-8867160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Точність роботи барбера",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[hsl(220,20%,9%)] relative scroll-mt-16 overflow-hidden">
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-0 z-0 pointer-events-none opacity-[0.02] whitespace-nowrap text-[22vw] font-display font-extrabold text-white tracking-tighter"
      >
        ATMOSPHERE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[hsl(38,90%,50%)] block mb-2">
              АТМОСФЕРА ТА ПРОСТІР
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
              Галерея Barberking Lviv
            </h2>
            <p className="mt-3 text-zinc-400 text-sm">
              Перегляньте простір закладу на вул. Шевченка 31А та приклади робіт наших майстрів.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <Reveal key={idx} delay={idx * 0.08} duration={0.48} ease={[0.33, 1, 0.68, 1]} stagger={0.07}>
              <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl aspect-[4/3]">
                <img
                  src={img.url}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-mono text-[hsl(38,90%,50%)] uppercase tracking-widest mb-1">
                    0{idx + 1} · BARBERKING LVIV
                  </span>
                  <span className="text-xs uppercase tracking-wider font-bold text-white">
                    {img.caption}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
