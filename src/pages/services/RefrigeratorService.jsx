import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, Shield, CheckCircle, Clock, Star } from 'lucide-react';

const RefrigeratorService = () => {
  const IMAGES = [
    '/fridge/f1.webp',
    '/fridge/f2.webp',
    '/fridge/f3.webp',
    '/fridge/f4.webp',
    '/fridge/f5.webp'
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
    { title: "Cooling Gas Recharge", desc: "Checking for refrigerant leakages, welding pipes, and recharging gas (R134a/R600a).", image: "/fridge/f1.webp" },
    { title: "Compressor & Relay Repairs", desc: "Replacing faulty startup relays, capacitors, or installing energy-efficient compressors.", image: "/fridge/f2.webp" },
    { title: "Defrost System Repair", desc: "Fixing frost buildup in double-door refrigerators by replacing timers, heaters, or sensors.", image: "/fridge/f3.webp" },
    { title: "Thermostat & Fan Services", desc: "Replacing temperature sensors, fan motors, and door gaskets to maintain insulation.", image: "/fridge/f4.webp" }
  ];

  const COMMON_ISSUES = [
    "Refrigerator not cooling or cooling poorly",
    "Freezer is cold but lower cabinet is warm",
    "Water leaking or pooling at the bottom",
    "Compressor making loud, rattling noises",
    "Refrigerator running non-stop without cycling off",
    "Excessive ice building up in double-door fridges"
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
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 75%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Floating Icons */}
        <motion.div {...floatAnimation(0)} style={{ position: 'absolute', top: '25%', left: '15%', zIndex: 2, color: 'rgba(0, 242, 254, 0.2)' }}>
          <Snowflake size={80} />
        </motion.div>

        <div style={{ maxWidth: '900px', textAlign: 'center', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ color: '#00f2fe', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Smart Refrigeration Care</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-cinematic text-glow" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1, textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.5)' }}
          >
            Refrigerator Repair Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subheading-cinematic" 
            style={{ maxWidth: '750px', fontSize: 'clamp(1rem, 1.25vw, 1.4rem)', color: '#ffffff', opacity: 0.95, textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}
          >
            Keep your food fresh and healthy. We offer expert doorstep repairs for single-door, double-door, and side-by-side refrigerators of all major brands in Vellore.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: '80px 5%', position: 'relative', zIndex: 5, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }} className="text-glow">Our Cooling Solutions</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Reliable servicing for Samsung, LG, Whirlpool, Godrej, Haier, and more.</p>
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
                background: 'radial-gradient(circle at 100% 0%, rgba(0, 242, 254, 0.06) 0%, transparent 60%)',
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
                <div style={{ color: '#00f2fe', flexShrink: 0, marginTop: '0.2rem' }}>
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
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Common Fridge Faults We Fix</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>Refrigeration problems can lead to food spoilage and health risks. Schedule a same-day visit to get your fridge cooling perfectly again.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {COMMON_ISSUES.map((issue, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00f2fe' }} />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(0,242,254,0.1)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem' }}>Why Choose Our Service</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Clock color="#00f2fe" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Rapid Doorstep Repair</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Equipped service technicians for prompt local visits.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Shield color="#00f2fe" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>6-Month Service Warranty</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>We offer comprehensive coverage on all refrigerator fixes.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Star color="#00f2fe" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Specialist Technicians</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Trained in repairing modern inverter and smart fridges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RefrigeratorService;
