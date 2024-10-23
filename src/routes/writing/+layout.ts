import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const posts: Record<string, Post> = import.meta.glob('/writing/*.md', { eager: true });

	for (const [fileName, post] of Object.entries(posts)) {
		const slug = fileName.slice(9, -3);
		post.metadata.slug = slug;
	}

	const summaries = Object.values(posts).map(({ metadata }) => metadata);

	return {
		posts: summaries
	};
};
