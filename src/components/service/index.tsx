
import React from 'react';
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FinancialDecisionsHomeTwo from '../homes/home-2/FinancialDecisionsHomeTwo';
import FeaturesAreaHomeOne from '../homes/home-1/FeaturesAreaHomeOne';
import FinancialUpdateHomeOne from '../homes/home-1/FinancialUpdateHomeOne';
import FaqAreaHomeOne from '../homes/home-1/FaqAreaHomeOne';
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Service" subtitle="Service" />
      <FinancialDecisionsHomeTwo style_3={true} />
      <FeaturesAreaHomeOne style_2={true} />
      <FinancialUpdateHomeOne  style_3={true} />
      <FaqAreaHomeOne style_3={true} />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Service;