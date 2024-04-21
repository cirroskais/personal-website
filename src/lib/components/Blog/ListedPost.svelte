<script>
	import { fade } from 'svelte/transition';
	import Image from '../Image.svelte';

	export let post = { id: 0, title: '', image: '' },
		index = 0;
</script>

<a
	in:fade|global={{ delay: 50 * index }}
	href="/blog/{post.id}"
	class="shadow-lg transition-all focus:-translate-y-1 hover:-translate-y-1"
>
	<div
		class="w-full rounded-lg aspect-video bg-gray-500/10"
		style="background-image: url({post.image});   
        background-repeat: repeat;
        background-size: cover;"
	>
		<div class="flex w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg">
			<p class="z-10 pb-2 mt-auto ml-2 text-2xl">
				{post.title}
			</p>
		</div>
	</div></a
>
