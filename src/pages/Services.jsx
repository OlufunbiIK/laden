import React from "react";
import AboveNavbar from "../components/AboveNavbar";
import Footer from "../components/Footer";
import ExtraFooter from "../components/ExtraFooter";
import ContactNavbar from "../components/ContactNavbar";
import Map from "../components/Map";
import optician from "../../src/assets/images/Container.svg";
import Support from "../components/Support";
import ServiceCards from "../components/ServicesCards";

export default function Services() {
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
							Services
						</h1>
					</div>
				</div>
			</div>
			<div className="md:w-[70%] md:mx-auto lg:mx-0 md:text-center lg:text-left px-2 space-y-5">
				<div className="space-y-4 2xl:mx-14">
					<h1 className="text-[#5E2866] text-[24px] my-2">
						VENTILATORY CARE AND INTENSIVE CARE
					</h1>
					<p className="text-[14.4px]">
						Advice and organization We take care of the organization
						and support from the clinic to the patient's home.
						Support in obtaining medical equipment and accompaniment
						to appointments outside the home are guaranteed.
					</p>
					<p className="text-[14.4px]">
						You can discuss your worries and fears with us –
						together we will find solutions to the challenges that
						can arise in care and everyday situations.
					</p>
				</div>
			</div>
			<ServiceCards />
			<Support />
			<ExtraFooter />
			<Map />
			<Footer />
		</div>
	);
}
