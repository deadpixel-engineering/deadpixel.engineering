import { readFile } from 'fs/promises';

import { unified, type Plugin as UnifiedPlugin } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGithubFlavored from 'remark-gfm';
import matter from 'gray-matter';

import type { Plugin } from 'vite';

interface PluginOptions {
	remarkPlugins?: UnifiedPlugin[];
	rehypePlugins?: UnifiedPlugin[];
	extensions?: string[];
}

/**
 * Creates a Vite plugin for processing Markdown files using Remark.
 */
function markdown({
	remarkPlugins = [],
	rehypePlugins = [],
	extensions = ['.md']
}: PluginOptions = {}): Plugin {
	return {
		name: 'vite-plugin-markdown',
		enforce: 'pre',

		async transform(code, id) {
			if (!extensions.some((extension) => id.endsWith(extension))) {
				return null;
			}

			try {
				const processor = unified()
					.use(remarkParse)
					.use(remarkFrontmatter)
					.use(remarkGithubFlavored)
					.use(remarkPlugins)
					.use(remarkRehype)
					.use(rehypePlugins)
					.use(rehypeStringify);

				const { data } = matter(code);

				const content = await readFile(id, 'utf-8');
				const result = await processor.process(content);
				const html = String(result);

				// Return processed content as a JavaScript module
				return {
					code: `export const metadata = ${JSON.stringify(data)};\nexport const content = ${JSON.stringify(html)};`,
					map: null
				};
			} catch (error) {
				if (error instanceof Error) this.error(`Failed to process ${id}: ${error.message}`);
			}
		}
	};
}

export default markdown;
