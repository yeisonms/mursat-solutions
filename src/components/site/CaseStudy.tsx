import { Database, Cloud, Zap, Users } from "lucide-react";

const blocks = [
  {
    label: "El Desafío",
    text: "Orquestar un ecosistema unificado para digitalizar y automatizar modelos financieros complejos y acuerdos comerciales distribuidos en múltiples centros físicos.",
  },
  {
    label: "La Arquitectura",
    text: "Core transaccional de alta concurrencia, sincronización de estados de membresía en tiempo real y flujos automatizados sobre infraestructura administrada en la nube — Time-to-Market récord.",
  },
  {
    label: "El Impacto",
    text: "Automatización financiera total, eliminación de discrepancias y una arquitectura base lista para añadir nuevas sedes sin reescribir código.",
  },
];

export function CaseStudy() {
  return (
    <section id="casos" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-neon mb-4">Caso destacado</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-3xl">
          Informe de ingeniería <span className="text-muted-foreground">/ proyecto en producción</span>
        </h2>

        <article className="neumo rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-neon-violet/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-neon/10 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="size-2 rounded-full bg-neon animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground">En producción</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Plataforma Transaccional y de Membresías Multi-sede.
              </h3>

              <div className="space-y-6">
                {blocks.map((b) => (
                  <div key={b.label} className="border-l-2 border-neon/40 pl-5">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-neon mb-2">{b.label}</div>
                    <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {["Clean Architecture", "Cloud Infrastructure", "Transaccional"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full neumo-inset text-foreground/80 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Database, k: "99.9%", v: "Uptime transaccional" },
                  { icon: Zap, k: "<120ms", v: "Latencia P95" },
                  { icon: Cloud, k: "Multi-sede", v: "Sync tiempo real" },
                  { icon: Users, k: "0", v: "Discrepancias financieras" },
                ].map(({ icon: Icon, k, v }) => (
                  <div key={v} className="neumo-inset rounded-2xl p-5">
                    <Icon className="size-4 text-neon mb-3" />
                    <div className="font-display font-bold text-2xl">{k}</div>
                    <div className="text-xs text-muted-foreground mt-1">{v}</div>
                  </div>
                ))}
              </div>

              <div className="neumo-inset rounded-2xl p-5 flex items-center gap-4">
                <div className="size-10 rounded-full bg-gradient-to-br from-neon to-neon-violet grid place-items-center text-primary-foreground font-bold">
                  NG
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-neon mb-1">Crédito de equipo</div>
                  <div className="text-sm">
                    En colaboración con <span className="font-semibold">Nelson Giovanny Argoty</span> y especialistas del equipo MurSat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
