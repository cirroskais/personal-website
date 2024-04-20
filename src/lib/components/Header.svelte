<script>
	import HeaderLink from './HeaderLink.svelte';
</script>

<div class="h-full shadow-lg bg-gray-500/10">
	<div class="container flex w-full h-full">
		<a href="/" class="my-auto text-2xl font-bold tracking-wider"> cirroskais </a>
		<div class="flex ml-auto space-x-4">
			<HeaderLink href="/">Home</HeaderLink>
			<HeaderLink href="/projects">Projects</HeaderLink>
			<HeaderLink href="/blog">Blog</HeaderLink>
		</div>
	</div>
</div>
