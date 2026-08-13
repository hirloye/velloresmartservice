import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Shield, CheckCircle, Clock, Snowflake, Star } from 'lucide-react';

const AcService = () => {
  const IMAGES = [
    { src: '/ac/a1.webp', alt: 'AC Deep Cleaning Service' },
    { src: '/ac/a2.webp', alt: 'AC Gas Top-Up and Leak Fix' },
    { src: '/ac/a3.webp', alt: 'AC Installation and Setup' },
    { src: '/ac/a4.webp', alt: 'AC Compressor Repairs' }
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
    { title: "AC Deep Cleaning", desc: "High-pressure jet wash for filters, indoor coils, and outdoor condenser unit.", image: "/ac/a1.webp", alt: "AC Deep Cleaning" },
    { title: "Gas Top-Up / Leak Fix", desc: "Detecting leaks, sealing, and topping up eco-friendly refrigerant gas.", image: "/ac/a2.webp", alt: "AC Gas Top-Up and Leak Fix" },
    { title: "Installation & Setup", desc: "Precision split and window AC installation with pipe routing and testing.", image: "/ac/a3.webp", alt: "AC Installation and Setup" },
    { title: "Compressor Repairs", desc: "Expert diagnosing and replacement of faulty compressors and fan motors.", image: "/ac/a4.webp", alt: "AC Compressor Repairs" }
  ];

  const COMMON_ISSUES = [
    "AC not blowing cold air",
    "Water leaking from indoor unit",
    "Strange clicking or vibrating sounds",
    "AC turning on and off repeatedly",
    "Foul smell coming from the blower",
    "High electricity bills due to inefficiency"
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
              src={IMAGES[currentImgIndex].src}
              alt={IMAGES[currentImgIndex].alt}
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
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 75%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Floating Icons */}
        <motion.div {...floatAnimation(0)} style={{ position: 'absolute', top: '25%', left: '15%', zIndex: 2, color: 'rgba(0, 122, 255, 0.2)' }}>
          <Wind size={80} />
        </motion.div>
        <motion.div {...floatAnimation(3)} style={{ position: 'absolute', bottom: '25%', right: '15%', zIndex: 2, color: 'rgba(0, 242, 254, 0.2)' }}>
          <Snowflake size={70} />
        </motion.div>

        <div style={{ maxWidth: '900px', textAlign: 'center', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ color: '#007aff', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Smart Cooling Solutions</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-cinematic text-glow" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1, textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.5)' }}
          >
            Professional AC Service & Repair
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subheading-cinematic" 
            style={{ maxWidth: '750px', fontSize: 'clamp(1rem, 1.25vw, 1.4rem)', color: '#ffffff', opacity: 0.95, textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}
          >
            Keep your home cool and refreshing. Our expert technicians deliver same-day doorstep servicing, deep cleaning, gas refills, and prompt repairs across Vellore.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: '80px 5%', position: 'relative', zIndex: 5, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }} className="text-glow">Our Servicing Capabilities</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Comprehensive range of support for all window and split AC models.</p>
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
                background: 'radial-gradient(circle at 100% 0%, rgba(0, 122, 255, 0.06) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1.5rem',
                overflow: 'hidden'
              }}
            >
              <img 
                src={service.image} 
                alt={service.alt || service.title} 
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
                <div style={{ color: '#007aff', flexShrink: 0, marginTop: '0.2rem' }}>
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
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Common AC Issues We Resolve</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>If you notice any of these signs, don't wait for a breakdown. Get in touch with our certified engineers to restore optimal cooling immediately.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {COMMON_ISSUES.map((issue, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#007aff' }} />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(0,122,255,0.1)' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem' }}>Why Choose Our AC Care</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Clock color="#007aff" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>90-Min Response Time</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Speedy dispatch of service vans across Vellore.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Shield color="#007aff" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>180-Day Warranty</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Full coverage on spare parts and repairs for six months.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Star color="#007aff" size={32} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Certified AC Engineers</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Rigorous training on the latest inverter compressor units.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AcService;
