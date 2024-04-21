<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	/** @type {string|undefined} src */
	export let src;

	/** @type {string} alt */
	export let alt;

	/** @type {string} style */
	export let style;

	/** @type {HTMLImageElement} image*/
	let image;

	let loaded = false;

	onMount(() => {
		if (!src) return;

		const preload = new Image();
		preload.src = src;
		preload.onload = () => (loaded = true);
	});
</script>

{#if loaded}
	<img in:fade class={style} {src} {alt} bind:this={image} />
{:else}
	<div class="{style} bg-neutral-600/50 animate-pulse"></div>
{/if}
