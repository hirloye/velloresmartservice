import React, { useState, useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import UIElements from '../components/UIElements';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import BookingSection from '../components/BookingSection';

const SLIDES = [
  {
    id: 1,
    title: "Premium AC Repair",
    subtitle: "Fast Doorstep Service",
    video: "/videos/ac.webm",
    appliance: "AC"
  },
  {
    id: 2,
    title: "Smart Washing Machine Service",
    subtitle: "Expert Repair at Your Doorstep",
    video: "/videos/washing-machine.webm",
    appliance: "Washing Machine"
  },
  {
    id: 3,
    title: "Microwave Repair Solutions",
    subtitle: "Quick & Reliable Service",
    video: "/videos/microwave.webm",
    appliance: "Microwave Oven"
  },
  {
    id: 4,
    title: "Refrigerator Repair Experts",
    subtitle: "Same Day Doorstep Support",
    video: "/videos/refridgerator.webm",
    appliance: "Refrigerator"
  }
];

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const setSlide = (index) => {
    if (index < 0 || index >= SLIDES.length) return;
    setActiveSlide(index);
  };

  const handleNext = () => {
    setSlide(activeSlide === SLIDES.length - 1 ? 0 : activeSlide + 1);
  };

  const handlePrev = () => {
    setSlide(activeSlide === 0 ? SLIDES.length - 1 : activeSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* HERO SECTION */}
      <section style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <HeroCarousel slides={SLIDES} activeSlide={activeSlide} />
        <UIElements
          totalSlides={SLIDES.length}
          activeSlide={activeSlide}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </section>

      {/* ADDITIONAL SECTIONS */}
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BookingSection />
    </main>
  );
};

export default HomePage;
