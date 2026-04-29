import Breadcrumb from "@/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import SingleIntefrationArea from "./SingleIntefrationArea";

const SingleIntegration = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Integration Details" subtitle="Integration Details" />
			<SingleIntefrationArea />
			<FooterOne />
		</>
	);
};

export default SingleIntegration;
