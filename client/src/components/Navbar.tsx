import React from "react";
import SearchBarComponent from "./SearchBar";

const NavbarComponent = () => {
	return (
		<div className="h-12 bg-black text-white sticky top-0">
			<div className="flex">
				<div className="flex-none mr-2">
					<div
						className="px-3 py-2 cursor-pointer"
						onClick={() => {
							window.location.href = "/";
						}}
					>
						<span className="font-bold text-2xl text-red-600 italic">St</span>
						<span className="font-bold text-2xl">reamy</span>
					</div>
				</div>
				<div className="flex-auto w-32"></div>
				<div className="flex-2 w-64 mt-2 mx-2">
					<SearchBarComponent />
				</div>
				{/* <div className="flex-auto w-64">03</div> */}
			</div>
		</div>
	);
};

export default NavbarComponent;
