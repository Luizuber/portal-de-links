import { Moon, Sun } from 'lucide-react';
import type { Theme } from "../hooks/useTheme";


interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-bg-main)] border-2 border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-primary-teal)] hover:scale-105 active:scale-95"
      aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-[var(--color-primary-dark)]" />
      ) : (
        <Sun className="w-5 h-5 text-[var(--color-primary-teal)]" />
      )}
    </button>
  );
}