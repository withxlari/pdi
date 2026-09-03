import { Github, Linkedin } from "lucide-react";
import { perfil } from "@/data/pdi";

export function SiteFooter() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row">
        <p className="text-sm font-medium text-muted-foreground">
          © {anoAtual} {perfil.nomeCompleto} — PDI pessoal · Última atualização: {perfil.ultimaAtualizacao}
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href={perfil.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Acessar GitHub"
          >
            <Github className="size-5" strokeWidth={1.5} />
          </a>
          <a
            href={perfil.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Acessar LinkedIn"
          >
            <Linkedin className="size-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}