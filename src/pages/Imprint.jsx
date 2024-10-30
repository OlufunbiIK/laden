import React from "react";
import AboveNavbar from "../components/AboveNavbar";
import Footer from "../components/Footer";
import ExtraFooter from "../components/ExtraFooter";
import ContactNavbar from "../components/ContactNavbar";
import Map from "../components/Map";
import optician from "../../src/assets/images/Container.svg";
import ImprintSetails from "../components/ImprintSetails";
import Support from "../components/Support";

export default function Imprint() {
	return (
		<div className="">
			<AboveNavbar />
			<ContactNavbar />
			<div className="">
				<div className="w-full relative">
					<img
						src={optician}
						alt="Optician"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black opacity-50"></div>
					{/* Overlay */}
					<div className="absolute inset-0 flex items-center justify-center lg:justify-right md:ml-20">
						<h1 className="text-[#5E2866] text-[14px] md:text-[30px] font-bold">
							Imprint
						</h1>
					</div>
				</div>
			</div>
			<ImprintSetails />
			<Support />
			<ExtraFooter />
			<Map />
			<Footer />
		</div>
	);
}
