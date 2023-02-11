import { rule } from "graphql-shield";
import { createGraphQLError } from "graphql-yoga";
import { validateEmail } from "./emailValidation";

export const isSignUpUser = rule({ cache: "contextual" })(
	async (parent, args, ctx, info) => {
		console.log(args);
		if (args.email == "" || args.name == "" || args.password == "") {
			return createGraphQLError("Please Enter all the Fields");
		}
		if (!validateEmail(args.email)) {
			return createGraphQLError("Invalid Email");
		}
		return true;
	}
);
