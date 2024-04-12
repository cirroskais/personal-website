// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
interface PostsObject {
	id: number;
	title: string;
	author: string;
	image: string;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			posts?: Array<PostsObject>;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
