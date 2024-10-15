/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fond": "#1a1a1a",
        "fond-footer": "#131313",
        "blanc": "#ffffff",
        "gris-clair": "#c4c4c4",
        "gris-fonce": "#949494"
      },
      fontSize: {
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "3.5rem",
        "3xl": "4rem",
        "4xl": "4.5rem"
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        rubik: ["Rubik", "sans-serif"]
      },
      borderRadius: {
        "rounded-0": "0rem",
        "rounded-1": "0.1696rem",
        "rounded-2": "0.3125rem",
        "rounded-3": "0.5654rem",
        "rounded-4": "0.8125rem",
        "rounded-5": "1rem",
        "rounded-6": "1.875rem",
        "rounded-7": "2.03125rem",
        "rounded-8": "2.1875rem",
        "rounded-9": "2.9375rem",
        "rounded-10": "3.125rem",
        "rounded-11": "5.0889rem",
        "rounded-12": "62.4375rem"
      }
    },
  },
  plugins: [],
}