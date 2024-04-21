<script>
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { fade } from 'svelte/transition';

	import Image from '$lib/components/Image.svelte';
	import blog from '$lib/blog.json';

	export let data;

	let markdown = '';
	let thisPost = blog.find((post) => post.slug === data.slug);

	onMount(async () => {
		const response = await fetch(`/blog/${data.slug}.md`);
		const body = await response.text();
		markdown = body;
	});
</script>

<div class="flex flex-col space-y-2 md:w-[65ch] mx-auto">
	<div class="mx-auto w-full">
		<div
			class="h-[10rem] w-full rounded-lg aspect-video bg-gray-500/10"
			style="background-image: url({thisPost?.image});   
            background-repeat: repeat;
            background-size: cover;"
		>
			<div
				class="flex flex-col w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg"
			>
				<p class="z-10 pb-2 mt-auto ml-2 text-4xl">
					{thisPost?.title}
				</p>
			</div>
		</div>
	</div>

	<span class="h-0.5 rounded-full bg-cirro"></span>

	{#key markdown}
		<article in:fade class="mx-auto prose prose-sm sm:prose-base prose-invert">
			<SvelteMarkdown source={markdown}></SvelteMarkdown>
		</article>
	{/key}
</div>
