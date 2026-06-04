import { ArrowRight } from "lucide-react";
import { BookingModal } from "@/components/site/BookingModal";

export function CTA() {
  return (
    <section id="contacto" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto neumo rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-neon/10 blur-[100px]" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            ¿Listo para escalar la arquitectura de tu <span className="text-gradient-neon">próximo proyecto?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Reservamos un cupo limitado de proyectos por trimestre para garantizar atención boutique.
          </p>
          <BookingModal>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold glow-neon hover:scale-[1.02] transition cursor-pointer">
              Hablemos de tu producto
              <ArrowRight className="size-4" />
            </button>
          </BookingModal>
        </div>
      </div>
    </section>
  );
}
