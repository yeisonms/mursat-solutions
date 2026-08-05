import { ArrowUpRight, Zap } from "lucide-react";
import redfitImg from "@/assets/portfolio/refit.png";
import annacImg from "@/assets/portfolio/annac.png";
import memoriesImg from "@/assets/portfolio/memories.png";
import sinverImg from "@/assets/portfolio/sinver.png";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    title: "Caso 01: REDfit",
    challenge: "Gestionar operaciones, membresías y finanzas de múltiples establecimientos físicos desde una misma plataforma central.",
    built: [
      "Arquitectura Multi-Tenant.",
      "Módulos financieros y de facturación.",
      "Gestión concurrente de membresías.",
      "Optimización de consultas SQL para reportes en tiempo real."
    ],
    result: "Una plataforma centralizada y escalable, preparada para operar múltiples sedes comerciales sin discrepancias de datos.",
    image: redfitImg,
    link: "https://www.redfit.app/",
  },
  {
    title: "Caso 02: Annac (Turismo a la medida)",
    challenge: "Orquestar la comercialización de servicios turísticos garantizando disponibilidad continua, integraciones externas y máxima seguridad transaccional.",
    built: [
      "Arquitectura web orientada a servicios.",
      "Integración operativa con plataformas de terceros (Aviatur).",
      "Despliegue Serverless con pipelines de integración continua.",
      "Implementación rigurosa de protocolos de seguridad (SSL)."
    ],
    result: "Un ecosistema digital seguro y de alta disponibilidad que unifica la operación turística y protege la información de los usuarios.",
    image: annacImg,
    link: "https://annacviajesatumedida.com/",
  },
  {
    title: "Caso 03: Memories / Magna Arte",
    challenge: "Crear un ecosistema de comercio electrónico de alta gama para joyería premium, exigiendo trazabilidad financiera absoluta y control de inventario de alto valor.",
    built: [
      "Arquitectura E-commerce transaccional.",
      "Módulos avanzados de seguimiento financiero.",
      "Integración de pasarelas de pago seguras.",
      "Diseño y gestión estricta de requerimientos técnicos."
    ],
    result: "Una plataforma comercial robusta con control transaccional total, diseñada para manejar operaciones financieras de alto ticket sin margen de error.",
    image: memoriesImg,
    link: "https://www.magnaarte.com/",
  },
  {
    title: "Caso 04: Sinver (Foodtech)",
    challenge: "Unificar la experiencia de pedidos en línea con la operación física de un restaurante, mitigando el caos en la cocina y sincronizando inventarios.",
    built: [
      "Arquitectura SaaS omnicanal.",
      "Integración directa de software con hardware físico (impresoras de cocina).",
      "Bases de datos para control de inventario en tiempo real.",
      "Sistema centralizado de gestión de pedidos (OMS)."
    ],
    result: "Un ecosistema operativo automatizado que elimina cuellos de botella en la producción y cuenta con una arquitectura base lista para comercializarse a otros establecimientos.",
    image: sinverImg,
    link: "https://sinver-eta.vercel.app/menu",
  },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="relative py-32 px-6 bg-zinc-950 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
            Casos de Estudio
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Ingeniería real para problemas de negocio reales.
          </p>
        </div>

        {/* Lista de Casos de Estudio */}
        <div className="space-y-32">
          {caseStudies.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <article 
                key={project.title} 
                className={cn(
                  "flex flex-col gap-12 lg:gap-20 items-center",
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Lado Visual (Imagen/Mockup) */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(6,182,212,0.15)] bg-zinc-900 border border-zinc-800/60 group cursor-pointer transition-all duration-700 hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)] hover:-translate-y-2">
                    <img
                      src={project.image}
                      alt={`Arquitectura y producto de ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Lado de Texto */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Desafío */}
                  <div className="mb-8">
                    <p className="text-gray-400 leading-relaxed font-light text-lg">
                      {project.challenge}
                    </p>
                  </div>
                  
                  {/* Lo que construimos */}
                  <div className="mb-10">
                    <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                      Lo que construimos:
                    </h4>
                    <ul className="space-y-3">
                      {project.built.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Zap className="size-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Resultado (Impacto de Negocio) */}
                  <div className="bg-zinc-900/60 border-l-2 border-cyan-500 p-5 rounded-r-xl mb-10 shadow-lg">
                    <p className="text-gray-200 font-medium text-sm md:text-base leading-relaxed">
                      <span className="text-cyan-400 font-bold block mb-1">Impacto:</span>
                      {project.result}
                    </p>
                  </div>
                  
                  {/* Botón de Acción */}
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-lg hover:text-cyan-300 transition-colors group"
                    >
                      <span className="relative">
                        Ver caso de estudio
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
