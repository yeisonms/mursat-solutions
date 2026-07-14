import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import redfitImg from "@/assets/portfolio/refit.png";
import annacImg from "@/assets/portfolio/annac.png";
import memoriesImg from "@/assets/portfolio/memories.png";
import sinverImg from "@/assets/portfolio/sinver.png";

const projects = [
  {
    title: "RedFit: Plataforma de Gestión y Operación Multi-Sede",
    description: "Arquitectura transaccional para la administración unificada de redes de establecimientos fitness. Desarrollamos los módulos centrales para el seguimiento financiero, el control de membresías y la orquestación de operaciones entre múltiples sedes en tiempo real.",
    image: redfitImg,
    tags: ["Arquitectura Multi-Tenant", "Módulos Financieros", "Optimización SQL", "Gestión de Membresías"],
    link: "#link-falso-redfit",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
    accent: "text-neon",
  },
  {
    title: "Annac: Ecosistema Digital para Turismo a la Medida",
    description: "Arquitectura web orientada a la comercialización de servicios turísticos personalizados. La solución destaca por su integración operativa con plataformas de terceros y el despliegue continuo mediante infraestructura escalable (Vercel), priorizando la protección de los usuarios con protocolos de seguridad (SSL).",
    image: annacImg,
    tags: ["Integración de Terceros", "Despliegue Serverless", "SSL", "Arquitectura Web"],
    link: "#link-falso-annac",
    span: "md:col-span-1",
    aspect: "aspect-[4/3]",
    accent: "text-neon-violet",
  },
  {
    title: "Memories: Plataforma E-Commerce Transaccional de Alta Gama",
    description: "Arquitectura de comercio electrónico especializada en el sector de joyería premium. El desarrollo se fundamentó en la dirección estricta de requerimientos técnicos y la construcción de módulos avanzados de seguimiento financiero, garantizando transacciones seguras y trazabilidad impecable.",
    image: memoriesImg,
    tags: ["Arquitectura E-Commerce", "Trazabilidad Financiera", "Gestión de Requerimientos", "Transacciones Seguras"],
    link: "#link-falso-memories",
    span: "md:col-span-1",
    aspect: "aspect-[4/3]",
    accent: "text-neon-cyan",
  },
  {
    title: "Sinver: Ecosistema Operativo y de Pedidos (Foodtech SaaS)",
    description: "Plataforma omnicanal para el sector gastronómico que unifica la tienda en línea con la operación física. Cuenta con una base de datos para el control de inventarios en tiempo real y automatización del flujo de trabajo mediante integración directa con hardware (impresoras), creando una arquitectura lista para escalar como servicio.",
    image: sinverImg,
    tags: ["SaaS Architecture", "Hardware Integration", "Database Design", "Order Management System"],
    link: "#link-falso-sinver",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
    accent: "text-neon",
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
          {projects.map(({ title, description, image, tags, link, span, aspect, accent }) => (
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
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 mb-5">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full neumo-inset border-none text-muted-foreground font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <a
                  href={link}
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
