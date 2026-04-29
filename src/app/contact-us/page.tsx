
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper'; 
import Contactus from '@/components/contact-us';

export const metadata: Metadata = {
  title: "Contact us - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 
const index = () => {
  return (
    <Wrapper>
      <Contactus />
    </Wrapper>
  );
};

export default index;