import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import SingleServiceArea from "./SingleServiceArea";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

const SingleService = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Service Details" subtitle="Service Details" />
			<SingleServiceArea />
			<CtaAreaHomeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default SingleService;
