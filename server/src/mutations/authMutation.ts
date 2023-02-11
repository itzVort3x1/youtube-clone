import { conn } from "../utils/dbConnection";
import { hash } from "bcryptjs";
import jwt from "@tsndr/cloudflare-worker-jwt";
import { APP_SECRET } from "../auth";
import { createGraphQLError } from "graphql-yoga";

export function hello(): string {
	return "Hello world!";
}

export async function createUser(
	parent: unknown,
	args: { name: string; email: string; password: string }
) {
	const newUser = {
		name: args.name,
		email: args.email,
		password: args.password,
	};

	const result = await conn.execute(
		`SELECT * from youtubeUsers where email = "${args.email}"`
	);
	if (result.rows.length) {
		return createGraphQLError("User already exists");
	}

	const password = await hash(args.password, 10);
	const query =
		"INSERT INTO youtubeUsers (`name`, `email`, `password`) VALUES (?, ?, ?)";
	const params: string[] = [args.name, args.email, password];

	await conn.execute(query, params);
	const token: string = await jwt.sign({ user: newUser.email }, APP_SECRET);

	return { token, newUser };
}
