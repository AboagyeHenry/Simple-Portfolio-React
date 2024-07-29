/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        "200px": "200px",
        // "88%":"88%"
     }
   }
  },
  plugins: [],
};
