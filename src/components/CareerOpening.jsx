// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const CareerOpenings = () => {
// 	const categories = [
// 		{ name: "HT & Admin", active: false },
// 		{ name: "Nurse (20)", active: true },
// 		{ name: "Support", active: false },
// 		{ name: "Doctors", active: false },
// 	];

// 	const jobs = [
// 		{
// 			title: "Nursing assistant",
// 			experience: "2 Years",
// 			deadline: "2024-09-20",
// 		},
// 		{
// 			title: "Nursing assistant",
// 			experience: "1 Year",
// 			deadline: "2024-09-20",
// 		},
// 		{
// 			title: "Nursing assistant",
// 			experience: "3 Years",
// 			deadline: "2024-09-20",
// 		},
// 		{
// 			title: "Nursing assistant",
// 			experience: "2 Years",
// 			deadline: "2024-09-20",
// 		},
// 		{
// 			title: "Nursing assistant",
// 			experience: "3 Years",
// 			deadline: "2024-09-20",
// 		},
// 	];

// 	return (
// 		<div className="my-10">
// 			<header className="mb-8 text-center">
// 				<h3 className="text-lg font-semibold text-[#001833] text-[18px] uppercase">
// 					Come Join Us
// 				</h3>
// 				<h1 className="text-3xl font-bold text-[#001833] text-[43px]">
// 					Career Openings
// 				</h1>
// 				<p className="text-black text-[14px] mt-2">
// 					We're always looking for creative, talented self-starters to
// 					join us. Check out our open roles below and fill out an
// 					application.
// 				</p>
// 			</header>

// 			<div className="flex justify-center items-start p-8 min-h-screen">
// 				<div className="w-full max-w-5xl flex">
// 					{/* Sidebar */}
// 					<div className="w-1/4 pr-8">
// 						<h2 className="font-semibold text-gray-600 mb-4 uppercase">
// 							Career Categories
// 						</h2>
// 						<ul className="space-y-2">
// 							{categories.map((category, index) => (
// 								<li
// 									key={index}
// 									className={`cursor-pointer font-medium uppercase ${
// 										category.active
// 											? "text-purple-600"
// 											: "text-gray-700"
// 									}`}
// 								>
// 									{category.name}
// 								</li>
// 							))}
// 						</ul>
// 					</div>

