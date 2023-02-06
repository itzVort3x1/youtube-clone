import React, { useState } from "react";
import { MdiMusicNoteOutline } from "../assets/MusicNoteIcon";
import { MdiHome } from "../assets/HomeIcons";
import { MdiCodeTags } from "../assets/CodeIcon";
import { MdiSchool } from "../assets/SchoolIcon";
import { MdiGooglePodcast } from "../assets/GraphicEqIcon";
import { MdiTelevisionPlay } from "../assets/OndemandVideoIcon";
import { MdiController } from "../assets/ControllerIcon";
import { MdiTelevisionClassic } from "../assets/LiveTvIcon";
import { MdiDumbbell } from "../assets/SportsEsportsIcon";
import { MdiHanger } from "../assets/CheckRoomIcon";
import { MdiFaceManShimmer } from "../assets/FaceRetouchingNaturalIcon";

const SideBarComponent = () => {
	const [selected, setSelected] = useState<string>("Home");

	return (
		<div className="flex flex-col">
			<button
				onClick={() => {
					setSelected("Home");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "Home" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiHome
					height={28}
					width={28}
					className={`${selected === "Home" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Home</span>
			</button>
			<button
				onClick={() => {
					setSelected("Javascipt");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "Javascipt" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiCodeTags
					height={28}
					width={28}
					className={`${
						selected === "Javascipt" ? "text-white" : "text-red-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Javascipt</span>
			</button>
			<button
				onClick={() => {
					setSelected("coding");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "coding" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiCodeTags
					height={28}
					width={28}
					className={`${selected === "coding" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Coding</span>
			</button>
			<button
				onClick={() => {
					setSelected("reactjs");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "reactjs" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiCodeTags
					height={28}
					width={28}
					className={`${
						selected === "reactjs" ? "text-white" : "text-red-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">ReactJS</span>
			</button>
			<button
				onClick={() => {
					setSelected("nextjs");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "nextjs" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiCodeTags
					height={28}
					width={28}
					className={`${selected === "nextjs" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">NextJs</span>
			</button>
			<button
				onClick={() => {
					setSelected("music");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "music" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiMusicNoteOutline
					height={28}
					width={28}
					className={`${selected === "music" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Music</span>
			</button>
			<button
				onClick={() => {
					setSelected("education");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "education" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiSchool
					height={28}
					width={28}
					className={`${
						selected === "education" ? "text-white" : "text-red-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Education</span>
			</button>
			<button
				onClick={() => {
					setSelected("podcast");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "podcast" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiGooglePodcast
					height={28}
					width={28}
					className={`${
						selected === "podcast" ? "text-white" : "text-red-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Podcast</span>
			</button>
			<button
				onClick={() => {
					setSelected("movie");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "movie" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiTelevisionPlay
					height={28}
					width={28}
					className={`${selected === "movie" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Movie</span>
			</button>
			<button
				onClick={() => {
					setSelected("gaming");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "gaming" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiController
					height={28}
					width={28}
					className={`${selected === "gaming" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Gaming</span>
			</button>
			<button
				onClick={() => {
					setSelected("live");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "live" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiTelevisionClassic
					height={28}
					width={28}
					className={`${selected === "live" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Live</span>
			</button>
			<button
				onClick={() => {
					setSelected("sports");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "sports" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiDumbbell
					height={28}
					width={28}
					className={`${selected === "sports" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Sports</span>
			</button>
			<button
				onClick={() => {
					setSelected("fashion");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "fashion" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiHanger
					height={28}
					width={28}
					className={`${
						selected === "fashion" ? "text-white" : "text-red-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Fashion</span>
			</button>
			<button
				onClick={() => {
					setSelected("beauty");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "beauty" ? "bg-red-600" : "bg-transparent"
				} p-1 rounded-3xl hover:text-white`}
			>
				<MdiFaceManShimmer
					height={28}
					width={28}
					className={`${selected === "beauty" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Beauty</span>
			</button>
		</div>
	);
};

export default SideBarComponent;
