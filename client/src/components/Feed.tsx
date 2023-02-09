import React, { useState, useEffect } from "react";
import SideBarComponent from "./SideBar";
import VideosComponent from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const FeedComponent = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState<any[]>([]);

	useEffect(() => {
		if (localStorage.getItem(selectedCategory)) {
			setVideos(JSON.parse(localStorage.getItem(selectedCategory) || "[]"));
			return;
		} else {
			fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
				setVideos(data.items);
				localStorage.setItem(selectedCategory, JSON.stringify(data.items));
			});
		}
	}, [selectedCategory]);

	return (
		<div className="flex lg:flex-row sm:flex-col bg-black text-white">
			<div className="px-2 border-r-2 top-12 border-red-300 fixed min-h-screen overflow-y-auto">
				<div>
					<SideBarComponent
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				</div>
				<span className="text-sm bg-slate-300 text-black p-2 rounded-full">
					CopyRight @kaustubh 2022
				</span>
			</div>
			<div className="p-2 ml-60 mt-12">
				<span className="text-3xl capitalize underline decoration-red-600">
					{selectedCategory}
				</span>
				<span className="text-red-600 ml-2 text-3xl">videos</span>
				<br />
				<VideosComponent videos={videos} grids={"grid-cols-4"} />
			</div>
		</div>
	);
};

export default FeedComponent;
