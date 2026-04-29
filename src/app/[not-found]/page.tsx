
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import NotFound from '@/components/not-found';

export const metadata: Metadata = {
  title: "Error || 404 - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 

const index = () => {
  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  );
};

export default index;