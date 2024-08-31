import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
    integrations: [solidJs({ devtools: true }), tailwind()],
    output: 'static',
    adapter: netlify(),
})
