import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    icon: LucideIcon;
}

export function SectionHeader({ title, icon: Icon }: SectionHeaderProps) {
    return (
        <div style={{ marginBottom: 32, marginTop: 48 }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                }}
            >
                <div style={{ color: "var(--primary)" }}>
                    <Icon size={28} />
                </div>
                <h2
                    style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        margin: 0,
                    }}
                >
                    {title}
                </h2>
            </div>
            <div
                style={{
                    height: 3,
                    width: "100%",
                    background: "#e2e8f0",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: 80,
                        background: "var(--primary)",
                    }}
                />
            </div>
        </div>
    );
}
