import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2545",
          50: "#F4F6FA",
          100: "#E2E8F0",
          200: "#C3CFE0",
          400: "#335C81",
          500: "#1E3A5F",
          600: "#13315C",
          700: "#0B2545",
          800: "#081B36",
          900: "#051124",
        },
        gold: {
          DEFAULT: "#B8860B",
          50: "#FBF8EE",
          100: "#F5EBC9",
          200: "#E7D080",
          300: "#D4A24C",
          400: "#C49520",
          500: "#B8860B",
          600: "#8B6608",
          700: "#5C4505",
        },
        maroon: {
          DEFAULT: "#7F1D1D",
          50: "#FBF4F4",
          100: "#FECACA",
          200: "#FCA5A5",
          400: "#B91C1C",
          500: "#991B1B",
          600: "#7F1D1D",
          700: "#5C1818",
        },
        cream: {
          DEFAULT: "#FCFBF8",
          100: "#F5F2EA",
          200: "#EDE7D6",
        },
        ink: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        tag: "#8B7355",
        darkbg: {
          DEFAULT: "#0B1929",
          50: "#131F33",
          100: "#1A2D45",
          200: "#1E3A5F",
        },
      },
      fontFamily: {
        thai: [
          "var(--font-plex-thai)",
          "IBM Plex Sans Thai",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-plex-mono)", "IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        widest: "0.22em",
        wider: "0.18em",
        wide: "0.12em",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(11,37,69,.04)",
        DEFAULT: "0 2px 8px rgba(11,37,69,.06)",
        lg: "0 8px 24px rgba(11,37,69,.08)",
        xl: "0 20px 40px rgba(11,37,69,.10)",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
