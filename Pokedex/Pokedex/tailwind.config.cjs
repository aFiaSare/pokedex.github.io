/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
        160: "40rem",
        200: "50rem",
        "0/100": "0%",
        "5/100": "5%",
        "10/100": "10%",
        "15/100": "15%",
        "20/100": "20%",
        "25/100": "25%",
        "30/100": "30%",
        "35/100": "35%",
        "40/100": "40%",
        "45/100": "45%",
        "50/100": "50%",
        "55/100": "55%",
        "60/100": "60%",
        "65/100": "65%",
        "70/100": "70%",
        "75/100": "75%",
        "80/100": "80%",
        "85/100": "85%",
        "90/100": "90%",
        "95/100": "95%",
        "100/100": "100%",
      },
      height: {
        128: "32rem",
        160: "40rem",
        200: "50rem",
      },
      backgroundImage: () => ({
        "img-fondo": "url('/src/assets/imagenes/fondopaisaje.jpg')",
        "img-pokebola": "url('/src/assets/imagenes/iconoPokebola.png')",
        "img-pokebolaopen": "url('/src/assets/imagenes/pokebola-open.png')",
      }),
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        anipoke: {
          "0%, 50%": { transform: "scale(1.1)" },
          "0%, 100%": { transform: "scale(1)" },
        },
        next: {
          "0%, 100%": { transform: "translateX(-50px)", opacity: 0.5 },
          // "0%, 100%": { transform: "translateX(0px)", opacity: 1 },
        },
        pulselow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.9 },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        anipoke: "anipoke 1s ease-in infinite",
        spinlow: "spin 10s linear infinite",
        next: "next 10s ease-in infinite",
        pulselow: "pulselow 2s ease-in infinite",
      },
    },
  },
  plugins: [],
};
