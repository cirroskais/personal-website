<script>
	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import Header from '$lib/components/HeaderComponents/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="w-screen h-[3rem]">
	<Header></Header>
</div>

{#key $page.url}
	<div in:fade class="container mx-auto py-2 min-h-[calc(100vh-7rem)]">
		<slot />
	</div>
{/key}

<div class="w-screen h-[4rem]">
	<Footer></Footer>
</div>
