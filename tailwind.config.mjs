/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                pacifico: ['Pacifico', 'cursive'],
                tuffy: ['Tuffy', 'sans-serif'],
            },
            lineHeight: {
                77: '77px',
                63: '63px',
                45: '45px',
            },
            fontSize: {
                65: '65px',
                35: '35px',
            },
            backgroundImage: {
                record: "url('/images/RecordLarge.svg')",
                recordSmall: "url('/images/RecordSmall.png')",
                attractScreen: "url('/images/AttractScreenBackground.png')",
                filmReel: "url('/images/film-reel-icon.png')",
            },
        },
    },
    plugins: [],
}
