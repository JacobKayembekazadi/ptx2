/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-orange': '#e56417',
                'brand-dark': '#0a0a0a',
                'gold': '#b49160',
                'glass': 'rgba(255, 255, 255, 0.03)',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
