import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "./VideoCard";

const FavouritesComponent = (props) => {
	const [videosData, setVideosData]: any = useState([]);

	function fetchData() {
		const fetchData = async () => {
			const ids = props.favourites;
			for (const id of ids) {
				await fetchFromAPI(`videos?part=snippet&id=${id.video_id}`).then(
					(data) => {
						setVideosData((prevData) => [...prevData, ...data.items]);
						// updateState(data.items[0]);
					}
				);
			}
		};
		fetchData();
		// props.favourites.forEach((item: { id: string; video_id: string }) => {
		// 	fetchFromAPI(`videos?part=snippet&id=${item.video_id}`).then((data) => {
		// 		setVideosData([...videosData, ...data.items]);
		// 		// updateState(data.items[0]);
		// 	});
		// });
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="grid lg:grid-cols-4 gap-4">
			{videosData?.length > 0 &&
				videosData?.map((video: any, index: number) => {
					return <VideoCard video={video} key={index} showBookmark={false} />;
				})}
		</div>
	);
};

export default FavouritesComponent;
