
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import SingleBlog from '@/components/single-blog';

export const metadata: Metadata = {
  title: "Blog Details - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 
const index = () => {
  return (
    <Wrapper>
      <SingleBlog />
    </Wrapper>
  );
};

export default index;