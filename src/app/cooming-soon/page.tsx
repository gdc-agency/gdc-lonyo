

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import CoomingSoon from '@/components/cooming-soon';

export const metadata: Metadata = {
  title: "Cooming Soon - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 
const index = () => {
  return (
    <Wrapper>
      <CoomingSoon />
    </Wrapper>
  );
};

export default index;