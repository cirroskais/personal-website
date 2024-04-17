<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import ListedPost from '$lib/components/Blog/ListedPost.svelte';
	import First from '$lib/components/icons/First.svelte';
	import Last from '$lib/components/icons/Last.svelte';
	import ScaffoldListedPost from '$lib/components/Blog/ScaffoldListedPost.svelte';

	/**  @type {any[]} */
	let posts = [];
	let selectedPage = writable(0);

	/** @param {number} index */
	async function loadPosts(index) {
		const response = await fetch(`/api/blog?index=${index}`);
		const body = await response.json();

		posts = body.posts;
	}

	onMount(() => loadPosts(0));
</script>

<div class="">
	<div
		class="grid md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 gap-2"
	>
		{#each posts as post, i}
			<ListedPost {post} index={i}></ListedPost>
		{:else}
			{#each Array(12).fill('') as _}
				<ScaffoldListedPost></ScaffoldListedPost>
			{/each}
		{/each}
	</div>
</div>
