import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TechMarquee } from "@/components/site/TechMarquee";
import { WhyMursat } from "@/components/site/WhyMursat";
import { Capabilities } from "@/components/site/Capabilities";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Leadership } from "@/components/site/Leadership";

import { FAQ } from "@/components/site/FAQ";
import { Qualification } from "@/components/site/Qualification";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MurSat Solutions | Ingeniería de Software, SaaS y MVPs" },
      { name: "description", content: "Construimos ecosistemas digitales escalables y MVPs para startups. Especialistas en desarrollo web B2B, Inteligencia Artificial y arquitectura Cloud/DevOps." },
      { name: "keywords", content: "ingeniería de software, desarrollo SaaS, MVPs para startups, desarrollo web a la medida, arquitectura cloud, integración inteligencia artificial, clean architecture, consultoría tecnológica" },
      { property: "og:title", content: "MurSat Solutions: De la idea al producto. Del producto a la escala." },
      { property: "og:description", content: "No construimos páginas web, construimos productos digitales. Ingeniería de software, plataformas SaaS y soluciones impulsadas por IA para empresas que necesitan escalar." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mursatsolutions.com/og-image.jpg" },
    ],
  }),
  component: Index,
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MurSat Solutions",
  "description": "Construimos ecosistemas digitales escalables y MVPs para startups. Especialistas en desarrollo web B2B, Inteligencia Artificial y arquitectura Cloud/DevOps.",
  "url": "https://mursatsolutions.com"
};

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <Hero />
      <TechMarquee />
      <WhyMursat />
      <Capabilities />
      <Portfolio />
      <Process />
      <Leadership />

      <FAQ />
      <Qualification />
      <CTA />
      <Footer />
    </main>
  );
}
