import React from "react";
import HeroAreaHomeTwo from "./HeroAreaHomeTwo";   
import BrandAreaHomeTwo from "./BrandAreaHomeTwo";
import BannerAreaHomeTwo from "./BannerAreaHomeTwo";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FinancialDecisionsHomeTwo from "./FinancialDecisionsHomeTwo";
import FeaturesAreaHomeTwo from "./FeaturesAreaHomeTwo";
import FinancialUpdatesHomeTwo from "./FinancialUpdatesHomeTwo";
import TabAreaHomeTwo from "./TabAreaHomeTwo";
import TestimonialAreaHomeTwo from "./TestimonialAreaHomeTwo";
import PriceingAreaHomeTwo from "./PriceingAreaHomeTwo";
import CtaAreaHomeTwo from "./CtaAreaHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";

const HomeTwo = () => {
	return (
		<>
			<HeaderOne style_2={true} toggle_color={true} />
      <HeroAreaHomeTwo />
      <BannerAreaHomeTwo />
      <BrandAreaHomeTwo />
      <FinancialDecisionsHomeTwo />
      <FeaturesAreaHomeTwo />
      <FinancialUpdatesHomeTwo />
      <TabAreaHomeTwo />
      <TestimonialAreaHomeTwo />
      <PriceingAreaHomeTwo />
      <CtaAreaHomeTwo />
      <FooterOne style_2={true} />
		</>
	);
};

export default HomeTwo;
