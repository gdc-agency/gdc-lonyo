
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import SingleTeamArea from './SingleTeamArea';

const SingleTeam = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Team Details" subtitle="Team Details" />
    <SingleTeamArea />
    <CtaAreaHomeOne style_2={true} />
    <FooterOne />      
    </>
  );
};

export default SingleTeam;