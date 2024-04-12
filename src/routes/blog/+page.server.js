const posts = [
	{ id: 1, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 2, title: 'Some blog post', author: 'some author', image: '/blogpost.png' },
	{ id: 3, title: 'Some blog post', author: 'some author', image: '/blogpost.png' }
];

const totalPages = 66; //Math.ceil(posts.length / 9);

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	return {
		posts: posts.slice(0, 9),
		totalPages
	};
}
