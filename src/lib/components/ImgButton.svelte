<script>
	// @ts-nocheck
	// lol

	import { onMount } from 'svelte';

	export let src, href;
	let e;

	// https://github.com/nbitzz/newnewwebsite/blob/a751e690a9993923aabd1984d9645c502f148c69/src/components/buttons/Buttons.astro#L74-L95
	onMount(() => {
		let startEffect = (ev) => {
			let yP = 1 - (ev.offsetY / 31) * 2;
			let xP = -1 + (ev.offsetX / 88) * 2;
			e.style.transform =
				'scale(105%)' +
				` rotate3d(${yP.toFixed(2)}, ${xP.toFixed(2)},0,20deg)` +
				` translate(${3 * xP}px,${-5 * yP}px)`;
		};

		e.addEventListener('mouseover', startEffect);
		e.addEventListener('mousemove', startEffect);
		e.addEventListener('mouseleave', () => {
			e.style.transform = '';
		});
	});
</script>

<a {href} target="_blank">
	<img class="imgbutton" {src} alt="Button" bind:this={e} />
</a>

<style lang="postcss">
	.imgbutton {
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 85ms;
	}
</style>
