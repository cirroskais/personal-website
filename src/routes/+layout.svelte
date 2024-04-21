<script>
	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<link href="https://chadthundercock.com/@cirroskais" rel="me" />
	<link
		rel="icon"
		type="image/png"
		href="https://cdn.discordapp.com/avatars/{$page.data.discord.id}/{$page.data.discord
			.avatar}.png"
	/>
	<meta property="og:title" content={$page.data.discord.username} />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:image" content="{$page.url.toString()}background.jpg" />
	<meta property="og:description" content="meow" />
	<meta name="theme-color" content="#fefefe" />
</svelte:head>

<div class="w-screen h-[3.125rem]">
	<Header></Header>
</div>

{#key $page.url}
	<div in:fade class="container mx-auto py-2 min-h-[calc(100vh-3.125rem)]">
		<slot />
	</div>
{/key}

<div class="w-screen">
	<Footer></Footer>
</div>
