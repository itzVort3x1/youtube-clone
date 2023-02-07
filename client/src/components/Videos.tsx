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
	console.log(grids);
	return (
		<div className={`grid gap-4 ${grids}`}>
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
