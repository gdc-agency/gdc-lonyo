

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import SingleService from '@/components/single-service';

export const metadata: Metadata = {
  title: "Service Details - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

const index = () => {
  return (
    <Wrapper>
      <SingleService />
    </Wrapper>
  );
};

export default index;