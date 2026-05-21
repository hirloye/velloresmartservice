import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, Sparkles } from 'lucide-react';

const QUALITY_POINTS = [
  "Transparent Upfront Pricing",
  "Zero Diagnostic or Hidden Charges",
  "6 Months Full Service Warranty",
  "Brand-Specific Certified Training",
  "100% Warranty-Compliant Repairs"
];

const Warranty = () => {
  const containerVars = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#030305',
      padding: '120px 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background glow & Volumetric ambience */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '70vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(0, 122, 255, 0.04) 0%, transparent 80%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="grid-split" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Left Side: Quality Points */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
          <div>
            <h2 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', marginBottom: '1rem' }}>
              Warranty & Service Quality
            </h2>
            <p className="subheading-cinematic" style={{ maxWidth: '550px' }}>
              Uncompromising service standards backed by a comprehensive warranty plan.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {QUALITY_POINTS.map((point, index) => (
              <motion.div 
                key={index}
                variants={itemVars}
                style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: '#fff', fontSize: '1.15rem' }}
              >
                <div style={{ 
                  color: '#007aff', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,122,255,0.1)', padding: '0.4rem', borderRadius: '50%'
                }}>
                  <CheckCircle size={20} />
                </div>
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Floating Holographic Warranty Interface */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, type: 'spring' }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Main Hologram Card */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '450px',
              borderRadius: '24px',
              padding: '3rem',
              border: '1px solid rgba(0, 122, 255, 0.25)',
              background: 'radial-gradient(circle at 0% 0%, rgba(0, 122, 255, 0.08) 0%, rgba(255,255,255,0.01) 100%)',
              boxShadow: '0 0 50px rgba(0, 122, 255, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top hologram scanning line simulation */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, #00f2fe, transparent)',
                boxShadow: '0 0 10px #00f2fe',
                opacity: 0.5, pointerEvents: 'none'
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <div style={{ 
                color: '#007aff', background: 'rgba(0,122,255,0.1)', 
                width: '80px', height: '80px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 30px rgba(0,122,255,0.2)', border: '1px solid rgba(0,122,255,0.3)'
              }}>
                <ShieldAlert size={40} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', letterSpacing: '1px' }}>6-MONTHS</h3>
                <p style={{ color: '#00d2ff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                  Coverage Warranty
                </p>
              </div>

              <div style={{ 
                width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)', margin: '1rem 0'
              }} />

              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Every single service and replaced spare part is backed by our signature 6 Months Worry-Free Warranty. Guaranteed peace of mind.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#007aff', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '1rem' }}>
                <Sparkles size={16} /> Secure Guarantee
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Warranty;
