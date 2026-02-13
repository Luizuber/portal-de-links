import { Moon, Sun, Search } from "lucide-react";

interface AppBarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function AppBar({ theme, onToggleTheme }: AppBarProps) {
  return (
    <header
      style={{
        height: 140,
        display: "flex",
        flexDirection: "column",
        background: "var(--primary)",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 100,
      }}
    >
      {/* Row 1: Logo and Theme Toggle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          height: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: "#fff" }}>Dequech</span>
          <span style={{ fontSize: 24, fontWeight: 600, color: "#facc15" }}>Portal de Links</span>
        </div>

        <button
          onClick={onToggleTheme}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(0,0,0,0.2)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 500,
            transition: "all 0.2s ease",
          }}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          Modo {theme === "dark" ? "Claro" : "Escuro"}
        </button>
      </div>

      {/* Row 2: Search Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 40px 20px 40px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 600,
          }}
        >
          <Search
            size={18}
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#94a3b8",
            }}
          />
          <input
            type="text"
            placeholder="Buscar por nome ou descrição..."
            style={{
              width: "100%",
              height: 44,
              padding: "0 20px 0 52px",
              borderRadius: 40,
              border: "none",
              background: "#fff",
              fontSize: 15,
              color: "#2c3e50",
              outline: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>
    </header>
  );
}
