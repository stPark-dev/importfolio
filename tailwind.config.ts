import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Dark Autumn 색상 팔레트
        autumn: {
          // 따뜻한 브라운 계열
          cream: "#D4C4B0",
          sand: "#C8AA88",
          camel: "#B89968",
          bronze: "#A67C52",
          chocolate: "#8B6239",
          espresso: "#6B4423",
          darkBrown: "#4A2C17",

          // 깊고 따뜻한 레드 계열
          coral: "#CD5C5C",
          brick: "#B22222",
          burgundy: "#800020",
          maroon: "#5D0000",
          wine: "#722F37",

          // 올리브/그린 계열
          sage: "#87A96B",
          olive: "#6B6B47",
          forest: "#2F4F2F",
          pine: "#1B3B1B",
          teal: "#2F5F5F",

          // 머스타드/골드 계열
          mustard: "#B89D2B",
          amber: "#B87333",
          rust: "#B7410E",
          terracotta: "#CC5500",

          // 자주/퍼플 계열
          plum: "#5D3A5A",
          eggplant: "#483248",

          // 네이비/블루 계열
          midnight: "#191970",
          navy: "#000080",
          prussian: "#003153",
        },

        // 기존 색상 유지
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
