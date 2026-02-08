export type Video = {
    id: string;
    youtube_id: string;
    title_editorial: string;
    summary_editorial: string;
    category: "Infrastructure" | "Agents" | "Vibecoding";
    channel_name: string;
    views: string;
    duration: string;
    published_at: string;
};

export const VIDEOS: Video[] = [
    {
        id: "1",
        youtube_id: "eZcpO_pd61Q",
        title_editorial: "Comment Automatiser N'IMPORTE Quelle Entreprise Avec l'IA",
        summary_editorial: "Yassine Sdiri présente cinq méthodes concrètes pour intégrer l'intelligence artificielle dans une entreprise, de l'audit à l'automatisation complète.",
        category: "Agents",
        channel_name: "Yassine Sdiri",
        views: "18k",
        duration: "15:42",
        published_at: "2026-02-01"
    },
    {
        id: "2",
        youtube_id: "Fkfv96HdpPA",
        title_editorial: "Le Guide Google Antigravity ULTIME en 2026 !",
        summary_editorial: "Découvrez comment utiliser Google Antigravity pour développer des applications sans coder. La méthode complète pour créer des infrastructures IA.",
        category: "Vibecoding",
        channel_name: "Baptiste Simard - IA",
        views: "7.2k",
        duration: "45:10",
        published_at: "2026-01-29"
    },
    {
        id: "3",
        youtube_id: "dJjlHyb7jLg",
        title_editorial: "OpenClaw + Kimi K2.5 : L'IA Super-Puissante & Gratuite",
        summary_editorial: "Installez OpenClaw et Kimi K2.5 pour créer un assistant IA performant à une fraction du coût. Réduisez vos factures IA de 96%.",
        category: "Agents",
        channel_name: "MechaPizzAI",
        views: "2k",
        duration: "12:15",
        published_at: "2026-02-06"
    },
    {
        id: "4",
        youtube_id: "hqNDkIoxstM",
        title_editorial: "CLAUDE CODE : De DÉBUTANT à PRO en 4h30",
        summary_editorial: "Masterclass complète pour maîtriser Cloud Code. Apprenez à créer des applications et des agents IA, même sans expérience en programmation.",
        category: "Vibecoding",
        channel_name: "Naier Saidane",
        views: "25k",
        duration: "4:30:00",
        published_at: "2026-01-11"
    },
    {
        id: "5",
        youtube_id: "rVfoF5Uz4ic",
        title_editorial: "Pourquoi j'ai abandonné Cursor pour Google AntiGravity",
        summary_editorial: "Etienne Tillier explique son passage de Cursor à Google AntiGravity, en soulignant les avantages pour le développement et le design.",
        category: "Vibecoding",
        channel_name: "Etienne Tillier",
        views: "2k",
        duration: "18:20",
        published_at: "2026-02-03"
    },
    {
        id: "6",
        youtube_id: "CMMclQq54hA",
        title_editorial: "5 Business pour gagner +5000€/mois en 2026 !",
        summary_editorial: "Passez à l'action et construisez des infrastructures IA. Découvrez 5 modèles de business rentables basés sur l'intelligence artificielle.",
        category: "Infrastructure",
        channel_name: "Baptiste Simard - IA",
        views: "812",
        duration: "22:05",
        published_at: "2026-02-05"
    }
];
