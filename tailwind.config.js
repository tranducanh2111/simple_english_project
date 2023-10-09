/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page-sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-section": "linear-gradient(to right bottom, rgb(0, 0, 0, 0.60), rgb(0, 0, 0, 0.60)),url(/contact-section.jpg)"
      },
      fontSize: {
        h1: [
          '38px',
          {
            lineHeight: '46px',
            fontWeight: '500',
          },
        ],
        h2: [
          '30px',
          {
            lineHeight: '40px',
            fontWeight: '500',
          },
        ],
        h3: [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '500',
          },
        ],
        h4: [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: '500',
          },
        ],
        h5: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '500',
          },
        ],
        body: [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: '400',
          },
        ],
        footnote: [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        primary: "#FF6D33",
        secondary: "#E6E6E6",
        "light-grey": '#687076',
        subtitle: "#00000073",
        grey: "rgba(0, 0, 0, 0.45)",
      },
      borderRadius: {
        'inner-border-radius': 'calc(10px - 8px)',
      },
    },
  },
  plugins: [],
})
