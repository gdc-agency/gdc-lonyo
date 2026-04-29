
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import Pricing from '@/components/pricing';

export const metadata: Metadata = {
  title: "Pricing - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}


const index = () => {
  return (
    <Wrapper>
      <Pricing />
    </Wrapper>
  );
};

export default index;