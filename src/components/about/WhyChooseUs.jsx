import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShieldCheck, Tag, Zap, Cpu } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    title: "Certified Technicians",
    desc: "Highly trained professionals for all major home appliance brands.",
    icon: ShieldCheck,
    color: "#007aff",
    bg: "radial-gradient(circle at 100% 0%, rgba(0, 122, 255, 0.15) 0%, transparent 50%)"
  },
  {
    id: 2,
    title: "Transparent Pricing",
    desc: "Clear upfront quotes with absolutely no hidden diagnostic fees.",
    icon: Tag,
    color: "#00d2ff",
    bg: "radial-gradient(circle at 100% 0%, rgba(0, 210, 255, 0.15) 0%, transparent 50%)"
  },
  {
    id: 3,
    title: "Fast Doorstep Service",
    desc: "Same-day rapid repairs arriving directly to your doorstep.",
    icon: Zap,
    color: "#ff4500",
    bg: "radial-gradient(circle at 100% 0%, rgba(255, 69, 0, 0.15) 0%, transparent 50%)"
  },
  {
    id: 4,
    title: "Multi-Brand Appliance Support",
    desc: "Comprehensive expertise across ACs, washing machines, ovens & fridges.",
    icon: Cpu,
    color: "#00f2fe",
    bg: "radial-gradient(circle at 100% 0%, rgba(0, 242, 254, 0.15) 0%, transparent 50%)"
  }
];

// Interactive 3D Tilt Card component
const TiltCard = ({ feature, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, type: 'spring', damping: 15 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        perspective: 1000,
        width: '100%'
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: feature.bg,
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '24px',
          padding: '3.5rem 2rem',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          transition: 'box-shadow 0.3s ease'
        }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          boxShadow: `0 0 30px ${feature.color}15`,
          borderColor: 'rgba(255,255,255,0.1)'
        }}
      >
        {/* Border Light Glow Overlay */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${feature.color}15 0%, transparent 60%)`,
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 0
          }}
          whileHover={{ opacity: 1 }}
        />

        <div style={{ transform: "translateZ(30px)", position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '60px', height: '60px', borderRadius: '16px',
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '2rem', color: feature.color
          }}>
            <feature.icon size={30} />
          </div>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
            {feature.title}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {feature.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#020203',
      padding: '120px 5%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Light Streak / Showroom aesthetic */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 122, 255, 0.2), transparent)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '90vw', height: '30vw',
        background: 'radial-gradient(ellipse, rgba(0, 122, 255, 0.02) 0%, transparent 80%)',
        filter: 'blur(100px)',
        pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '6rem', zIndex: 10 }}
      >
        <h2 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '1rem' }}>
          Why Choose Us
        </h2>
        <p className="subheading-cinematic" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Experience the pinnacle of professional doorstep appliance repair.
        </p>
      </motion.div>

      <div className="grid-2-col" style={{
        width: '100%',
        maxWidth: '1400px',
        zIndex: 10
      }}>
        {FEATURES.map((feature, index) => (
          <TiltCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
