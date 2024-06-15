import { error, json } from '@sveltejs/kit';
import { tabsData } from '$lib';
import { get } from 'svelte/store';
import { devices } from '$lib/server/tabs';

/** @type { import("./$types").RequestHandler } */
export function OPTIONS() {
	return new Response('OK', {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST',
			'Access-Control-Allow-Headers': 'Authorization, Content-Type'
		}
	});
}

/** @type { import("./$types").RequestHandler } */
export async function POST({ request }) {
	const body = await request.json();
	const key = request.headers.get('Authorization');
	const device = devices.find((_) => _.key === key)?.name;
	if (!device) error(401);

	let data = get(tabsData);
	Object.assign(data, {
		[device]: { ...body, lastSeen: Date.now() }
	});
	tabsData.set(data);

	return new Response('OK');
}

/** @type { import("./$types").RequestHandler } */
export async function GET() {
	return json(get(tabsData));
}
