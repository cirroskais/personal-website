import { error, json } from '@sveltejs/kit';

const posts = [
	{
		id: 1,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 1,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 2,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	},
	{
		id: 3,
		title: 'ima cat',
		author: 'meow',
		image:
			'https://media.discordapp.net/attachments/1151305170559434935/1160665206356197446/3.gif?ex=66256db5&is=6612f8b5&hm=03352e3de5d102f4f98a058f3a8ebba2056520770ac9001fc2ecc424abbd6953&'
	}
];

const pages = Math.ceil(posts.length / 12);

/** @type { import("./$types").RequestHandler } */
export async function GET({ url }) {
	const index = Number(url.searchParams.get('index'));
	if (isNaN(index)) error(400, 'Invalid Index');

	return json({
		index,
		pages,
		posts: posts.slice(0, 12)
	});
}
