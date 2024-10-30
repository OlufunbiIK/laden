import React from "react";
import support from "../../src/assets/images/image.svg";

export default function Support() {
	return (
		<div className="bg-[#FDF4FF] flex flex-col lg:flex-row gap-10 md:gap-0 md:justify-between rounded-br-[75px] items-center md:mx-10 mx-2 my-5 md:py-0">
			<div
				data-aos="fade-right"
				data-aos-duration="1000"
				className="lg:w-[50%] md:px-5 py-4 px-2"
			>
				<h1 className="text-[20px] md:text-[40px]">
					We support you professionally and with heart
				</h1>
				<p className="text-[16px]">
					Especially when your health is affected and you have to get
					used to new circumstances, it is even more important not to
					be torn from your familiar surroundings. In these cases, we
					support you and your family with daily care, nursing and
					housekeeping. And we do this exactly where you feel most
					comfortable - in your own home! Our professional nursing
					team with additional training provides sensitive care and
					support for ventilated and non-ventilated patients in the
					home environment. You can discuss your worries and fears
					with us - together we will find solutions for the respective
					challenges that can arise in care and everyday situations.
				</p>
			</div>
			<div
				data-aos="fade-right"
				data-aos-duration="1000"
				className="hidden md:w-[10%] xl:w-[20%]"
			></div>
			<div
				data-aos="fade-left"
				data-aos-duration="1000"
				className="lg:w-[30%]"
			>
				<img src={support} alt="" className="w-[505px]" />
			</div>
		</div>
	);
}
