const reasons = [
  {
    num: "01",
    title: "Ingeniería, no producción en masa",
    desc: "No somos una fábrica de sitios web genéricos. Desarrollamos software a la medida con rigor arquitectónico.",
  },
  {
    num: "02",
    title: "Arquitectura desde el día uno",
    desc: "No programamos para el corto plazo. Estructuramos bases de datos e infraestructura pensando en lo que necesitarás cuando tu producto escale a miles de usuarios.",
  },
  {
    num: "03",
    title: "IA con propósito",
    desc: "No usamos Inteligencia Artificial como adorno. Integramos LLMs y automatización solo cuando generan una ventaja competitiva real para el negocio.",
  },
  {
    num: "04",
    title: "Time-to-Market",
    desc: "Comprendemos la velocidad de las startups. Entregamos productos funcionales rápidamente sin convertir el código en deuda técnica.",
  },
  {
    num: "05",
    title: "Acompañamiento técnico",
    desc: "Nuestro compromiso no termina con el despliegue. Mantenemos, optimizamos y evolucionamos tu plataforma a medida que tu empresa crece.",
  },
];

export function WhyMursat() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-zinc-950 font-sans border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Columna Izquierda (Sticky) */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
              ¿Por qué MurSat?
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-md">
              Razones técnicas y estratégicas para confiarnos tu producto digital.
            </p>
          </div>

          {/* Columna Derecha (Scroll) */}
          <div className="w-full lg:w-3/5 flex flex-col">
            {reasons.map((reason, index) => (
              <div 
                key={reason.num} 
                className="group flex flex-col md:flex-row gap-6 md:gap-8 py-10 md:py-12 border-b border-zinc-800 last:border-0 first:pt-0"
              >
                {/* Número Grande */}
                <div className="shrink-0">
                  <span className="font-mono text-5xl md:text-6xl font-bold text-zinc-700 transition-colors duration-500 group-hover:text-cyan-400/50">
                    {reason.num}
                  </span>
                </div>
                
                {/* Contenido */}
                <div className="flex flex-col justify-center mt-2 md:mt-0">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
