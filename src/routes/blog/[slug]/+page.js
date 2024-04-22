import customEmojis from '$lib/emojis.json';

export async function load({ params }) {
	const response = await fetch(
		'https://raw.githubusercontent.com/cirroskais/discord-blobmoji/master/map.json'
	);
	let emojis = Object.assign(await response.json(), customEmojis);

	return {
		emojis,
		slug: params.slug
	};
}
