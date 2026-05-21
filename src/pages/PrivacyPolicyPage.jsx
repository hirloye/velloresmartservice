import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  const containerVars = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden', color: '#ffffff' }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(0, 122, 255, 0.05) 0%, transparent 70%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '5%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.03) 0%, transparent 70%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Main Container */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '160px 24px 100px',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Back Link */}
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255, 255, 255, 0.5)',
          textDecoration: 'none',
          marginBottom: '2rem',
          fontSize: '0.95rem',
          transition: 'color 0.3s ease'
        }}
        onMouseOver={e => e.currentTarget.style.color = '#007aff'}
        onMouseOut={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'rgba(0, 122, 255, 0.1)',
            border: '1px solid rgba(0, 122, 255, 0.2)',
            color: '#007aff',
            marginBottom: '1.5rem',
            boxShadow: '0 0 20px rgba(0, 122, 255, 0.15)'
          }}>
            <Shield size={32} />
          </div>
          <h1 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontWeight: 800 }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Your privacy is extremely important to us. Learn how we collect, use, and protect your personal information at Vellore Smart Service.
          </p>
        </motion.div>

        {/* Policy Content */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="glass-panel"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '24px',
            padding: '3.5rem',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Section 1 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#007aff', display: 'flex' }}><Lock size={20} /></span>
              1. Introduction
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              Vellore Smart Service ("we", "our", or "us") provides premium, professional doorstep appliance repair services. We are committed to protecting the privacy of our customers. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website, call our support number, or schedule a doorstep service.
            </p>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 2 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#00f2fe', display: 'flex' }}><Eye size={20} /></span>
              2. Information We Collect
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              We collect information that you directly provide to us when scheduling services, communicating with our support staff, or submitting a service request form. This information includes:
            </p>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Contact Information:</strong> Your name, phone number, email address, and doorstep service location address.</li>
              <li><strong>Appliance Details:</strong> Brand, model, type, and specific symptoms of the malfunctioning appliance (e.g., AC, Washing Machine, Refrigerator, Microwave Oven).</li>
              <li><strong>Communication Records:</strong> Customer service calls, WhatsApp message details, and email correspondences.</li>
            </ul>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 3 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#ff4500', display: 'flex' }}><FileText size={20} /></span>
              3. How We Use Your Information
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              We use the collected information for various essential business purposes, including:
            </p>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Scheduling technician visits and conducting doorstep repairs.</li>
              <li>Sending booking confirmations, service status updates, and invoice details.</li>
              <li>Responding to customer support tickets, inquiries, and follow-ups.</li>
              <li>Improving our repair processes and enhancing customer experience.</li>
              <li>Fulfilling legal obligations and enforcing our service agreements.</li>
            </ul>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 4 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#00d2ff', display: 'flex' }}><Shield size={20} /></span>
              4. Data Protection & Security
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              We implement industry-standard technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no transmission over the internet or database storage method is 100% secure, and we cannot guarantee absolute security. We never sell, trade, or rent your personal information to third parties.
            </p>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 5 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#007aff', display: 'flex' }}><Lock size={20} /></span>
              5. Cookies & Analytics
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              Our website uses basic cookies to optimize user experience and track anonymous analytical metrics. Cookies help us understand how users interact with our website to make technical improvements. You can manage or block cookies in your browser settings; however, doing so may affect some site features.
            </p>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 6 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#00f2fe', display: 'flex' }}><FileText size={20} /></span>
              6. Contact Details
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              If you have any questions or feedback regarding this Privacy Policy, please feel free to reach out to us at:
            </p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              padding: '1.5rem',
              marginTop: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <p style={{ margin: 0, fontSize: '1rem' }}><strong>Email:</strong> velloresmartservice@gmail.com</p>
              <p style={{ margin: 0, fontSize: '1rem' }}><strong>Phone:</strong> +91 73059 54417</p>
              <p style={{ margin: 0, fontSize: '1rem' }}><strong>Address:</strong> Lakshmi Perumal Theru, Kosepattai, Vellore</p>
            </div>
          </motion.section>
        </motion.div>

      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
