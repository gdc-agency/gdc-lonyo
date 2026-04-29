
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import Signup from '@/components/sign-up';

export const metadata: Metadata = {
  title: "Sign up - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 
const index = () => {
  return (
    <Wrapper>
      <Signup />
    </Wrapper>
  );
};

export default index;