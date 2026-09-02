import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { Section } from "@/components/section";
import { eventos } from "@/data/pdi";

export function Eventos() {
  return (
    <Section
      id="eventos"
      eyebrow="Comunidade"
      title="Eventos e Participações"
      description="Conferências, workshops e meetups que participei para me manter atualizada e conectada com a comunidade tech."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {eventos.map((evento) => (
          <article key={evento.titulo} className="card-soft flex flex-col overflow-hidden">
            <div className="relative h-36 bg-[image:var(--gradient-surface)] bg-secondary/60">
              <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                {evento.tipo}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-lg font-bold leading-snug">{evento.titulo}</h3>
              <p className="text-sm text-muted-foreground">{evento.descricao}</p>

              <div className="space-y-1.5 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-primary" aria-hidden="true" />
                  {evento.data}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {evento.local}
                </p>
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {evento.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {evento.link ? (
                <a
                  href={evento.link}
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary hover:underline"
                >
                  Saiba mais
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
