import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="soft"
      size="icon"
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={toggleTheme}
      className="rounded-full"
    >
      <Sun className="size-4 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
