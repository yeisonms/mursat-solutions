import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-neon/10 blur-[120px]" />
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full neumo text-xs text-muted-foreground mb-8 animate-fade-in">
          <Sparkles className="size-3.5 text-neon" />
          Boutique de ingeniería · AI-powered
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-slide-up">
          Convirtiendo ideas audaces
          <br />
          en <span className="text-gradient-neon">productos digitales</span>
          <br />
          escalables.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up">
          Ingeniería de software a la medida, integración de IA y arquitecturas
          ágiles para startups que necesitan moverse rápido sin sacrificar calidad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a href="#contacto" className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold glow-neon hover:scale-[1.02] transition">
            Inicia tu MVP hoy
            <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full neumo border border-border/60 font-semibold hover:border-neon/60 transition">
            <Calendar className="size-4" />
            Agenda una sesión de arquitectura
          </a>
        </div>
        <div className="mt-20 grid grid-cols-3 max-w-2xl mx-auto gap-px rounded-2xl overflow-hidden neumo p-px">
          {[
            ["MVPs", "lanzados"],
            ["AI", "nativa"],
            ["Cloud", "first"],
          ].map(([k, v]) => (
            <div key={k} className="bg-surface p-6">
              <div className="text-2xl font-display font-bold text-neon">{k}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
