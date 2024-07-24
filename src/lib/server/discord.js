import { DISCORD_TOKEN } from '$env/static/private';
import config from '$lib/config';

let cache = {};
setInterval(
	() => {
		cache = {};
	},
	1000 * 60 * 60 * 1
);

export default async function () {
	if (Object.keys(cache).length) return cache;

	const response = await fetch(`https://discord.com/api/users/${config.DISCORD}`, {
		method: 'GET',
		headers: { Authorization: `Bot ${DISCORD_TOKEN}` }
	});

	const data = await response.json();
	cache = data;
	return data;
}
