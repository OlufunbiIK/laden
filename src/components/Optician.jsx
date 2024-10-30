import React from "react";
import optician from "../../src/assets/images/Screenshot 2024-10-29 at 09.03.29.png";

export default function Optician() {
	return (
		<div
			data-aos="zoom-in"
			data-aos-duration="700"
			className="w-full relative"
		>
			<img
				src={optician}
				alt="Optician"
				className="w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			{/* Overlay */}
			<div className="absolute inset-0 flex items-center justify-center lg:justify-right md:ml-20">
				<h1 className="text-white text-[14px] md:text-[30px] font-bold">
					At Intensivpflegedienst Lebenskraft, we are <br /> dedicated
					to enhancing lives with care that <br /> is compassionate,
					respectful, and of the <br /> highest quality.
				</h1>
			</div>
		</div>
	);
}
