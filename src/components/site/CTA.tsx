import { CheckCircle, ArrowRight } from "lucide-react";
import { BookingModal } from "@/components/site/BookingModal";

export function CTA() {
  const deliverables = [
    "Objetivo del producto",
    "Usuarios y flujos",
    "Arquitectura recomendada",
    "Integración de IA",
    "Infraestructura Cloud",
    "Riesgos técnicos",
    "Roadmap inicial",
  ];

  return (
    <section id="contacto" className="relative py-28 px-6 bg-zinc-950 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Contenedor principal con fondo sutil y borde superior luminoso */}
        <div className="relative rounded-3xl bg-zinc-900/40 border border-zinc-800/60 overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Borde superior luminoso sutil */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 p-10 md:p-16 relative z-10">
            {/* Columna Izquierda: Propuesta de Valor */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Architecture Session
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
                Agenda una sesión estratégica con nuestros ingenieros principales. Evaluaremos la viabilidad técnica de tu idea, estructuraremos la base de tu plataforma y diseñaremos la hoja de ruta óptima para tu lanzamiento o migración.
              </p>
              
              {/* Callout Box */}
              <div className="bg-cyan-950/20 border-l-4 border-cyan-500 p-6 rounded-r-xl">
                <p className="text-gray-200 font-medium text-sm md:text-base leading-relaxed">
                  <span className="text-cyan-400 font-bold block mb-1">Resultado:</span>
                  Una visión técnica clara y un plan de acción sobre cómo llevar tu idea a producción sin deuda técnica.
                </p>
              </div>
            </div>

            {/* Columna Derecha: Entregables y CTA */}
            <div className="flex flex-col justify-center lg:pl-12 lg:border-l lg:border-zinc-800/50">
              <h3 className="text-xl font-semibold text-white mb-6">Qué analizaremos:</h3>
              <ul className="space-y-4 mb-10">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="size-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center sm:items-stretch lg:items-start w-full">
                <BookingModal>
                  <button className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-600 text-white font-bold text-lg hover:bg-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Agendar sesión de arquitectura
                      <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Efecto hover vibrante interno */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </BookingModal>
                <p className="text-xs text-gray-500 mt-4 text-center w-full uppercase tracking-wider font-medium">
                  Cupos limitados · Atención directa · Sin compromiso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
