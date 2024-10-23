import type { Config } from '@sveltejs/kit';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { svelteMarkdown } from 'svelte-markdown-component';

const config: Config = {
	preprocess: [vitePreprocess(), svelteMarkdown()],

	kit: {
		adapter: adapter(),
		alias: {
			$schemas: './src/schemas'
		}
	},

	extensions: ['.svelte', '.md']
};

export default config;
