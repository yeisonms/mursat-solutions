import { Compass, Code2, ShieldCheck, TrendingUp } from "lucide-react";

const steps = [
  { icon: Compass, title: "Discovery & Arquitectura", desc: "Diseño de la solución técnica apoyada en infraestructura cloud lista para escalar." },
  { icon: Code2, title: "Desarrollo Ágil", desc: "Sprints rigurosos y entregas continuas con visibilidad total." },
  { icon: ShieldCheck, title: "QA & Seguridad", desc: "Revisiones exhaustivas para garantizar solidez en producción." },
  { icon: TrendingUp, title: "Escalamiento", desc: "Optimización continua para soportar altos volúmenes de usuarios." },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-neon mb-4">Workflow</div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-xl">
              Cuatro fases. <span className="text-muted-foreground">Cero fricción.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Un proceso transparente que convierte la incertidumbre del producto en una hoja de ruta ejecutable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="neumo rounded-3xl p-7 relative group hover:-translate-y-1 transition">
              <div className="flex items-center justify-between mb-5 relative">
                <div className="size-12 rounded-2xl bg-background border border-neon/40 grid place-items-center group-hover:glow-neon transition">
                  <Icon className="size-5 text-neon" />
                </div>
                <span className="font-display text-4xl font-bold text-muted-foreground/30">0{i + 1}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
