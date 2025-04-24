/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: "'Playfair Display', serif",
            },
          },
        },
      }),
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add any other Tailwind plugins here
  ],
}