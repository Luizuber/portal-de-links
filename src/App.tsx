import { AccessCard } from "./components/AccessCard";
import { AppBar } from "./components/AppBar";
import { useTheme } from "./hooks/useTheme";
import { PacManBackground } from "./components/PacManBackground";
import {
  Mail,
  Shield,
  Smartphone,
  Wifi,
  Printer,
  Building2,
  LogIn,
} from "lucide-react";

interface LinkItem {
  id: string;
  label: string;
  icon: typeof Mail;
  href: string;
  colorFrom: string;
  colorTo: string;
}

const accessLinks: LinkItem[] = [
  {
    id: "1",
    label: "Criação de e-mail",
    icon: Mail,
    href: "http://172.16.0.5/postfixadmin/list-virtual.php",
    colorFrom: "#3b82f6",
    colorTo: "#06b6d4",
  },
  {
    id: "2",
    label: "MailWatch",
    icon: Shield,
    href: "http://172.16.0.5/mailscanner/login.php",
    colorFrom: "#8b5cf6",
    colorTo: "#d946ef",
  },
  {
    id: "3",
    label: "Scalefusion",
    icon: Smartphone,
    href: "https://app.scalefusion.com/users/two_factor_authentication",
    colorFrom: "#10b981",
    colorTo: "#34d399",
  },
  {
    id: "4",
    label: "Controladora Unifi",
    icon: Wifi,
    href: "https://10.10.0.10:8443/manage/account/login?redirect=%2Fmanage",
    colorFrom: "#f97316",
    colorTo: "#fb923c",
  },
  {
    id: "5",
    label: "Suporte Impressora",
    icon: Printer,
    href: "https://h1.helyo.com.br/login",
    colorFrom: "#ec4899",
    colorTo: "#f472b6",
  },
  {
    id: "6",
    label: "Anbetec",
    icon: Building2,
    href: "https://inanbetec.com.br/#/auth/login",
    colorFrom: "#6366f1",
    colorTo: "#818cf8",
  },
  {
    id: "7",
    label: "Rede",
    icon: LogIn,
    href: "https://10.10.0.1/login",
    colorFrom: "#14b8a6",
    colorTo: "#2dd4bf",
  },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* BACKGROUND FIXO */}
      <PacManBackground />

      {/* APP BAR (TOPO) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <AppBar theme={theme} onToggleTheme={toggleTheme} />
      </div>

      {/* CARDS EM OVERLAY */}
      <main
        style={{
          position: "fixed",
          top: 72, // altura da AppBar
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 24,
          paddingRight: 24,
          pointerEvents: "auto",
        }}
      >
        <div style={{ width: "100%", maxWidth: 1300 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 32,
            }}
          >
            {accessLinks.map((link, index) => (
              <AccessCard
                key={link.id}
                label={link.label}
                icon={link.icon}
                href={link.href}
                colorFrom={link.colorFrom}
                colorTo={link.colorTo}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
