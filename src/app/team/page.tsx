
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import Team from '@/components/team';

export const metadata: Metadata = {
  title: "Team - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}

 
const index = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default index;