import React from "react";
import { MdiCheckCircle } from "../assets/CheckCricleIcon";
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";

const VideoCard = ({ channelDetail }: { channelDetail: any }) => {
	return (
		<div className="mx-auto text-center max-w-sm max-h-80 min-h-80 h-80 bg-white rounded-lg shadow dark:bg-transparent pt-10">
			<div>
				<a href={`/channel/${channelDetail?.id?.channelId}`}>
					<img
						className="rounded-full mx-auto mt-2"
						src={`${
							channelDetail?.snippet?.thumbnails?.high?.url ||
							demoProfilePicture
						}`}
						alt={`${channelDetail?.snippet?.title}`}
						height="150px"
						width="150px"
					/>
				</a>
			</div>
			<div className="mt-2">
				<a href={`/channel/${channelDetail?.id?.channelId}`}>
					<span className="mb-1 flex justify-center text-md font-bold tracking-tight text-gray-900 dark:text-gray-400">
						{channelDetail?.snippet?.title || demoChannelTitle}
						<MdiCheckCircle className="ml-2 mt-0.5" />
					</span>
				</a>
			</div>
			{channelDetail?.statistics?.subscriberCount && (
				<div className="mt-2 text-white">
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
