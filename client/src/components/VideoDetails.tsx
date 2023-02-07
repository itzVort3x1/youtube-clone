import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import { MdiCheckCircle } from "../assets/CheckCricleIcon";

const VideoDetailComponent = () => {
	const videoId: string = window.location.pathname.split("/").pop();
	const [videoDetail, setVideoDetail] = useState<any>({});
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(
			`videos?part=contentDetails,snippet,statistics&id=${videoId}`
		).then((data) => {
			console.log(data.items[0]);
			setVideoDetail(data.items[0]);
		});
		fetchFromAPI(
			`search?part=snippet&relatedToVideoId=${videoId}&type=video`
		).then((data) => {
			console.log(data);
			setVideos(data.items);
		});
	}, [videoId]);

	return (
		<div className="text-white">
			<div className="flex">
				<div className="flex-auto w-full h-96 p-5 top-12 sticky">
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${videoId}`}
						controls
						height={"500px"}
						width={"100%"}
					/>
					<div className="mt-2">
						<h1 className="text-xl font-bold">{videoDetail?.snippet?.title}</h1>
					</div>
					<div className="flex mt-3">
						<div
							className="flex-auto flex text-gray-300"
							onClick={() => {
								window.location.href = `/channel/${videoDetail?.snippet?.channelId}`;
							}}
						>
							<span className="text-lg">
								{videoDetail?.snippet?.channelTitle}
							</span>
							<MdiCheckCircle className="mt-2 ml-2" />
						</div>
						<div className="flex-auto text-right">
							<span className="text-lg pr-5">
								{parseInt(videoDetail?.statistics?.viewCount).toLocaleString()}{" "}
								Views
							</span>
							<span className="text-lg pr-5">
								{parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}{" "}
								likes
							</span>
						</div>
					</div>
				</div>
				<div className="flex-auto w-96 p-3">
					<Videos videos={videos} grids={"grid-cols-1"} />
				</div>
			</div>
		</div>
	);
};

export default VideoDetailComponent;
