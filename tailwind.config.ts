import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003CA3',
        primaryBlur: '#548def9d',
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem"
        }
      },
      backgroundImage: {
        'hero': "url('../../public/heroBg.png')",
        'measure': "url('../../public/Categories.png')",
        'med': "url('../../public/Categories2.png')",
        'fourToFour': "url('../../public/FourNullFour.png')",
      },
      fontFamily: {
        'body': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
