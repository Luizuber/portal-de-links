import { AccessCard } from "./components/AccessCard";
import { AppBar } from "./components/AppBar";
import { SectionHeader } from "./components/SectionHeader";
import { useTheme } from "./hooks/useTheme";
import {
  Mail,
  Shield,
  Smartphone,
  Wifi,
  Printer,
  LogIn,
} from "lucide-react";

interface LinkItem {
  id: string;
  label: string;
  description: string;
  icon: any;
  href: string;
  category: "sistemas" | "rh" | "ti" | "comunicacao";
}

const accessLinks: LinkItem[] = [
  {
    id: "3",
    label: "Criação de e-mail",
    description: "Portal de gerenciamento e criação de novas contas de e-mail.",
    icon: Mail,
    href: "http://172.16.0.5/postfixadmin/list-virtual.php",
    category: "ti",
  },
  {
    id: "4",
    label: "MailWatch",
    description: "Monitoramento e segurança de tráfego de e-mails.",
    icon: Shield,
    href: "http://172.16.0.5/mailscanner/login.php",
    category: "ti",
  },
  {
    id: "5",
    label: "Scalefusion",
    description: "Gerenciamento de dispositivos móveis (MDM).",
    icon: Smartphone,
    href: "https://app.scalefusion.com/users/two_factor_authentication",
    category: "ti",
  },
  {
    id: "6",
    label: "Controladora Unifi",
    description: "Gestão da infraestrutura de rede Wi-Fi corporativa.",
    icon: Wifi,
    href: "https://10.10.0.10:8443/manage/account/login?redirect=%2Fmanage",
    category: "ti",
  },
  {
    id: "7",
    label: "Suporte Impressora",
    icon: Printer,
    description: "Abertura de chamados e suporte técnico para impressoras.",
    href: "https://h1.helyo.com.br/login",
    category: "ti",
  },
  {
    id: "9",
    label: "FireWall",
    description: "Acesso administrativo ao firewall de rede.",
    icon: LogIn,
    href: "https://10.10.0.1/login",
    category: "ti",
  },
];

const sections = [
  { id: "ti", title: "Tecnologia da Informação", icon: Shield },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* HEADER */}
      <AppBar theme={theme} onToggleTheme={toggleTheme} />

      {/* CONTENT */}
      <main
        style={{
          flex: 1,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          padding: "24px 24px 80px 24px",
        }}
      >
        {sections.map((section) => {
          const sectionLinks = accessLinks.filter(l => l.category === section.id);
          if (sectionLinks.length === 0) return null;

          return (
            <section key={section.id}>
              <SectionHeader title={section.title} icon={section.icon} />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 32,
                }}
              >
                {sectionLinks.map((link) => (
                  <AccessCard
                    key={link.id}
                    label={link.label}
                    description={link.description}
                    icon={link.icon}
                    href={link.href}
                    colorFrom="#000" // Not used but kept for props
                    colorTo="#000"   // Not used but kept for props
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* FOOTER (Optional clean footer) */}
      <footer style={{ padding: 40, textAlign: "center", color: "var(--text-secondary)", fontSize: 13 }}>
        © {new Date().getFullYear()} Dequech - Todos os direitos reservados.
      </footer>
    </div>
  );
}
