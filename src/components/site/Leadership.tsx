import { Cpu, Users, Zap, Layers, Cloud } from "lucide-react";

const credentials = [
  { icon: Cpu, label: "Magister en Ciencias de la computación." },
  { icon: Users, label: "Ingeniero de Software, con 8 años de experiencia liderando y coordinando equipos de desarrollo a nivel empresarial." },
  { icon: Zap, label: "Aprendizaje autónomo continuo y adaptación de nuevas tecnologías." },
  { icon: Layers, label: "Aplicación estricta de Clean Architecture y principios SOLID." },
  { icon: Cloud, label: "Gestión de infraestructura Cloud y flujos de despliegue." },
];

export function Leadership() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-zinc-950 font-sans border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Encabezado */}
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Ingeniería senior. Sin capas innecesarias.
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-3xl">
          En MurSat Solutions trabajas directamente con profesionales que entienden de arquitectura, de negocio y de ejecución. Menos intermediarios significa mayor precisión y mejores decisiones técnicas para tu producto.
        </p>

        {/* Grid de Credenciales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full text-left">
          {credentials.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 shadow-lg transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 ${
                i === credentials.length - 1 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""
              }`}
            >
              <div className="shrink-0 size-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                <Icon className="size-5 text-zinc-400" />
              </div>
              <span className="text-white text-base md:text-lg font-medium leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
