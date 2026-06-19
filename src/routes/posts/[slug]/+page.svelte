<script lang="ts">
	let { data } = $props();

	const Content = $derived(data.content);
	const fmt = (d: string) =>
		new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<svelte:head>
	<title>{data.meta.title} — shide</title>
	{#if data.meta.description}<meta name="description" content={data.meta.description} />{/if}
</svelte:head>

<article>
	<header class="post-head">
		<h1>{data.meta.title}</h1>
		<time datetime={data.meta.date}>{fmt(data.meta.date)}</time>
	</header>

	<div class="prose">
		<Content />
	</div>

	<p class="back"><a href="/">← All posts</a></p>
</article>
