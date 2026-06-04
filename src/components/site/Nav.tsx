import { Zap } from "lucide-react";
import { BookingModal } from "@/components/site/BookingModal";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="size-8 rounded-lg neumo grid place-items-center">
            <Zap className="size-4 text-neon" />
          </span>
          MurSat<span className="text-neon">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicios" className="hover:text-foreground transition">Servicios</a>
          <a href="#proceso" className="hover:text-foreground transition">Proceso</a>
          <a href="#casos" className="hover:text-foreground transition">Casos</a>
          <a href="#contacto" className="hover:text-foreground transition">Contacto</a>
        </div>
        <a href="#contacto" className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
          Iniciar proyecto
        </a>
      </nav>
    </header>
  );
}
