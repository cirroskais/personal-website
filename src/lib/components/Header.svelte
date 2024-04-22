<script>
	import HeaderLink from './HeaderLink.svelte';
	import Cirro from './Icons/Cirro.svelte';
</script>

<div class="h-full shadow-lg bg-gray-500/10">
	<div class="container flex w-full h-full">
		<a href="/" class="my-auto text-2xl font-bold tracking-wider group">
			<div
				class="h-full ml-[-1rem] transition-all hover:scale-110 group-focus:scale-110 group-active:scale-90 group-active:-rotate-3"
			>
				<Cirro></Cirro>
			</div>
		</a>
		<div class="flex ml-auto space-x-4">
			<HeaderLink href="/">Home</HeaderLink>
			<HeaderLink href="/projects">Projects</HeaderLink>
			<HeaderLink href="/blog">Blog</HeaderLink>
		</div>
	</div>
</div>
<div class="w-full h-0.5 bg-cirro"></div>
