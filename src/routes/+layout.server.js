import { get, inc } from '$lib/server/counter';
import discord from '$lib/server/discord';
import lastfm from '$lib/server/lastfm';

/** @type {import("./$types").LayoutServerLoad} */
export async function load() {
	inc();

	return {
		discord: await discord(),
		lastfm: await lastfm(),
		counter: get()
	};
}
