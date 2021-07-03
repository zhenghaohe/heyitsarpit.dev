module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cl-primary': 'var(--color-text)',
        'cl-secondary': 'var(--color-text-secondary)',
        'cl-bg': 'var(--color-background)',
        'cl-nav-bg': 'var(--color-nav-background)',
        'cl-muted': 'var(--color-muted)',
        'cl-accent': 'var(--color-link-posts)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
