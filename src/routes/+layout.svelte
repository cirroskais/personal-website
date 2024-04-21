<script>
	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let avatarApi = '';

	page.subscribe((pg) => {
		const url = new URL(pg.url);
		url.pathname = '/api/avatar';
		avatarApi = url.toString();
	});
</script>

<svelte:head>
	<link href="https://chadthundercock.com/@cirroskais" rel="me" />
	<link rel="icon" type="image/png" href={avatarApi} />
	<meta property="og:title" content={$page.data.discord.username} />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:image" content={avatarApi} />
	<meta property="og:description" content="snow leopard that likes computers." />
	<meta property="og:site_name" content={$page.url.hostname} />
	<meta name="theme-color" content="#c4bef3" />
</svelte:head>

<div class="w-screen h-[3.125rem] mb-4">
	<Header></Header>
</div>

{#key $page.url}
	<div in:fade class="container mx-auto min-h-[calc(100vh-5.125rem)]">
		<slot />
	</div>
{/key}

<div class="hidden mt-4 w-screen md:block">
	<Footer></Footer>
</div>
