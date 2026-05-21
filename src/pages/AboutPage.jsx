import React from 'react';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Warranty from '../components/about/Warranty';

const AboutPage = () => {
  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}>
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <Warranty />
    </main>
  );
};

export default AboutPage;
