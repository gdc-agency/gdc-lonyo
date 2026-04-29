
import React from 'react';
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import IntegrationArea from './IntegrationArea';
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Integration = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Integration" subtitle="Integration" />
      <IntegrationArea />
      <CtaAreaHomeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default Integration;