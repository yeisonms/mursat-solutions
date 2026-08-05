import { Zap } from "lucide-react";
import { BookingModal } from "@/components/site/BookingModal";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo3mursat.png" alt="MurSat Solutions" className="h-20 w-auto object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#capacidades" className="hover:text-cyan-400 transition-colors">Capacidades</a>
          <a href="#portafolio" className="hover:text-cyan-400 transition-colors">Casos de Estudio</a>
          <a href="#proceso" className="hover:text-cyan-400 transition-colors">Proceso</a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
        </div>
        <BookingModal>
          <button className="text-sm px-6 py-2.5 rounded-lg bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            Iniciar proyecto
          </button>
        </BookingModal>
      </nav>
    </header>
  );
}
