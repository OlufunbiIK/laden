import React from "react";
import outpatient from "../../src/assets/images/Symbol.svg";
import treatment from "../../src/assets/images/Symbol (1).svg";
import intensive from "../../src/assets/images/Symbol (2).svg";
import domestic from "../../src/assets/images/Symbol (3).svg";
import Button from "./Button";

export default function Cards() {
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
	return (
		<div
			data-aos="flip-left"
			className="flex flex-col lg:flex-row gap-1 items-center w-full justify-center my-10"
		>
			{FourCards.map((item, index) => (
				<div
					data-aos="flip-left"
					data-aos-duration="1400"
					key={index}
					className="flex flex-col items-center space-y-5 w-[306px] h-[351px] lg:w-[250px] xl:w-[306px] xl:h-[400px] border-dashed border-[2px] border-[#5E2866] px-2"
				>
					<img
						src={item.image}
						alt={item.alt}
						className="size-[72px] mt-8"
					></img>
					<div className="">{item.title}</div>
					<div className="">{item.detail}</div>
					<Button />
				</div>
			))}
		</div>
	);
}
