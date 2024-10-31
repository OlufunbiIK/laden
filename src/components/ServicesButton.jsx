// import React from "react";

// export default function ServicesButton() {
// 	return (
// 		<div className="flex justify-end w-full">
// 			<button
// 				type="submit"
// 				className="bg-white text-[#BB2E94] rounded-br-[20px] whitespace-nowrap my-3 px-4 py-2 text-[14px]"
// 			>
// 				READ MORE
// 			</button>
// 		</div>
// 	);
// }
import React from "react";

export default function Button({ onClick }) {
	return (
		<button
			onClick={onClick}
			className="bg-white text-[#BB2E94] uppercase rounded-br-[20px] whitespace-nowrap my-3 px-4 py-2 text-[14px]"
		>
			Read More
		</button>
	);
}
