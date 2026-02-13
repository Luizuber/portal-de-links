import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface AccessCardProps {
  label: string;
  description: string;
  icon: LucideIcon;
  href: string;
  colorFrom: string; // Kept for interface compatibility but styles use theme vars
  colorTo: string;   // Kept for interface compatibility
  delay?: number;
}

export function AccessCard({
  label,
  description,
  icon: Icon,
  href,
}: AccessCardProps) {
  return (
    <div
      style={{
        background: "var(--card-bg)",
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        height: "100%",
        minHeight: 280,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      {/* Icon */}
      <div style={{ color: "var(--primary)", marginTop: 8 }}>
        <Icon size={48} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 18,
          fontWeight: 600,
          margin: "16px 0 0 0",
          color: "var(--text-primary)",
        }}
      >
        {label}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: "var(--text-secondary)",
          margin: "6px 0 24px 0",
          lineHeight: 1.5,
          flexGrow: 1,
        }}
      >
        {description}
      </p>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 24px",
          borderRadius: 24,
          background: "var(--primary)",
          color: "#fff",
          textDecoration: "none",
          fontSize: 14,
          fontWeight: 600,
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--primary-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--primary)";
        }}
      >
        Acessar
        <ChevronRight size={16} />
      </a>
    </div>
  );
}
