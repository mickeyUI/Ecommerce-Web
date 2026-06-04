module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bg: 'var(--color-bg)',
        highlight: 'var(--color-highlight)',
        ternary: 'var(--color-ternary)',
      },
    },
  },
  plugins: [],
}

