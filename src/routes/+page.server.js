import { tabsData } from '$lib';
import lastfm from '$lib/server/lastfm';
import { get } from 'svelte/store';

/** @type {import("./$types").LayoutServerLoad} */
export function load() {
	return {
		lastfm: lastfm(),
		tabsData: get(tabsData)
	};
}
