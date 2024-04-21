<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	/** @type {string} src */
	export let src;

	/** @type {string|undefined} href */
	export let href = undefined;

	/** @type {HTMLImageElement} e */
	let e;

	let loaded = false;

	// https://github.com/nbitzz/newnewwebsite/blob/a751e690a9993923aabd1984d9645c502f148c69/src/components/buttons/Buttons.astro#L74-L95
	onMount(() => {
		/** @param {MouseEvent} ev */
		let startEffect = (ev) => {
			let yP = 1 - (ev.offsetY / 31) * 2;
			let xP = -1 + (ev.offsetX / 88) * 2;
			e.style.transform =
				'scale(105%)' +
				` rotate3d(${yP.toFixed(2)}, ${xP.toFixed(2)},0,20deg)` +
				` translate(${3 * xP}px,${-5 * yP}px)`;

			e.style.boxShadow = `${(-3 * xP).toFixed(2)}px ${(5 * yP).toFixed(2)}px 3px #c4bef3`;
		};

		if (src) {
			const preload = new Image();
			preload.src = src;
			preload.onload = () => {
				loaded = true;

				// gotta wait for svelte to realize that e does in fact, exist
				setTimeout(() => {
					if (!e) return;
					e.addEventListener('mouseover', startEffect);
					e.addEventListener('mousemove', startEffect);
					e.addEventListener('mouseleave', () => {
						e.style.transform = '';
						e.style.boxShadow = '';
					});
				}, 100);
			};
		}

		return () => {};
	});
</script>

<a class="hover:shadow-2xl focus:shadow-2xl" {href} target="_blank">
	{#if loaded}
		<img in:fade class="imgbutton" {src} alt="Button" bind:this={e} />
	{:else}
		<div class="rounded-sm animate-pulse imgbutton bg-neutral-600/50"></div>
	{/if}
</a>

<style lang="postcss">
	.imgbutton {
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 70ms;
		height: 31px;
		width: 88px;
	}
</style>
