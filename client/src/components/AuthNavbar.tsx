import React, { Fragment, useEffect, useRef, useState } from "react";
import SearchBarComponent from "./SearchBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "../assets/ChevronDown";
import { EllipsisVerticalIcon } from "../assets/Ellipsis-Vertical";

const NavbarComponent = () => {
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
						<span className="font-bold text-2xl text-red-600 italic bg-white rounded-tl-md pl-2 tracking-wider rounded-bl-md">
							St
						</span>
						<span className="font-bold text-2xl bg-red-600 rounded-tr-md rounded-br-md pr-2 tracking-wider">
							reamy
						</span>
					</div>
				</div>
				{/* <div className="flex-auto w-64">03</div> */}
			</div>
		</div>
	);
};

export default NavbarComponent;
