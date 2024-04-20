<script>
	import { fade } from 'svelte/transition';

	export let post = { id: 0, title: '', author: '', image: '' },
		index = 0;
</script>

<a in:fade={{ delay: 50 * index }} href="/blog/{post.id}">
	<div class="p-4 rounded-2xl bg-gray-500/10">
		<img class="mb-2 bg-black rounded-xl aspect-video" src={post.image} alt="Blog post cover" />
		<p class="text-2xl">{post.title}</p>
		<p class="text-white/50">By {post.author}</p>
	</div>
</a>
