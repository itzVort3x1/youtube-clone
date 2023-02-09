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

	console.log(videoDetail);

	return (
		<div className="text-white">
			<div className="flex">
				<div className="flex-auto w-full h-96 p-12 top-12 sticky">
					<div className="rounded-2xl shadow-md shadow-white overflow-hidden">
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${videoId}`}
							controls
							height={"500px"}
							width={"100%"}
						/>
					</div>
					<div className="bg-gray-600 p-2 rounded-lg mt-5">
						<div className="">
							<h1 className="text-xl font-bold">
								{videoDetail?.snippet?.title}
							</h1>
						</div>
						<div className="flex mt-3">
							<div
								className="flex-auto flex text-gray-300 cursor-pointer"
								onClick={() => {
									window.location.href = `/channel/${videoDetail?.snippet?.channelId}`;
								}}
							>
								<span className="text-lg">
									{videoDetail?.snippet?.channelTitle}
								</span>
								<MdiCheckCircle className="mt-2 ml-2" />
							</div>
							<div className="flex-auto text-right mb-2">
								<span className="text-lg mr-5 p-2 rounded-md bg-gray-500">
									{parseInt(
										videoDetail?.statistics?.viewCount
									).toLocaleString()}{" "}
									Views
								</span>
								<span className="text-lg mr-5 p-2 rounded-md bg-gray-500">
									{parseInt(
										videoDetail?.statistics?.likeCount
									).toLocaleString()}{" "}
									likes
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-auto w-96 p-3 border-l-2 border-gray-400">
					<Videos videos={videos} grids={"grid-cols-1"} />
				</div>
			</div>
		</div>
	);
};

export default VideoDetailComponent;
