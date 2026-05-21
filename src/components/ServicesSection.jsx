import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wind, Waves, Flame, Snowflake } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: "AC Service",
    desc: "Cold mist airflow & deep cleaning.",
    icon: Wind,
    color: "#007aff",
    bg: "radial-gradient(circle at 100% 0%, rgba(0, 122, 255, 0.15) 0%, transparent 50%)"
  },
  {
    id: 2,
    title: "Washing Machine Service",
    desc: "Rotating drum check & water splash simulation.",
    icon: Waves,
    color: "#00d2ff",
    bg: "radial-gradient(circle at 100% 0%, rgba(0, 210, 255, 0.15) 0%, transparent 50%)"
  },
  {
    id: 3,
    title: "Microwave Oven Service",
    desc: "Orange heat-wave glow & heating repair.",
    icon: Flame,
    color: "#ff4500",
    bg: "radial-gradient(circle at 100% 0%, rgba(255, 69, 0, 0.15) 0%, transparent 50%)"
  },
  {
    id: 4,
    title: "Refrigerator Service",
    desc: "Frozen mist & cooling gas top-up.",
    icon: Snowflake,
    color: "#00f2fe",
    bg: "radial-gradient(circle at 100% 0%, rgba(0, 242, 254, 0.15) 0%, transparent 50%)"
  }
];

const ServicesSection = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#020203',
      padding: '100px 5%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '80vw', height: '40vw',
        background: 'radial-gradient(ellipse, rgba(0, 122, 255, 0.03) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '5rem', zIndex: 10 }}
      >
        <h2 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '1rem' }}>
          Comprehensive Appliance Repair
        </h2>
        <p className="subheading-cinematic" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Professional doorstep repair solutions with expert technicians.
        </p>
      </motion.div>

      <div className="grid-2-col" style={{
        width: '100%',
        maxWidth: '1400px',
        zIndex: 10
      }}>
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, type: 'spring' }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-panel"
            style={{
              padding: '3rem 2rem',
              borderRadius: '24px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              background: service.bg,
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              transition: 'all 0.4s ease'
            }}
          >
            {/* Reflective Metallic Border Glow (Hover) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute', inset: 0, 
                background: `linear-gradient(135deg, ${service.color}33 0%, transparent 100%)`,
                zIndex: 0
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '60px', height: '60px', borderRadius: '16px', 
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '2rem', color: service.color
              }}>
                <service.icon size={30} />
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                {service.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '2rem' }}>
                {service.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: service.color, fontWeight: 500, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Explore <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="btn-glass" 
        style={{ marginTop: '5rem', zIndex: 10 }}
      >
        Explore All Services
      </motion.button>
    </section>
  );
};

export default ServicesSection;
