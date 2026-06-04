import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { CaseStudy } from "@/components/site/CaseStudy";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MurSat Solutions — Ingeniería boutique para startups AI-powered" },
      { name: "description", content: "Convertimos ideas audaces en productos digitales escalables. MVPs, integración de IA, Clean Architecture y DevOps para startups que necesitan moverse rápido." },
      { property: "og:title", content: "MurSat Solutions — Boutique Engineering" },
      { property: "og:description", content: "Software a la medida, IA y arquitecturas ágiles para startups." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased font-sans">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <Hero />
      <Services />
      <Process />
      <CaseStudy />
      <CTA />
      <Footer />
    </main>
  );
}
