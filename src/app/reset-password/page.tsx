

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import ResetPassword from '@/components/reset-password';

export const metadata: Metadata = {
  title: "Reset Password - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 
const index = () => {
  return (
    <Wrapper>
      <ResetPassword />
    </Wrapper>
  );
};

export default index;