import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Advantages from "@/components/Advantages";
import TattooRoom from "@/components/TattooRoom";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { InterstitialHairline, InterstitialWatermark, InterstitialStatement } from "@/components/Interstitials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        
        <InterstitialWatermark text="PRECISION · LVIV · EST 2018" />
        
        <Calculator />
        <Advantages />
        
        <InterstitialHairline label="АВТОНОМНИЙ КАБІНЕТ TATTOO ROOM" />
        
        <TattooRoom />
        <Gallery />
        <Process />
        
        <InterstitialStatement statement="ТРИМАЄМО ПЛАНКУ ЯКОСТІ ТА ЧОЛОВІЧИХ СТАНДАРТІВ З 2018 РОКУ" />
        
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
