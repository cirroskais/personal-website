<script>
	import { goto } from '$app/navigation';

	/** @type {import("./$types").PageData} */
	export let data;

	import { page } from '$app/stores';
	import ListedPost from '$lib/components/blog/ListedPost.svelte';
	import First from '$lib/components/icons/First.svelte';
	import Last from '$lib/components/icons/Last.svelte';

	let currentPage = Number($page.url.hash.slice(1) || '1');
	if (isNaN(currentPage)) currentPage = 1;
	if (currentPage > data.totalPages) currentPage = data.totalPages;

	console.log(currentPage);
</script>

<div class="">
	<div class="grid grid-cols-3 grid-rows-3 gap-2">
		{#each data.posts as post}
			<ListedPost {post}></ListedPost>
		{/each}
	</div>

	<div class="flex mt-2">
		<div class="flex mx-auto space-x-2">
			<button
				class="py-2 px-3 bg-gray-500/10 rounded-lg"
				on:click={() => {
					goto('#1');
				}}><First></First></button
			>
			<div class="bg-gray-500/10 rounded-lg">
				{#if data.totalPages === 1}
					<button class="py-2 px-4 bg-gray-500/30 rounded-lg">1</button>
				{:else if data.totalPages === 2}
					<button class="py-2 px-4 {currentPage === 1 && 'bg-gray-500/30 rounded-s-lg'}">1</button>
					<button class="py-2 px-4 {currentPage === 2 && 'bg-gray-500/30 rounded-e-lg'}">2</button>
				{:else if data.totalPages > 3}
					<button class="py-2 px-4 {currentPage === 1 && 'bg-gray-500/30 rounded-s-lg'}">
						{#if currentPage >= data.totalPages}
							{currentPage - 2}
						{:else}
							{Math.max(1, currentPage - 1)}
						{/if}
					</button>
					<button
						class="py-2 px-4 {currentPage !== 1 &&
							currentPage !== data.totalPages &&
							'bg-gray-500/30'}"
					>
						{#if currentPage >= data.totalPages}
							{currentPage - 1}
						{:else}
							{Math.max(2, currentPage)}
						{/if}
					</button>
					<button
						class="py-2 px-4 {currentPage === data.totalPages && 'bg-gray-500/30 rounded-e-lg'}"
					>
						{#if currentPage >= data.totalPages}
							{currentPage}
						{:else}
							{Math.max(3, currentPage + 1)}
						{/if}
					</button>
				{/if}
			</div>
			<button
				class="py-2 px-3 bg-gray-500/10 rounded-lg"
				on:click={() => {
					goto('/blog#' + data.totalPages);
				}}><Last></Last></button
			>
		</div>
	</div>
</div>
