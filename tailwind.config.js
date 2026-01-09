/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Oswald', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    dark: '#0f172a',
                },
                accent: {
                    gold: '#f59e0b',
                    'gold-hover': '#d97706',
                }
            }
        },
    },
    plugins: [],
}
