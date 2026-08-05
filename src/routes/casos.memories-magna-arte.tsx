import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { BookingModal } from "@/components/site/BookingModal";
import { ArrowLeft, ArrowRight, Zap, Server, Shield, Database } from "lucide-react";
import memoriesImg from "@/assets/portfolio/memories.png";

export const Route = createFileRoute("/casos/memories-magna-arte")({
  component: CaseStudy,
  head: () => ({
    meta: [
      { title: "Caso de Estudio: Memories | MurSat Solutions" },
      {
        name: "description",
        content:
          "Creación de un ecosistema E-commerce de alta gama con trazabilidad financiera absoluta e integración de pagos para joyería premium.",
      },
    ],
  }),
});

function CaseStudy() {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground antialiased font-sans">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors mb-10 text-sm font-medium"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>

          {/* Eyebrow */}
          <div className="text-xs md:text-sm font-semibold tracking-[0.2em] text-cyan-500 uppercase mb-6">
            E-Commerce Premium · Arquitectura Transaccional
          </div>

          {/* Título y Subtítulo */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight max-w-4xl">
            Memories
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-16">
            Creación de un ecosistema E-commerce de alta gama con trazabilidad financiera absoluta e integración de pagos para joyería premium.
          </p>

          {/* Hero Image */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img
              src={memoriesImg}
              alt="Mockup de la plataforma Memories y Magna Arte"
              className="w-full h-full object-cover"
            />
            {/* Glow sutil inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Body: Dos Columnas */}
      <section className="relative py-20 px-6 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Columna Izquierda (Sticky): Metadata, Tecnologías, Servicios */}
          <div className="w-full lg:w-[30%] lg:sticky lg:top-32 flex flex-col gap-12">
            
            {/* Tecnologías */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", ".NET", "SQL Server", "Pasarelas de Pago"].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Servicios Aplicados */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Servicios Aplicados
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Server className="size-5 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400 text-sm">Arquitectura E-commerce transaccional</span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="size-5 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400 text-sm">Módulos avanzados de seguimiento financiero</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="size-5 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400 text-sm">Integración de pasarelas de pago seguras</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="size-5 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400 text-sm">Diseño y gestión de requerimientos técnicos</span>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Columna Derecha (Scroll): Narrativa */}
          <div className="w-full lg:w-[70%] flex flex-col">
            
            {/* Contexto y Problema */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
                Contexto y Problema
              </h2>
              <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                <p>
                  Comercializar alta joyería (oro y esmeraldas naturales) requiere más que un catálogo virtual; exige un control estricto del inventario de alto valor y un manejo impecable de las transacciones financieras. El desafío consistía en crear marcas de comercio electrónico independientes que operaran bajo un estándar de máxima seguridad.
                </p>
              </div>
            </div>

            {/* Arquitectura y Solución */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
                Arquitectura y Solución
              </h2>
              <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                <p>
                  Diseñamos una arquitectura web a la medida. Establecimos bases de datos independientes para segmentar la operación de cada línea comercial y estructuramos una orquestación de pagos altamente segura, garantizando la trazabilidad de cada transacción.
                </p>
              </div>
            </div>

            {/* El Resultado */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
                El Resultado
              </h2>
              <div className="p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <p className="text-xl text-zinc-200 font-medium leading-relaxed">
                  Ecosistemas de ventas estables y autónomos, con layouts web orientados a la conversión y bases de datos preparadas para auditorías financieras.
                </p>
              </div>
            </div>

            {/* Call to Action Interno */}
            <div className="mt-10 pt-10 border-t border-zinc-800">
              <BookingModal triggerVariant="primary">
                <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-lg hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer">
                  Construir una arquitectura similar
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </BookingModal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
