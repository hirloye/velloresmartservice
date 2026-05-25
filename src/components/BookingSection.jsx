import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Calendar } from 'lucide-react';

const BookingSection = () => {
  const FEATURES = [
    "Same Day Service",
    "Transparent Pricing",
    "6 Months Warranty",
    "Expert Support"
  ];

  const [formData, setFormData] = React.useState({
    appliance: '',
    brand: '',
    problem: '',
    address: '',
    phone: '',
    date: ''
  });
  const [status, setStatus] = React.useState({ type: '', message: '' });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.appliance || !formData.address || !formData.phone || !formData.date) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });


      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Appointment booked successfully! We will contact you shortly.' });
        setFormData({
          appliance: '',
          brand: '',
          problem: '',
          address: '',
          phone: '',
          date: ''
        });
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to submit appointment. Please try again.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again or call us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (

    <section className="mobile-padding" style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#050508',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 5%',
      overflow: 'hidden'
    }}>
      {/* Background Ambience */}
      <div style={{
        position: 'absolute',
        bottom: '-20%', right: '-10%', width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, transparent 70%)',
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
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div>
            <h2 className="heading-cinematic text-glow" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>
              Book Your Appliance Repair
            </h2>
            <p className="subheading-cinematic" style={{ maxWidth: '500px' }}>
              Fast doorstep support from certified technicians.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                viewport={{ once: true }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '1.2rem' }}
              >
                <CheckCircle2 color="#007aff" size={24} />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Live Support Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ position: 'relative', width: '12px', height: '12px' }}>
              <div style={{ position: 'absolute', inset: 0, background: '#25D366', borderRadius: '50%' }} />
              <motion.div 
                animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', inset: -4, background: '#25D366', borderRadius: '50%' }} 
              />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Live Support Available</span>
          </div>

          <a href="https://wa.me/917305954417?text=Hi,%20I'm%20interested%20in%20appliance%20repair%20services." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block', width: 'fit-content' }}>
            <button className="btn-glass" style={{ width: 'fit-content', borderColor: '#25D366', color: '#25D366', marginTop: '1rem' }}>
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>
          </a>
        </motion.div>

        {/* Right Content - Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{
            padding: '3rem',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Form Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
            <div style={{ padding: '0.8rem', background: 'rgba(0,122,255,0.1)', borderRadius: '12px', color: '#007aff' }}>
              <Calendar size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 600 }}>Schedule Appointment</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Fill details to get an instant call back.</p>
            </div>
          </div>

          {status.message && (
            <div style={{
              padding: '1rem',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              backgroundColor: status.type === 'success' ? 'rgba(37, 211, 102, 0.1)' : 'rgba(255, 69, 0, 0.1)',
              border: `1px solid ${status.type === 'success' ? 'rgba(37, 211, 102, 0.3)' : 'rgba(255, 69, 0, 0.3)'}`,
              color: status.type === 'success' ? '#25D366' : '#ff4500',
              fontSize: '0.95rem',
              textAlign: 'center'
            }}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="grid-form-row">
              <select 
                className="form-input"
                value={formData.appliance}
                onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                required
              >
                <option value="">Appliance Type</option>
                <option value="ac">AC</option>
                <option value="washing_machine">Washing Machine</option>
                <option value="microwave">Microwave Oven</option>
                <option value="refrigerator">Refrigerator</option>
              </select>
              <input 
                type="text" 
                placeholder="Brand (e.g. LG, Samsung)" 
                className="form-input" 
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              />
            </div>

            <textarea 
              placeholder="Problem Description" 
              rows={3} 
              className="form-input" 
              style={{ resize: 'none' }}
              value={formData.problem}
              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
            ></textarea>
            
            <input 
              type="text" 
              placeholder="Your Address / Location" 
              className="form-input" 
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
            
            <div className="grid-form-row">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="form-input" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <input 
                type="date" 
                className="form-input" 
                style={{ colorScheme: 'dark' }} 
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>

            <motion.button 
              whileHover={loading ? {} : { scale: 1.02 }}
              whileTap={loading ? {} : { scale: 0.98 }}
              className="btn-primary" 
              type="submit"
              disabled={loading}
              style={{ 
                width: '100%', 
                justifyContent: 'center', 
                padding: '1.2rem', 
                marginTop: '1rem', 
                fontSize: '1.2rem',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'Scheduling...' : 'Schedule Appointment'}
            </motion.button>
          </form>


        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
