import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import SingleBlogArea from "./SingleBlogArea";

const SingleBlog = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <SingleBlogArea />
			<CtaAreaHomeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default SingleBlog;
