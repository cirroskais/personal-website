import { writable } from 'svelte/store';

export const siteViews = writable(0);

export const tabsData = writable({
	tabs: 0,
	windows: 0
});
