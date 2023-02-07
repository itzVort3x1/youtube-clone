import React, { useState, useEffect } from "react";
import SideBarComponent from "./SideBar";
import VideosComponent from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const FeedComponent = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState<any[]>([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
			setVideos(data.items);
		});
	}, [selectedCategory]);

	return (
		<div className="flex lg:flex-row sm:flex-col bg-black text-white">
			<div className="px-2 border-r-2 border-red-300 fixed overflow-auto">
				<div>
					<SideBarComponent
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				</div>
				<span>CopyRight @kaustubh 2022</span>
			</div>
			<div className="p-2 ml-60">
				<span className="text-4xl capitalize">{selectedCategory}</span>
				<span className="text-red-600 ml-2 text-2xl">videos</span>
				<br />
				<VideosComponent videos={videos} grids={"grid-cols-4"} />
			</div>
		</div>
	);
};

export default FeedComponent;
