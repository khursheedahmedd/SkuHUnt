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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-gradient': 'linear-gradient(to bottom left, #c3dafe, #ffffff, #c3dafe)',
        'tablet-image': "url('/md-bg.png')",
        'desktop-image': "url('/lg-bg.png')",
      },

    },
  },
  plugins: [],
} satisfies Config;
