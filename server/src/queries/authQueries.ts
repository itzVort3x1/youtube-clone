import { conn } from "../utils/dbConnection";
import { hash, compare } from "bcryptjs";
import { createGraphQLError } from "graphql-yoga";
import jwt from "@tsndr/cloudflare-worker-jwt";
import { APP_SECRET } from "../auth";

export function hello(): string {
	return "Hello world!";
}

export async function loginUser(
	parent: unknown,
	args: { email: string; password: string }
) {
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
