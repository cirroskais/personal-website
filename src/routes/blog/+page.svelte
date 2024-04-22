<script>
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import blog from '$lib/blog.json';

	import ListedPost from '$lib/components/Blog/ListedPost.svelte';
	import Back from '$lib/components/Icons/Back.svelte';
	import Next from '$lib/components/Icons/Next.svelte';
	import ScaffoldListedPost from '$lib/components/Blog/ScaffoldListedPost.svelte';

	/**  @type {any[]} */
	let posts = loadPosts(0);
	let pages = Math.ceil(blog.length / 16);
	let selectedPage = writable(0);

	/** @param {number} index */
	function loadPosts(index) {
		let page = Array.from(blog);
		page = page.filter((_) => !_?.unlisted);
		page.reverse();
		page = page.slice(index * 16, (index + 1) * 16);

		while (page.length < 16) {
			page.push({
				// @ts-ignore
				filler: true
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

<div class="flex flex-col w-full">
	<div class="flex flex-col my-auto space-y-7">
		<div class="grid gap-2 md:grid-rows-8 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-4">
			{#key posts}
				{#each posts as post, i}
					{#if post.filler}
						<ScaffoldListedPost index={i}></ScaffoldListedPost>
					{:else}
						<ListedPost {post} index={i}></ListedPost>
					{/if}
				{/each}
			{/key}
		</div>
		<div class="flex mx-auto space-x-1 rounded-md bg-gray-500/10">
			<button
				class="p-2 my-auto transition-colors hover:text-cirro"
				on:click={() => {
					if ($selectedPage <= 0) return;
					$selectedPage -= 1;
				}}
			>
				<Back></Back>
			</button>
			<p class="p-2 my-auto">{$selectedPage + 1} / {pages}</p>
			<button
				class="p-2 my-auto transition-colors hover:text-cirro"
				on:click={() => {
					if ($selectedPage >= pages - 1) return;
					$selectedPage += 1;
				}}
				><Next></Next>
			</button>
		</div>
	</div>
</div>
