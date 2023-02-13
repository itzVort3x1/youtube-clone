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
		<div className={`grid gap-4 ${grids} mt-3`}>
			{videos.map((video, index) => {
				console.log(video);
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
