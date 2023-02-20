import React, { useState, useEffect } from "react";
import SideBarComponent from "./SideBar";
import VideosComponent from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useStore } from "@nanostores/react";
import { isLoggedIn, token } from "../store/store";
import {} from "../store/store";
import useSWR from "swr";

const FeedComponent = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");

	const $token = useStore(token);
	const $isLoggedIn = useStore(isLoggedIn);

	const fetcher = () =>
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
			(res) => res
		);

	const { data, mutate, error, isLoading } = useSWR("/feed", fetcher);
	useEffect(() => {
		// here mutate is used to call the useSWR hook again
		mutate();
		// setVideos(data?.items);
		// if (localStorage.getItem(selectedCategory)) {
		// 	setVideos(JSON.parse(localStorage.getItem(selectedCategory) || "[]"));
		// 	return;
		// } else {
		// 	fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
		// 		setVideos(data.items);
		// 		localStorage.setItem(selectedCategory, JSON.stringify(data.items));
		// 	});
		// }
	}, [selectedCategory]);

	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;
	return (
		<div className="flex lg:flex-row sm:flex-col bg-slate-800 text-white">
			<div className="px-2  bg-gray-700 w-52 rounded-lg mx-2 my-2 top-12 fixed overflow-y-hidden">
				<div>
					<SideBarComponent
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				</div>
				{/* <span className="text-sm bg-slate-300 text-black p-2 rounded-full">
					CopyRight @kaustubh 2022
				</span> */}
			</div>
			<div className="p-2 ml-60 mt-12">
				<span className="text-3xl capitalize underline decoration-rose-600">
					{selectedCategory}
				</span>
				<span className="text-rose-600 ml-2 text-3xl">videos</span>
				<br />
				<VideosComponent videos={data?.items} grids={"grid-cols-4"} />
			</div>
		</div>
	);
};

export default FeedComponent;
