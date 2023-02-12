import { conn } from "../utils/dbConnection";
import { hash, compare } from "bcryptjs";
import { createGraphQLError } from "graphql-yoga";
import jwt from "@tsndr/cloudflare-worker-jwt";
import { APP_SECRET } from "../auth";
import { validateEmail } from "../middlewares/emailValidation";

export async function loginUser(
	parent: unknown,
	args: { email: string; password: string }
) {
	if (!validateEmail(args.email)) {
		return createGraphQLError("Invalid Email");
	}
	const results = await conn.execute(
		`SELECT * FROM youtubeUsers WHERE email = "${args.email}"`
	);
	if (!results.rows.length) {
		return createGraphQLError("User with this email does not exist");
	}
	const user: any = results.rows[0];
	const valid = await compare(args.password, user.password);
	if (!valid) {
		return createGraphQLError("Invalid Password");
	}

	const token = await jwt.sign({ user: user.id }, APP_SECRET);

	return { token, user };
}

// this returns the logged in users details along with their bookmarked videos
export async function loggedInUser(
	parent: unknown,
	args: { id: string },
	ctx: any
) {
	const userId = args.id;
	if (!userId) {
		return createGraphQLError("Not Authenticated");
	}
	const results = await conn.execute(
		`SELECT * FROM youtubeUsers WHERE id = ${parseInt(userId)}`
	);
	const bookmarks = await conn.execute(
		`SELECT * FROM youtubeBookmarks WHERE user_id = ${parseInt(userId)}`
	);

	const user: any = results.rows[0];
	return { user, bookmarks: bookmarks.rows };
}
