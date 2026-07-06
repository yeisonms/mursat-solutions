import { GraduationCap, Users, ShieldCheck, Code2 } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Maestría en Ingeniería" },
  { icon: Users, label: "Coordinación de equipos" },
  { icon: Code2, label: "Clean Architecture" },
  { icon: ShieldCheck, label: "Estándares enterprise" },
];

export function Leadership() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full neumo text-xs text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-neon" />
            Liderazgo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Liderazgo técnico de
            <br />
            <span className="text-gradient-neon">nivel empresarial.</span>
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada proyecto en MurSat Solutions es dirigido por profesionales con{" "}
            <span className="text-foreground font-medium">
              Maestría y experiencia en coordinación de desarrollo
            </span>
            . Traducimos la complejidad del negocio en arquitecturas limpias, código
            mantenible y decisiones de ingeniería que escalan con tu startup — sin
            improvisaciones ni deuda técnica silenciosa.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="neumo rounded-xl p-4 flex items-center gap-3"
              >
                <div className="size-9 rounded-lg bg-neon/10 grid place-items-center text-neon shrink-0">
                  <Icon className="size-4" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
