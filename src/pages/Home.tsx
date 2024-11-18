import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedProperties from '../components/FeaturedProperties';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProperties />
      <Testimonials />
    </>
  );
}