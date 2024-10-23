import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

import markdown from './plugins/markdown';

export default defineConfig({
	plugins: [sveltekit(), markdown()],
	server: {
		fs: {
			allow: ['src', 'static', 'writing']
		}
	},
	test: {
		include: ['src/**/*.test.{js,ts}']
	}
});
