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

<a
	{href}
	class="my-auto md:text-lg transition-all {selected
		? 'font-bold tracking-wider'
		: 'hover:text-neutral-400 focus:text-neutral-400'}"
>
	<slot />
</a>
