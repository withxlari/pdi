import { CircleCheck, Circle, Target } from "lucide-react";
import { Section } from "@/components/section";
import { metasEmAndamento, trajetoria } from "@/data/pdi";
import { cn } from "@/lib/utils";

export function Objetivo() {
  return (
    <Section
      id="objetivo"
      eyebrow="Trajetória"
      title="Objetivo de Carreira"
      description="Onde estou agora e onde quero chegar — minha evolução técnica e profissional planejada por etapas."
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <ol className="relative space-y-4 border-l border-border pl-8">
          {trajetoria.map((etapa) => (
            <li key={etapa.etapa} className="relative">
              <span className="absolute -left-[2.4rem] top-5 grid size-6 place-items-center rounded-full bg-background">
                {etapa.atual ? (
                  <CircleCheck className="size-5 text-primary" aria-hidden="true" />
                ) : (
                  <Circle className="size-5 text-muted-foreground/50" aria-hidden="true" />
                )}
              </span>

              <div
                className={cn(
                  "card-soft p-5",
                  etapa.atual && "border-primary/60 shadow-[var(--shadow-glow)]",
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                    {etapa.etapa}
                  </span>
                  {etapa.atual ? (
                    <span className="rounded-full bg-[image:var(--gradient-primary)] px-2.5 py-1 text-xs font-medium text-primary-foreground">
                      Atual
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold">{etapa.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{etapa.foco}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="card-soft h-fit p-6 lg:sticky lg:top-24">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold">
            <Target className="size-5 text-primary" aria-hidden="true" />
            Metas em andamento
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {metasEmAndamento.map((meta) => (
              <li key={meta} className="flex gap-2.5">
                <span className="mt-1.5 size-2 shrink-0 rotate-45 bg-primary" aria-hidden="true" />
                {meta}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
