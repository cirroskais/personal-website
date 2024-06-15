import { siteViews } from '$lib';
import discord from '$lib/server/discord';
import { get } from 'svelte/store';

/** @type {import("./$types").LayoutServerLoad} */
export async function load() {
	siteViews.set(get(siteViews) + 1);

	return {
		discord: await discord(),
		counter: get(siteViews)
	};
}
