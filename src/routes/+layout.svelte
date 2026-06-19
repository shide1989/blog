<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site">
	<header>
		<a class="brand" href="/">shide</a>
		<nav>
			<a href="/">Posts</a>
			<a href="/about">About</a>
		</nav>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>© {new Date().getFullYear()} shide · built with SvelteKit</p>
	</footer>
</div>