// 					{/* Job Listings */}
// 					<div className="w-3/4">
// 						{/* Job Cards */}
// 						<div className="space-y-4">
// 							{jobs.map((job, index) => (
// 								<div
// 									key={index}
// 									className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
// 								>
// 									<div className="flex items-center gap-10">
// 										<h4 className="text-lg font-semibold text-[#001833]">
// 											{job.title}
// 										</h4>
// 										<div className="flex space-x-8 mt-2 text-sm text-gray-500">
// 											<span className="flex flex-col">
// 												<p>Experience: </p>
// 												<p>{job.experience}</p>
// 											</span>
// 											<span>
// 												<p>Deadline: </p>
// 												<p>{job.deadline}</p>
// 											</span>
// 										</div>
// 									</div>
// 									<FaArrowRight className="text-gray-400" />
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default CareerOpenings;

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const CareerOpenings = () => {
	const [selectedCategory, setSelectedCategory] = useState("Nurse (20)");

	const categories = [
		{ name: "HT & Admin" },
		{ name: "Nurse (20)" },
		{ name: "Support" },
		{ name: "Doctors" },
	];

	const jobListings = {
		"HT & Admin": [
			{
				title: "Admin Assistant",
				experience: "1 Year",
				deadline: "2024-10-15",
			},
			{
				title: "HR Coordinator",
				experience: "2 Years",
				deadline: "2024-10-20",
			},
			{
				title: "Admin Assistant II",
				experience: "1 Year",
				deadline: "2024-10-15",
			},
			{
				title: "HR Coordinator II",
				experience: "2 Years",
				deadline: "2024-10-20",
			},
		],
		"Nurse (20)": [
			{
				title: "Nursing Assistant",
				experience: "2 Years",
				deadline: "2024-09-20",
			},
			{
				title: "Registered Nurse",
				experience: "3 Years",
				deadline: "2024-09-25",
			},
			{
				title: "Nursing assistant",
				experience: "2 Years",
				deadline: "2024-09-20",
			},
			{
				title: "Nursing assistant",
				experience: "1 Year",
				deadline: "2024-09-20",
			},
			{
				title: "Nursing assistant",
				experience: "3 Years",
				deadline: "2024-09-20",
			},
			{
				title: "Nursing assistant",
				experience: "2 Years",
				deadline: "2024-09-20",
			},
			{
				title: "Nursing assistant",
				experience: "3 Years",
				deadline: "2024-09-20",
			},
		],
		Support: [
			{
				title: "IT Support Specialist",
				experience: "1 Year",
				deadline: "2024-11-05",
			},
			{
				title: "Customer Support Rep",
				experience: "1 Year",
				deadline: "2024-11-10",
			},
		],
		Doctors: [
			{
				title: "General Physician",
				experience: "5 Years",
				deadline: "2024-12-01",
			},
			{ title: "Surgeon", experience: "7 Years", deadline: "2024-12-15" },
			{
				title: "General Physician",
				experience: "5 Years",
				deadline: "2024-12-01",
			},
			{ title: "Surgeon", experience: "7 Years", deadline: "2024-12-15" },
			{
				title: "General Physician",
				experience: "5 Years",
				deadline: "2024-12-01",
			},
			{ title: "Surgeon", experience: "7 Years", deadline: "2024-12-15" },
		],
	};

	const jobs = jobListings[selectedCategory];

	return (
		<div className="my-10">
			<header className="mb-8 text-center">
				<h3
					data-aos="fade-right"
					data-aos-duration="1000"
					className="text-lg font-semibold text-[#001833] text-[18px] uppercase"
				>
					Come Join Us
				</h3>
				<h1
					data-aos="fade-left"
					data-aos-duration="1000"
					className="text-3xl font-bold text-[#001833] text-[43px]"
				>
					Career Openings
				</h1>
				<p
					data-aos="fade-right"
					data-aos-duration="1000"
					className="text-black text-[14px] mt-2"
				>
					We're always looking for creative, talented self-starters to
					join us. Check out our open roles below and fill out an
					application.
				</p>
			</header>

			<div className="flex justify-center items-start p-8 min-h-screen">
				<div className="w-full max-w-5xl flex">
					{/* Sidebar */}
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						className="w-1/4 pr-8"
					>
						<h2 className="font-semibold text-gray-600 mb-4 uppercase">
							Career Categories
						</h2>
						<ul className="space-y-2">
							{categories.map((category, index) => (
								<li
									key={index}
									onClick={() =>
										setSelectedCategory(category.name)
									}
									className={`cursor-pointer font-medium uppercase ${
										selectedCategory === category.name
											? "text-purple-600"
											: "text-gray-700"
									}`}
								>
									{category.name}
								</li>
							))}
						</ul>
					</div>

					{/* Job Listings */}
					<div
						data-aos="fade-right"
						data-aos-duration="1000"
						className="w-3/4"
					>
						{/* Job Cards */}
						<div className="space-y-4">
							{jobs.map((job, index) => (
								<div
									key={index}
									className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
								>
									<div className="flex items-center gap-10">
										<h4 className="text-lg font-semibold text-[#001833]">
											{job.title}
										</h4>
										<div className="flex space-x-8 mt-2 text-sm text-gray-500">
											<span className="flex flex-col">
												<p>Experience: </p>
												<p>{job.experience}</p>
											</span>
											<span>
												<p>Deadline: </p>
												<p>{job.deadline}</p>
											</span>
										</div>
									</div>
									<FaArrowRight className="text-gray-400" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareerOpenings;
