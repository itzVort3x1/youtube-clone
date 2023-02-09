import React, { useState, useEffect } from "react";
import SideBarComponent from "./SideBar";
import VideosComponent from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
	const [videos, setVideos] = useState<any[]>([]);

	const searchTerm = window.location.pathname.split("/").pop();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);

	return (
		<div className="flex lg:flex-row sm:flex-col bg-black text-white mt-12 p-4">
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
				<span className="text-2xl capitalize">Search Results for: </span>
				<span className="capitalize text-red-600 ml-2 text-2xl">
					{searchTerm.replace("%20", " ")}
				</span>
				<br />
				<VideosComponent videos={videos} grids={"grid-cols-4"} />
			</div>
		</div>
	);
};

export default SearchFeed;
