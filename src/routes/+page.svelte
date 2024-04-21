<script>
	import { page } from '$app/stores';
	import config from '$lib/config';

	import ImgButton from '$lib/components/ImgButton.svelte';
	import Image from '$lib/components/Image.svelte';

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

<div class="hero w-full h-[calc(100vh-5.125rem)] rounded-lg mx-auto my-auto">
	<div class="flex p-4 h-full rounded-lg">
		<div class="my-auto md:w-fit md:mx-auto min-h-max">
			<div class="flex md:w-[42rem] p-2 bg-black/75 rounded-lg shadow-lg">
				<Image
					style="mr-2 h-20 w-20 rounded-full md:h-24 md:w-24"
					src="https://cdn.discordapp.com/avatars/{$page.data.discord.id}/{$page.data.discord
						.avatar}.png"
					alt="{$page.data.discord?.username}'s profile picture"
				/>
				<p class="my-auto text-3xl md:text-4xl text-neutral-300">
					{$page.data.discord?.username}
				</p>
			</div>

			<div
				class="md:w-[42rem] flex place-content-center space-x-2 text-xl p-2 bg-black/75 rounded-lg mt-1 shadow-lg"
			>
				<a class="flex group" href="https://www.last.fm/user/{config.LASTFM}">
					<div
						class="my-auto w-7 h-7 transition-colors text-neutral-400 group-focus:text-red-500 group-hover:text-red-500"
					>
						<Lastfm />
					</div>
				</a>
				<a class="flex group" href="https://github.com/{config.GITHUB}">
					<div
						class="my-auto w-7 h-7 transition-colors text-neutral-400 group-hover:text-black group-focus:text-black"
					>
						<GitHub />
					</div>
				</a>
				<a class="flex group" href="https://mastodon.social/{config.FEDIVERSE}">
					<div
						class="my-auto w-7 h-7 transition-colors text-neutral-400 group-hover:text-indigo-700 group-focus:text-indigo-700"
					>
						<Mastodon />
					</div>
				</a>
				<a class="flex group" href="https://discord.com/users/{config.DISCORD}">
					<div
						class="my-auto w-7 h-7 transition-colors text-neutral-400 group-hover:text-blue-600 group-focus:text-blue-600"
					>
						<Discord />
					</div>
				</a>
				<a class="flex group" href="https://x.com/{config.TWITTER}">
					<div
						class="my-auto w-7 h-7 transition-colors text-neutral-400 group-hover:text-black group-focus:text-black"
					>
						<X />
					</div>
				</a>
				<a class="flex group" href="https://bsky.app/profile/{config.BLUESKY}">
					<div
						class="my-auto w-7 h-7 transition-colors text-neutral-400 group-hover:text-blue-400 group-focus:text-blue-400"
					>
						<Bluesky />
					</div>
				</a>
			</div>

			<div class="md:w-[42rem] p-2 bg-black/75 rounded-lg mt-1 shadow-lg">
				<div class="flex space-x-2.5">
					<Image
						style="w-16 h-16 md:w-24 md:h-24"
						src={$page.data.lastfm.recenttracks.track[0].image.find(
							(_) => _.size == 'extralarge'
						)?.['#text']}
						alt="Album art for {$page.data.lastfm?.recenttracks?.track[0]?.name}"
					/>
					<div class="overflow-x-auto my-auto">
						<p class="text-lg whitespace-nowrap md:text-2xl text-neutral-300">
							{$page.data.lastfm?.recenttracks?.track[0]?.name}
						</p>
						<p class="md:text-xl text-neutral-500">
							{$page.data.lastfm?.recenttracks?.track[0]?.artist?.['#text']}
						</p>
					</div>
				</div>
			</div>

			<div
				class="md:w-[42rem] p-2 bg-black/75 rounded-lg mt-1 flex justify-center flex-wrap gap-2 shadow-lg"
			>
				<ImgButton href="https://cirroskais.xyz" src="/img/buttons/cirro.png"></ImgButton>
				<ImgButton href="https://twitter.com/Porpss1" src="/img/buttons/rovin.png"></ImgButton>
				<ImgButton href="https://split.pet" src="/img/buttons/split.png"></ImgButton>
				<ImgButton href="https://www.mozilla.org/en-US/firefox/new/" src="/img/buttons/firefox.gif"
				></ImgButton>
				<ImgButton src="/img/buttons/lol.gif"></ImgButton>
				<ImgButton src="/img/buttons/twopaws.png"></ImgButton>
			</div>
		</div>
	</div>
</div>
