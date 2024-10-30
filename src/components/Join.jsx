// import React from "react";
// import {
// 	FaUserFriends,
// 	FaShieldAlt,
// 	FaGraduationCap,
// 	FaChartLine,
// } from "react-icons/fa";

// export default function Join() {
// 	const benefits = [
// 		{
// 			icon: <FaUserFriends className="text-3xl text-[#3A506B]" />,
// 			title: "Team work",
// 			description:
// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
// 			bgColor: "bg-[#F0F4FF]",
// 		},
// 		{
// 			icon: <FaShieldAlt className="text-3xl text-[#3A506B]" />,
// 			title: "Secured Future",
// 			description:
// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
// 			bgColor: "bg-[#F7FAF2]",
// 		},
// 		{
// 			icon: <FaGraduationCap className="text-3xl text-[#3A506B]" />,
// 			title: "Learning Opportunity",
// 			description:
// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
// 			bgColor: "bg-[#FFF0F3]",
// 		},
// 		{
// 			icon: <FaChartLine className="text-3xl text-[#3A506B]" />,
// 			title: "Upgrade Skills",
// 			description:
// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
// 			bgColor: "bg-[#FFF4E5]",
// 		},
// 	];

// 	return (
// 		<div className="flex justify-center w-full">
// 			<div className="bg-white p-6 md:p-12 flex flex-col md:flex-row md:w-[60%] justify-center">
// 				<div className="text-left mb-10 md:w-[50%]">
// 					<h2 className="text-[18px] font-bold text-[#001833]">
// 						BENEFITS
// 					</h2>
// 					<h1 className="text-3xl md:text-[36px] font-bold text-[#5B2A86] mt-2">
// 						Why you Should Join Our Awesome Team
// 					</h1>
// 					<p className="text-[#001833] mt-4 max-w-xl mx-auto">
// 						We want you to feel like home when you are working at
// 						JMC (Japan Marketing & Consultancy Limited) & for that
// 						we have curated a great set of benefits for you. It all
// 						starts with the free lunch!
// 					</p>
// 				</div>
// 				<div className="md:w-[50%]">
// 					<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8">
// 						{benefits.map((benefit, index) => (
// 							<BenefitCard
// 								key={index}
// 								icon={benefit.icon}
// 								bgColor={benefit.bgColor}
// 							/>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// function BenefitCard({ icon, title, description, bgColor }) {
// 	return (
// 		<div>
// 			<div
// 				className={`p-1 rounded-lg ${bgColor} flex flex-col items-center text-center`}
// 			>
// 				<h3 className="text-lg font-semibold text-[#3A506B]">
// 					{title}
// 				</h3>
// 				<p className="text-gray-600 mt-2 text-sm">{description}</p>
// 				<div className="px-3 py-3 rounded-full mb-4">{icon}</div>
// 			</div>
// 		</div>
// 	);
// }
import React from "react";
import {
	FaUserFriends,
	FaShieldAlt,
	FaGraduationCap,
	FaChartLine,
} from "react-icons/fa";

export default function Join() {
	const benefits = [
		{
			icon: <FaUserFriends className="text-3xl text-[#3A506B]" />,
			title: "Team work",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
			bgColor: "bg-[#F0F4FF]",
		},
		{
			icon: <FaShieldAlt className="text-3xl text-[#3A506B]" />,
			title: "Secured Future",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
			bgColor: "bg-[#F7FAF2]",
		},
		{
			icon: <FaGraduationCap className="text-3xl text-[#3A506B]" />,
			title: "Learning Opportunity",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
			bgColor: "bg-[#FFF0F3]",
		},
		{
			icon: <FaChartLine className="text-3xl text-[#3A506B]" />,
			title: "Upgrade Skills",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
			bgColor: "bg-[#FFF4E5]",
		},
	];

	return (
		<div className="flex justify-center w-full">
			<div className="bg-white p-6 md:p-12 flex flex-col md:flex-row md:w-[80%] justify-center gap-5">
				<div
					data-aos="fade-right"
					data-aos-duration="1000"
					className="text-left mb-10 md:w-[50%]"
				>
					<h2 className="text-[18px] font-bold text-[#001833]">
						BENEFITS
					</h2>
					<h1 className="text-3xl md:text-[36px] font-bold text-[#5B2A86] mt-2">
						Why you Should Join Our Awesome Team
					</h1>
					<p className="text-[#001833] mt-4 max-w-xl mx-auto">
						We want you to feel like home when you are working at
						JMC (Japan Marketing & Consultancy Limited) & for that
						we have curated a great set of benefits for you. It all
						starts with the free lunch!
					</p>
				</div>
				<div className="md:w-[50%]">
					<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8">
						{benefits.map((benefit, index) => (
							<BenefitCard
								key={index}
								icon={benefit.icon}
								title={benefit.title}
								description={benefit.description}
								bgColor={benefit.bgColor}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function BenefitCard({ icon, title, description, bgColor }) {
	return (
		<div
			data-aos="flip-left"
			data-aos-duration="2000"
			className="flex flex-col items-center text-center"
		>
			{/* Icon Section */}
			<div className={`p-3 rounded-full ${bgColor} mb-4`}>{icon}</div>

			{/* Title and Description Section */}
			<div className="text-center">
				<h3 className="text-lg font-semibold text-[#3A506B]">
					{title}
				</h3>
				<p className="text-gray-600 mt-2 text-sm">{description}</p>
			</div>
		</div>
	);
}
