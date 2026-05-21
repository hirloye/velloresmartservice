import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Shield, CheckCircle, Clock, Star, Zap } from 'lucide-react';

const MicrowaveService = () => {
  const IMAGES = [
    '/microwave/mc1.webp',
    '/microwave/mc2.webp',
    '/microwave/mc3.webp',
    '/microwave/mc4.webp',
    '/microwave/mc5.webp'
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
    { title: "Magnetron Replacement", desc: "Resolving heating failures by installing genuine high-efficiency magnetrons.", image: "/microwave/mc1.webp" },
    { title: "High-Voltage Capacitor Fix", desc: "Troubleshooting sparking, humming, or blown fuse issues by replacing high-voltage parts safely.", image: "/microwave/mc2.webp" },
    { title: "Touchpad & Keypad Service", desc: "Fixing unresponsive control panels, buttons, and display screens.", image: "/microwave/mc3.webp" },
    { title: "Turntable & Motor Repair", desc: "Replacing drive couplers, roller rings, and turntable motors for even heat distribution.", image: "/microwave/mc4.webp" }
  ];

  const COMMON_ISSUES = [
    "Microwave runs but does not heat food",
    "Sparking, smoke, or burning smell inside the cavity",
    "Glass turntable plate not rotating",
    "Touchpad buttons unresponsive or display blank",
    "Microwave runs for a few seconds and stops",
    "Loud humming, buzzing, or clicking noise"
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
          background: 'radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 75%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Floating Icons */}
        <motion.div {...floatAnimation(0)} style={{ position: 'absolute', top: '25%', left: '15%', zIndex: 2, color: 'rgba(255, 69, 0, 0.2)' }}>
          <Flame size={80} />
        </motion.div>
        <motion.div {...floatAnimation(3)} style={{ position: 'absolute', bottom: '25%', right: '15%', zIndex: 2, color: 'rgba(255, 120, 0, 0.2)' }}>
          <Zap size={70} />
        </motion.div>

        <div style={{ maxWidth: '900px', textAlign: 'center', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ color: '#ff4500', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Smart Heating Care</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-cinematic text-glow" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1, textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.5)' }}
          >
            Microwave Oven Repair Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subheading-cinematic" 
            style={{ maxWidth: '750px', fontSize: 'clamp(1rem, 1.25vw, 1.4rem)', color: '#ffffff', opacity: 0.95, textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}
          >
            Quick, safe, and reliable doorstep microwave repair services. We fix heating elements, magnetrons, turntable plates, and touchpad controls across Vellore.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: '80px 5%', position: 'relative', zIndex: 5, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }} className="text-glow">Our Servicing Area</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Support for solo, grill, and convection microwaves of all major brands.</p>
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
                background: 'radial-gradient(circle at 100% 0%, rgba(255, 69, 0, 0.06) 0%, transparent 60%)',
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
                <div style={{ color: '#ff4500', flexShrink: 0, marginTop: '0.2rem' }}>
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
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Common Microwave Faults</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>Microwaves operate on high voltages and retain lethal charges even when unplugged. Do not attempt DIY repairs. Let our certified pros handle it safely.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {COMMON_ISSUES.map((issue, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ff4500' }} />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,69,0,0.1)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem' }}>Safety & Assurance</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Clock color="#ff4500" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Express Doorstep Visit</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Most repair visits completed within 2 hours of booking.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Shield color="#ff4500" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>100% Genuine Parts</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Original heating coils and high-quality magnetrons with warranty.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Star color="#ff4500" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Safety First Process</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Full circuit safety testing post-repair to prevent leaks or shocks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MicrowaveService;
