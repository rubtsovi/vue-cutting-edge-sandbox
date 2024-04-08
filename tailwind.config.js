import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
      fontSize: {
        sm: '0.8125rem',
        base: '1rem',
        md: '1.125rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '3.5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        DEFAULT: '0 4px 4px rgba(33, 33, 33, 0.04), 0 4px 8px rgba(33, 33, 33, 0.08)',
        hover: '0 4px 4px rgba(33, 33, 33, 0.04), 0 4px 24px rgba(33, 33, 33, 0.16)',
        active: '0 4px 4px rgba(33, 33, 33, 0.04), 0 4px 16px rgba(33, 33, 33, 0.24)',
        error: '0 4px 4px rgba(255, 195, 195, 0.04), 0 4px 40px rgba(255, 195, 195, 0.24)',
        success: '0 4px 4px rgba(27, 174, 60, 0.04), 0 4px 40px rgba(27, 174, 60, 0.24)',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          hover: 'hsl(var(--primary-hover))',
          active: 'hsl(var(--primary-active))',
          disabled: 'hsl(var(--primary-disabled))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          hover: 'hsl(var(--destructive-hover))',
          active: 'hsl(var(--destructive-active))',
          disabled: 'hsl(var(--destructive-disabled))',
        },
        success: 'hsl(var(--success))',
        info: 'hsl(var(--info))',
        gray: {
          DEFAULT: 'hsl(var(--gray))',
          light: 'hsl(var(--light-gray))',
          extraLight: 'hsl(var(--extra-light-gray))',
          medium: 'hsl(var(--medium-gray))',
          dark: 'hsl(var(--dark-gray))',
        },
        black: 'hsl(var(--black))',
        white: 'hsl(var(--white))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('tailwindcss-radix'),
  ],
};
