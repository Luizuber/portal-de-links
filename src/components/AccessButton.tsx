import type { LucideIcon } from "lucide-react";

interface AccessButtonProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

export function AccessButton({ label, icon: Icon, href }: AccessButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 px-6 py-5 bg-white border-2 border-[var(--color-border)] rounded-xl transition-all duration-300 hover:border-[var(--color-primary-teal)] hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-primary-dark)] text-white transition-all duration-300 group-hover:bg-[var(--color-primary-teal)] group-hover:scale-110">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-[var(--color-text-dark)] transition-colors duration-300 group-hover:text-[var(--color-primary-dark)]">
        {label}
      </span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-primary-teal)] to-[var(--color-primary-light)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </a>
  );
}
