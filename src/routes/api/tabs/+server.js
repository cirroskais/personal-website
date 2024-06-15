import { TABCOUNTER_KEY } from '$env/static/private';
import { error, json } from '@sveltejs/kit';
import { tabsData } from '$lib';
import { get } from 'svelte/store';

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
	if (key !== TABCOUNTER_KEY) return error(401);

	tabsData.set(body);

	return new Response('OK');
}

/** @type { import("./$types").RequestHandler } */
export async function GET() {
	return json(get(tabsData));
}
