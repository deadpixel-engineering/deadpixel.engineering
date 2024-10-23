import type { Config } from 'tailwindcss';

import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			container: {
				center: true
			}
		}
	},

	plugins: [typography, containerQueries, aspectRatio]
} as Config;
