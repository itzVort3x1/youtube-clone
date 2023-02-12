import React from "react";
import {
	demoThumbnailUrl,
	demoVideoTitle,
	demoVideoUrl,
	demoChannelTitle,
	demoChannelUrl,
} from "../utils/constants";
import { MdiCheckCircle } from "../assets/CheckCricleIcon";
import { BookmarkIcon, BookmarkIconSolid } from "../assets/BookmarkIcon";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { isLoggedIn, userDetails } from "../store/store";
import { useStore } from "@nanostores/react";
import headers from "../utils/headers";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}: {
	video: { id: { videoId: string }; snippet: any };
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const $isLoggedIn = useStore(isLoggedIn);
	const [isAuth] = useState(JSON.parse($isLoggedIn));
	const details = JSON.parse(useStore(userDetails));
	console.log(details);

	function handleAddFavourite(videoId: string) {
		var graphql = JSON.stringify({
			query:
				"mutation createBookmark($user_id: ID!, $video_id: String!){\n  createBookmark(user_id: $user_id, video_id: $video_id){id\n    video_id\n  }\n}",
			variables: { user_id: details.user.id, video_id: videoId },
		});

		var requestOptions = {
			method: "POST",
			headers: headers,
			body: graphql,
		};

		fetch("https://server.kaustubh10.workers.dev", requestOptions)
			.then((response) => response.text())
			.then((result) => {
				const { data, errors } = JSON.parse(result);
				userDetails.set(
					JSON.stringify({
						...details,
						bookmarks: [...details.bookmarks, data.createBookmark],
					})
				);
			})
			.catch((error) => console.log("error", error));
	}

	function handleRemoveFavourite(videoId: string) {
		var graphql = JSON.stringify({
			query:
				"mutation deleteBookmark($user_id: ID!, $video_id: String!){\n  deleteBookmark(user_id: $user_id, video_id: $video_id){\n    video_id\n    user_id\n  }\n}",
			variables: { user_id: details.user.id, video_id: videoId },
		});

		var requestOptions = {
			method: "POST",
			headers: headers,
			body: graphql,
		};

		fetch("https://server.kaustubh10.workers.dev", requestOptions)
			.then((response) => response.text())
			.then((result) => {
				const { data, errors } = JSON.parse(result);
				let json = details;

				json.bookmarks = json.bookmarks.filter(
					(bookmark) => bookmark.video_id !== data.deleteBookmark.video_id
				);

				userDetails.set(JSON.stringify(json));
			})
			.catch((error) => console.log("error", error));
	}

	function handleIconRender(videoId: string) {
		return details?.bookmarks?.find(
			(bookmark: any) => bookmark.video_id === videoId
		) ? (
			<div
				onClick={() => {
					if (!isAuth) {
						openModal();
					}
					handleRemoveFavourite(videoId);
				}}
				className="cursor-pointer"
			>
				<BookmarkIconSolid className="w-6 h-6 decoration-solid text-rose-500" />
			</div>
		) : (
			<div
				onClick={() => {
					if (!isAuth) {
						openModal();
					}
					handleAddFavourite(videoId);
				}}
				className="cursor-pointer"
			>
				<BookmarkIcon className="w-6 h-6 text-white decoration-solid" />
			</div>
		);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<div className="max-w-md max-h-96 min-h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700">
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
							{snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 30)} ...
						</h6>
					</a>
					<div className="flex justify-between flex-row">
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
						{handleIconRender(videoId)}
						{/* {details.bookmarks.map((item) => {
							if (item.video_id === videoId) {
								return (
									<div
										onClick={() => {
											if (!isAuth) {
												openModal();
											}
											handleAddFavourite(videoId);
										}}
										className="cursor-pointer"
									>
										<BookmarkIconSolid className="w-6 h-6 decoration-solid" />
									</div>
								);
							} else {
								return (
									<div
										onClick={() => {
											if (!isAuth) {
												openModal();
											}
											handleAddFavourite(videoId);
										}}
										className="cursor-pointer"
									>
										<BookmarkIcon className="w-6 h-6 decoration-solid" />
									</div>
								);
							}
						})} */}
					</div>
				</div>
			</div>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-white"
									>
										Not Logged In
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-200">
											Please Login to continue to use this feature
										</p>
									</div>

									<div className="mt-4 space-x-2">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
											onClick={() => {
												closeModal();
											}}
										>
											Close
										</button>
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={() => {
												window.location.href = "/login";
												closeModal();
											}}
										>
											Log In
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default VideoCard;
