import React from "react";
import { useStore } from "@nanostores/react";
import { userDetails } from "../store/store";
import FavouritesComponent from "./Favourites";

const AccountCardComponent = () => {
	const details = JSON.parse(useStore(userDetails));
	return (
		<>
			<div className="mx-auto text-center max-w-sm max-h-80 min-h-80 h-80 bg-white rounded-lg dark:bg-transparent pt-10">
				<div>
					<div className="h-40 w-40 rounded-full bg-rose-600 text-white text-8xl flex items-center justify-center mx-auto mt-2">
						{details.user.name.charAt(0).toUpperCase()}
					</div>
				</div>
				<div className="mt-2">
					<span className="mb-1 flex justify-center text-xl text-md font-bold tracking-tight text-gray-900 dark:text-gray-400">
						{details.user.name}
					</span>
				</div>
				<div className="mt-2 text-gray-300">
					{parseInt(details.bookmarks.length).toLocaleString()} Favourites
				</div>
			</div>
			<div className="p-3">
				<FavouritesComponent favourites={details.bookmarks} />
			</div>
		</>
	);
};

export default AccountCardComponent;
