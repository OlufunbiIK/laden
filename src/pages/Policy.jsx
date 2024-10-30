import React from "react";
import AboveNavbar from "../components/AboveNavbar";
import Footer from "../components/Footer";
import ExtraFooter from "../components/ExtraFooter";
import ContactNavbar from "../components/ContactNavbar";
import Map from "../components/Map";
import optician from "../../src/assets/images/Container.svg";

export default function Imprint() {
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
							Private Policy
						</h1>
					</div>
				</div>
			</div>

			<div className="px-4 py-4 md:w-[80%]">
				<h1>Privacy Policy </h1>
				<p>
					1. Data protection at a glance General information The
					following information provides a simple overview of what
					happens to your personal data when you visit this website.
					Personal data is all data with which you can be personally
					identified. You can find detailed information on the subject
					of data protection in our data protection declaration listed
					under this text. Data collection on this website Who is
					responsible for data collection on this website? The data
					processing on this website is carried out by the website
					operator. You can find his contact details in the section
					"Information on the responsible party" in this data
					protection declaration. How do we collect your data? On the
					one hand, your data is collected when you communicate it to
					us. This may, for example, be data that you enter in a
					contact form. Other data is collected automatically or with
					your consent when you visit the website by our IT systems.
					This is primarily technical data (e.g. Internet browser,
					operating system or time of page access). This data is
					collected automatically as soon as you enter this website.
					What do we use your data for? Some of the data is collected
					to ensure that the website is provided without errors. Other
					data can be used to analyze your user behavior. What rights
					do you have regarding your data? You have the right to
					obtain information about the origin, recipient and purpose
					of your stored personal data free of charge at any time. You
					also have the right to request that this data be corrected
					or deleted. If you have given your consent to data
					processing, you can revoke this consent at any time for the
					future. You also have the right to request that the
					processing of your personal data be restricted under certain
					circumstances. You also have the right to lodge a complaint
					with the responsible supervisory authority. You can contact
					us at any time with any questions about this or other issues
					relating to data protection. Analysis tools and third-party
					tools When you visit this website, your surfing behavior may
					be statistically evaluated. This is done primarily with
					so-called analysis programs. Detailed information about
					these analysis programs can be found in the following
					privacy policy.
				</p>
			</div>
			<ExtraFooter />
			<Map />
			<Footer />
		</div>
	);
}
