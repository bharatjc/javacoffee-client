/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-1": "fade-in 1s ease-in-out forwards 0.5s",
        "fade-in-2": "fade-in 1s ease-in-out forwards 1.5s",
        "fade-in-3": "fade-in 1s ease-in-out forwards 2.5s",
        // Add more animations as needed
      },
    },
  },
  plugins: [],
};
