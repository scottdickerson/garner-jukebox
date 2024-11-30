import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
// import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
    integrations: [
        solidJs({
            devtools: true,
        }),
        tailwind(),
    ],
    output: 'static',
    // By default we're building a static site to `/dist` but you can change for publishing to Vercel for previews here
    // output: 'server',
    // adapter: vercel(),
})
