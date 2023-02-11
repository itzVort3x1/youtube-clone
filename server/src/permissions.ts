import { shield } from "graphql-shield";
import { isSignUpUser } from "./middlewares/isSignUpUser";

export const permissions = shield({
	Query: {},
	Mutation: {
		createUser: isSignUpUser,
	},
});
