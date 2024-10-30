import React from "react";
import AboveNavbar from "../components/AboveNavbar";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import OurServices from "./OurServices";
import Footer from "../components/Footer";
import OurOffers from "./OurOffers";
import Map from "../components/Map";
import Optician from "../components/Optician";
import ExtraFooter from "../components/ExtraFooter";

export default function LandingPage() {
	return (
		<div className="">
			<AboveNavbar />
			<Navbar />
			<Slider />
			<OurServices />
			<Optician />
			<OurOffers />
			<ExtraFooter />
			<Map />
			<Footer />
		</div>
	);
}
