import { shield } from "graphql-shield";
import { isSignUpUser } from "./middlewares/isSignUpUser";
import { loginUser } from "./queries/authQueries";

export const permissions = shield({
	Query: {},
	Mutation: {
		createUser: isSignUpUser,
	},
});
