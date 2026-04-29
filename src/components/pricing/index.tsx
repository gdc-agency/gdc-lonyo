
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import PricingOne from './PricingOne';
import PricngTwo from './PricngTwo';
import FaqAreaHomeOne from '../homes/home-1/FaqAreaHomeOne';
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Pricing = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Pricing" subtitle="Pricing" />
      <PricingOne />
      <PricngTwo />
      <FaqAreaHomeOne style_2={true} />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Pricing;