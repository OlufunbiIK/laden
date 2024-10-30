import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../../src/assets/images/thelogo 3.svg";
import { RiArrowDownFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
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
							className="text-[14px] text-[#1E1E1E] cursor-pointer whitespace-nowrap hover:text-[#5E2866]"
						>
							Home
						</Link>
						<Link
							to="/aboutus"
							className="text-[14px] text-[#1E1E1E] cursor-pointer whitespace-nowrap hover:text-[#5E2866]"
						>
							About Us
						</Link>
						<Link
							to="/services"
							className="text-[14px] cursor-pointer text-[#1E1E1E] relative"
							// onMouseEnter={() => setIsDropdownOpen(true)}
							// onMouseLeave={() => setIsDropdownOpen(false)}
						>
							<Link
								to="/services"
								onClick={toggleDropdown}
								className="flex flex-row cursor-pointer items-center gap-1 focus:outline-none whitespace-nowrap hover:text-[#5E2866]"
							>
								Services
								<RiArrowDownFill />
							</Link>
							{isDropdownOpen && (
								<ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg border rounded-md">
									<Link className="text-[14px] cursor-pointer text-[#1E1E1E] px-4 py-2 hover:bg-gray-100 hover:text-[#5E2866]">
										Service 1
									</Link>
									<li className="text-[14px] cursor-pointer text-[#1E1E1E] px-4 py-2 hover:bg-gray-100 hover:text-[#5E2866]">
										Service 2
									</li>
									<li className="text-[14px] cursor-pointer text-[#1E1E1E] px-4 py-2 hover:bg-gray-100 hover:text-[#5E2866]">
										Service 3
									</li>
								</ul>
							)}
						</Link>
						<Link
							to="/contact"
							className="text-[14px] cursor-pointer text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]"
						>
							Contact Us
						</Link>
						<Link
							to="/career"
							className="text-[14px] cursor-pointer text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]"
						>
							Career
						</Link>
						<Link
							to="/imprint"
							className="text-[14px] cursor-pointer text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]"
						>
							Imprint
						</Link>
						<Link
							to="/policy"
							className="text-[14px] cursor-pointer text-[#1E1E1E] whitespace-nowrap hover:text-[#5E2866]"
						>
							Privacy Policy
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
}
