import { Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-20 md:py-32 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center">
          <img src="/logo3mursat.png" alt="MurSat Solutions" className="h-30 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:mursatsolutions@gmail.com" className="size-12 rounded-full bg-zinc-900/50 border border-zinc-800 grid place-items-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors" aria-label="Email">
            <Mail className="size-5" />
          </a>
          <a href="https://www.facebook.com/share/1CzXiGHT2A/" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full bg-zinc-900/50 border border-zinc-800 grid place-items-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors" aria-label="Facebook">
            <Facebook className="size-5" />
          </a>
          <a href="https://www.instagram.com/mursatsolutions?igsh=MW8zaWFsZG5rcm9vaQ==" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full bg-zinc-900/50 border border-zinc-800 grid place-items-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors" aria-label="Instagram">
            <Instagram className="size-5" />
          </a>
        </div>
        <div className="text-sm font-medium text-zinc-500">
          © {new Date().getFullYear()} MurSat Solutions. Boutique engineering.
        </div>
      </div>
    </footer>
  );
}
