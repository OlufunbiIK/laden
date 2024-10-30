// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import slideOne from "../../src/assets/images/african-american-assistant-explaining-medication-old-man-visitors-hospital-ward-specialist-talking-family-sick-patient-about-treatment-healthcare-nurse-giving-advice.jpg";
// import slideTwo from "../../src/assets/images/african-american-cardiologist-checking-examining-senior-patient-heart.jpg";
// import slideThree from "../../src/assets/images/specialist-consulting-elderly-patient.jpg";
// import slideFour from "../../src/assets/images/black-young-doctor-using-otoscope-elder-patient.jpg";
// import slideFive from "../../src/assets/images/african-social-worker-helping-senior-woman.jpg";
// import slideSix from "../../src/assets/images/team-male-female-nurses-talking-with-old-retired-man-bright-cozy-nursing-home.jpg";

// const images = [slideOne, slideTwo, slideThree, slideFour, slideFive, slideSix];

// const Slider = () => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const delay = 5000;

// 	// Auto-slide timer
// 	useEffect(() => {
// 		const timer = setInterval(() => {
// 			nextSlide();
// 		}, delay);
// 		return () => clearInterval(timer);
// 	}, [currentIndex]);

// 	// Next and Previous slide functions
// 	const nextSlide = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === images.length - 1 ? 0 : prevIndex + 1
// 		);
// 	};

// 	const prevSlide = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === 0 ? images.length - 1 : prevIndex - 1
// 		);
// 	};

// 	return (
// 		<div className="relative w-full h-[500px] overflow-hidden">
// 			<div
// 				className="flex transition-transform duration-1000 ease-in-out"
// 				style={{
// 					transform: `translateX(-${currentIndex * 100}%)`,
// 				}}
// 			>
// 				{images.map((image, index) => (
// 					<img
// 						key={index}
// 						src={image}
// 						alt={`Slide ${index + 1}`}
// 						className="w-full h-full object-cover"
// 					/>
// 				))}
// 			</div>

// 			{/* Arrow buttons */}
// 			<button
// 				onClick={prevSlide}
// 				className="absolute md:top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
// 			>
// 				<FaArrowLeft size={20} />
// 			</button>
// 			<button
// 				onClick={nextSlide}
// 				className="absolute md:top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
// 			>
// 				<FaArrowRight size={20} />
// 			</button>
// 		</div>
// 	);
// };

// export default Slider;

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slideOne from "../../src/assets/images/african-american-assistant-explaining-medication-old-man-visitors-hospital-ward-specialist-talking-family-sick-patient-about-treatment-healthcare-nurse-giving-advice.jpg";
import slideTwo from "../../src/assets/images/african-american-cardiologist-checking-examining-senior-patient-heart.jpg";
import slideThree from "../../src/assets/images/specialist-consulting-elderly-patient.jpg";
import slideFour from "../../src/assets/images/black-young-doctor-using-otoscope-elder-patient.jpg";
import slideFive from "../../src/assets/images/african-social-worker-helping-senior-woman.jpg";
import slideSix from "../../src/assets/images/team-male-female-nurses-talking-with-old-retired-man-bright-cozy-nursing-home.jpg";

const images = [slideOne, slideTwo, slideThree, slideFour, slideFive, slideSix];

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const delay = 5000;

	// Auto-slide timer
	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide();
		}, delay);
		return () => clearInterval(timer);
	}, [currentIndex]);

	// Next and Previous slide functions
	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="relative w-full h-[500px] overflow-hidden">
			<div
				className="flex transition-transform duration-1000 ease-in-out"
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}
			>
				{images.map((image, index) => (
					<div key={index} className="w-full h-[500px] flex-shrink-0">
						<img
							src={image}
							alt={`Slide ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>

			{/* Arrow buttons */}
			<button
				onClick={prevSlide}
				className="absolute md:top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
			>
				<FaArrowLeft size={20} className="hidden md:block" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute md:top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
			>
				<FaArrowRight size={20} className="hidden md:block" />
			</button>
		</div>
	);
};

export default Slider;
