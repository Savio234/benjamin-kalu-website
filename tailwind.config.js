/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        montserratAlt: ['Montserrat Alternates', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#ffffff',
      light: '#FAFFFA',
      lightGreen: '#F5FFF6',
      black: '#022924',
      primaryGreen: '#00A991',
      secondaryGreen: '#29C775',
      footerGreen: '#022923',
      bgGreen: '#EBFFEE',
      darkGreen: '#022924',
      mutedBlack: '#646E87',
      gray: '#585C5B',
      borderMuted: '#CECFCF',
      borderGreen: '#009A84',
      bgInput: '#727DA11A',
    },
  },
  plugins: [],
};
