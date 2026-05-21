import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowDown } from 'lucide-react';

const ContactHero = () => {
  const headingVars = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const textVars = {
    hidden: { x: -80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 } }
  };

  const ctaVars = {
    hidden: { x: 80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 } }
  };

  // Scroll to booking form helper
  const scrollToForm = () => {
    window.scrollTo({
      top: window.innerHeight * 1.8, // Approximation of where the form lies
      behavior: 'smooth'
    });
  };

  return (
    <section style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#020203',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '0 5%'
    }}>
      {/* Animated Futuristic Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 122, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 122, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: 'center',
        opacity: 0.6,
        maskImage: 'radial-gradient(circle, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 80%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Volumetric Fog & Floor Reflection */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '35vh',
        background: 'linear-gradient(to top, rgba(0, 122, 255, 0.04), transparent)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      <div style={{
        position: 'absolute',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '80vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(0, 122, 255, 0.03) 0%, transparent 70%)',
        filter: 'blur(120px)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Floating Holographic Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5
          }}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: i % 2 === 0 ? '#007aff' : '#00f2fe',
            boxShadow: `0 0 15px ${i % 2 === 0 ? '#007aff' : '#00f2fe'}`,
            top: `${20 + i * 12}%`,
            left: `${15 + i * 14}%`,
            zIndex: 3
          }}
        />
      ))}

      {/* Main Content */}
      <div style={{
        maxWidth: '950px',
        textAlign: 'center',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem'
      }}>
        <motion.h1 
          variants={headingVars}
          initial="hidden"
          animate="show"
          className="heading-cinematic text-glow" 
          style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', lineHeight: 1.15 }}
        >
          Get In Touch With Vellore Smart Service
        </motion.h1>

        <motion.p 
          variants={textVars}
          initial="hidden"
          animate="show"
          className="subheading-cinematic"
          style={{ maxWidth: '700px', fontSize: 'clamp(1rem, 1.25vw, 1.4rem)', opacity: 0.7 }}
        >
          Professional doorstep appliance repair service across Vellore with fast support and expert technicians.
        </motion.p>

        <motion.div 
          variants={ctaVars}
          initial="hidden"
          animate="show"
          className="flex-col-mobile" 
          style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}
        >
          <button className="btn-primary" onClick={scrollToForm}>
            <ArrowDown size={20} />
            Book Service Form
          </button>
          
          <a href="https://wa.me/917305954417" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="btn-glass" style={{ borderColor: '#25D366', color: '#25D366' }}>
              <MessageCircle size={20} />
              WhatsApp Support
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
