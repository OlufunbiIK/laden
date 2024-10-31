import React, { useState } from "react";
import outpatient from "../../src/assets/images/Symbol.svg";
import treatment from "../../src/assets/images/Symbol (1).svg";
import intensive from "../../src/assets/images/Symbol (2).svg";
import domestic from "../../src/assets/images/Symbol (3).svg";
import Button from "./Button";

export default function Cards() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	const FourCards = [
		{
			image: outpatient,
			title: "Out Patient",
			alt: "out patient",
			detail: "We take over the outpatient care/basic care according to SGB XI for you",
		},
		{
			image: treatment,
			title: "Treatment Care",
			alt: "treatment care",
			detail: "We take over the complete treatment care according to SGB V for you",
		},
		{
			image: intensive,
			title: "Intensive Care & Ventilation care",
			alt: "intensive care",
			detail: "We are specialists in intensive care and respiratory care!",
		},
		{
			image: domestic,
			title: "Domestic Care",
			alt: "domestic care",
			detail: "We take care of your household needs!",
		},
	];
	// 	return (
	// 		<div
	// 			data-aos="flip-left"
	// 			className="flex flex-col lg:flex-row gap-1 items-center w-full justify-center my-10"
	// 		>
	// 			{FourCards.map((item, index) => (
	// 				<div
	// 					data-aos="flip-left"
	// 					data-aos-duration="1400"
	// 					key={index}
	// 					className="flex flex-col items-center space-y-5 w-[306px] h-[351px] lg:w-[250px] xl:w-[306px] xl:h-[400px] border-dashed border-[2px] border-[#5E2866] px-2"
	// 				>
	// 					<img
	// 						src={item.image}
	// 						alt={item.alt}
	// 						className="size-[72px] mt-8"
	// 					></img>
	// 					<div className="">{item.title}</div>
	// 					<div className="">{item.detail}</div>
	// 					<Button />
	// 				</div>
	// 			))}
	// 		</div>
	// 	);
	// }
	return (
		<div className="flex flex-col lg:flex-row gap-1 items-center w-full justify-center my-10">
			{FourCards.map((item, index) => (
				<div
					key={index}
					className="flex flex-col items-center space-y-5 w-[306px] h-[351px] lg:w-[250px] xl:w-[306px] xl:h-[400px] border-dashed border-[2px] border-[#5E2866] px-2"
					data-aos="flip-left"
					data-aos-duration="1400"
				>
					<img
						src={item.image}
						alt={item.alt}
						className="size-[72px] mt-8"
					/>
					<div>{item.title}</div>
					<div>{item.detail}</div>
					<Button onClick={toggleModal} />
				</div>
			))}

			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
					<div className="bg-white p-6 shadow-lg text-center w-[80%] max-w-lg">
						<h2 className="text-lg font-semibold mb-4 text-[#5E2866]">
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
							className="px-4 py-2 bg-[#5E2866] text-white"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
