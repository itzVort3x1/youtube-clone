import React, { useEffect, useState } from "react";
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

const SideBarComponent = (props) => {
	const [selected, setSelected] = useState<string>(props.selectedCategory);

	useEffect(() => {
		props.setSelectedCategory(selected);
	}, [selected]);

	return (
		<div className="flex flex-col">
			<button
				onClick={() => {
					setSelected("New");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "New"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiHome
					height={28}
					width={28}
					className={`${selected === "New" ? "text-white" : "text-rose-600"}`}
				/>
				<span className="ml-2 mt-0.5">Home</span>
			</button>
			<button
				onClick={() => {
					setSelected("Javascript");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "Javascript"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiCodeTags
					height={28}
					width={28}
					className={`${
						selected === "Javascript" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Javascript</span>
			</button>
			<button
				onClick={() => {
					setSelected("coding");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "coding"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiCodeTags
					height={28}
					width={28}
					className={`${
						selected === "coding" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Coding</span>
			</button>
			<button
				onClick={() => {
					setSelected("reactjs");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "reactjs"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiCodeTags
					height={28}
					width={28}
					className={`${
						selected === "reactjs" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">ReactJS</span>
			</button>
			<button
				onClick={() => {
					setSelected("nextjs");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "nextjs"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl `}
			>
				<MdiCodeTags
					height={28}
					width={28}
					className={`${
						selected === "nextjs" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">NextJs</span>
			</button>
			<button
				onClick={() => {
					setSelected("music");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "music"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiMusicNoteOutline
					height={28}
					width={28}
					className={`${selected === "music" ? "text-white" : "text-rose-600"}`}
				/>
				<span className="ml-2 mt-0.5">Music</span>
			</button>
			<button
				onClick={() => {
					setSelected("education");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "education"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiSchool
					height={28}
					width={28}
					className={`${
						selected === "education" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Education</span>
			</button>
			<button
				onClick={() => {
					setSelected("podcast");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "podcast"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiGooglePodcast
					height={28}
					width={28}
					className={`${
						selected === "podcast" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Podcast</span>
			</button>
			<button
				onClick={() => {
					setSelected("movie");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "movie"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiTelevisionPlay
					height={28}
					width={28}
					className={`${selected === "movie" ? "text-white" : "text-rose-600"}`}
				/>
				<span className="ml-2 mt-0.5">Movie</span>
			</button>
			<button
				onClick={() => {
					setSelected("gaming");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "gaming"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiController
					height={28}
					width={28}
					className={`${
						selected === "gaming" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Gaming</span>
			</button>
			<button
				onClick={() => {
					setSelected("live");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "live"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiTelevisionClassic
					height={28}
					width={28}
					className={`${selected === "live" ? "text-white" : "text-rose-600"}`}
				/>
				<span className="ml-2 mt-0.5">Live</span>
			</button>
			<button
				onClick={() => {
					setSelected("sports");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "sports"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiDumbbell
					height={28}
					width={28}
					className={`${
						selected === "sports" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Sports</span>
			</button>
			<button
				onClick={() => {
					setSelected("fashion");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "fashion"
						? "bg-rose-600"
						: "bg-transparent hover:text-rose-600 hover:bg-white"
				} p-1 rounded-3xl`}
			>
				<MdiHanger
					height={28}
					width={28}
					className={`${
						selected === "fashion" ? "text-white" : "text-rose-600"
					}`}
				/>
				<span className="ml-2 mt-0.5">Fashion</span>
			</button>
			{/* <button
				onClick={() => {
					setSelected("beauty");
				}}
				className={`flex mx-2 my-1.5 ${
					selected === "beauty"
						? "bg-red-600"
						: "bg-transparent hover:text-red-600 hover:bg-white"
				} p-1 rounded-3xl `}
			>
				<MdiFaceManShimmer
					height={28}
					width={28}
					className={`${selected === "beauty" ? "text-white" : "text-red-600"}`}
				/>
				<span className="ml-2 mt-0.5">Beauty</span>
			</button> */}
		</div>
	);
};

export default SideBarComponent;
