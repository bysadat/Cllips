module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        PrimaryGold: 'hsl(43, 96%, 56%)',
        DeepIndigo: 'hsl(245, 50%, 60%)',
        RichCharcoal: 'hsl(220, 20%, 20%)',
        SoftSlate: 'hsl(215, 15%, 55%)',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
