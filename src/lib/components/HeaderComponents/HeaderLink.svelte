<script>
	import { page } from '$app/stores';

	/** @type {string} */
	export let href;

	/** @type {boolean} */
	let selected = false;

	page.subscribe((pg) => {
		selected = pg.url.pathname === href;
	});
</script>

<a {href} class="my-auto text-lg transition-all {selected && 'font-bold tracking-wider'}">
	<slot />
</a>
