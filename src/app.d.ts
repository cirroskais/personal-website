// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
interface PostsObject {
	id: number;
	title: string;
	author: string;
	image: string;
}

interface Discord {
	id: number;
	username: string;
	global_name: string;
	avatar: string;
	clan: unknown;
}

interface LastFMImage {
	size: string;
	'#text': string;
}

interface LastFMTrack {
	image: Array<LastFMImage>;
	name: string;
	artist: {
		'#text': string;
	};
}

interface LastFM {
	recenttracks: {
		track: Array<LastFMTrack>;
	};
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			posts?: Array<PostsObject>;
			discord: Discord;
			lastfm: LastFM;
			counter: number;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
