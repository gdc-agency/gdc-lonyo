import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import SingleCareerArea from "./SingleCareerArea";

const SingleCareer = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Career Details" subtitle="Career Details" />
      <SingleCareerArea />
			<CtaAreaHomeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default SingleCareer;
