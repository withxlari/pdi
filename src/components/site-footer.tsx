import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      id="contato"
      className="border-t border-border/60 bg-secondary/40 px-5 py-10 text-sm text-muted-foreground"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-1.5">
          Feito com <Heart className="size-3.5 text-primary" aria-hidden="true" /> e muito café por
          Larissa Vitória
        </p>
        <p className="font-mono text-xs">{"// psiu: tem segredos escondidos por aqui"}</p>
      </div>
    </footer>
  );
}
