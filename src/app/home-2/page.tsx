
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';
import HomeTwo from '@/components/homes/home-2';

export const metadata: Metadata = {
  title: "Home 2 - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}


const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default index;