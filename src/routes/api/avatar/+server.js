import discord from '$lib/server/discord';

/** @type { import("./$types").RequestHandler } */
export async function GET() {
	const data = await discord();
	const response = await fetch(
		`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=256`
	);

	return new Response(await response.blob());
}
