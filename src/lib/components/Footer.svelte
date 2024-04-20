<script>
	import Svelte from './Icons/Svelte.svelte';
	import TailwindCSS from './Icons/TailwindCSS.svelte';
</script>

<div class="flex py-2 w-full h-full shadow-lg bg-gray-500/10">
	<div class="flex flex-col m-auto text-sm text-neutral-500">
		<div class="flex mx-auto space-x-1.5">
			<p>Built with</p>
			<a
				href="https://kit.svlete.dev/"
				class="flex space-x-0.5 text-[#ff3e00] underline underline-offset-[3px]"
			>
				<div class="my-auto w-4 h-4">
					<Svelte></Svelte>
				</div>
				<p class="font-bold">SvelteKit</p>
			</a>
		</div>
		<div class="flex mx-auto space-x-1.5">
			<p>Designed with</p>
			<a
				href="https://tailwindcss.com/"
				class="flex space-x-0.5 text-[#06b6d4] underline underline-offset-[3px]"
			>
				<div class="my-auto w-4 h-4">
					<TailwindCSS></TailwindCSS>
				</div>
				<p class="font-bold">Tailwind CSS</p>
			</a>
		</div>
		<div class="flex mx-auto space-x-1.5">
			<p>Hosted with</p>
			<a
				href="https://coolify.io/"
				class="flex space-x-0.5 text-[#8c52ff] underline underline-offset-[3px]"
			>
				<div class="my-auto w-4 h-4">
					<img src="/icons/coolify-transparent.png" alt="" />
				</div>
				<p class="font-bold">Coolify</p>
			</a>
		</div>
	</div>
</div>
