import React, {
	ChangeEvent,
	useEffect,
	useRef,
	useState,
	MutableRefObject,
} from "react";
import { MaterialSymbolsSearchRounded } from "../assets/SearchIcon";

const SearchBarComponent = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const inputRef: MutableRefObject<HTMLInputElement> = useRef(null);

	useEffect(() => {
		document.addEventListener("keydown", (e: KeyboardEvent) => {
			if (e.key === "k" && e.metaKey) {
				inputRef.current.focus();
			}
		});
		return () => document.removeEventListener("keydown", () => {});
	}, []);

	return (
		<div className="flex h-8 bg-slate-300 w-auto rounded-3xl">
			<MaterialSymbolsSearchRounded
				height={28}
				width={28}
				className="mt-0.5 text-rose-600"
			/>
			<input
				className="bg-transparent focus:outline-none text-black"
				placeholder="Search..."
				value={searchTerm}
				ref={inputRef}
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
			<div className="bg-gray-400 px-1 my-1 mx-1 rounded-md">⌘+k</div>
		</div>
	);
};

export default SearchBarComponent;
