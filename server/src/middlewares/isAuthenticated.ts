import { rule } from "graphql-shield";
import { createGraphQLError } from "graphql-yoga";
import { APP_SECRET } from "../auth";
import jwt from "@tsndr/cloudflare-worker-jwt";

export const isAuthenticated = rule({ cache: "contextual" })(
	async (parent, args, ctx, info) => {
		const header = ctx.request.headers.get("Authorization");
		if (header !== null) {
			const token = header.split(" ")[1];
			const isValid = jwt.verify(token, APP_SECRET);
			if (!isValid) {
				return createGraphQLError("Unauthenticated user");
			}
			return true;
		}
		return createGraphQLError("Unauthenticated user");
	}
);
