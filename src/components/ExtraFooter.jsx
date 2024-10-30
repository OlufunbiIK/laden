import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function ExtraFooter() {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="1000"
			className="flex flex-col my-4 lg:flex-row justify-between items-start lg:items-center gap-8 px-4 md:mx-20 lg:p-12"
		>
			{/* Address Section */}
			<div className="flex flex-col items-start">
				<div className="flex items-center space-x-2">
					<div className="w-2 h-6 bg-[#5E2866]"></div>
					<h2 className="text-lg font-semibold">Address</h2>
				</div>
				<hr className="w-full border-t-2 border-[#5E2866] mt-1 mb-2" />
				<p>
					Friedrich Wilhelm Street 3, 47051
					<br />
					Duisburg
				</p>
			</div>

			{/* Contact Section */}
			<div className="flex flex-col items-start">
				<div className="flex items-center space-x-2">
					<div className="w-2 h-6 bg-[#5E2866]"></div>
					<h2 className="text-lg font-semibold">Contact</h2>
				</div>
				<hr className="w-full border-t-2 border-[#5E2866] mt-1 mb-2" />
				<div className="flex items-center space-x-2">
					<FaPhone />
					<p>02151 65 99 998</p>
				</div>
				<div className="flex items-center space-x-2">
					<FaEnvelope />
					<p>Intensivpflegedienst-lebenskraft@web.de</p>
				</div>
			</div>

			{/* Emergency Contact Section */}
			<div className="flex flex-col items-start">
				<div className="flex items-center space-x-2">
					<div className="w-2 h-6 bg-[#5E2866]"></div>
					<h2 className="text-lg font-semibold">
						We are always reachable via our emergency phone
					</h2>
				</div>
				<hr className="w-full border-t-2 border-[#5E2866] mt-1 mb-2" />
				<p className="max-w-sm text-[16px]">
					At Intensivpflegedienst Lebenskraft, we are dedicated to
					enhancing lives with care that is compassionate, respectful,
					and of the highest quality.
				</p>
			</div>
		</div>
	);
}
