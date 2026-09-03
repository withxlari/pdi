import { useState } from "react";
import { CheckCircle2, Clock, Target, Code2, Server, Cloud } from "lucide-react";
import { Section } from "@/components/section";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { metas, type StatusMeta } from "@/data/pdi";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Server,
  Cloud,
};

export function Metas() {
  const [filtro, setFiltro] = useState<StatusMeta | "todos">("todos");

  const metasFiltradas = metas.filter((m) => filtro === "todos" || m.status === filtro);
  const total = metas.length;
  const emProgresso = metas.filter((m) => m.status === "progresso").length;
  const concluidas = metas.filter((m) => m.status === "concluido").length;

  return (
    <Section
      id="metas"
      eyebrow="Planejamento"
      title="Metas"
      description="Objetivos técnicos definidos com prioridades e status de progresso para manter meu desenvolvimento focado."
    >
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="card-soft flex items-center gap-4 p-5">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <Target className="size-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total de Metas</p>
            <p className="font-display text-3xl font-bold">{total}</p>
          </div>
        </div>
        <div className="card-soft flex items-center gap-4 p-5">
          <div className="rounded-full bg-blue-500/10 p-3 text-blue-500">
            <Clock className="size-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Em Progresso</p>
            <p className="font-display text-3xl font-bold">{emProgresso}</p>
          </div>
        </div>
        <div className="card-soft flex items-center gap-4 p-5">
          <div className="rounded-full bg-emerald-500/10 p-3 text-emerald-500">
            <CheckCircle2 className="size-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Concluídas</p>
            <p className="font-display text-3xl font-bold">{concluidas}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {(["todos", "planejado", "progresso", "concluido"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors",
              filtro === f
                ? "bg-primary text-primary-foreground shadow"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {f === "progresso" ? "Em progresso" : f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {metasFiltradas.map((meta) => {
          const IconComponent = iconMap[meta.icone] || Target;

          return (
            <article key={meta.titulo} className="card-soft flex flex-col p-5">
              <div className="mb-4 flex items-start gap-3">
                <div className="shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                  <IconComponent className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold leading-tight">{meta.titulo}</h3>
                  <p className="mt-0.5 text-xs font-medium text-muted-foreground">{meta.categoria}</p>
                </div>
              </div>
              
              <p className="mb-6 text-sm text-muted-foreground">{meta.descricao}</p>
              
              <div className="mt-auto space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span>{meta.progresso}% concluído</span>
                  </div>
                  <Progress value={meta.progresso} className="h-2" />
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <Badge variant={meta.prioridade === "Alta" ? "destructive" : "secondary"}>
                      {meta.prioridade}
                    </Badge>
                    <Badge variant={meta.status === "concluido" ? "default" : "outline"} className="capitalize">
                      {meta.status === "progresso" ? "Em progresso" : meta.status}
                    </Badge>
                  </div>
                  
                  {meta.status === "concluido" && (
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-500">
                      <CheckCircle2 className="size-3.5" /> Meta concluída
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}