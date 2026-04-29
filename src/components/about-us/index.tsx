
import React from 'react';
import AboutTeam from './AboutTeam';
import AboutBanner from './AboutBanner';
import AboutMission from './AboutMission';
import Breadcrumb from '@/common/Breadcrumb';
import AboutFeatures from './AboutFeatures';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FaqAreaHomeOne from '../homes/home-1/FaqAreaHomeOne';
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import TestimonialAreaHomeThree from '../homes/home-3/TestimonialAreaHomeThree';

const AboutUs = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutBanner />
      <TestimonialAreaHomeThree style_2={true} />
      <AboutMission />  
      <AboutFeatures />
      <AboutTeam />
      <FaqAreaHomeOne style_2={true} />
      <CtaAreaHomeOne />
      <FooterOne /> 
    </>
  );
};

export default AboutUs;