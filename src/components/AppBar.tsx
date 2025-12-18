import { Moon, Sun } from "lucide-react";

interface AppBarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function AppBar({ theme, onToggleTheme }: AppBarProps) {
  return (
    <header
      style={{
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "relative",

        background:
          theme === "dark"
            ? "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(15,23,42,0.65))"
            : "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",

        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",

        borderBottom:
          theme === "dark"
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(0,0,0,0.08)",

        boxShadow:
          theme === "dark"
            ? "0 10px 30px rgba(0,0,0,0.35)"
            : "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      {/* ESQUERDA — LOGO + TEXTO */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* LOGO */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "linear-gradient(135deg, #22d3ee, #3b82f6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 800,
            boxShadow: "0 0 20px rgba(34,211,238,0.7)",
            fontSize: 14,
          }}
        >
          ⚡
        </div>

        {/* TEXTO PIKA */}
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            background:
              "linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              theme === "dark"
                ? "0 0 12px rgba(59,130,246,0.6)"
                : "none",
          }}
        >
          links fodas
        </span>
      </div>

      {/* DIREITA — TEMA */}
      <button
        onClick={onToggleTheme}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderRadius: 999,
          border: "none",
          cursor: "pointer",

          background:
            theme === "dark"
              ? "rgba(255,255,255,0.08)"
              : "rgba(0,0,0,0.06)",

          color: "inherit",
          fontSize: 14,
          fontWeight: 500,
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            theme === "dark"
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            theme === "dark"
              ? "rgba(255,255,255,0.08)"
              : "rgba(0,0,0,0.06)";
        }}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        {theme === "dark" ? "Claro" : "Escuro"}
      </button>

      {/* LINHA NEON */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #22d3ee, #3b82f6, #a855f7, transparent)",
          opacity: 0.7,
        }}
      />
    </header>
  );
}
