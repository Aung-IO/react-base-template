/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all files in src, including components and layout
    "./src/components/**/*.{js,ts,jsx,tsx}", // Specifically targets the components folder
    "./src/layout/**/*.{js,ts,jsx,tsx}", // Specifically targets the layout folder
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          hover: "#333B4B",
          DEFAULT: "#3B82F6", // Ensure DEFAULT is defined
          dark: "#1C2434",
          nav: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
