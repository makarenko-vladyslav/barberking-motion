"use client";

import { useLocale } from "@/lib/i18n";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-[hsl(24_18%_7%)] text-white relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(38_92%_50%)] mb-2 block">
            {String(t("video.kicker"))}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {String(t("video.title"))}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            {String(t("video.subtitle"))}
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[hsl(38_92%_50%/0.3)] shadow-2xl bg-black">
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_5183.jpg"
            className="w-full h-[350px] sm:h-[500px] object-cover"
          >
            <source src="https://videos.pexels.com/video-files/27999071/12285024_1280_720_50fps.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
