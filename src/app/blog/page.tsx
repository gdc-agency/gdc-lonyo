
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import Blog from '@/components/blog';

export const metadata: Metadata = {
  title: "Blog - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 
const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;