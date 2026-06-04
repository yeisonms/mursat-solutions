import { Rocket, Brain, Layers, GitBranch, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Desarrollo de MVPs y PWAs",
    desc: "Lanzamientos rápidos multiplataforma para validar modelos de negocio con máxima velocidad.",
    tags: ["React", "PWA", "Mobile-first"],
    span: "md:col-span-2",
    accent: "text-neon",
  },
  {
    icon: Brain,
    title: "Soluciones Inteligentes — IA & LLMs",
    desc: "Integración nativa de APIs de IA (como Gemini), prompt engineering y sistemas predictivos para productos AI-powered.",
    tags: ["Gemini", "RAG", "Embeddings"],
    span: "md:col-span-1",
    accent: "text-neon-violet",
  },
  {
    icon: Layers,
    title: "Arquitectura & Calidad",
    desc: "Construcción robusta bajo principios SOLID, Clean Architecture y diseño Feature-First. Rigor absoluto en QA.",
    tags: ["SOLID", "Clean Arch", "QA"],
    span: "md:col-span-1",
    accent: "text-neon-cyan",
  },
  {
    icon: GitBranch,
    title: "Ecosistema DevOps & Datos",
    desc: "CI/CD con Docker, Azure Pipelines, Jenkins y SonarQube. Optimización de bases de datos y despliegue sobre infraestructura Cloud gestionada.",
    tags: ["Docker", "Azure", "Jenkins", "SonarQube"],
    span: "md:col-span-2",
    accent: "text-neon",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-neon mb-4">Capacidades</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Una stack boutique. <span className="text-muted-foreground">Velocidad de startup, ingeniería de élite.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, tags, span, accent }) => (
            <article
              key={title}
              className={`${span} group neumo rounded-3xl p-8 relative overflow-hidden transition hover:-translate-y-1 hover:[box-shadow:0_0_48px_-12px_var(--neon),inset_1px_1px_0_0_oklch(1_0_0/8%)]`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="size-12 rounded-2xl neumo-inset grid place-items-center">
                  <Icon className={`size-5 ${accent}`} />
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-neon group-hover:rotate-45 transition" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full neumo-inset text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
