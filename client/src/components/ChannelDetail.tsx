import React, { useState, useEffect } from "react";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelComponent = () => {
	const id = window.location.pathname.split("/").pop();
	console.log(id);

	return (
		<div>
			<h1>Channel</h1>
		</div>
	);
};

export default ChannelComponent;
