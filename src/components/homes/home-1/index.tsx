import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import FeaturesAreaHomeOne from "./FeaturesAreaHomeOne";
import FinancialDecisionsAreaHomeOne from "./FinancialDecisionsAreaHomeOne";
import FinancialUpdateHomeOne from "./FinancialUpdateHomeOne";
import VideoAreaHomeOne from "./VideoAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import FaqAreaHomeOne from "./FaqAreaHomeOne";
import CtaAreaHomeOne from "./CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
 

const HomeOne = () => {
	return (
		<>
			<HeaderOne />
      <HeroAreaHomeOne />
      <FeaturesAreaHomeOne />
      <FinancialDecisionsAreaHomeOne />
      <FinancialUpdateHomeOne />
      <VideoAreaHomeOne />
      <TestimonialAreaHomeOne />
      <FaqAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne />
		</>
	);
};

export default HomeOne;
