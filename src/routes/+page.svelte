<script>
	import { page } from '$app/stores';
	import config from '$lib/config';

	import ImgButton from '$lib/components/ImgButton.svelte';

	import Discord from '$lib/components/Icons/Discord.svelte';
	import Lastfm from '$lib/components/Icons/LastFM.svelte';
	import GitHub from '$lib/components/Icons/GitHub.svelte';
	import Mastodon from '$lib/components/Icons/Mastodon.svelte';
	import X from '$lib/components/Icons/X.svelte';
	import Bluesky from '$lib/components/Icons/Bluesky.svelte';
</script>

<svelte:head>
	<title>{$page.data.discord?.username}/home</title>
</svelte:head>

<div class="hero w-full h-[50rem] rounded-lg mx-auto my-auto">
	<div class="h-full rounded-lg p-4 md:flex">
		<div class="md:w-fit md:mx-auto my-auto min-h-max">
			<div class="flex md:w-[42rem] p-2 bg-black/75 rounded-lg">
				<img
					class="mr-2 h-20 md:h-24 rounded-full"
					src="https://cdn.discordapp.com/avatars/{$page.data.discord.id}/{$page.data.discord
						.avatar}.png"
					alt="{$page.data.discord?.username}'s profile picture"
				/>
				<p class="text-3xl md:text-4xl text-neutral-300 my-auto">
					{$page.data.discord?.username}
				</p>
			</div>

			<div
				class="md:w-[42rem] flex place-content-center space-x-2 text-xl p-2 bg-black/75 rounded-lg mt-1"
			>
				<a class="flex" href="https://www.last.fm/user/{config.LASTFM}">
					<div class="h-7 w-7 my-auto text-neutral-500 hover:text-red-500 transition-colors">
						<Lastfm />
					</div>
				</a>
				<a class="flex" href="https://github.com/{config.GITHUB}">
					<div class="h-7 w-7 my-auto text-neutral-500 hover:text-black transition-colors">
						<GitHub />
					</div>
				</a>
				<a class="flex" href="https://mastodon.social/{config.FEDIVERSE}">
					<div class="h-7 w-7 my-auto text-neutral-500 hover:text-indigo-700 transition-colors">
						<Mastodon />
					</div>
				</a>
				<a class="flex" href="https://discord.com/users/{config.DISCORD}">
					<div class="h-7 w-7 my-auto text-neutral-500 hover:text-blue-600 transition-colors">
						<Discord />
					</div>
				</a>
				<a class="flex" href="https://x.com/{config.TWITTER}">
					<div class="h-7 w-7 my-auto text-neutral-500 hover:text-black transition-colors">
						<X />
					</div>
				</a>
				<a class="flex" href="https://bsky.app/profile/{config.BLUESKY}">
					<div class="h-7 w-7 my-auto text-neutral-500 hover:text-blue-400 transition-colors">
						<Bluesky />
					</div>
				</a>
			</div>

			<div class="md:w-[42rem] p-2 bg-black/75 rounded-lg mt-1">
				<div class="flex space-x-2.5">
					<img
						class="w-24 h-24"
						src={$page.data.lastfm?.recenttracks?.track[0]?.image.find(
							(_) => _.size == 'extralarge'
						)?.['#text']}
						alt="Album art for {$page.data.lastfm?.recenttracks?.track[0]?.name}"
					/>
					<div class="w-full my-auto">
						<p class="text-2xl text-neutral-300 whitespace-nowrap overflow-clip">
							{$page.data.lastfm?.recenttracks?.track[0]?.name}
						</p>
						<p class="text-xl text-neutral-500">
							{$page.data.lastfm?.recenttracks?.track[0]?.artist?.['#text']}
						</p>
					</div>
				</div>
			</div>

			<div class="md:w-[42rem] p-2 bg-black/75 rounded-lg mt-1 flex justify-center flex-wrap gap-1">
				<ImgButton href="https://cirroskais.xyz" src="/cirro-button.png"></ImgButton>
			</div>
		</div>
	</div>
</div>
