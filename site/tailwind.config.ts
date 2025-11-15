import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        korvex: {
          primary: "#3b82f6",
          secondary: "#6366f1",
          text: "#f3f4f6",
          highlight: "#fbbf24",
          danger: "#ef4444",
          purple: "#6366f1",
          info: "#06b6d4",
          background: "#0f172a",
          surface: "#1e293b",
          neutral: "#475569",
          muted: "#94a3b8",
          accent: "#60a5fa",
        },
      },
      boxShadow: {
        "korvex-card": "0 20px 40px -20px rgba(15, 23, 42, 0.5)",
        "korvex-glow": "0 0 30px rgba(59, 130, 246, 0.4)",
        "korvex-glow-strong": "0 0 50px rgba(59, 130, 246, 0.6)",
      },
      backgroundImage: {
        "korvex-primary":
          "linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(37,99,235,1) 100%)",
        "korvex-secondary":
          "linear-gradient(135deg, rgba(99,102,241,1) 0%, rgba(79,70,229,1) 100%)",
        "korvex-dark":
          "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;


