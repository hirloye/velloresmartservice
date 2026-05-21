import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, PhoneCall, Wind, Snowflake, Flame, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  // Floating particle variants
  const floatAnimation = (delay) => ({
    animate: {
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 360, 0],
      transition: {
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    }
  });

  const headingVars = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const paragraphVars = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 } }
  };

  const ctaVars = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 } }
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
      {/* Reflective floor & Volumetric Fog */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '40vh',
        background: 'linear-gradient(to top, rgba(0, 122, 255, 0.05), transparent)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{
        position: 'absolute',
        top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '70vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(0, 122, 255, 0.03) 0%, transparent 75%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Floating Appliance Particles / Holographic Elements */}
      <motion.div {...floatAnimation(0)} style={{ position: 'absolute', top: '20%', left: '15%', zIndex: 2, color: 'rgba(0, 122, 255, 0.2)' }}>
        <Wind size={60} />
      </motion.div>
      <motion.div {...floatAnimation(2)} style={{ position: 'absolute', top: '70%', left: '20%', zIndex: 2, color: 'rgba(0, 242, 254, 0.15)' }}>
        <Snowflake size={50} />
      </motion.div>
      <motion.div {...floatAnimation(4)} style={{ position: 'absolute', top: '25%', right: '18%', zIndex: 2, color: 'rgba(255, 69, 0, 0.15)' }}>
        <Flame size={55} />
      </motion.div>
      <motion.div {...floatAnimation(1)} style={{ position: 'absolute', top: '65%', right: '22%', zIndex: 2, color: 'rgba(0, 210, 255, 0.2)' }}>
        <Waves size={70} />
      </motion.div>

      {/* Soft Holographic UI Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-panel"
        style={{
          position: 'absolute', top: '15%', right: '10%', padding: '1rem',
          borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)',
          background: 'rgba(255,255,255,0.01)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)',
          letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 2
        }}
      >

      </motion.div>

      {/* Center Content */}
      <div style={{
        maxWidth: '900px',
        textAlign: 'center',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <motion.h1
          variants={headingVars}
          initial="hidden"
          animate="show"
          className="heading-cinematic text-glow"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1 }}
        >
          Reliable Appliance Repair Experts in Vellore
        </motion.h1>

        <motion.p
          variants={paragraphVars}
          initial="hidden"
          animate="show"
          className="subheading-cinematic"
          style={{ maxWidth: '750px', fontSize: 'clamp(1rem, 1.25vw, 1.5rem)', opacity: 0.7 }}
        >
          At Vellore Smart Service, we believe appliance repair should be simple, fast and reliable — with professional technicians arriving at your doorstep when you need them.
        </motion.p>

        <motion.div
          variants={ctaVars}
          initial="hidden"
          animate="show"
          className="flex-col-mobile"
          style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}
        >
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">
              <Wrench size={20} />
              Book Service
            </button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn-glass">
              <PhoneCall size={20} />
              Contact Now
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
