import React, { Fragment, useEffect, useRef, useState } from "react";
import SearchBarComponent from "./SearchBar";
import { Menu, Transition } from "@headlessui/react";
import { isLoggedIn, token, userDetails } from "../store/store";
import { EllipsisVerticalIcon } from "../assets/Ellipsis-Vertical";
import { useStore } from "@nanostores/react";

const NavbarComponent = () => {
	const $isLoggedIn = useStore(isLoggedIn);
	const $userDetails = useStore(userDetails);
	const [isAuth] = useState(JSON.parse($isLoggedIn));
	const [details] = useState(JSON.parse($userDetails));
	return (
		<div className="h-12 bg-slate-800 border-b-2 border-gray-300 text-white fixed w-full top-0">
			<div className="flex">
				<div className="flex-none mr-2">
					<div
						className="px-3 py-2 cursor-pointer"
						onClick={() => {
							window.location.href = "/";
						}}
					>
						<span className="font-bold text-2xl text-rose-600 italic bg-white rounded-tl-md pl-2 tracking-wider rounded-bl-md">
							St
						</span>
						<span className="font-bold text-2xl bg-rose-600 rounded-tr-md rounded-br-md pr-2 tracking-wider">
							reamy
						</span>
					</div>
				</div>
				<div className="flex-auto w-32"></div>
				<div className="flex-2 w-64 mt-2 mx-2">
					<SearchBarComponent />
				</div>
				<div className="text-right">
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full justify-center rounded-md bg-slate-800 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
								{isAuth ? (
									<div className="h-8 w-8 rounded-full bg-rose-600 text-white flex items-center justify-center">
										{details.user.name.charAt(0).toUpperCase()}
									</div>
								) : (
									<EllipsisVerticalIcon className="h-6 w-6" />
								)}
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="px-1 py-1 ">
									{!isAuth && (
										<>
											<Menu.Item>
												{({ active }) => (
													<button
														onClick={() => {
															window.location.href = "/login";
														}}
														className={`${
															active
																? "bg-rose-500 text-white"
																: "text-gray-900"
														} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
													>
														Login
													</button>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<button
														onClick={() => {
															window.location.href = "/signup";
														}}
														className={`${
															active
																? "bg-rose-500 text-white"
																: "text-gray-900"
														} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
													>
														Signup
													</button>
												)}
											</Menu.Item>
										</>
									)}
									{isAuth && (
										<>
											<Menu.Item>
												{({ active }) => (
													<button
														onClick={() => {
															window.location.href = "/account";
														}}
														className={`${
															active
																? "bg-rose-500 text-white"
																: "text-gray-900"
														} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
													>
														Account
													</button>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<button
														onClick={() => {
															token.set("");
															isLoggedIn.set(JSON.stringify(false));
															window.location.href = "/login";
														}}
														className={`${
															active
																? "bg-rose-500 text-white"
																: "text-gray-900"
														} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
													>
														Logout
													</button>
												)}
											</Menu.Item>
										</>
									)}
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
				{/* <div className="flex-auto w-64">03</div> */}
			</div>
		</div>
	);
};

export default NavbarComponent;
