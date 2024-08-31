/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                record: "url('/images/Record250px.png')",
                attractScreen: "url('/images/AttractScreenBackground.png')",
            },
        },
    },
    plugins: [],
}
