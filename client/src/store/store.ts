import { persistentAtom } from "@nanostores/persistent";
import { WritableAtom } from "nanostores";

export const isLoggedIn = persistentAtom("isLoggedIn", JSON.stringify(false));

export const userDetails = persistentAtom("userDetails", JSON.stringify({}));

export const token = persistentAtom("token", "");
