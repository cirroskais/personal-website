import { tabsData } from '$lib';
import lastfm from '$lib/server/lastfm';
import { get } from 'svelte/store';

/** @type {import("./$types").LayoutServerLoad} */
export async function load() {
	return {
		lastfm: await lastfm(),
		tabsData: get(tabsData)
	};
}
