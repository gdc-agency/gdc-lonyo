
import React from 'react';
import HomeOne from '@/components/homes/home-1';

import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';
export const metadata: Metadata = {
  title: "Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}


const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default index;