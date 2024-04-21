<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import blog from '$lib/blog.json';

	import ListedPost from '$lib/components/Blog/ListedPost.svelte';
	import First from '$lib/components/Icons/First.svelte';
	import Last from '$lib/components/Icons/Last.svelte';
	import ScaffoldListedPost from '$lib/components/Blog/ScaffoldListedPost.svelte';

	/**  @type {any[]} */
	let posts = [];
	let selectedPage = writable(0);

	/** @param {number} index */
	async function loadPosts(index) {
		posts = blog;
	}

	onMount(() => loadPosts(0));
</script>

<svelte:head>
	<title>{$page.data.discord?.username}/blog</title>
</svelte:head>

<div class="">
	<div
		class="grid gap-2 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3"
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
