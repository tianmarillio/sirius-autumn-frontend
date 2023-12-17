import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        primary: {
          // light: '#63b3ed',
          DEFAULT: '#d1fae5',
          // dark: '#2c5282',
        },
        secondary: {
          // light: '#fbd38d',
          DEFAULT: '#047857',
          // dark: '#b7791f',
        },
        accent: {
          DEFAULT: '#fcd34d',
        },
        // success: '#48bb78',
        // error: '#f56565',
        // warning: '#ed8936',
        // neutral: {
        //   light: '#f7fafc',
        //   DEFAULT: '#edf2f7',
        //   dark: '#1a202c',
        // },
      },
    },
  },
  plugins: [],
};
export default config;
