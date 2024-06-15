<script>
	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import config from '$lib/config';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<link href="https://{config.FEDIVERSE}" rel="me" />
	<link rel="icon" type="image/png" href={$page.url.origin + '/api/avatar'} />
	<meta property="og:url" content={$page.url.toString()} />
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

<div class="mt-4 w-screen">
	<Footer></Footer>
</div>
