import { DISCORD_TOKEN } from '$env/static/private';
import config from '$lib/config';

/** @type {any} */
let cache;

export default async function () {
	if (cache) return cache;

	const response = await fetch(`https://discord.com/api/users/${config.DISCORD}`, {
		method: 'GET',
		headers: { Authorization: `Bot ${DISCORD_TOKEN}` }
	});

	const data = await response.json();
	cache = data;

	return data;
}
