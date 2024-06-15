import { siteViews } from '$lib';
import discord from '$lib/server/discord';
import lastfm from '$lib/server/lastfm';
import { get } from 'svelte/store';

/** @type {import("./$types").LayoutServerLoad} */
export async function load() {
	siteViews.set(get(siteViews) + 1);

	return {
		discord: await discord(),
		lastfm: await lastfm(),
		counter: get(siteViews)
	};
}
