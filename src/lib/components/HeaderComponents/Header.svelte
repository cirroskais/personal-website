<script>
	import HeaderLink from './HeaderLink.svelte';
</script>

<div class="shadow-lg bg-gray-500/10 h-full">
	<div class="container flex h-full w-full">
		<a href="/" class="font-bold text-xl my-auto tracking-wider">site name</a>
		<div class="ml-auto flex space-x-4">
			<HeaderLink href="/">Home</HeaderLink>
			<HeaderLink href="/projects">Projects</HeaderLink>
			<HeaderLink href="/blog">Blog</HeaderLink>
		</div>
	</div>
</div>
