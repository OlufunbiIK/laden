import React from "react";
import optician from "../../src/assets/images/Container.svg";

export default function ContactSlider() {
	return (
		<div>
			<div
				data-aos="zoom-in"
				data-aos-duration="1400"
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
					<h1 className="text-[#5E2866] text-[14px] md:text-[30px] font-bold">
						Contact Us
					</h1>
				</div>
			</div>
		</div>
	);
}
