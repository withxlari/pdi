import { useState } from "react";
import { ExternalLink, Server, Sprout, HardHat, Code2 } from "lucide-react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { contribuicoes, categoriasContribuicao } from "@/data/pdi";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Sprout,
  HardHat,
  Code2,
};

export function Contribuicoes() {
  const [filtro, setFiltro] = useState<string>("Todas");

  const filtradas = contribuicoes.filter(
    (c) => filtro === "Todas" || c.categoria === filtro
  );

  return (
    <Section
      id="contribuicoes"
      eyebrow="Projetos & Estudos"
      title="Contribuições"
      description="Coleção de projetos, estudos e participações práticas que constroem minha jornada."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {["Todas", ...categoriasContribuicao].map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              filtro === cat
                ? "bg-primary text-primary-foreground shadow"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtradas.map((item) => {
          const IconComponent = iconMap[item.icone] || Code2;

          return (
            <article key={item.titulo} className="card-soft flex flex-col p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 rounded-lg bg-primary/10 p-2.5 text-primary">
                    <IconComponent className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold leading-tight">{item.titulo}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{item.categoria}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="shrink-0 text-[10px] uppercase tracking-wider">
                  {item.situacao}
                </Badge>
              </div>
              
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{item.descricao}</p>
              
              <div className="mt-auto space-y-5">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2 border-t border-border pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Impactos</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {item.impactos.map((impacto, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {impacto}
                      </li>
                    ))}
                  </ul>
                </div>

                {item.link ? (
                  <div className="pt-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Acessar projeto
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}