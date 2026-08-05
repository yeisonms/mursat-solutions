import { Target, ArrowRight } from "lucide-react";
import { BookingModal } from "@/components/site/BookingModal";

const steps = [
  {
    num: "01",
    title: "DISCOVERY",
    desc: "Entendemos el negocio. Definimos objetivos, usuarios, funcionalidades y riesgos antes de escribir la primera línea de código.",
  },
  {
    num: "02",
    title: "ARCHITECT",
    desc: "Diseñamos la solución. Trazamos la arquitectura, seleccionamos el stack, estructuramos la infraestructura y definimos el roadmap.",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Construimos y validamos. Sprints de desarrollo, aseguramiento de calidad (QA), integraciones complejas y entregas continuas.",
  },
  {
    num: "04",
    title: "SCALE",
    desc: "Evolucionamos el producto. Optimizamos el performance, robustecemos la infraestructura y desarrollamos nuevas funcionalidades para acompañar el crecimiento.",
  },
];

const ctoProblems = [
  "Código difícil de mantener.",
  "Performance deficiente.",
  "Deuda técnica acumulada.",
  "Infraestructura inestable.",
  "Arquitectura que no escala.",
  "Integraciones complejas rotas.",
];

export function Process() {
  return (
    <>
      {/* Sección 1: Proceso (Workflow Comercial) */}
      <section id="proceso" className="relative py-32 px-6 bg-zinc-950 font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter max-w-4xl mx-auto leading-tight">
              De la incertidumbre a un producto listo para crecer.
            </h2>
          </div>

          {/* Layout de Pasos (Timeline) */}
          <div className="relative">
            {/* Línea conectora (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-zinc-800" />
            
            {/* Línea conectora (Mobile) */}
            <div className="md:hidden absolute top-0 bottom-0 left-[31px] w-px bg-zinc-800" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
              {steps.map((step, i) => (
                <div key={step.num} className="relative flex flex-col md:items-center text-left md:text-center group">
                  {/* Número destacado */}
                  <div className="mb-6 md:mb-8 relative z-10 flex items-center justify-center size-16 rounded-full bg-zinc-950 border-2 border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/50 transition-colors duration-500 ml-0 md:ml-auto md:mr-auto">
                    <span className="font-mono text-xl font-bold text-zinc-400 group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                  </div>
                  
                  {/* Textos del paso */}
                  <div className="pl-24 md:pl-0">
                    <h3 className="text-lg md:text-xl font-bold text-cyan-400 tracking-wider mb-3">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Soluciones para Empresas / CTOs */}
      <section className="relative bg-zinc-900 py-24 px-6 font-sans border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Columna Izquierda: El Problema */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                ¿Tu software ya existe, pero la arquitectura no acompaña el crecimiento?
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10">
                Lideramos la auditoría técnica, refactorización, optimización de performance, arquitectura Cloud y evolución de productos digitales existentes.
              </p>
              
              <div>
                <BookingModal>
                  <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-lg hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer">
                    Auditar mi arquitectura
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </BookingModal>
              </div>
            </div>

            {/* Columna Derecha: Problemas que resolvemos */}
            <div className="bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-zinc-800 shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white mb-8 border-b border-zinc-800 pb-4">
                Problemas que resolvemos:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ctoProblems.map((problem, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Target className="size-5 text-rose-400/80 shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
