import React from "react";
import Footer from "../components/Footer";
import Map from "../components/Map";
import AboveNavbar from "../components/AboveNavbar";
import ExtraFooter from "../components/ExtraFooter";
import ContactNavbar from "../components/ContactNavbar";
import ContactSlider from "../components/ContactSlider";
import ContactForm from "../components/ContactForm";

export default function Contact() {
	return (
		<div className="">
			<AboveNavbar />
			<ContactNavbar />
			<ContactSlider />
			<ContactForm />
			<ExtraFooter />
			<Map />
			<Footer />
		</div>
	);
}
