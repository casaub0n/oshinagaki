const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'hannari': ['Hannari', 'Sans-serif']
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
