import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../../src/assets/images/thelogo 3.svg";
import { RiArrowDownFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ContactNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

	return (
		<div className="w-full bg-white shadow-md px-6 sm:px-10 lg:px-14 z-20">
			<div className="flex items-center md:gap-6 lg:gap-20 justify-between md:justify-start z-20">
				<div>
					<img
						src={logo}
						alt="Logo"
						className="h-10 md:[70px] lg:h-[95px]"
					/>
				</div>

				{/* Hamburger Icon for Small Screens */}
				<div className="md:hidden z-20">
					<button onClick={toggleMenu} className="focus:outline-none">
						{isMenuOpen ? (
							<BiX className="h-6 w-6 text-[#1E1E1E]" />
						) : (
							<BiMenu className="h-6 w-6 text-[#1E1E1E]" />
						)}
					</button>
				</div>

				{/* Navigation Links */}
				<nav
					className={`${
						isMenuOpen ? "block" : "hidden"
					} absolute top-16 left-0 w-full bg-white md:static md:flex md:items-center md:w-auto z-20`}
				>
					<ul className="flex flex-col md:flex-row gap-5 md:gap-8 px-6 md:px-0 py-4 md:py-0">
						<Link
							to="/"
							className="text-[14px] cursor-pointer text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]"
						>
							Home
						</Link>
						<Link
							to="/aboutus"
							className="text-[14px] cursor-pointer text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]"
						>
							About Us
						</Link>
						<li
							className="text-[14px] text-[#1E1E1E] relative"
							// onMouseEnter={() => setIsDropdownOpen(true)}
							// onMouseLeave={() => setIsDropdownOpen(false)}
						>
							<button
								onClick={toggleDropdown}
								className="flex flex-row items-center gap-1 focus:outline-none whitespace-nowrap hover:text-[#5E2866]"
							>
								Services
								<RiArrowDownFill />
							</button>
							{isDropdownOpen && (
								<ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg border rounded-md flex flex-col">
									<Link className="text-[14px] text-[#1E1E1E] px-4 py-2 hover:bg-gray-100 hover:text-[#5E2866]">
										Service 1
									</Link>
									<Link
										to=""
										className="text-[14px] text-[#1E1E1E] px-4 py-2 hover:bg-gray-100 hover:text-[#5E2866]"
									>
										Service 2
									</Link>
									<Link
										to=""
										className="text-[14px] text-[#1E1E1E] px-4 py-2 hover:bg-gray-100 hover:text-[#5E2866]"
									>
										Service 3
									</Link>
								</ul>
							)}
						</li>
						<Link
							to="/contact"
							className="text-[14px] text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]"
						>
							Contact Us
						</Link>
						{/* <li className="text-[14px] text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]">
							Career
						</li>
						<li className="text-[14px] text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]">
							Imprint
						</li>
						<li className="text-[14px] text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]">
							Privacy Policy
						</li> */}
					</ul>
				</nav>
			</div>
		</div>
	);
}
