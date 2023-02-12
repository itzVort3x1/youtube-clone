import { persistentAtom } from "@nanostores/persistent";
import { WritableAtom } from "nanostores";

const userDetails = {};

export const isLoggedIn = persistentAtom(
	"loggedIn",
	JSON.stringify(userDetails)
);
