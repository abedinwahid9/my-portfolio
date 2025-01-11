import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lg-primary": "#1E2132",
        "lg-secondary": "#3E5253",
        "lg-button": "#50AAB8",
        "lg-text": "#F5CEAF",
        "lg-link": "#E2B736",
        "dr-primary": "#E2B736",
        "dr-text": "#2A2A2A",
        "dr-button": "#1E88A8",
        "dr-link": "#D2A028",
      },
      fontFamily: {
        playfairDisplay: ["var(--font-playfairDisplay)"],
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
