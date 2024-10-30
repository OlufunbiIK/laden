import React from "react";
import Cards from "../components/Cards";

export default function OurServices() {
	return (
		<div className="text-center mx-auto flex flex-col justify-center items-center">
			<h1 className="flex justify-center items-center text-center text-[48px] py-2 border-[#5E2866] border-b-[3px] w-[20%]">
				Services
			</h1>
			<p className="text-[14.4px] px-2 md:w-[60%] mx-auto mt-8">
				We provide comprehensive support from the clinic to the
				patient's home, ensuring continuity of care. Assistance with
				obtaining medical equipment and accompaniment to appointments
				outside the home are also guaranteed. Below is a list of
				services we offer
			</p>
			<div>
				<Cards />
			</div>
		</div>
	);
}
