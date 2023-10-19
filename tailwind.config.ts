import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#C8EE44',
        secondary: '#29A073',
        light: {
          100: '#929EAE',
          200: '#78778B',
          300: '#1B212D',
        },
        dark: {
          100: '#282541',
          200: '#1C1A2E',
        },
      },
    },
  },
  plugins: [],
};
export default config
