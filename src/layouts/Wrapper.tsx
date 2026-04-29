"use client";

import ScrollToTop from "@/common/ScrollToTop";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

 

const Wrapper = ({ children }: any) => { 
	useEffect(() => {
	  AOS.init({ duration: 800 });
	}, []);

	return <>
		{children}
		<ScrollToTop />
	</>;
};

export default Wrapper;
