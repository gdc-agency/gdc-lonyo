 
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';      
import SingleCareer from '@/components/single-career';

export const metadata: Metadata = {
  title: "Career Details - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}


const index = () => {
  return (
    <Wrapper>
      <SingleCareer />
    </Wrapper>
  );
};

export default index;