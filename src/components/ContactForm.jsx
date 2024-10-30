import React from "react";

export default function ContactForm() {
	return (
		<div
			data-aos="fade-left"
			data-aos-duration="2000"
			className="px-2 md:px-20 py-8"
		>
			<div className="md:w-[50%]">
				<h1 className="text-[#5E2866]">Contact</h1>
				<div className="space-y-8">
					<input
						className="border w-full"
						type="text"
						placeholder="Your First Name*"
					/>
					<input
						className="border w-full"
						type="text"
						placeholder="Your Last Name*"
					/>
					<input
						className="border w-full"
						type="text"
						placeholder="Street and house number"
					/>
					<input
						className="border w-full"
						type="text"
						placeholder="Postal code and city"
					/>
					<input
						className="border w-full text-[#757575]"
						type="email"
						placeholder="Your Email address*"
					/>
					<input
						className="border w-full text-[#757575]"
						type="email"
						placeholder="Your Phone number"
					/>
					<textarea
						className="border w-full h-20 text-[#757575]"
						type="text"
						placeholder="Your Message*"
					/>
				</div>
				<div className="flex flex-row gap-2">
					<input type="radio" name="" className="text-[#757575]" />
					<label className="text-[#656B72]">
						Please send me information material.
					</label>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-between my-5">
					<div className="flex flex-row gap-2">
						<input type="radio" name="" />
						<label className="text-[#656B72]">
							I would like to receive a call back on:
						</label>
					</div>
					<div>
						<input type="date" className="border text-[#656B72]" />
					</div>
				</div>
				<div className="py-4">
					<h1 className="text-[#656B72]">
						How did you find out about us?
					</h1>
				</div>
				<p className="text-[#656B72]">
					The fields marked with * are mandatory fields that are
					necessary to process the contact request.
				</p>
				<button className="bg-[#5E2866] px-20 py-2 text-white my-10">
					Submit
				</button>
			</div>
		</div>
	);
}
