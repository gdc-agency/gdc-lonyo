
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogArea from './BlogArea';

const Blog = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Blog" subtitle="Blog" />
    <BlogArea />
    <CtaAreaHomeOne style_2={true} />
    <FooterOne />
      
    </>
  );
};

export default Blog;