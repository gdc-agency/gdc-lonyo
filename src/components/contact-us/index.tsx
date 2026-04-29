import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ContactusArea from "./ContactusArea";
import FaqAreaHomeOne from "../homes/home-1/FaqAreaHomeOne";

const Contactus = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <ContactusArea />
      <FaqAreaHomeOne style_4={true} />
			<CtaAreaHomeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Contactus;
