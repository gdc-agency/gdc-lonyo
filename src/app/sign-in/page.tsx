
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import Signin from '@/components/sign-in';

export const metadata: Metadata = {
  title: "Sign in - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 
const index = () => {
  return (
    <Wrapper>
      <Signin />
    </Wrapper>
  );
};

export default index;