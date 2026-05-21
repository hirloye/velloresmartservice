import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import BookingSection from '../components/BookingSection';

const ContactPage = () => {
  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}>
      <ContactHero />
      <ContactInfo />
      <BookingSection />
    </main>
  );
};

export default ContactPage;
