/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                record: "url('/images/RecordLarge.svg')",
                recordSmall: "url('/images/RecordSmall.png')",
                attractScreen: "url('/images/AttractScreenBackground.png')",
                filmReel: "url('/images/film-reel-icon.svg')",
            },
        },
    },
    plugins: [],
}
