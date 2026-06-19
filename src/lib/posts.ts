export type PostMeta = {
	slug: string;
	title: string;
	date: string;
	description?: string;
};

// Eagerly read frontmatter from every markdown file. mdsvex exposes it as `metadata`.
const files = import.meta.glob<{ metadata: Omit<PostMeta, 'slug'> }>('/src/posts/*.md', {
	eager: true
});

export const posts: PostMeta[] = Object.entries(files)
	.map(([path, mod]) => ({
		slug: path.split('/').pop()!.replace('.md', ''),
		...mod.metadata
	}))
	.sort((a, b) => +new Date(b.date) - +new Date(a.date));
