import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const SlideContent = ({ slide }) => {
  // Animation variants for smooth Apple/Tesla cinematic reveals
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const titleVars = {
    hidden: { y: -60, opacity: 0, rotateX: -20 },
    show: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 1.2 }
    },
    exit: { 
      y: -40, 
      opacity: 0, 
      transition: { duration: 0.4 } 
    }
  };

  const subtitleVars = {
    hidden: { y: -40, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 1.2 }
    },
    exit: { 
      y: -20, 
      opacity: 0, 
      transition: { duration: 0.4 } 
    }
  };

  const ctaVars = {
    hidden: { y: 40, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 1.2 }
    },
    exit: { 
      y: 20, 
      opacity: 0, 
      transition: { duration: 0.4 } 
    }
  };

  return (
    <motion.div 
      variants={containerVars}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        pointerEvents: 'auto',
        position: 'relative',
        zIndex: 20,
        width: '100%',
        maxWidth: '1200px',
        padding: '0 5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        perspective: '1000px'
      }}
    >
      <motion.p 
        variants={subtitleVars}
        className="subheading-cinematic"
        style={{ marginBottom: '1rem', color: '#007aff', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
      >
        {slide.appliance} Solutions
      </motion.p>
      
      <motion.h1 
        variants={titleVars}
        className="heading-cinematic text-glow"
        style={{ marginBottom: '1.5rem', maxWidth: '800px' }}
      >
        {slide.title}
      </motion.h1>
      
      <motion.p 
        variants={subtitleVars}
        className="subheading-cinematic"
        style={{ marginBottom: '3rem', maxWidth: '600px' }}
      >
        {slide.subtitle}
      </motion.p>
      
      <motion.div variants={ctaVars} className="flex-col-mobile" style={{ display: 'flex', gap: '1.5rem' }}>
        <button className="btn-primary">
          <Wrench size={20} />
          Book Service
        </button>
        <button className="btn-glass">
          View Details
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SlideContent;
