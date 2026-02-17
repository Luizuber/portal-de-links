import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";


interface AccessCardProps {
  label: string;
  description: string;
  icon: LucideIcon;
  href: string;
  tooltipText?: string;
  popular?: boolean;
}

export function AccessCard({
  label,
  description,
  icon: Icon,
  href,
  tooltipText,
  popular,
}: AccessCardProps) {
  return (
    <div
      className="group"
      style={{
        background: "var(--card-bg)",
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
        height: "100%",
        minHeight: 280,
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = popular
          ? "0 20px 40px rgba(219, 39, 119, 0.15)"
          : "0 12px 24px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      {/* Popular Badge */}
      {popular && (
        <div
          style={{
            position: "absolute",
            top: -12,
            right: 12,
            background: "linear-gradient(135deg, #f472b6, #db2777)",
            color: "#ffffff",
            padding: "4px 12px",
            borderRadius: 20,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            boxShadow: "0 4px 12px rgba(219, 39, 119, 0.3)",
            zIndex: 20,
            transition: "all 0.3s ease",
          }}
        >
          POPULAR
        </div>
      )}



      {/* Help Icon / Tooltip */}
      {tooltipText && (
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 12,
            zIndex: 10,
          }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  style={{
                    cursor: "help",
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "2px solid #3b82f6",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(4px)",
                    transition: "all 0.3s ease",
                    color: "#3b82f6"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(59, 130, 246, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 700, lineHeight: 1 }}>?</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{tooltipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      {/* Icon */}
      <div style={{ color: "var(--primary)", marginTop: 8, position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
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
