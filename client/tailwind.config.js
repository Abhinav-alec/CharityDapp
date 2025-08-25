module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(40px, -60px) scale(1.1)" },
          "50%": { transform: "translate(0, 20px) scale(1)" },
          "75%": { transform: "translate(-30px, 40px) scale(0.9)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        blob: "blob 15s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
