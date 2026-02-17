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
  Calendar,
  FlaskConical,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

interface LinkItem {
  id: string;
  label: string;
  description: string;
  icon: any;
  href: string;
  category: "emails" | "coletores" | "ti";
  tooltipText?: string;
  popular?: boolean;
}

const accessLinks: LinkItem[] = [
  {
    id: "3",
    label: "Criação de e-mail",
    description: "Portal de gerenciamento e criação de novas contas de e-mail.",
    icon: Mail,
    href: "http://172.16.0.5/postfixadmin/list-virtual.php",
    category: "emails",
    tooltipText: "Gerencie contas de e-mail corporativo",
    popular: true,
  },
  {
    id: "4",
    label: "MailWatch",
    description: "Monitoramento e segurança de tráfego de e-mails.",
    icon: Shield,
    href: "http://172.16.0.5/mailscanner/login.php",
    category: "emails",
    tooltipText: "Monitore o fluxo de e-mails e segurança",
    popular: true,
  },
  {
    id: "5",
    label: "Scalefusion",
    description: "Gerenciamento de dispositivos móveis (MDM).",
    icon: Smartphone,
    href: "https://app.scalefusion.com/users/two_factor_authentication",
    category: "coletores",
    tooltipText: "Gerencie dispositivos móveis da empresa",
    popular: true,
  },
  {
    id: "6",
    label: "Controladora Unifi",
    description: "Gestão da infraestrutura de rede Wi-Fi corporativa.",
    icon: Wifi,
    href: "https://10.10.0.10:8443/manage/account/login?redirect=%2Fmanage",
    category: "ti",
    tooltipText: "Gerencie a rede Wi-Fi corporativa",
  },
  {
    id: "7",
    label: "Suporte Impressora",
    icon: Printer,
    description: "Abertura de chamados e suporte técnico para impressoras.",
    href: "https://h1.helyo.com.br/login",
    category: "ti",
    tooltipText: "Abra chamados para suporte de impressoras",
  },
  {
    id: "9",
    label: "FireWall",
    description: "Acesso administrativo ao firewall de rede.",
    icon: LogIn,
    href: "https://10.10.0.1/login",
    category: "ti",
    tooltipText: "Acesse o painel administrativo do firewall",
  },
  {
    id: "10",
    label: "Reserva Equipamentos",
    description: "Sistema para agendamento e reserva de equipamentos.",
    icon: Calendar,
    href: "http://reservas.ddequech.com.br/admin",
    category: "ti",
    tooltipText: "Gerencie reservas de equipamentos e salas",
  },
  {
    id: "11",
    label: "Testes RCAS",
    description: "Ambiente de testes para validação de sistemas RCAS.",
    icon: FlaskConical,
    href: "https://fv.ddequech.com.br/fvteste/seguranca.wplogin.aspx",
    category: "ti",
    tooltipText: "Acesse o ambiente de testes e homologação",
  },
  {
    id: "12",
    label: "Anbetec",
    description: "Gestão de benefícios e convênios corporativos.",
    icon: CreditCard,
    href: "https://inanbetec.com.br/#/auth/login",
    category: "coletores",
    tooltipText: "Acesse o portal de benefícios Inanbetec",
  },
];

const sections = [
  { id: "coletores", title: "Aparelho coletores", icon: Smartphone },
  { id: "emails", title: "Gerenciador de E-mails", icon: Mail },
  { id: "ti", title: "Tecnologia Da Informação", icon: Shield },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLinks = accessLinks
    .filter((link) => {
      const term = searchTerm.toLowerCase();
      return (
        link.label.toLowerCase().includes(term) ||
        link.description.toLowerCase().includes(term)
      );
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* HEADER */}
      <AppBar
        theme={theme}
        onToggleTheme={toggleTheme}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

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
          const sectionLinks = filteredLinks.filter(l => l.category === section.id);
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
                    tooltipText={link.tooltipText}
                    popular={link.popular}
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
