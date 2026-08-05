import { Sparkles } from "lucide-react";
import { BookingModal } from "@/components/site/BookingModal";

export function Hero() {
  return (
    <div className="bg-zinc-950 w-full overflow-hidden font-sans">
      {/* Sección 1: Hero */}
      <section className="relative pt-40 pb-24 px-6 min-h-[90vh] flex flex-col justify-center items-center">
        {/* Efecto de brillo (Glow sutil) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[600px] md:size-[800px] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-[10px] sm:text-xs font-semibold text-zinc-300 tracking-[0.2em] uppercase mb-10 animate-fade-in backdrop-blur-md">
            <Sparkles className="size-4 text-cyan-400" />
            Boutique Software Engineering · AI · SaaS · Cloud
          </div>
          
          {/* H1 Gigante con gradiente */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-8 animate-slide-up leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
              De la idea al producto.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Del producto a la escala.
            </span>
          </h1>
          
          {/* Párrafo descriptivo */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 animate-slide-up font-light leading-relaxed">
            Ingeniería de software a la medida, integración de IA y arquitecturas ágiles para startups que necesitan moverse rápido sin sacrificar calidad.
          </p>
          
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <BookingModal triggerText="Construir mi producto" triggerVariant="primary" />
            <BookingModal triggerText="Agendar sesión de arquitectura" triggerVariant="outline" />
          </div>
        </div>
      </section>

      {/* Sección 2: Diferenciación */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* H2 de alto contraste */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
            No construimos páginas web.<br />
            <span className="text-cyan-400/90">Construimos productos digitales.</span>
          </h2>
          
          {/* Texto gris descriptivo */}
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-20 font-light leading-relaxed">
            Sistemas transaccionales, plataformas SaaS, MVPs e infraestructura preparada para crecer.
          </p>
          
          {/* Línea divisoria tenue y lista horizontal */}
          <div className="border-t border-zinc-800 pt-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-lg font-mono text-zinc-500 tracking-widest uppercase">
              <span>MVPs</span>
              <span className="hidden md:inline text-white/10">•</span>
              <span>SaaS</span>
              <span className="hidden md:inline text-white/10">•</span>
              <span>AI</span>
              <span className="hidden md:inline text-white/10">•</span>
              <span>Cloud</span>
              <span className="hidden md:inline text-white/10">•</span>
              <span>DevOps</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
