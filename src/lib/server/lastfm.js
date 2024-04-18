import { LASTFM_KEY } from '$env/static/private';
import config from '$lib/config';

const BASE_URL = 'https://ws.audioscrobbler.com/2.0';
const METHOD = 'user.getRecentTracks&limit=1';

export default async function () {
	const response = await fetch(
		`${BASE_URL}/?method=${METHOD}&user=${config.LASTFM}&api_key=${LASTFM_KEY}&format=json`,
		{
			method: 'GET',
			headers: { 'User-Agent': 'cirroskais/2.0' }
		}
	);

	return response.json();
}
