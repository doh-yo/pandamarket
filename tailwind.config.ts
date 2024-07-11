import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const createPxRange = (max: number) => {
  const result: { [key: string]: string } = {};
  for (let i = 0; i <= max; i++) {
    result[`${i}px`] = `${i}px`;
  }
  return result;
};

const px0_10 = createPxRange(10);
const px0_100 = createPxRange(100);
const px0_200 = createPxRange(200);
const px0_500 = createPxRange(500);

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
        gray40: "#a4a1aa",
        gray30: "#cbc9cf",
        gray10: "#dfdfdf",
        red40: "#FF4040",
        blue10: "#E6F2FF",
      },
      borderWidth: px0_10,
      fontSize: px0_100,
      spacing: px0_200,
      borderRadius: px0_100,
      width: px0_500,
      height: px0_500,
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
        ".container-base": {
          display: "flex",
          "flex-direction": "column",
          padding: "16px",
        },
      });
    },
  ],
};

export default config;
