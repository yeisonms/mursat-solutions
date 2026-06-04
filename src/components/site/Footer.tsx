import { Github, Linkedin, Mail, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="size-8 rounded-lg neumo grid place-items-center">
            <Zap className="size-4 text-neon" />
          </span>
          MurSat Solutions
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:hola@mursat.dev" className="size-10 rounded-full neumo grid place-items-center hover:text-neon transition" aria-label="Email">
            <Mail className="size-4" />
          </a>
          <a href="#" className="size-10 rounded-full neumo grid place-items-center hover:text-neon transition" aria-label="LinkedIn">
            <Linkedin className="size-4" />
          </a>
          <a href="#" className="size-10 rounded-full neumo grid place-items-center hover:text-neon transition" aria-label="GitHub">
            <Github className="size-4" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MurSat Solutions. Boutique engineering.
        </div>
      </div>
    </footer>
  );
}
