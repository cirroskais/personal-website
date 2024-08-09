<script>
	import { page } from '$app/stores';
	import config from '$lib/config';

	import Meta from '$lib/components/Meta.svelte';
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
	import Monitor from '$lib/components/Icons/Monitor.svelte';
	import Laptop from '$lib/components/Icons/Laptop.svelte';
	import Smartphone from '$lib/components/Icons/Smartphone.svelte';
	import { fade } from 'svelte/transition';
</script>

<Meta title="home · cirroskais" descripton="snow leopard that likes computers" />

<div class="hero w-full h-[calc(100vh-5.125rem)] rounded-lg mx-auto my-auto">
	<div class="flex p-4 h-full rounded-lg">
		<div class="gap-1 my-auto space-y-1 md:w-fit md:mx-auto">
			<HeroContainer>
				<Image
					style="mr-2 h-20 w-20 rounded-full md:h-24 md:w-24"
					src="https://cirroskais.xyz/api/avatar"
					alt="{$page.data.discord?.username}'s profile picture"
				/>
				<p class="my-auto text-3xl md:text-4xl text-neutral-300">
					{$page.data.discord?.username}
				</p>
			</HeroContainer>

			<HeroContainer className="place-content-center space-x-2">
				{#if config.LASTFM}
					<SocialIcon
						href="https://www.last.fm/user/{config.LASTFM}"
						className="group-hover:text-red-500 group-focus:text-red-500"
					>
						<Lastfm />
					</SocialIcon>
				{/if}
				{#if config.GITHUB}
					<SocialIcon
						href="https://github.com/{config.GITHUB}"
						className="group-hover:text-black group-focus:text-black"
					>
						<GitHub />
					</SocialIcon>
				{/if}
				{#if config.FEDIVERSE}
					<SocialIcon
						href="https://{config.FEDIVERSE}"
						className="group-hover:text-indigo-700 group-focus:text-indigo-700"
					>
						<Mastodon />
					</SocialIcon>
				{/if}
				{#if config.DISCORD}
					<SocialIcon
						href="https://discord.com/users/{config.DISCORD}"
						className="group-hover:text-blue-600 group-focus:text-blue-600"
					>
						<Discord />
					</SocialIcon>
				{/if}
				{#if config.TWITTER}
					<SocialIcon
						href="https://x.com/{config.TWITTER}"
						className="group-hover:text-black group-focus:text-black"
					>
						<X />
					</SocialIcon>
				{/if}
				{#if config.BLUESKY}
					<SocialIcon
						href="https://bsky.app/profile/{config.BLUESKY}"
						className="group-hover:text-blue-400 group-focus:text-blue-400"
					>
						<Bluesky />
					</SocialIcon>
				{/if}
			</HeroContainer>

			<div class="flex gap-1 h-28">
				<HeroContainer className="md:w-min flex-grow">
					{#await $page.data.lastfm then lastfm}
						{#if lastfm}
							<a href={lastfm.recenttracks.track[0].url} target="_blank" class="flex space-x-2.5">
								<Image
									style="w-16 h-16 md:w-24 md:h-24"
									src={lastfm.recenttracks.track[0].image.find((_) => _.size == 'extralarge')?.[
										'#text'
									]}
									alt="Album art for {lastfm?.recenttracks?.track[0]?.name}"
								/>
								<div class="overflow-x-auto my-auto">
									<p
										class="text-lg whitespace-nowrap md:text-2xl text-neutral-300"
										in:fade|global={{ delay: 350 * 1, duration: 350 }}
									>
										{lastfm?.recenttracks?.track[0]?.name}
									</p>
									<p
										class="md:text-xl text-neutral-500"
										in:fade|global={{ delay: 350 * 2, duration: 350 }}
									>
										{lastfm?.recenttracks?.track[0]?.artist?.['#text']}
									</p>
								</div>
							</a>
						{/if}
					{/await}
				</HeroContainer>
				<HeroContainer className="md:w-min flex-col place-content-around text-neutral-400 px-3">
					<div class="flex gap-1.5">
						<Monitor></Monitor>
						<p class="inline-block my-auto text-lg whitespace-nowrap">
							{#if Date.now() - $page.data?.tabsData.desktop.lastSeen > 600000}
								0 tabs
							{:else}
								{$page.data?.tabsData.desktop.tabs} tab{$page.data?.tabsData.desktop.tabs === 1
									? ''
									: 's'}
							{/if}
						</p>
					</div>
					<div class="flex gap-1.5">
						<Laptop></Laptop>
						<p class="inline-block my-auto text-lg whitespace-nowrap">
							{#if Date.now() - $page.data?.tabsData.laptop.lastSeen > 600000}
								0 tabs
							{:else}
								{$page.data?.tabsData.laptop.tabs} tab{$page.data?.tabsData.laptop.tabs === 1
									? ''
									: 's'}
							{/if}
						</p>
					</div>
					<div class="flex gap-1.5">
						<Smartphone></Smartphone>
						<p class="inline-block my-auto text-lg whitespace-nowrap">
							{#if Date.now() - $page.data?.tabsData.phone.lastSeen > 600000}
								0 tabs
							{:else}
								{$page.data?.tabsData.phone.tabs} tab{$page.data?.tabsData.phone.tabs === 1
									? ''
									: 's'}
							{/if}
						</p>
					</div>
				</HeroContainer>
			</div>

			<HeroContainer className="justify-center flex-wrap gap-2 ">
				<ImgButton href="https://cirroskais.xyz" src="/img/buttons/cirro.png"></ImgButton>
				<ImgButton href="https://twitter.com/Porpss1" src="/img/buttons/rovin.png"></ImgButton>
				<ImgButton href="https://split.pet" src="/img/buttons/split.png"></ImgButton>
				<ImgButton href="https://tabs.split.pet" src="https://tabs.split.pet/button.svg"
				></ImgButton>
				<ImgButton href="https://m1cro.xyz/" src="/img/buttons/micro.png"></ImgButton>
				<ImgButton href="https://vea.st/" src="/img/buttons/veast.png"></ImgButton>
				<ImgButton href="https://liloandstit.ch/" src="/img/buttons/stitch.png"></ImgButton>
				<ImgButton href="https://www.mozilla.org/en-US/firefox/new/" src="/img/buttons/firefox.gif"
				></ImgButton>
				<ImgButton src="/img/buttons/lol.gif"></ImgButton>
				<ImgButton src="/img/buttons/twopaws.png"></ImgButton>
				<ImgButton src="/img/buttons/flag-gaymen.png"></ImgButton>
				<ImgButton
					href="https://x.com/yeeeesnt/status/1784352830309937225"
					src="/img/buttons/snowleopards.png"
				></ImgButton>
			</HeroContainer>
		</div>
	</div>
</div>
