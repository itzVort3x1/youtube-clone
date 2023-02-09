import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelComponent = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);

	const id = window.location.pathname.split("/").pop();

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
			setChannelDetail(data?.items[0]);
		});
		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => {
				setVideos(data?.items);
			}
		);
	}, [id]);

	return (
		<div className="min-h-full bg-black">
			<div
				style={{
					background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
					height: "300px",
					zIndex: 10,
				}}
			></div>
			<div style={{ marginTop: "-100px" }}>
				<ChannelCard channelDetail={channelDetail} />
			</div>
			<div className="p-5">
				<Videos videos={videos} grids="grid-cols-4" />
			</div>
		</div>
	);
};

export default ChannelComponent;
