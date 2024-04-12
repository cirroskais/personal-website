<script>
	export let post = { id: 0, title: '', author: '', image: '' };
</script>

<a href="/blog/{post.id}">
	<div class="bg-gray-500/10 p-4 rounded-2xl">
		<img
			class="aspect-video h-48 bg-black mx-auto rounded-xl mb-2"
			src={post.image}
			alt="Blog post cover"
		/>
		<p class="text-2xl">{post.title}</p>
		<p class="text-white/50">By {post.author}</p>
	</div>
</a>
