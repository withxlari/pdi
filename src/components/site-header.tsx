import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Radar", href: "#radar" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5">
        <Link to="/" className="font-display text-base font-bold tracking-tight">
          larissa<span className="text-gradient">.dev</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
