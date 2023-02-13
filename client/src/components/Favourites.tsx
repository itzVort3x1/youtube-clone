import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "./VideoCard";
import { useStore } from "@nanostores/react";
import { userDetails } from "../store/store";

const FavouritesComponent = () => {
	const details = JSON.parse(useStore(userDetails));
	const [videosData, setVideosData]: any = useState([]);

	function fetchData() {
		const fetchData = async () => {
			const ids = details.bookmarks;
			for (const id of ids) {
				await fetchFromAPI(`videos?part=snippet&id=${id.video_id}`).then(
					(data) => {
						const newObj = {};
						newObj["id"] = { videoId: data.items[0].id };
						newObj["snippet"] = data.items[0].snippet;
						setVideosData((prevData) => [...prevData, newObj]);
					}
				);
			}
		};
		fetchData();
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="grid lg:grid-cols-4 gap-4">
				{videosData?.length > 0 &&
					videosData?.map((video: any, index: number) => {
						return <VideoCard video={video} key={index} />;
					})}
			</div>
		</>
	);
};

export default FavouritesComponent;
