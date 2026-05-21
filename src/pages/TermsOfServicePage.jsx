import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Wrench, ShieldAlert, CreditCard, UserCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
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
            background: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            color: '#00f2fe',
            marginBottom: '1.5rem',
            boxShadow: '0 0 20px rgba(0, 242, 254, 0.15)'
          }}>
            <FileText size={32} />
          </div>
          <h1 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontWeight: 800 }}>
            Terms of Service
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Please read these terms carefully before scheduling service requests. By booking our services, you agree to comply with the terms below.
          </p>
        </motion.div>

        {/* Terms Content */}
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
              <span style={{ color: '#00f2fe', display: 'flex' }}><UserCheck size={20} /></span>
              1. Acceptance of Terms
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              By accessing, browsing, or utilizing the doorstep repair services offered by Vellore Smart Service, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service. If you do not agree to these terms, please do not use our site or book services.
            </p>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 2 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#007aff', display: 'flex' }}><Wrench size={20} /></span>
              2. Booking & Dispatch
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              All service requests are processed on a first-come, first-served basis. We reserve the right to schedule diagnostic visits based on technician availability and geographic routing. While we strive to arrive within the chosen schedule window, unexpected traffic or delays during previous service calls may affect arrival times. We will notify you in case of any delay.
            </p>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 3 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#ff4500', display: 'flex' }}><CreditCard size={20} /></span>
              3. Pricing & Payments
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              A standard diagnostic/visiting fee is applicable for all doorstep visits. Once our technicians inspect your appliance (e.g. AC, Washing Machine, Refrigerator, Microwave), they will provide an estimated repair cost (parts + labor).
            </p>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Visiting Charge:</strong> Deductible from final service charges if the repair service is completed by us.</li>
              <li><strong>Spare Parts:</strong> Billed additionally based on market pricing or specific parts replaced.</li>
              <li><strong>Payments:</strong> Due immediately upon repair completion. We accept Cash, UPI (Google Pay, PhonePe, Paytm), and digital bank transfers.</li>
            </ul>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 4 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#00d2ff', display: 'flex' }}><FileText size={20} /></span>
              4. Service Guarantees & Warranties
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              We provide standard service and spare part warranties to give you complete peace of mind:
            </p>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Service Warranty:</strong> 30 days warranty on the specific labor/repair completed.</li>
              <li><strong>Parts Warranty:</strong> Valid only on spare parts sourced and supplied directly by us (specified on your invoice). No warranty is provided on spare parts provided by the customer.</li>
              <li><strong>Exclusions:</strong> Warranty does not cover physical damage, electrical fluctuations, misuse, or tampering by any third-party technicians after our service visit.</li>
            </ul>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 5 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#007aff', display: 'flex' }}><UserCheck size={20} /></span>
              5. Customer Obligations
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              Customers must ensure that:
            </p>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>An adult representative (18+) is present during the entire service visit.</li>
              <li>Technicians have safe and reasonable access to the appliance and power/water utilities.</li>
              <li>Any pre-existing structural issues or safety hazards near the appliance location are disclosed.</li>
            </ul>
          </motion.section>

          <hr style={{ border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }} />

          {/* Section 6 */}
          <motion.section variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ color: '#ff4500', display: 'flex' }}><ShieldAlert size={20} /></span>
              6. Limitation of Liability
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              To the maximum extent permitted by applicable law, Vellore Smart Service shall not be liable for any indirect, incidental, special, exemplary, or consequential damages arising out of or in connection with our services. Our total liability for any claim arising under these terms shall not exceed the amount actually paid by you for the specific repair service in question.
            </p>
          </motion.section>
        </motion.div>

      </div>
    </main>
  );
};

export default TermsOfServicePage;
