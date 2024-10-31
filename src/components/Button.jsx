import React from "react";

export default function Button({ onClick }) {
	return (
		<button
			onClick={onClick}
			className="px-4 py-2 bg-[#5E2866] text-white uppercase"
		>
			Read More
		</button>
	);
}
