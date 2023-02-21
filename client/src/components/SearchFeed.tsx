import React, { useState, useEffect } from "react";
import SideBarComponent from "./SideBar";
import VideosComponent from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useStore } from "@nanostores/react";
import { isLoggedIn } from "../store/store";
import useSWR from "swr";

const SearchFeed = () => {
	const $isLoggedIn = useStore(isLoggedIn);

	const searchTerm = window.location.pathname.split("/").pop();

	const fetcher = () =>
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((res) => res);

	const { data, mutate, error, isLoading } = useSWR(
		`/searchFeed/${searchTerm}`,
		fetcher
	);

	useEffect(() => {
		mutate();
	}, [searchTerm]);

	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;
	return (
		<div className="flex lg:flex-row sm:flex-col bg-slate-800 text-white mt-12 p-4">
			{/* <div className="px-2 border-r-2 border-red-300 fixed overflow-auto">
				<div>
					<SideBarComponent
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				</div>
				<span>CopyRight @kaustubh 2022</span>
			</div> */}
			<div className="">
				<div className="bg-gray-300 w-fit px-3 rounded-md">
					<span className="text-2xl text-black capitalize">
						Search Results for:{" "}
					</span>
					<span className="capitalize text-rose-600 ml-2 text-2xl">
						{searchTerm.replace("%20", " ")}
					</span>
				</div>
				<VideosComponent videos={data?.items} grids={"grid-cols-4"} />
			</div>
		</div>
	);
};

export default SearchFeed;
