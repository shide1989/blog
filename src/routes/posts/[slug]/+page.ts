import { error } from '@sveltejs/kit';
import type { PostMeta } from '$lib/posts';

export const load = async ({ params }) => {
	try {
		// Vite turns this dynamic import into a glob, so prerender can resolve every slug.
		const post = await import(`../../../posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata as Omit<PostMeta, 'slug'>
		};
	} catch {
		error(404, `Post "${params.slug}" not found`);
	}
};
