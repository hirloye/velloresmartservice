import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, MessageCircle, Users, Clock, Award, ShieldCheck, Wind, Snowflake, Flame, Waves } from 'lucide-react';

const AboutSection = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };
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

  const rotateAnimation = (delay) => ({
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20 + delay,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }
    }
  });

  return (
    <section className="mobile-padding" style={{
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
              Reliable Doorstep Appliance Repair
            </h2>
            <p className="subheading-cinematic" style={{ maxWidth: '600px' }}>
              Trusted repair experts for AC, Washing Machine, Microwave Oven & Refrigerator across Vellore.
            </p>
          </motion.div>

          <motion.div variants={fadeLeft} className="flex-col-mobile" style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ width: '100%' }}>
                <Wrench size={20} />
                Book Service
              </button>
            </Link>
            <a href="https://wa.me/917305954417?text=Hi,%20I'm%20interested%20in%20appliance%20repair%20services." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn-glass" style={{ borderColor: '#25D366', color: '#25D366' }}>
                <MessageCircle size={20} />
                WhatsApp Support
              </button>
            </a>
          </motion.div>

          {/* Counter Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid-2-col"
            style={{
              marginTop: '3rem'
            }}
          >
            {[
              { icon: Users, title: "380+", subtitle: "Happy Customers" },
              { icon: Award, title: "10+ Years", subtitle: "Experience" },
              { icon: ShieldCheck, title: "Certified", subtitle: "Technicians" },
              { icon: Clock, title: "Same Day", subtitle: "Service" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 122, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(0, 122, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{ padding: '1rem', borderRadius: '50%', background: 'rgba(0, 122, 255, 0.1)', color: '#007aff' }}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{stat.title}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>{stat.subtitle}</div>
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
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Abstract 3D Container (Placeholder for real 3D elements) */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel"
            style={{
              width: '80%',
              height: '80%',
              borderRadius: '40px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'linear-gradient(135deg, rgba(20,20,25,0.8) 0%, rgba(5,5,10,0.9) 100%)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(0, 122, 255, 0.1)'
            }}
          >
            {/* Animated Holographic Particles / Reflections */}
            <div style={{ position: 'absolute', top: '10%', left: '20%', width: '100px', height: '100px', background: '#007aff', filter: 'blur(80px)', opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '150px', height: '150px', background: '#ff4500', filter: 'blur(100px)', opacity: 0.3 }} />

            {/* Appliance Icons as 3D Placeholders */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <motion.div {...floatAnimation(0)} style={{ position: 'absolute', top: '20%', left: '15%', zIndex: 2, color: 'rgba(0, 122, 255, 0.7)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <motion.div {...rotateAnimation(0)} style={{ display: 'flex' }}>
                  <Wind size={45} />
                </motion.div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '1px' }}>AC</span>
              </motion.div>
              <motion.div {...floatAnimation(2)} style={{ position: 'absolute', top: '65%', left: '20%', zIndex: 2, color: 'rgba(0, 242, 254, 0.6)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <motion.div {...rotateAnimation(2)} style={{ display: 'flex' }}>
                  <Snowflake size={40} />
                </motion.div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '1px' }}>REFRIGERATOR</span>
              </motion.div>
              <motion.div {...floatAnimation(4)} style={{ position: 'absolute', top: '25%', right: '18%', zIndex: 2, color: 'rgba(255, 69, 0, 0.6)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <motion.div {...rotateAnimation(4)} style={{ display: 'flex' }}>
                  <Flame size={40} />
                </motion.div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '1px' }}>MICROWAVE</span>
              </motion.div>
              <motion.div {...floatAnimation(1)} style={{ position: 'absolute', top: '60%', right: '22%', zIndex: 2, color: 'rgba(0, 210, 255, 0.7)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <motion.div {...rotateAnimation(1)} style={{ display: 'flex' }}>
                  <Waves size={50} />
                </motion.div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '1px' }}>WASHING MACHINE</span>
              </motion.div>
            </div>


          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
