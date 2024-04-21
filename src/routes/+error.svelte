<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/');
	});
</script>

<svelte:head>
	<title>{$page.data.discord?.username}/error</title>
</svelte:head>
