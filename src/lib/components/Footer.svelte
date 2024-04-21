<script>
	import { page } from '$app/stores';

	import Eye from './Icons/Eye.svelte';
	import Svelte from './Icons/Svelte.svelte';
	import TailwindCSS from './Icons/TailwindCSS.svelte';
	import Heart from './Icons/Heart.svelte';
</script>

<div class="flex py-2 w-full h-full shadow-lg bg-gray-500/10">
	<div class="container flex">
		<div class="flex flex-col flex-1 my-auto text-sm text-neutral-500">
			<p>cirroskais.xyz ― cirro's website</p>
			<div class="flex space-x-0.5">
				<div class="my-auto w-5 h-5 font-bold">
					<Eye></Eye>
				</div>
				<p>
					This website has been viewed <span class="font-bold">{$page.data.counter}</span> times.
				</p>
			</div>
		</div>
		<div class="flex flex-col flex-1 my-auto text-sm text-neutral-500">
			<div class="mx-auto w-5 h-5 transition-colors hover:text-cirro">
				<Heart></Heart>
			</div>
		</div>
		<div class="flex flex-col flex-1 my-auto text-sm text-neutral-500">
			<div class="flex ml-auto space-x-1.5">
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
			<div class="flex ml-auto space-x-1.5">
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
			<div class="flex ml-auto space-x-1.5">
				<p>Hosted with</p>
				<a
					href="https://coolify.io/"
					class="flex space-x-0.5 text-[#8c52ff] underline underline-offset-[3px]"
				>
					<div class="my-auto w-4 h-4">
						<enhanced:img src="/static/icons/coolify-transparent.png" alt="" />
					</div>
					<p class="font-bold">Coolify</p>
				</a>
			</div>
		</div>
	</div>
</div>
