<script>
	import { page } from '$app/stores';
	import config from '$lib/config';

	import Discord from '$lib/components/Icons/Discord.svelte';
	import Lastfm from '$lib/components/Icons/LastFM.svelte';
	import GitHub from '$lib/components/Icons/GitHub.svelte';
</script>

<svelte:head>
	<title>{$page.data.discord?.username}/home</title>
</svelte:head>

<div class="hero w-full h-[50rem] rounded-lg mx-auto">
	<div class="h-full w-full rounded-lg p-4">
		<div class="flex max-w-lg p-2 bg-black/75 rounded-lg mt-24">
			<img
				class="mr-2 h-20 md:h-24 rounded-full"
				src="https://cdn.discordapp.com/avatars/{$page.data.discord.id}/{$page.data.discord
					.avatar}.png"
				alt="{$page.data.discord?.username}'s profile picture"
			/>
			<p class="my-auto tracking-widest text-2xl md:text-5xl text-white/75">
				{$page.data.discord?.username}
			</p>
			<div
				class="w-9 md:w-12 h-9 md:h-12 my-auto px-2 pt-3 md:pt-3.5 text-sm md:text-3xl text-white/75"
			>
				<Discord />
			</div>
		</div>

		<div class="md:w-[32rem] flex place-content-between text-xl p-2 bg-black/75 rounded-lg mt-1">
			<p class="py-1 text-white/50">Full stack JavaScript developer.</p>
			<div class="text-2xl flex space-x-4">
				<a class="flex" href="https://www.last.fm/user/{config.LASTFM}">
					<div class="h-7 w-7 my-auto text-white/50">
						<Lastfm />
					</div>
				</a>
				<a class="flex" href="https://github.com/{config.GITHUB}">
					<div class="h-7 w-7 my-auto text-white/50">
						<GitHub />
					</div>
				</a>
			</div>
		</div>

		<div class="max-w-lg p-2 bg-black/75 rounded-lg mt-1">
			<div class="flex space-x-4">
				<img
					class="w-24 h-24 rounded-lg"
					src={$page.data.lastfm?.recenttracks?.track[0]?.image.find(
						(_) => _.size == 'extralarge'
					)?.['#text']}
					alt="Album art for {$page.data.lastfm?.recenttracks?.track[0]?.name}"
				/>
				<div class="w-full py-3.5">
					<p class="text-2xl text-white/75 whitespace-nowrap overflow-clip">
						{$page.data.lastfm?.recenttracks?.track[0]?.name}
					</p>
					<p class="text-xl text-white/50">
						{$page.data.lastfm?.recenttracks?.track[0]?.artist?.['#text']}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
