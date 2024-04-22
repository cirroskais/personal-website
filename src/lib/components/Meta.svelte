<script>
	import { page } from '$app/stores';

	export let title = '',
		image = '',
		descripton = '',
		bigImage = '';

	// hate
	page.subscribe((_) => {
		if (!image.length) image = _.url.origin + '/api/avatar';
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	{#if bigImage.length}
		<meta property="og:thumbnail" content={bigImage} />
	{:else}
		<meta property="og:image" content={image} />
	{/if}
	<meta property="og:description" content={descripton} />
</svelte:head>
