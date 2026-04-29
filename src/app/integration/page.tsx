

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import Integration from '@/components/integration';

export const metadata: Metadata = {
  title: "Integration - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}


const index = () => {
  return (
    <Wrapper>
      <Integration />
    </Wrapper>
  );
};

export default index;