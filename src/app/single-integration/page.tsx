 
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';     
import SingleIntegration from '@/components/single-integration';

export const metadata: Metadata = {
  title: "Integration Details - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}


const index = () => {
  return (
    <Wrapper>
      <SingleIntegration />
    </Wrapper>
  );
};

export default index;