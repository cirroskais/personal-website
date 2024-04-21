<script>
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import blog from '$lib/blog.json';

	import ListedPost from '$lib/components/Blog/ListedPost.svelte';
	import First from '$lib/components/Icons/First.svelte';
	import Last from '$lib/components/Icons/Last.svelte';
	import ScaffoldListedPost from '$lib/components/Blog/ScaffoldListedPost.svelte';

	/**  @type {any[]} */
	let posts = loadPosts(0);
	let pages = Math.ceil(blog.length / 12);
	let selectedPage = writable(0);

	/** @param {number} index */
	function loadPosts(index) {
		let page = Array.from(blog);
		page.reverse();
		page = page.slice(index * 12, (index + 1) * 12);

		while (page.length < 12) {
			page.push({
				id: -1,
				title: '',
				image: ''
			});
		}

		return page;
	}

	selectedPage.subscribe((i) => {
		posts = loadPosts(i);
	});
</script>

<svelte:head>
	<title>{$page.data.discord?.username}/blog</title>
</svelte:head>

<div class="">
	<div
		class="grid gap-2 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3"
	>
		{#key posts}
			{#each posts as post, i}
				{#if post.id === -1}
					<ScaffoldListedPost index={i}></ScaffoldListedPost>
				{:else}
					<ListedPost {post} index={i}></ListedPost>
				{/if}
			{/each}
		{/key}
	</div>
	<div>
		<p>{pages} pages</p>
		<p>page {$selectedPage + 1}</p>
		<button
			on:click={() => {
				$selectedPage -= 1;
			}}>back</button
		>
		<button
			on:click={() => {
				$selectedPage += 1;
			}}>forward</button
		>
	</div>
</div>
