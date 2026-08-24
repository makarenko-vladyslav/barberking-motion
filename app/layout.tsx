import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barberking — Преміальний Барбершоп Львів | вул. Шевченка 31А",
  description: "Сучасний чоловічий барбершоп у Львові на вул. Шевченка 31А. Професійні стрижки, моделювання бороди, королівське гоління та окрема тату-кімната Tattoo Room. Безкоштовний паркінг, віскі та кава.",
  keywords: ["барбершоп львів", "barberking львів", "стрижка бороди львів", "чоловіча стрижка шевченка", "тату салон львів", "перукарня для чоловіків"],
  openGraph: {
    title: "Barberking — Сучасний Барбершоп у Львові | вул. Шевченка 31А",
    description: "Більше 255 000 виконаних стрижок. Безкоштовний власний паркінг, потрійна стерилізація, преміальні напої. Запис онлайн 24/7.",
    type: "website",
    locale: "uk_UA",
    siteName: "Barberking Lviv",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,500;0,600;0,700;0,800;1,500;1,700&family=Rubik:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
              <script type="application/ld+json">{"[{\"@context\":\"https://schema.org\",\"@type\":\"BarberShop\",\"name\":\"Barberking - Барбершоп Львів\",\"description\":\"Барбершоп BarberKing у Львові: чоловіча стрижка, борода, гоління небезпечною бритвою. Зручний онлайн-запис, підбір стилю та чіткі контури. Адреса: вул. Шевченка 31. ☎️ 066-263-63-39.\",\"url\":\"https://lviv.bking.com.ua/\",\"telephone\":[\"+380 66 263 6339\"],\"email\":\"barberking.lv@gmail.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Shevchenka St, 31, Lviv, Lviv Oblast, Ukraine, 79000\",\"addressLocality\":\"Львів\",\"addressCountry\":\"UA\"},\"sameAs\":[\"https://www.facebook.com/BarberKingkh/\",\"https://www.instagram.com/barberking_kh/\"],\"employee\":[{\"@type\":\"Person\",\"name\":\"МАТЛАБ\",\"jobTitle\":\"GRAND BARBER\"},{\"@type\":\"Person\",\"name\":\"КИРИЛО\",\"jobTitle\":\"AMBASSADOR\"},{\"@type\":\"Person\",\"name\":\"СЕРГІЙ\",\"jobTitle\":\"GRAND BARBER\"},{\"@type\":\"Person\",\"name\":\"ЄГОР\"}],\"makesOffer\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Чоловіча стрижка\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка бороди та вусів\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Комплекс: стрижка + борода\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка машинкою з насадками\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Королівське гоління небезпечною бритвою\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Камуфлювання сивини волосся\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Камуфляж сивини бороди\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Дитяча стрижка (до 12 років)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка батько + син\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Укладка волосся стайлінгом\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Гоління голови небезпечною бритвою\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Оформлення та окантовка бороди\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Воскова епіляція (вуха, ніс, брови)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Догляд за шкірою обличчя (чорна маска)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Сеанс у тату-кімнаті Tattoo Room\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Подарункові сертифікати\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Професійна чоловіча стрижка\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Професійна стрижка + стрижка бороди\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка машинкою\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Королівське гоління\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Укладка волосся\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Стрижка бороди\"}}]},{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"СКІЛЬКИ РАЗІВ ПОТРІБНО ХОДИТИ В БАРБЕРШОП?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Кількість візитів до барбершопу залежить від вашого стилю, типу стрижки та швидкості росту волосся. Зазвичай чоловіки відвідують барбершоп кожні: 2–4 тижні, якщо потрібна коротка стрижка або підтримання чіткого стилю. 4–6 тижнів, якщо волосся довше або ви не потребуєте частого підрівнювання. Також, регулярні візити допомагають доглядати за бородою, якщо ви її носите. Обговоріть з вашим барбером оптимальний графік для підтримки вашого стилю.\"}}]}]"}</script>
      </head>
      <body className="bg-[hsl(220,20%,9%)] text-[hsl(220,10%,94%)] antialiased selection:bg-[hsl(38,90%,50%)] selection:text-[hsl(220,20%,9%)]">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
