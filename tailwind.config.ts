import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: "#202814",
          light: "#2E3A1E",
        },
        brown: {
          DEFAULT: "#3A281C",
        },
        cream: {
          DEFAULT: "#F8F0E3",
        },
        beige: {
          DEFAULT: "#EDE0CD",
        },
        gold: {
          DEFAULT: "#B89A61",
          light: "#CBB483",
          dark: "#9C8049",
        },
        ink: {
          DEFAULT: "#211A14",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        arch: "999px 999px 12px 12px",
      },
      boxShadow: {
        soft: "0 12px 32px -16px rgba(32, 40, 20, 0.25)",
        card: "0 8px 24px -12px rgba(32, 40, 20, 0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        toastIn: {
          "0%": { opacity: "0", transform: "translateY(12px) translateX(-50%)" },
          "100%": { opacity: "1", transform: "translateY(0) translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        fadeIn: "fadeIn 0.9s ease-out both",
        toastIn: "toastIn 0.3s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
