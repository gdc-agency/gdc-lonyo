import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "@/common/Breadcrumb";
import PortfolioArea from "./PortfolioArea";

const Portfolio = () => {
	return (
		<>
			<HeaderOne />
      <Breadcrumb title="Portfolio" subtitle="Portfolio" />
      <PortfolioArea />
			<CtaAreaHomeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Portfolio;
