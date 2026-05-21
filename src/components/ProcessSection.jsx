import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Calculator, CalendarCheck, Truck } from 'lucide-react';

const STEPS = [
  { id: 1, title: "Fill the Form", icon: FileText, desc: "Tell us about the appliance and the issue." },
  { id: 2, title: "Get Estimate", icon: Calculator, desc: "Receive a transparent, upfront cost estimate." },
  { id: 3, title: "Pick Service Time", icon: CalendarCheck, desc: "Choose a convenient slot for doorstep service." },
  { id: 4, title: "Technician Arrives", icon: Truck, desc: "Our certified expert arrives to fix the issue." }
];

const ProcessSection = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="mobile-padding" style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#030305',
      padding: '120px 5%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '8rem', zIndex: 10 }}
      >
        <h2 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>
          Our Process
        </h2>
        <p className="subheading-cinematic" style={{ color: '#007aff', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>
          4 Steps to Seamless Repair
        </p>
      </motion.div>

      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', width: '100%', zIndex: 10 }}>
        {/* Background Line */}
        <div className="timeline-bg-line" style={{ 
          position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px', 
          background: 'rgba(255,255,255,0.05)', zIndex: 0 
        }} />
        
        {/* Animated Glowing Line */}
        <motion.div className="timeline-bg-line" style={{ 
          position: 'absolute', top: '40px', left: '10%', height: '2px', 
          background: 'linear-gradient(90deg, #007aff, #00f2fe)', 
          boxShadow: '0 0 20px rgba(0, 122, 255, 0.5)',
          width: lineWidth, zIndex: 1 
        }} />

        <div className="grid-process" style={{
          position: 'relative',
          zIndex: 2
        }}>
          {STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', damping: 15 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div className="glass-panel" style={{
                width: '80px', height: '80px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '2rem', background: '#050508', border: '2px solid rgba(0, 122, 255, 0.3)',
                boxShadow: '0 0 30px rgba(0, 122, 255, 0.1)',
                color: '#fff', position: 'relative'
              }}>
                <step.icon size={32} />
                <div style={{ 
                  position: 'absolute', bottom: '-10px', right: '-10px', width: '24px', height: '24px', 
                  borderRadius: '50%', background: '#007aff', color: '#fff', fontSize: '0.8rem', 
                  fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 10px rgba(0, 122, 255, 0.5)'
                }}>
                  {step.id}
                </div>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>
                {step.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
