import { DISCORD_TOKEN } from '$env/static/private';
import config from '$lib/config';

export default async function () {
	const response = await fetch(`https://discord.com/api/users/${config.DISCORD}`, {
		method: 'GET',
		headers: { Authorization: `Bot ${DISCORD_TOKEN}` }
	});

	return await response.json();
}
