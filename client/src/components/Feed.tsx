import React, { useState, useEffect } from "react";
import SideBarComponent from "./SideBar";
import VideosComponent from "./Videos";

const FeedComponent = () => {
	return (
		<div className="flex lg:flex-row sm:flex-col bg-black text-white">
			<div className="px-2 border-r-2 border-red-300">
				<div className="overflow-auto">
					<SideBarComponent />
				</div>
				<span>Copyright 2022 @kaustubh</span>
			</div>
			<div className="p-2">
				<span className="text-4xl">New</span>
				<span className="text-red-600 ml-2 text-2xl">videos</span>
				<br />
				<VideosComponent videos={[]} />
			</div>
		</div>
	);
};

export default FeedComponent;
