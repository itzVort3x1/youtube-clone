import React from "react";
import { MdiCheckCircle } from "../assets/CheckCricleIcon";
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";

const VideoCard = ({ channelDetail }: { channelDetail: any }) => {
	console.log(channelDetail);
	return (
		<div className="max-w-sm max-h-80 min-h-80 h-80 bg-white rounded-lg shadow dark:bg-transparent pt-10">
			<a href={`/channel/${channelDetail?.id?.channelId}`}>
				<img
					className="rounded-full mx-auto mt-2"
					src={`${
						channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
					}`}
					alt={`${channelDetail?.snippet?.title}`}
					height="180px"
					width="180px"
				/>
			</a>
			<div className="p-2 mt-2 ml-14">
				<a href={`/channel/${channelDetail?.id?.channelId}`}>
					<span className="mb-1 flex text-md font-bold tracking-tight text-gray-900 dark:text-gray-400">
						{channelDetail?.snippet?.title || demoChannelTitle}
						<MdiCheckCircle className="ml-2 mt-0.5" />
					</span>
				</a>
			</div>
			{channelDetail?.statistics?.subscriberCount && (
				<div>
					{parseInt(
						channelDetail?.statistics?.subscriberCount
					).toLocaleString()}{" "}
					Subscribers
				</div>
			)}
		</div>
	);
};

export default VideoCard;
