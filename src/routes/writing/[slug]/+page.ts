import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post: Post = await import(`../../../../writing/${params.slug}.md`);

	return {
		post
	};
};
