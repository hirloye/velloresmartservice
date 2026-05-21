import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Award, Users, ShieldAlert, Sparkles } from 'lucide-react';

const OurStory = () => {
  const containerRef = React.useRef(null);
  
  // Parallax scroll transforms for the 3D element placeholder
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y3D = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate3D = useTransform(scrollYProgress, [0, 1], [0, 20]);

  // Framer motion variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeLeft = {
    hidden: { x: -30, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const STATS = [
    { value: "380+", label: "Happy Customers", icon: Users, color: "#007aff" },
    { value: "10+", label: "Years Experience", icon: Award, color: "#00f2fe" },
    { value: "Certified", label: "Technicians", icon: CheckCircle, color: "#00d2ff" },
    { value: "Same Day", label: "Support", icon: ShieldAlert, color: "#ff4500" }
  ];

  return (
    <section ref={containerRef} className="mobile-padding" style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#030305',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 5%',
      overflow: 'hidden'
    }}>
      {/* Background Volumetric Fog */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(0, 122, 255, 0.05) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="grid-split" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Left Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <motion.div variants={fadeUp}>
            <h2 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>
              Trusted Local Appliance Service Team
            </h2>
            <p className="subheading-cinematic" style={{ maxWidth: '600px' }}>
              From refrigerators and washing machines to ACs and microwave ovens, our certified technicians provide expert repair services with transparent pricing, professional support and customer-first service.
            </p>
          </motion.div>

          {/* Counter Cards */}
          <motion.div 
            variants={staggerContainer}
            className="grid-2-col"
            style={{ 
              marginTop: '1.5rem' 
            }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                  background: 'rgba(255,255,255,0.01)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glow accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '4px', height: '100%',
                  backgroundColor: stat.color
                }} />
                
                <div style={{ color: stat.color }}>
                  <stat.icon size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.2rem' }}>{stat.value}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Floating 3D Composition Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
          viewport={{ once: true }}
          className="about-3d-placeholder"
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', y: y3D, rotate: rotate3D }}
        >
          {/* Abstract 3D Container (Placeholder for real 3D elements) */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotateY: [0, 360],
              rotateX: [0, 10, 0]
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              width: '80%',
              height: '80%',
              borderRadius: '30px',
              border: '2px solid rgba(0, 122, 255, 0.2)',
              boxShadow: '0 0 50px rgba(0, 122, 255, 0.1), inset 0 0 30px rgba(0, 122, 255, 0.05)',
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.05) 0%, transparent 80%)',
              position: 'relative',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Holographic glowing center orb representing engine core */}
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #007aff 0%, #00f2fe 50%, transparent 100%)',
              filter: 'blur(20px)',
              opacity: 0.8
            }} />

            {/* Glowing Orbit Rings */}
            <div style={{
              position: 'absolute',
              width: '240px', height: '240px',
              border: '1px dashed rgba(0, 242, 254, 0.3)',
              borderRadius: '50%',
              transform: 'rotateX(75deg)'
            }} />

            <div style={{
              position: 'absolute',
              width: '320px', height: '320px',
              border: '1px solid rgba(0, 122, 255, 0.2)',
              borderRadius: '50%',
              transform: 'rotateY(75deg)'
            }} />

            {/* Float tags of products */}
            <div className="glass-panel" style={{ position: 'absolute', top: '15%', left: '10%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.8rem' }}>
              <Sparkles size={14} color="#007aff" /> AC cold mist particles
            </div>

            <div className="glass-panel" style={{ position: 'absolute', bottom: '20%', right: '5%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.8rem' }}>
              <Sparkles size={14} color="#ff4500" /> Microwave orange glow
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
