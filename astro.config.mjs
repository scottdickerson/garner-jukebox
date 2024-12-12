import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    integrations: [
        solidJs({
            devtools: true,
        }),
        tailwind(),
    ],
    output: 'static',
    // By default we're building a static site to `/dist` so it can be served by `serve -s dist` or `nginx` but you can change for publishing to Vercel as a serverless app by copying the astro.config.serverless.mjs over this file
    // output: 'server',
    // adapter: vercel(),
})
