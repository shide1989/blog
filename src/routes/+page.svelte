<script lang="ts">
	let { data } = $props();

	const fmt = (d: string) =>
		new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<svelte:head>
	<title>shide — blog</title>
	<meta name="description" content="Writing about software and other rabbit holes." />
</svelte:head>

<h1>Posts</h1>

<ul class="posts">
	{#each data.posts as post (post.slug)}
		<li>
			<a href="/posts/{post.slug}">
				<span class="title">{post.title}</span>
				<time datetime={post.date}>{fmt(post.date)}</time>
			</a>
			{#if post.description}<p class="desc">{post.description}</p>{/if}
		</li>
	{/each}
</ul>
