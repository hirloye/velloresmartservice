import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';

const CONTACTS = [
  {
    title: "Phone Number",
    value: "+91 73059 54417",
    sub: "Direct call or support request",
    icon: Phone,
    color: "#007aff",
    href: "tel:+917305954417"
  },
  {
    title: "Email Address",
    value: "vellorerepair@gmail.com",
    sub: "For bookings & inquiries",
    icon: Mail,
    color: "#00f2fe",
    href: "mailto:vellorerepair@gmail.com"
  },
  {
    title: "Service Location",
    value: "Lakshmi Perumal Theru, Kosepattai, Vellore",
    sub: "Doorstep repairs across all Vellore areas",
    icon: MapPin,
    color: "#ff4500",
    href: "https://maps.google.com"
  },
  {
    title: "Working Availability",
    value: "Mon - Sun: 8:00 AM - 9:00 PM",
    sub: "Emergency repair service active",
    icon: Clock,
    color: "#00d2ff",
    href: null
  }
];

const ContactInfo = () => {
  const containerVars = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVars = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, type: 'spring', damping: 15 } }
  };

  return (
    <section className="mobile-padding" style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#030305',
      padding: '100px 5%',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '40%', right: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.04) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div className="grid-split" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Left Side: Contact Cards */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div>
            <h2 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', marginBottom: '1rem' }}>
              Contact Information
            </h2>
            <p className="subheading-cinematic" style={{ maxWidth: '500px' }}>
              Connect with us directly. Our teams are standing by to assist with diagnostic inquiries.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {CONTACTS.map((item, i) => {
              const Tag = item.href ? 'a' : 'div';
              return (
                <motion.div
                  key={i}
                  variants={cardVars}
                  whileHover={{ scale: 1.02 }}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <Tag 
                    href={item.href}
                    target={item.href ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-panel"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.5rem 2rem',
                      borderRadius: '20px',
                      border: '1px solid rgba(255,255,255,0.04)',
                      background: 'rgba(255,255,255,0.01)',
                      cursor: item.href ? 'pointer' : 'default',
                      position: 'relative',
                      overflow: 'hidden',
                      color: 'inherit',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      textDecoration: 'none'
                    }}
                  >
                    {/* Border Light Glow overlay */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, width: '4px', height: '100%',
                      backgroundColor: item.color
                    }} />

                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      style={{ 
                        color: item.color, background: 'rgba(255,255,255,0.03)',
                        width: '55px', height: '55px', borderRadius: '14px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}
                    >
                      <item.icon size={24} />
                    </motion.div>

                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 500, lineHeight: 1.4 }}>
                        {item.value}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.1rem' }}>
                        {item.sub}
                      </p>
                    </div>
                  </Tag>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: 3D map visualization placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring' }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Futuristic Map Card */}
          <div className="glass-panel" style={{
            width: '100%',
            height: '550px',
            borderRadius: '24px',
            border: '1px solid rgba(0, 122, 255, 0.15)',
            background: 'radial-gradient(circle at 50% 50%, rgba(0,122,255,0.05) 0%, rgba(5,5,8,0.95) 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Grid overlay for map design */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              zIndex: 1
            }} />

            {/* Glowing Map scan sweep */}
            <motion.div 
              animate={{ transform: ['translateY(-100%)', 'translateY(100%)'] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 242, 254, 0.4), transparent)',
                boxShadow: '0 0 20px rgba(0, 242, 254, 0.6)',
                zIndex: 2
              }}
            />

            {/* Main Location Core (Vellore Center) */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              {/* Outer pulsing ring 1 */}
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '80px', height: '80px', borderRadius: '50%',
                  border: '2px solid #007aff', pointerEvents: 'none'
                }}
              />
              {/* Outer pulsing ring 2 */}
              <motion.div 
                animate={{ scale: [1, 3.5], opacity: [0.4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
                style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '80px', height: '80px', borderRadius: '50%',
                  border: '1px solid #00f2fe', pointerEvents: 'none'
                }}
              />

              {/* Core Solid Pin */}
              <div style={{
                width: '30px', height: '30px', borderRadius: '50%',
                background: 'radial-gradient(circle, #00f2fe 0%, #007aff 80%)',
                border: '3px solid #fff',
                boxShadow: '0 0 25px #007aff',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Navigation size={12} color="#050508" style={{ transform: 'rotate(45deg)' }} />
              </div>
            </div>

            {/* Coverage Tag indicator */}
            <div className="glass-panel" style={{
              position: 'absolute', bottom: '40px', padding: '1rem 2rem',
              borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)',
              background: 'rgba(5,5,8,0.8)', color: '#fff', fontSize: '0.9rem',
              display: 'flex', alignItems: 'center', gap: '0.8rem', zIndex: 10,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#25D366', boxShadow: '0 0 10px #25D366' }}></span>
              ACTIVE SERVICE COVERAGE: VELLORE DISTRICT
            </div>
            
            {/* Holographic Routes decoration */}
            <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }}>
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                d="M 50 150 Q 200 80 250 200 T 450 350"
                fill="none" 
                stroke="rgba(0,122,255,0.15)" 
                strokeWidth="2" 
                strokeDasharray="4"
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 1 }}
                d="M 400 100 Q 250 300 200 450"
                fill="none" 
                stroke="rgba(0,242,254,0.15)" 
                strokeWidth="2" 
                strokeDasharray="4"
              />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactInfo;
