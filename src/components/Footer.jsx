import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const QUICK_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const SERVICE_LINKS = [
    { label: 'AC Repair', path: '/services/ac' },
    { label: 'Washing Machine', path: '/services/washing-machine' },
    { label: 'Microwave Oven', path: '/services/microwave' },
    { label: 'Refrigerator', path: '/services/refrigerator' }
  ];

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
        </div>

        {/* Links Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {QUICK_LINKS.map((link, i) => (
              <Link key={i} to={link.path} style={{
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s ease'
              }}
                onMouseOver={e => e.target.style.color = '#007aff'}
                onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Services</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {SERVICE_LINKS.map((link, i) => (
              <Link key={i} to={link.path} style={{
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s ease'
              }}
                onMouseOver={e => e.target.style.color = '#00f2fe'}
                onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Contact Us</h4>

          <a href="https://www.google.com/maps/search/?api=1&query=12.908242741662969,79.13668999453267"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={e => e.currentTarget.style.color = '#007aff'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <MapPin size={20} color="#007aff" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>Lakshmi Perumal Theru, Kosepattai, Vellore</span>
          </a>

          <a href="tel:+917305954417" style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={e => e.currentTarget.style.color = '#007aff'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <Phone size={20} color="#007aff" style={{ flexShrink: 0 }} />
            <span>+91 73059 54417</span>
          </a>

          <a href="mailto:velloresmartservice@gmail.com" style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={e => e.currentTarget.style.color = '#007aff'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <Mail size={20} color="#007aff" style={{ flexShrink: 0 }} />
            <span>velloresmartservice@gmail.com</span>
          </a>
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
          <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}
            onMouseOver={e => e.target.style.color = '#ffffff'}
            onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
          >
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }}
            onMouseOver={e => e.target.style.color = '#ffffff'}
            onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
