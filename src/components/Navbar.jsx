import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <>
      <header
        className="glass-panel"
        style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1400px',
          height: '80px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2.5rem',
          zIndex: 9999,
          border: '1px solid rgba(255,255,255,0.08)'
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Vellore Smart Service Logo" style={{ height: '64px', width: 'auto' }} />
          <span className="hide-on-mobile text-glow" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '1px' }}>
            VELLORE SMART SERVICE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hide-on-mobile" style={{ display: 'flex', gap: '2.5rem', fontWeight: 500, alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.7}>Home</Link>
          
          <div 
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          >
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                opacity: 0.7,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                transition: 'opacity 0.3s',
                fontFamily: 'inherit'
              }}
              onMouseOver={e => e.target.style.opacity = 1}
              onMouseOut={e => e.target.style.opacity = 0.7}
            >
              Services <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '260px',
                    borderRadius: '16px',
                    padding: '0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(5, 5, 8, 0.95)',
                    marginTop: '0.5rem',
                    zIndex: 99999
                  }}
                >
                  <Link to="/services/ac" style={{ color: '#fff', textDecoration: 'none', opacity: 0.8, fontSize: '0.95rem', padding: '0.6rem 1rem', borderRadius: '8px', transition: 'all 0.2s', display: 'block' }} onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.opacity = 1; }} onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.opacity = 0.8; }}>AC Service</Link>
                  <Link to="/services/washing-machine" style={{ color: '#fff', textDecoration: 'none', opacity: 0.8, fontSize: '0.95rem', padding: '0.6rem 1rem', borderRadius: '8px', transition: 'all 0.2s', display: 'block' }} onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.opacity = 1; }} onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.opacity = 0.8; }}>Washing Machine Service</Link>
                  <Link to="/services/refrigerator" style={{ color: '#fff', textDecoration: 'none', opacity: 0.8, fontSize: '0.95rem', padding: '0.6rem 1rem', borderRadius: '8px', transition: 'all 0.2s', display: 'block' }} onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.opacity = 1; }} onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.opacity = 0.8; }}>Refrigerator Service</Link>
                  <Link to="/services/microwave" style={{ color: '#fff', textDecoration: 'none', opacity: 0.8, fontSize: '0.95rem', padding: '0.6rem 1rem', borderRadius: '8px', transition: 'all 0.2s', display: 'block' }} onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.opacity = 1; }} onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.opacity = 0.8; }}>Microwave Service</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" style={{ color: '#fff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.7}>About</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.7}>Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="show-on-mobile"
          onClick={() => setIsMenuOpen(true)}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#fff',
            cursor: 'pointer',
            padding: '0.8rem',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100000,
            background: 'rgba(5, 5, 8, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Logo in overlay */}
          <div style={{ position: 'absolute', top: '2rem', left: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img src="/logo.png" alt="Vellore Smart Service Logo" style={{ height: '64px', width: 'auto' }} />
            <span style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '1px' }}>
              VELLORE SMART
            </span>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '2.5rem',
              right: '2rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 100001
            }}
          >
            <X size={24} />
          </button>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.8rem', fontWeight: 600, textAlign: 'center', zIndex: 100001, width: '80%', maxWidth: '320px' }}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  fontFamily: 'inherit'
                }}
              >
                Services
                <motion.span animate={{ rotate: isMobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'inline-flex' }}>
                  <ChevronDown size={20} />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      fontSize: '1.2rem',
                      width: '100%',
                      padding: '0.5rem 0'
                    }}
                  >
                    <Link to="/services/ac" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>AC Service</Link>
                    <Link to="/services/washing-machine" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Washing Machine Service</Link>
                    <Link to="/services/refrigerator" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Refrigerator Service</Link>
                    <Link to="/services/microwave" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Microwave Service</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
