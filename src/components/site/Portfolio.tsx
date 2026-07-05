import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ecommerceImg from "@/assets/portfolio/ecommerce.jpg";
import travelImg from "@/assets/portfolio/travel.jpg";
import membershipImg from "@/assets/portfolio/membership.jpg";
import logisticsImg from "@/assets/portfolio/logistics.jpg";
import marketplaceImg from "@/assets/portfolio/marketplace.jpg";

const projects = [
  {
    title: "Plataforma E-commerce",
    description: "Arquitectura headless con catálogo en tiempo real y checkout optimizado que incrementó conversiones en un 34%.",
    image: ecommerceImg,
    tags: ["React", "Supabase", "Stripe", "Tailwind"],
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
    accent: "text-neon",
  },
  {
    title: "Portal de Viajes Seguro",
    description: "Motor de reservas con encriptación end-to-end y pasarela Wompi para pagos locales.",
    image: travelImg,
    tags: ["Next.js", "TypeScript", "Cloud", "Wompi"],
    span: "md:col-span-1",
    aspect: "aspect-[4/3]",
    accent: "text-neon-violet",
  },
  {
    title: "Sistema de Membresías Multi-sede",
    description: "Core transaccional de alta concurrencia con sincronización de sedes en tiempo real.",
    image: membershipImg,
    tags: ["React", "Supabase", "Cloud"],
    span: "md:col-span-1",
    aspect: "aspect-[4/3]",
    accent: "text-neon-cyan",
  },
  {
    title: "App de Gestión Logística",
    description: "Control de inventarios, rutas y escaneo de códigos en campo para reducir pérdidas operativas.",
    image: logisticsImg,
    tags: ["React Native", "Node.js", "Docker"],
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
    accent: "text-neon",
  },
  {
    title: "Marketplace B2B con Matching IA",
    description: "Plataforma de servicios empresariales con algoritmo de matching y contratación inteligente.",
    image: marketplaceImg,
    tags: ["Next.js", "PostgreSQL", "AI"],
    span: "md:col-span-3",
    aspect: "aspect-[21/9]",
    accent: "text-neon-violet",
  },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-neon mb-4">Portafolio</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Productos Digitales Desarrollados.
            <span className="text-muted-foreground"> Software que escala negocios.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map(({ title, description, image, tags, span, aspect, accent }) => (
            <article
              key={title}
              className={`${span} group neumo rounded-3xl overflow-hidden transition hover:-translate-y-1 hover:[box-shadow:0_0_48px_-12px_var(--neon),inset_1px_1px_0_0_oklch(1_0_0/8%)] flex flex-col`}
            >
              <div className={`relative w-full ${aspect} overflow-hidden bg-surface-elevated`}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
                <img
                  src={image}
                  alt={`Mockup del proyecto ${title}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full neumo-inset border-none text-muted-foreground font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <a
                  href="#"
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium ${accent} hover:underline underline-offset-4 transition group/link`}
                >
                  Ver producto en vivo
                  <ArrowUpRight className="size-4 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
