import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import PortfolioDetailsArea from "./PortfolioDetailsArea";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

const SinglePortfolio = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Portfolio Details" subtitle="Portfolio Details" />
			<PortfolioDetailsArea />
			<CtaAreaHomeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default SinglePortfolio;
