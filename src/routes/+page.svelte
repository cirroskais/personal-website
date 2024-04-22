<script>
	import { page } from '$app/stores';
	import config from '$lib/config';

	import SocialIcon from '$lib/components/Home/SocialIcon.svelte';
	import HeroContainer from '$lib/components/Home/HeroContainer.svelte';
	import ImgButton from '$lib/components/Home/Button.svelte';
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
		<div class="gap-1 my-auto space-y-1 md:w-fit md:mx-auto">
			<HeroContainer>
				<Image
					style="mr-2 h-20 w-20 rounded-full md:h-24 md:w-24"
					src="https://cdn.discordapp.com/avatars/{$page.data.discord.id}/{$page.data.discord
						.avatar}.png"
					alt="{$page.data.discord?.username}'s profile picture"
				/>
				<p class="my-auto text-3xl md:text-4xl text-neutral-300">
					{$page.data.discord?.username}
				</p>
			</HeroContainer>

			<HeroContainer className="place-content-center space-x-2">
				<SocialIcon href="https://www.last.fm/user/{config.LASTFM}" color="text-red-500">
					<Lastfm />
				</SocialIcon>
				<SocialIcon href="https://github.com/{config.GITHUB}" color="text-black">
					<GitHub />
				</SocialIcon>
				<SocialIcon href={config.FEDIVERSE} color="text-indigo-700">
					<Mastodon />
				</SocialIcon>
				<SocialIcon href="https://discord.com/users/{config.DISCORD}" color="text-blue-600">
					<Discord />
				</SocialIcon>
				<SocialIcon href="https://x.com/{config.TWITTER}" color="text-black">
					<X />
				</SocialIcon>
				<SocialIcon href="https://bsky.app/profile/{config.BLUESKY}" color="text-blue-400">
					<Bluesky />
				</SocialIcon>
			</HeroContainer>

			<HeroContainer>
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
			</HeroContainer>

			<HeroContainer className="justify-center flex-wrap gap-2 ">
				<ImgButton href="https://cirroskais.xyz" src="/img/buttons/cirro.png"></ImgButton>
				<ImgButton href="https://twitter.com/Porpss1" src="/img/buttons/rovin.png"></ImgButton>
				<ImgButton href="https://split.pet" src="/img/buttons/split.png"></ImgButton>
				<ImgButton href="https://m1cro.xyz/" src="/img/buttons/micro.png"></ImgButton>
				<ImgButton href="https://vea.st/" src="/img/buttons/veast.webp"></ImgButton>
				<ImgButton href="https://www.mozilla.org/en-US/firefox/new/" src="/img/buttons/firefox.gif"
				></ImgButton>
				<ImgButton src="/img/buttons/lol.gif"></ImgButton>
				<ImgButton src="/img/buttons/twopaws.png"></ImgButton>
				<ImgButton src="/img/buttons/flag-gaymen.png"></ImgButton>
			</HeroContainer>
		</div>
	</div>
</div>
