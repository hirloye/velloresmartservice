import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Hash, Share2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#020203',
      color: '#fff',
      padding: '80px 5% 40px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem',
        position: 'relative',
        zIndex: 10
      }}>

        {/* Brand Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img src="/logo.png" alt="Vellore Smart Service Logo" style={{ height: '80px', width: 'auto' }} />
            <span style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '2px' }} className="text-glow">
              Vellore Smart Service
            </span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
            Premium appliance repair services in Vellore. We bring futuristic, high-quality, and reliable doorstep service to your home.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[Globe, MessageCircle, Hash, Share2].map((Icon, i) => (
              <a key={i} href="#" style={{
                color: 'rgba(255,255,255,0.5)',
                transition: 'color 0.3s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)'
              }}
                onMouseOver={e => { e.currentTarget.style.color = '#007aff'; e.currentTarget.style.borderColor = '#007aff'; }}
                onMouseOut={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Home', 'About Us', 'Services', 'Our Process', 'Contact'].map((link, i) => (
              <a key={i} href="#" style={{
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s ease'
              }}
                onMouseOver={e => e.target.style.color = '#007aff'}
                onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Services Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Services</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['AC Repair', 'Washing Machine', 'Microwave Oven', 'Refrigerator', 'AMC Plans'].map((link, i) => (
              <a key={i} href="#" style={{
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s ease'
              }}
                onMouseOver={e => e.target.style.color = '#00f2fe'}
                onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Contact Us</h4>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.5)' }}>
            <MapPin size={20} color="#007aff" style={{ flexShrink: 0, mt: '2px' }} />
            <span>123 Smart Avenue, Katpadi Road, Vellore, Tamil Nadu 632001</span>
          </div>

          <a href="tel:+917305954417" style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={e => e.currentTarget.style.color = '#007aff'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <Phone size={20} color="#007aff" style={{ flexShrink: 0 }} />
            <span>+91 73059 54417</span>
          </a>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'rgba(255,255,255,0.5)' }}>
            <Mail size={20} color="#007aff" style={{ flexShrink: 0 }} />
            <span>support@velloresmart.com</span>
          </div>
        </div>

      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '4rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.9rem',
        position: 'relative',
        zIndex: 10
      }}>
        <p>&copy; {new Date().getFullYear()} Vellore Smart Service. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
