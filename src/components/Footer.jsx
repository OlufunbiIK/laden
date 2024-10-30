import React from "react";
import logo from "../../src/assets/images/thelogo 3.svg";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="relative mx-auto space-y-4 px-4 bottom-0 left-0 right-0 py-10 bg-[#5E2866] h-[416px]]">
			<div className="flex flex-row items-center justify-center">
				<img src={logo} alt="" />
			</div>
			<nav>
				<ul className="flex flex-row gap-4 md:gap-10 justify-center w-full">
					<li className="text-white text-[16px]">Home</li>
					<li className="text-white text-[16px]">About</li>
					<li className="text-white text-[16px]">Contact Us</li>
					<li className="text-white text-[16px]">Services</li>
				</ul>
			</nav>
			<div className="flex flex-row gap-5 justify-center py-10 w-[80%] mx-auto border-b border-white">
				<div className="bg-[#EB38B8] p-3 rounded-full">
					<FaFacebookF className="text-white" />
				</div>
				<div className="bg-[#EB38B8] p-3 rounded-full">
					<FaTwitter className="text-white" />
				</div>
				<div className="bg-[#EB38B8] p-3 rounded-full">
					<CiLinkedin className="text-white" />
				</div>
				<div className="bg-[#EB38B8] p-3 rounded-full">
					<FiYoutube className="text-white" />
				</div>
			</div>

			<div className="text-center text-white text-[14.4px]">
				<p>© IIntensivpflegedienst Lebenskraft UG 2024 </p>
			</div>
		</div>
	);
}
