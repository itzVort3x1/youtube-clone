import React from "react";
import {
	demoThumbnailUrl,
	demoVideoTitle,
	demoVideoUrl,
	demoChannelTitle,
	demoChannelUrl,
} from "../utils/constants";
import { MdiCheckCircle } from "../assets/CheckCricleIcon";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}: {
	video: { id: { videoId: string }; snippet: any };
}) => {
	console.log(snippet);
	return (
		<div className="max-w-sm max-h-96 min-h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700">
			<a href={`${videoId ? `/video/${videoId}` : demoVideoUrl}`}>
				<img
					className="rounded-t-lg"
					src={`${
						snippet?.thumbnails?.high
							? snippet?.thumbnails?.high?.url
							: demoThumbnailUrl
					}`}
					alt={`${snippet?.title}`}
				/>
			</a>
			<div className="p-2">
				<a href={`${videoId ? `/video/${videoId}` : demoVideoUrl}`}>
					<h6 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
						{snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)} ...
					</h6>
				</a>
				<a
					href={`${
						snippet.channelId
							? `/channel/${snippet?.channelId}`
							: demoChannelUrl
					}`}
				>
					<span className="mb-1 flex text-xs font-bold tracking-tight text-gray-900 dark:text-gray-400">
						{snippet?.channelTitle || demoChannelTitle}
						<MdiCheckCircle className="ml-2 mt-0.5" />
					</span>
				</a>
			</div>
		</div>
	);
};

export default VideoCard;
