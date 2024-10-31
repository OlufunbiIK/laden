import React, { useState } from "react";
import outpatient from "../../src/assets/images/Symbol.svg";
import treatment from "../../src/assets/images/Symbol (1).svg";
import intensive from "../../src/assets/images/Symbol (2).svg";
import domestic from "../../src/assets/images/Symbol (3).svg";
import ServicesButton from "./ServicesButton";

export default function ServiceCards() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function toggleModal() {
		setIsModalOpen(!isModalOpen);
	}
	const FourCards = [
		{
			image: outpatient,
			title: "Treatment care",
			alt: "out patient",
			detail: "Injections, dressing care, putting on and taking off compression stockings, administering eye drops, catheterization and catheter care, stroma treatment, PEG care, enemas, blood pressure measurement, blood sugar determination, medication administration and monitoring and wound care.",
		},
		{
			image: treatment,
			title: " Outpatient Care",
			alt: "treatment care",
			detail: "Injections, dressing care, putting on and taking off compression stockings, administering eye drops, catheterization and catheter care, stroma treatment, PEG care, enemas, blood pressure measurement, blood sugar determination, medication administration and monitoring and wound care.",
		},
		{
			image: intensive,
			title: "Treatment Care",
			alt: "intensive care",
			detail: "Injections, dressing care, putting on and taking off compression stockings, administering eye drops, catheterization and catheter care, stroma treatment, PEG care, enemas, blood pressure measurement, blood sugar determination, medication administration and monitoring and wound care.",
		},
		{
			image: domestic,
			title: "Domestic Care",
			alt: "domestic care",
			detail: "As part of our domestic care services, we provide support with everyday household tasks, such as cleaning the apartment, washing and ironing clothes and laundry, and doing the shopping.",
		},
	];
	return (
		<div className="flex flex-col lg:flex-row gap-4 lg:gap-1 xl:gap-4 items-center w-full justify-center my-10">
			{FourCards.map((item, index) => (
				<div
					data-aos="flip-left"
					data-aos-duration="1400"
					key={index}
					className="flex flex-col items-start space-y-3 w-[306px] h-[351px] lg:w-[250px] xl:w-[306px] xl:h-[400px] bg-[#BB2E94] border-[2px] border-[#BB2E94] px-2 my-2 md:my-8 md:w-[400px] md:h-[300px] lg:h-[351px] rounded-br-[20px]"
				>
					{/* Move image container to the left */}
					<div className="w-10 h-10 rounded-full  mt-2 bg-white flex items-center justify-center ml-4">
						<img
							src={item.image}
							alt={item.alt}
							className="w-5 h-5 object-contain"
						/>
					</div>
					<div className="ml-4 text-white">{item.title}</div>
					<div className="ml-4 text-[12px] text-white">
						{item.detail}
					</div>
					<div className="ml-4">
						<ServicesButton onClick={toggleModal} />
					</div>
				</div>
			))}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
					<div className="bg-white p-6 shadow-lg text-center w-[80%] max-w-lg">
						<h2 className="text-lg font-semibold mb-4 text-[#BB2E94]">
							Our Comprehensive Care Services
						</h2>
						<p className="text-sm mb-4">
							We provide seamless support from the clinic to your
							home, ensuring continuous and compassionate care.
						</p>
						<ul className="list-disc list-inside text-left mb-6 space-y-2">
							<li>
								In-home medical support, including check-ups and
								follow-ups
							</li>
							<li>
								Assistance with medical equipment setup and
								usage
							</li>
							<li>
								Companion services for appointments outside the
								home
							</li>
							<li>24/7 emergency response support</li>
							<li>
								Customized care plans tailored to individual
								needs
							</li>
						</ul>
						<button
							onClick={toggleModal}
							className="text-white bg-[#BB2E94] uppercase rounded-br-[20px] whitespace-nowrap my-3 px-4 py-2 text-[14px]"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
