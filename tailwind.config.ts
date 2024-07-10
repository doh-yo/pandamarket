import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        pc: { min: "1200px" },
        tablet: { min: "768px", max: "1199px" },
      },
      colors: {
        primary: "#3692ff",
        gray900: "#111827",
        gray800: "#1f2937",
        gray700: "#374151",
        gray600: "#4b5563",
        gray500: "#6b7280",
        gray400: "#9ca3af",
        gray200: "#e5e7eb",
        gray100: "#f3f4f6",
        gray50: "#f9fafb",
        gray10: "#dfdfdf",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
    },
  ],
};

export default config;
