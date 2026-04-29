import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import CareerArea from "./CareerArea";
import FeaturesAreaHomeOne from "../homes/home-1/FeaturesAreaHomeOne";
import BrandAreaHomeTwo from "../homes/home-2/BrandAreaHomeTwo";

const Career = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Career" subtitle="Career" />
      <BrandAreaHomeTwo style_2={true} /> 
      <FeaturesAreaHomeOne style_3={true} />
      <CareerArea />
			<CtaAreaHomeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Career;
