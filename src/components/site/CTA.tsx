import { ArrowRight } from "lucide-react";
import { BookingModal } from "@/components/site/BookingModal";

export function CTA() {
  return (
    <section id="contacto" className="relative min-h-[60vh] flex flex-col items-center justify-center py-32 px-6 font-sans overflow-hidden bg-zinc-950">
      
      {/* Fondo Espectacular: Gradiente Radial desde abajo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-radial from-cyan-900/30 via-zinc-950/0 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-radial from-blue-900/20 via-zinc-950/0 to-transparent blur-2xl opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-cyan-400 mb-8 uppercase">
          ¿Listo para comenzar?
        </div>
        
        {/* Título Gigante */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
          <span className="text-white">De la idea al producto.</span>
          <br />
          <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
            Del producto a la escala.
          </span>
        </h2>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-14 max-w-2xl mx-auto">
          Tu próximo producto empieza con una conversación. Cuéntanos qué quieres construir, qué problema necesitas resolver y dónde estás hoy. Te ayudaremos a definir el camino técnico más adecuado.
        </p>
        
        {/* Botón Principal y Micro-copy */}
        <div className="flex flex-col items-center w-full max-w-xs md:max-w-md">
          <BookingModal>
            <button className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 md:py-6 rounded-xl bg-white text-zinc-950 font-extrabold text-lg md:text-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Hablemos de tu producto
                <ArrowRight className="size-6 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </BookingModal>
          <p className="text-sm text-zinc-500 mt-6 font-medium">
            Cupos limitados · Sin compromiso
          </p>
        </div>

      </div>
    </section>
  );
}
