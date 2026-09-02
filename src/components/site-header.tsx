import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { perfil } from "@/data/pdi";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Objetivo", href: "#objetivo" },
  { label: "Metas", href: "#metas" },
  { label: "Contribuições", href: "#contribuicoes" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Soft Skills", href: "#soft-skills" },
];

export function SiteHeader() {
  const [active, setActive] = useState("#sobre");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5">
        <a href="#sobre" className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-sm font-bold text-primary-foreground">
            {perfil.primeiroNome.charAt(0)}
          </span>
          <span className="truncate font-display text-sm font-bold tracking-tight sm:text-base">
            {perfil.nomeCompleto} — Plano de Desenvolvimento Individual
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                active === item.href
                  ? "bg-[image:var(--gradient-primary)] font-medium text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto lg:ml-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
