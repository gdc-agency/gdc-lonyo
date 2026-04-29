
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import AboutUs from '@/components/about-us';

export const metadata: Metadata = {
  title: "About Us - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}


const index = () => {
  return (
    <Wrapper>
      <AboutUs />
    </Wrapper>
  );
};

export default index;