import { conn } from "../utils/dbConnection";
import { createGraphQLError } from "graphql-yoga";

export async function bookmarkMutation(
	parent: unknown,
	args: { id: string; video_id: string; user_id: string }
) {
	const bookmark = {
		video_id: args.video_id,
		user_id: args.user_id,
	};
	const query =
		"INSERT INTO youtubeBookmarks (`video_id`, `user_id`) VALUES (?, ?)";
	const params: string[] = [args.video_id, args.user_id];
	await conn.execute(query, params);

	const query2 = `SELECT * FROM youtubeBookmarks WHERE video_id = "${args.video_id}" AND user_id = ${args.user_id}`;
	const results = await conn.execute(query2);
	return results.rows[0];
}

export async function deleteBookmark(
	parent: unknown,
	args: { id: string; video_id: string; user_id: string }
) {
	const bookmark = {
		video_id: args.video_id,
		user_id: args.user_id,
	};
	const query = `DELETE FROM youtubeBookmarks WHERE video_id = "${args.video_id}" AND user_id = "${args.user_id}"`;
	await conn.execute(query);
	return bookmark;
}
