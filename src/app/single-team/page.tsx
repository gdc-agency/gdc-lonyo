 
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import SingleTeam from '@/components/single-team';

export const metadata: Metadata = {
  title: "Team  Details - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
}


const index = () => {
  return (
    <Wrapper>
      <SingleTeam />
    </Wrapper>
  );
};

export default index;