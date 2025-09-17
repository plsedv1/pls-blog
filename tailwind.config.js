// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,vue,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      /* ========== FONTS ========== */
      fontFamily: {
        // Standard-Text
        sans: [
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        // Überschriften
        heading: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        // Display/Logo
        display: ["Michroma", "Poppins", "Open Sans", "Arial", "sans-serif"],
      },

      /* ========== FARBEN ========== */
      colors: {
        // Brand / Akzent
        primary: "#2ea3f2",
        highlight: "#ff8147",

        // Neutrals / Dark UI
        ink: "#222222",
        ink2: "#1f1f1f",
        ink3: "#171717",
        slate3: "#333333",
        slate4: "#20292f",
        slate5: "#0f172a",

        // Text & Muted
        muted: "#969696",
        gray6: "#666666",

        // Alphas
        overlay: "#00000052",
        glass: "#ffffffb8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // << für Absätze/Listen/Headings (prose/prose-invert)

    // Mobile: 18px Body-Text; ab md (>=768px) zurück auf 16px
    function ({ addBase, theme }) {
      addBase({
        body: { fontSize: "18px" },
      });
      addBase({
        [`@media (min-width: ${theme("screens.md")})`]: {
          body: { fontSize: "16px" },
        },
      });
    },
  ],
};
