
import Breadcrumb from '@/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import TeamArea from './TeamArea';
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';

const Team = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Team" subtitle="Our Team" />
      <TeamArea />
      <CtaAreaHomeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default Team;