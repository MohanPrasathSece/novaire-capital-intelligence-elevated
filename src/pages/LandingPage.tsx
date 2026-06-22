import { Preloader } from "@/components/site/Preloader";
import { Background } from "@/components/site/Background";
import { Cursor } from "@/components/site/Cursor";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Features } from "@/components/site/Features";
import { AIBot } from "@/components/site/AIBot";
import { Security } from "@/components/site/Security";
import { Academy } from "@/components/site/Academy";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

export function LandingPage() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Background />
      <Cursor />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <Features />
        <AIBot />
        <Security />
        <Academy />
        <Testimonials />
        <FAQ />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
