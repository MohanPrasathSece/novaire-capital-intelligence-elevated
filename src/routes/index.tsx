import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { Background } from "@/components/site/Background";
import { Cursor } from "@/components/site/Cursor";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Trust } from "@/components/site/Trust";
import { Features } from "@/components/site/Features";
import { AIBot } from "@/components/site/AIBot";
import { Steps } from "@/components/site/Steps";
import { Stats } from "@/components/site/Stats";
import { Security } from "@/components/site/Security";
import { Academy } from "@/components/site/Academy";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novaire Capital — Intelligence for the Next Generation of Digital Assets" },
      { name: "description", content: "French-built AI crypto intelligence: proprietary models, institutional analytics, and a world-class academy in one premium experience." },
    ],
  }),
  component: Index,
});

function Index() {
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
        <Trust />
        <Features />
        <AIBot />
        <Steps />
        <Stats />
        <Security />
        <Academy />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
