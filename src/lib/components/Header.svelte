<script>
	import HeaderLink from './HeaderLink.svelte';
	import Cirro from './Icons/Cirro.svelte';
</script>

<div class="h-full shadow-lg bg-gray-500/10">
	<div class="container flex w-full h-full">
		<a href="/" class="my-auto text-2xl font-bold tracking-wider">
			<div class="h-full ml-[-1rem]">
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
<div class="w-full h-0.5 bg-[#c4bef3]"></div>
