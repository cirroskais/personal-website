<script>
	import { fade } from 'svelte/transition';

	export let index = 0;
</script>

<div in:fade|global={{ delay: 50 * index }} class="hidden shadow-lg md:block">
	<div class="w-full rounded-lg aspect-video bg-gray-500/10"></div>
</div>
