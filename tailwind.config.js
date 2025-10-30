/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|from|to|text)-(emerald|amber|teal|cyan)-(500|600)/,
    },
    'bg-emerald-500',
    'bg-amber-500',
    'bg-teal-500',
    'bg-cyan-500',
    'from-emerald-500',
    'to-emerald-600',
    'from-amber-500',
    'to-amber-600',
    'from-teal-500',
    'to-teal-600',
    'from-cyan-500',
    'to-cyan-600',
  ],
};
