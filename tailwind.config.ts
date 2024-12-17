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
        'mobile-gradient': 'url(/sm-bg.png)',
        'tablet-image': "url('/md-bg.png')",
        'desktop-image': "url('/lg-bg.png')",
        'lgt-image': "url('/lg-t-bg.png')",
        'mdt-image': "url('/mdt-bg.png')",
        'smt-image': "url('/smt-bg.png')",
      },

    },
  },
  plugins: [],
} satisfies Config;
