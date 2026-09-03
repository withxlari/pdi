import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { perfil } from "@/data/pdi";

const navItems = [
  { label: "Sobre", to: "/" },
  { label: "Objetivo", to: "/objetivo" },
  { label: "Metas", to: "/metas" },
  { label: "Contribuições", to: "/contribuicoes" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "Soft Skills", to: "/soft-skills" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5">
        <Link to="/" className="flex min-h-0 items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="size-8 shrink-0 object-contain"
          />
          <span className="truncate font-display text-sm font-bold tracking-tight sm:text-base">
            {perfil.nomeCompleto} — PDI
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-[image:var(--gradient-primary)] font-medium text-primary-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:bg-secondary hover:text-foreground" }}
              className="rounded-full px-3 py-1.5 text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto lg:ml-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}