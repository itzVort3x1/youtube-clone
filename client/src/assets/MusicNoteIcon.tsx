import React, { SVGProps } from "react";

export function MdiMusicNoteOutline(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3m-8 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
			></path>
		</svg>
	);
}
