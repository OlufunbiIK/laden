import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const AboveNavbar = () => {
	return (
		<div className="overflow-hidden whitespace-nowrap  bg-[#5E2866] py-1">
			<div className="flex flex-row items-center justify-center gap-3 animate-marquee">
				<p className="text-[#FFFFFF] flex flex-row items-center gap-2 text-[14.4px]">
					<CiLocationOn />
					Friedrich Wilhelm Street 3, 47051 Duisburg
				</p>
				<p className="text-[#ffffff] flex flex-row items-center gap-2 text-[14.4px]">
					<MdOutlineLocalPhone />
					017620937596
				</p>
				<p className="text-[14.4px] text-[#ffffff] flex flex-row gap-2 items-center">
					<MdOutlineMail />
					Intensivpflegedienst-lebenskraft@web.de
				</p>
			</div>
		</div>
	);
};

export default AboveNavbar;
