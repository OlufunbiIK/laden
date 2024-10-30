// // import React from "react";
// // import outpatient from "../../src/assets/images/Symbol.svg";
// // import treatment from "../../src/assets/images/Symbol (1).svg";
// // import intensive from "../../src/assets/images/Symbol (2).svg";
// // import domestic from "../../src/assets/images/Symbol (3).svg";
// // import ServicesButton from "./ServicesButton";
// // export default function ServiceCards() {
// // 	const FourCards = [
// // 		{
// // 			image: outpatient,
// // 			title: "Out Patient",
// // 			alt: "out patient",
// // 			detail: "We take over the outpatient care/basic care according to SGB XI for you",
// // 		},
// // 		{
// // 			image: treatment,
// // 			title: "Treatment Care",
// // 			alt: "treatment care",
// // 			detail: "We take over the complete treatment care according to SGB V for you",
// // 		},
// // 		{
// // 			image: intensive,
// // 			title: "Intensive Care & Ventilation care",
// // 			alt: "intensive care",
// // 			detail: "We are specialists in intensive care and respiratory care!",
// // 		},
// // 		{
// // 			image: domestic,
// // 			title: "Domestic Care",
// // 			alt: "domestic care",
// // 			detail: "We take care of your household needs!",
// // 		},
// // 	];
// // 	return (
// // 		<div className="flex flex-col lg:flex-row gap-1 items-center w-full justify-center my-10">
// // 			{FourCards.map((item, index) => (
// // 				<div
// // 					key={index}
// // 					className="flex flex-col items-center space-y-5 w-[306px] h-[351px] lg:w-[250px] bg-[#BB2E94] border-[2px] border-[#BB2E94] px-2"
// // 				>
// // 					<img
// // 						src={item.image}
// // 						alt={item.alt}
// // 						className="size-[72px] mt-8"
// // 					></img>
// // 					<div className="">{item.title}</div>
// // 					<div className="">{item.detail}</div>
// // 					<ServicesButton />
// // 				</div>
// // 			))}
// // 		</div>
// // 	);
// // }
// import React from "react";
// import outpatient from "../../src/assets/images/Symbol.svg";
// import treatment from "../../src/assets/images/Symbol (1).svg";
// import intensive from "../../src/assets/images/Symbol (2).svg";
// import domestic from "../../src/assets/images/Symbol (3).svg";
// import ServicesButton from "./ServicesButton";

// export default function ServiceCards() {
// 	const FourCards = [
// 		{
// 			image: outpatient,
// 			title: "Out Patient",
// 			alt: "out patient",
// 			detail: "We take over the outpatient care/basic care according to SGB XI for you",
// 		},
// 		{
// 			image: treatment,
// 			title: "Treatment Care",
// 			alt: "treatment care",
// 			detail: "We take over the complete treatment care according to SGB V for you",
// 		},
// 		{
// 			image: intensive,
// 			title: "Intensive Care & Ventilation care",
// 			alt: "intensive care",
// 			detail: "We are specialists in intensive care and respiratory care!",
// 		},
// 		{
// 			image: domestic,
// 			title: "Domestic Care",
// 			alt: "domestic care",
// 			detail: "We take care of your household needs!",
// 		},
// 	];
// 	return (
// 		<div className="flex flex-col lg:flex-row gap-1 items-center w-full justify-center my-10">
// 			{FourCards.map((item, index) => (
// 				<div
// 					key={index}
// 					className="flex flex-col items-center space-y-5 w-[306px] h-[351px] lg:w-[250px] bg-[#BB2E94] border-[2px] border-[#BB2E94] px-2"
// 				>
// 					{/* Image container with rounded background */}
// 					<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mt-8">
// 						<img
// 							src={item.image}
// 							alt={item.alt}
// 							className="w-10 h-10 object-contain"
// 						/>
// 					</div>
// 					<div>{item.title}</div>
// 					<div>{item.detail}</div>
// 					<ServicesButton />
// 				</div>
// 			))}
// 		</div>
// 	);
// }

import React from "react";
import outpatient from "../../src/assets/images/Symbol.svg";
import treatment from "../../src/assets/images/Symbol (1).svg";
import intensive from "../../src/assets/images/Symbol (2).svg";
import domestic from "../../src/assets/images/Symbol (3).svg";
import ServicesButton from "./ServicesButton";

export default function ServiceCards() {
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
						<ServicesButton />
					</div>
				</div>
			))}
		</div>
	);
}
