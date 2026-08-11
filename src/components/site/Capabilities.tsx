import { cn } from "@/lib/utils";

const capabilities = [
  {
    id: "01",
    label: "BUILD",
    title: "Construimos productos que llegan al mercado.",
    description: "Desarrollo ágil de MVPs, PWAs y plataformas web diseñadas para validar y escalar tu modelo de negocio rápidamente.",
    result: "Velocidad de lanzamiento acelerada y código limpio.",
    className: "col-span-1 md:col-span-3",
  },
  {
    id: "02",
    label: "INTELLIGENCE",
    title: "IA integrada en el núcleo.",
    description: "Implementamos agentes inteligentes, automatización y RAG para diferenciar tu SaaS con inteligencia artificial nativa.",
    result: "Operaciones automatizadas y ventajas competitivas con IA.",
    className: "col-span-1 md:col-span-3",
  },
  {
    id: "03",
    label: "ARCHITECT",
    title: "Fundaciones a prueba de fallos.",
    description: "Clean Architecture, servicios desacoplados y bases de datos optimizadas para soportar alta transaccionalidad sin cuellos de botella.",
    result: "Infraestructura diseñada para acompañar el crecimiento del producto.",
    className: "col-span-1 md:col-span-2",
  },
  {
    id: "04",
    label: "DEPLOY",
    title: "Despliegues sin fricción.",
    description: "Pipelines CI/CD automatizados y estrategias de release sin tiempo de inactividad, garantizando estabilidad en cada actualización.",
    result: "Despliegues continuos con mínima interrupción y mayor control operativo.",
    className: "col-span-1 md:col-span-2",
  },
  {
    id: "05",
    label: "SCALE",
    title: "Escalabilidad elástica.",
    description: "Estrategias Cloud-Native en AWS/GCP/Vercel que ajustan los recursos automáticamente según la demanda de tus usuarios.",
    result: "Costos optimizados y Rendimiento optimizado, preparado para escenarios de alta demanda.",
    className: "col-span-1 md:col-span-2",
  }
];

export function Capabilities() {
  return (
    <section id="capacidades" className="relative py-32 px-6 bg-zinc-950 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Nuestras Capacidades
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            Ingeniería de élite diseñada para el ciclo de vida de tu producto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.id}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 md:p-10 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]",
                cap.className,
                "animate-slide-up"
              )}
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-mono font-bold text-cyan-500">{cap.id}</span>
                  <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400/80 uppercase">{cap.label}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                  {cap.description}
                </p>
              </div>

              <div className="mt-10 rounded-xl bg-zinc-950/80 p-5 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                <p className="text-sm md:text-base text-zinc-300 font-medium flex items-center">
                  <span className="text-cyan-500 mr-3 text-lg leading-none">↳</span>
                  {cap.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
