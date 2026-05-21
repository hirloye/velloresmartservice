import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Shield, CheckCircle, Clock, RotateCcw, Star } from 'lucide-react';

const WashingMachineService = () => {
  const IMAGES = [
    '/washing machine/w1.webp',
    '/washing machine/w2.webp',
    '/washing machine/w3.webp',
    '/washing machine/w4.webp'
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const floatAnimation = (delay) => ({
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    }
  });

  const SERVICES_LIST = [
    { title: "Drum & Tub Clean", desc: "Chemical descaling and sanitation of the inner drum and outer tub to remove mold and smells.", image: "/washing machine/w1.webp" },
    { title: "Motor & Belt Replacement", desc: "Resolving drum spinning issues by replacing worn belts, pulleys, or capacitor/direct drive motors.", image: "/washing machine/w2.webp" },
    { title: "Inlet & Drain Valve Service", desc: "Unclogging and replacing solenoid water inlet valves and drain pumps to fix flow issues.", image: "/washing machine/w3.webp" },
    { title: "PCB Motherboard Repair", desc: "Precision micro-soldering and troubleshooting of faulty display control boards.", image: "/washing machine/w4.webp" }
  ];

  const COMMON_ISSUES = [
    "Washing machine not spinning or rotating",
    "Water not filling or draining properly",
    "Excessive shaking, vibrating, or banging noise",
    "Program panel showing error codes (OE, dE, PE)",
    "Water leaking from bottom or door seal",
    "Machine not turning on (power failure)"
  ];

  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Hero Section */}
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
        {/* Background Image Carousel */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImgIndex}
              src={IMAGES[currentImgIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </AnimatePresence>
          {/* Cinematic Vignette & Dark Overlay */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to bottom, rgba(5,5,8,0.1) 0%, rgba(5,5,8,0.7) 100%)',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(5,5,8,0.6) 100%)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Glow */}
        <div style={{
          position: 'absolute',
          top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '70vw', height: '40vw',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 75%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Floating Icons */}
        <motion.div {...floatAnimation(0)} style={{ position: 'absolute', top: '25%', left: '15%', zIndex: 2, color: 'rgba(0, 210, 255, 0.2)' }}>
          <Waves size={80} />
        </motion.div>
        <motion.div {...floatAnimation(3)} style={{ position: 'absolute', bottom: '25%', right: '15%', zIndex: 2, color: 'rgba(0, 122, 255, 0.2)' }}>
          <RotateCcw size={70} />
        </motion.div>

        <div style={{ maxWidth: '900px', textAlign: 'center', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ color: '#00d2ff', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Smart Laundry Care</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-cinematic text-glow" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1, textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.5)' }}
          >
            Washing Machine Repair Specialists
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subheading-cinematic" 
            style={{ maxWidth: '750px', fontSize: 'clamp(1rem, 1.25vw, 1.4rem)', color: '#ffffff', opacity: 0.95, textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}
          >
            Get expert care for your front-load, top-load, or semi-automatic washing machine. We diagnose and repair drum spinning, water blockages, noise problems, and electronic faults.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: '80px 5%', position: 'relative', zIndex: 5, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }} className="text-glow">Our Repair Offerings</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Top-tier solutions for LG, Samsung, IFB, Whirlpool, Bosch, and other brands.</p>
        </div>

        <div className="grid-2-col">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'radial-gradient(circle at 100% 0%, rgba(0, 210, 255, 0.06) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1.5rem',
                overflow: 'hidden'
              }}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  objectFit: 'cover', 
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  flexShrink: 0,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                }} 
              />
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ color: '#00d2ff', flexShrink: 0, marginTop: '0.2rem' }}>
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>{service.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', fontSize: '0.95rem' }}>{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Issues & Features Section */}
      <section style={{ padding: '60px 5%', background: '#07070a', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="grid-split" style={{ maxWidth: '1400px', margin: '0 auto', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Common Faults We Diagnose</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>Do not ignore unusual noises or vibrations, as they can cause damage to the drum and chassis. Book a diagnostic check today.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {COMMON_ISSUES.map((issue, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00d2ff' }} />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(0,210,255,0.1)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem' }}>Why Choose Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Clock color="#00d2ff" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Same Day Visit</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Service technicians arrive within hours of scheduling.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Shield color="#00d2ff" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Genuine Spare Parts</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>We only use certified OEM parts with standard warranties.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Star color="#00d2ff" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Affordable Pricing</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Transparent estimates shared before commencing any repair.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WashingMachineService;
