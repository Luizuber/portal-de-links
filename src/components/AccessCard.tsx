import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface AccessCardProps {
  label: string;
  icon: LucideIcon;
  href: string;
  colorFrom: string;
  colorTo: string;
  delay?: number;
}

export function AccessCard({
  label,
  icon: Icon,
  href,
  colorFrom,
  colorTo,
  delay = 0,
}: AccessCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.06, y: -6 }}
      whileTap={{ scale: 0.97 }}
      style={{ textDecoration: "none", width: 260 }}
    >
      <div
        style={{
          position: "relative",
          height: 260,
          borderRadius: 28,
          padding: 24,
          background: "var(--surface)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          overflow: "hidden",
          color: "var(--text)",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            inset: -40,
            background: `radial-gradient(circle at top, ${colorFrom}55, transparent 60%)`,
          }}
        />

        {/* ÍCONE */}
        <div
          style={{
            width: 92,
            height: 92,
            borderRadius: 26,
            background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            boxShadow: `0 14px 34px ${colorFrom}66`,
            zIndex: 1,
          }}
        >
          <Icon size={44} strokeWidth={2.2} />
        </div>

        {/* TEXTO */}
        <div
          style={{
            fontSize: 15.5,
            fontWeight: 600,
            letterSpacing: "-0.015em",
            textAlign: "center",
            lineHeight: 1.25,
            zIndex: 1,
          }}
        >
          {label}
        </div>

        {/* BARRA */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
          }}
        />
      </div>
    </motion.a>
  );
}
