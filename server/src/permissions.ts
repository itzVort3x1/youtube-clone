import { shield, and } from "graphql-shield";
import { isSignUpUser } from "./middlewares/isSignUpUser";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export const permissions = shield({
	Query: {
		loggedInUser: isAuthenticated,
	},
	Mutation: {
		createUser: isSignUpUser,
		createBookmark: isAuthenticated,
		deleteBookmark: isAuthenticated,
	},
});
