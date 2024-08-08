import discord from '$lib/server/discord';
import lastfm from '$lib/server/lastfm';
import { readFileSync } from 'fs';
const embedSrc = readFileSync('./static/svg/embed.svg', { encoding: 'utf-8' });

/** @param {Blob} blob */
function blobToBase64(blob) {
	return new Promise((resolve, _) => {
		const reader = new FileReader();
		reader.onloadend = () => resolve(reader.result);
		reader.readAsDataURL(blob);
	});
}

/** @type { import("./$types").RequestHandler } */
export async function GET() {
	const lastFm = await lastfm();
	const discordData = await discord();

	const avatarResponse = await fetch(
		`https://cdn.discordapp.com/avatars/${discordData.id}/${discordData.avatar}.png?size=256`
	);
	const avatar = Buffer.from(await avatarResponse.arrayBuffer()).toString('base64');

	const artResponse = await fetch(
		lastFm.recenttracks.track[0].image.find(
			(/** @type {{ size: string; }} */ _) => _.size == 'extralarge'
		)?.['#text']
	);
	const art = Buffer.from(await artResponse.arrayBuffer()).toString('base64');

	let embed = embedSrc.toString();
	embed = embed.replaceAll('{{user.avatar}}', `data:image/png;base64,${avatar}`);
	embed = embed.replaceAll('{{track.art}}', `data:image/png;base64,${art}`);
	embed = embed.replaceAll('{{track.title}}', lastFm.recenttracks.track[0].name);
	embed = embed.replaceAll('{{track.artist}}', lastFm.recenttracks.track[0].artist['#text']);

	return new Response(embed, {
		headers: {
			'Content-Type': 'image/svg+xml'
		}
	});
}
