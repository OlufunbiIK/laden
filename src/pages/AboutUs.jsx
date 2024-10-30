import React from "react";
import AboveNavbar from "../components/AboveNavbar";
import Footer from "../components/Footer";
import ExtraFooter from "../components/ExtraFooter";
import ContactNavbar from "../components/ContactNavbar";
import Map from "../components/Map";
import optician from "../../src/assets/images/Container.svg";

export default function AboutUs() {
	return (
		<div className="">
			<AboveNavbar />
			<ContactNavbar />
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
						About Us
					</h1>
				</div>
			</div>
			<div className="space-y-8 px-2 md:px-20 py-8">
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">
						About Intensivpflegedienst Lebenskraft
					</h1>
					<p className="text-[18px]">
						Founded by Ms. Leyla Kalinci on April 27, 2024,
						Intensivpflegedienst Lebenskraft is committed to
						providing exceptional, home-based intensive care
						services. We believe in delivering personalized,
						patient-centered care while promoting independence and
						dignity for every individual.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">Our Services</h1>
					<p className="text-[18px]">
						We offer specialized intensive care within the comfort
						of patients' homes, ensuring high-quality medical
						support tailored to each person's needs.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">
						Care Contracts & Area
					</h1>
					<p className="text-[18px]">
						Our services are backed by collaborations with major
						care funds and social welfare providers, and we proudly
						serve the Western North Rhine-Westphalia region.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">
						Our Philosophy
					</h1>
					<p className="text-[18px]">
						We blend humanity and business success, focusing on
						compassionate care that benefits both patients and our
						organization.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">Core Values</h1>
					<p className="text-[18px]">
						Our values—openness, trust, respect, and
						inclusivity—guide everything we do, ensuring that all
						individuals are treated with equality, regardless of
						background.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">
						Patient Empowerment
					</h1>
					<p className="text-[18px]">
						Patients are empowered to make their own decisions, with
						their personal histories and preferences shaping their
						care plans.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">
						Employee-Centered Leadership
					</h1>
					<p className="text-[18px]">
						We offer long-term employment, continuous professional
						development, and foster a team-oriented environment with
						flexible work schedules.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">
						Commitment to Quality
					</h1>
					<p className="text-[18px]">
						We ensure high standards through regular training based
						on the latest nursing science, delivering safe,
						effective, and compassionate care.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">
						Sustainability & Efficiency
					</h1>
					<p className="text-[18px]">
						Our services are designed to be both economically
						sustainable and compliant with legal standards, ensuring
						fair and efficient care delivery.
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-[#5E2866] text-[24px]">
						Excellence in Care
					</h1>
					<p className="text-[18px]">
						We follow strict performance principles, focusing on
						effectiveness, efficiency, and legal compliance,
						guaranteeing top-tier care for all patients.
					</p>
				</div>
			</div>
			<ExtraFooter />
			<Map />
			<Footer />
		</div>
	);
}
