import { makeExecutableSchema } from "@graphql-tools/schema";
import { createGraphQLError } from "graphql-yoga";
import { applyMiddleware } from "graphql-middleware";
import { APP_SECRET } from "./auth";
import { compare, hash } from "bcryptjs";
import jwt from "@tsndr/cloudflare-worker-jwt";

// Imports for Permissions
import { permissions } from "./permissions";

// Imports for Types
import { typeDefinitions } from "./types/typeDefinitions";

// Imports for Queries
import { loginUser, loggedInUser } from "./queries/authQueries";

// Imports for Mutations
import { createUser } from "./mutations/authMutation";
import { bookmarkMutation, deleteBookmark } from "./mutations/bookmarkMutation";

// Imports for middlewares
import { validateEmail } from "./middlewares/emailValidation";
import { isValidURL } from "./middlewares/urlValidation";

const resolvers = {
	Query: {
		loginUser: loginUser,
		loggedInUser: loggedInUser,
	},
	Mutation: {
		createUser: createUser,
		createBookmark: bookmarkMutation,
		deleteBookmark: deleteBookmark,
	},
};

// const isLoginValidation = rule({ cache: "contextual" })(
// 	async (parent, args, ctx, info) => {
// 		if (!validateEmail(args.email)) {
// 			return createGraphQLError("Invalid Email");
// 		}

// 		return true;
// 	}
// );

// const isSignUpUser = rule({ cache: "contextual" })(
// 	async (parent, args, ctx, info) => {
// 		console.log(args);
// 		if (
// 			args.email == "" ||
// 			args.name == "" ||
// 			args.password == "" ||
// 			args.Org_name == ""
// 		) {
// 			return createGraphQLError("Please Enter all the Fields");
// 		}
// 		if (!validateEmail(args.email)) {
// 			return createGraphQLError("Invalid Email");
// 		}
// 		return true;
// 	}
// );

// const isValidShortcut = rule({ cache: "contextual" })(
// 	async (parent, args, ctx, info) => {
// 		if (args.snippet == "o/") {
// 			return createGraphQLError("Please Fill the Snippet field");
// 		}
// 		if (args.url == "") {
// 			return createGraphQLError("Please Fill the url field");
// 		}
// 		// if(!isValidURL(args.url)){
// 		// 	return createGraphQLError('Please Enter a Valid URL');
// 		// }
// 		return true;
// 	}
// );

// const authenticateUser = rule({ cache: "contextual" })(
// 	async (parent, args, ctx, info) => {
// 		const header = ctx.request.headers.get("Authorization");
// 		if (header !== null) {
// 			// 1
// 			const token = header.split(" ")[1];
// 			// 2
// 			console.log(token);
// 			const isValid = jwt.verify(token, APP_SECRET);
// 			if (!isValid) {
// 				return createGraphQLError("Unauthenticated user");
// 			}
// 			return true;
// 		}

// 		return createGraphQLError("Unauthenticated Users");
// 		// }
// 	}
// );

const schema = makeExecutableSchema({
	resolvers: [resolvers],
	typeDefs: [typeDefinitions],
});
export const schemaWithPermissions = applyMiddleware(schema, permissions);
