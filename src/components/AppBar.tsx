interface AppBarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function AppBar({ theme, onToggleTheme }: AppBarProps) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 72,
        background: "linear-gradient(135deg, #2563eb, #1e40af)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        color: "#fff",
        zIndex: 100,
        boxShadow: "0 10px 30px rgba(37,99,235,0.4)",
      }}
    >
      {/* LOGO / TÍTULO */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "#1F4FD8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          PL
        </div>

        <div>
          <div
            style={{
              fontFamily:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Portal de Links
          </div>
          <div style={{ fontSize: 12, opacity: 0.85 }}>
          </div>
        </div>
      </div>

      {/* BOTÃO TEMA */}
      <button
        onClick={onToggleTheme}
        style={{
          background: "rgba(255,255,255,0.18)",
          border: "none",
          borderRadius: 999,
          padding: "8px 16px",
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          backdropFilter: "blur(8px)",
        }}
      >
        {theme === "dark" ? "🌙 Escuro" : "☀️ Claro"}
      </button>
    </header>
  );
}
