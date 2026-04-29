import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import FaqArea from "./FaqArea";

const Faq = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Faq" subtitle="Faq" />
      <FaqArea />
			<CtaAreaHomeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Faq;
