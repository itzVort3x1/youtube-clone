import React, { ChangeEvent, useEffect, useState } from "react";
import { MaterialSymbolsSearchRounded } from "../assets/SearchIcon";

const SearchBarComponent = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");

	return (
		<div className="flex h-8 bg-slate-300 w-auto rounded-3xl">
			<MaterialSymbolsSearchRounded
				height={28}
				width={28}
				color="red"
				className="mt-0.5"
			/>
			<input
				className="bg-transparent focus:outline-none text-black"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e: ChangeEvent<HTMLInputElement>): void => {
					setSearchTerm(e.target.value);
				}}
				onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void => {
					if (e.key === "Enter") {
						window.location.href = `/search/${searchTerm}`;
						localStorage.setItem("searchTerm", searchTerm);
					}
				}}
			/>
		</div>
	);
};

export default SearchBarComponent;
