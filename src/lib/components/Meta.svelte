<script>
	import { page } from '$app/stores';

	export let title = '',
		image = '',
		descripton = '',
		bigImage = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	{#if bigImage.length}
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="og:image" content={$page.url.origin + bigImage} />
	{:else}
		<meta property="og:image" content={$page.url.origin + image} />
	{/if}
	<meta property="og:description" content={descripton} />
</svelte:head>
