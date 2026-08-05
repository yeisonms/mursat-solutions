import { ArrowUpRight, AlertCircle } from "lucide-react";

const scenarios = [
  {
    title: "El Inicio",
    situation: "Tengo una idea.",
    challenge: "Necesito convertirla en un producto real sin perder tiempo ni presupuesto.",
    solution: "Construimos tu MVP (Minimum Viable Product). Arquitectura ágil para validar en el mercado con solidez técnica.",
  },
  {
    title: "La Transición",
    situation: "Tengo un MVP.",
    challenge: "Validé mi modelo, pero el código actual no soportará el crecimiento.",
    solution: "Diseñamos y construimos la arquitectura definitiva. Escalabilidad, seguridad y bases de datos preparadas para tracción.",
  },
  {
    title: "La Operación",
    situation: "Tengo una empresa.",
    challenge: "Necesito digitalizar, unificar o automatizar una operación de negocio compleja.",
    solution: "Desarrollamos tu plataforma corporativa o ecosistema SaaS a la medida, orquestando flujos y transacciones bajo estándares Enterprise.",
  },
  {
    title: "La Evolución",
    situation: "Tengo un software existente.",
    challenge: "Mi arquitectura actual genera errores, es lenta o acumula demasiada deuda técnica.",
    solution: "Auditamos tu código. Refactorizamos, optimizamos el rendimiento de bases de datos y modernizamos tu infraestructura Cloud.",
  }
];

export function Qualification() {
  return (
    <section className="relative py-32 px-6 bg-zinc-950 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
            ¿Dónde está tu producto hoy?
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            Identifica tu escenario. Nosotros definimos el camino técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => (
            <a
              key={index}
              href="#contacto"
              className="group block relative bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.15)] cursor-pointer"
            >
              {/* Etiqueta del escenario */}
              <div className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-wider mb-4">
                {scenario.title}
              </div>

              {/* Gancho / Situación */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {scenario.situation}
              </h3>

              {/* El Reto */}
              <div className="flex items-start gap-3 text-zinc-400 mb-8">
                <AlertCircle className="size-5 shrink-0 mt-0.5 text-zinc-500" />
                <p className="text-sm md:text-base leading-relaxed">
                  {scenario.challenge}
                </p>
              </div>

              {/* Separador */}
              <div className="border-t border-zinc-800 my-6 transition-colors duration-500 group-hover:border-cyan-900/30" />

              {/* Solución MurSat */}
              <div className="flex items-end justify-between gap-4">
                <p className="text-zinc-200 text-sm md:text-base font-medium leading-relaxed pr-8">
                  <span className="text-cyan-400 font-bold block mb-1">Solución MurSat:</span>
                  {scenario.solution}
                </p>
                <div className="shrink-0 size-10 rounded-full bg-zinc-800 flex items-center justify-center transition-colors duration-300 group-hover:bg-cyan-600">
                  <ArrowUpRight className="size-5 text-cyan-400 transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
