import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const VideosComponent = ({
	videos,
	grids,
}: {
	videos: any[];
	grids: string;
}) => {
	return (
		<div className={`grid gap-4 ${grids} md:grid-cols-4 sm:grid-cols-1`}>
			{videos.map((video, index) => {
				return (
					<div key={index}>
						{video.id.videoId && <VideoCard video={video} />}
						{video.id.channelId && <ChannelCard channelDetail={video} />}
						{video.id.playlistId && <VideoCard video={video} />}
					</div>
				);
			})}
		</div>
	);
};

export default VideosComponent;
