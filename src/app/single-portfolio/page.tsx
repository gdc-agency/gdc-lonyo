import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import SinglePortfolio from "@/components/single-portfolio";

export const metadata: Metadata = {
	title: "Portfolio Details - Lonyo - IT Solution & Technology Temaptle",
	description: "Lonyo - IT Solution & Technology Temaptle",
};

const index = () => {
	return (
		<Wrapper>
			<SinglePortfolio />
		</Wrapper>
	);
};

export default index;
