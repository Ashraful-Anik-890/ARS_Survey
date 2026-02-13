import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4CAF50", // Emerald Green
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#9DD666", // Lime Punch
                    foreground: "#0F1C0F",
                },
                background: {
                    DEFAULT: "#F4F9F4", // Light mode bg
                    dark: "#0F1C0F",    // Dark mode bg
                },
                surface: {
                    light: "rgba(255, 255, 255, 0.7)",
                    dark: "rgba(26, 50, 26, 0.6)",
                },
                forest: {
                    DEFAULT: "#1A321A", // Deep Forest
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
};
export default config;
