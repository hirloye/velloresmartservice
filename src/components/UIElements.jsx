import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const UIElements = ({ totalSlides, activeSlide, onNext, onPrev }) => {
  return (
    <>

      {/* Slide Navigation Arrows */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        right: '5%',
        display: 'flex',
        gap: '1rem',
        zIndex: 50
      }}>
        <button
          onClick={onPrev}
          disabled={activeSlide === 0}
          className="glass-panel"
          style={{
            width: '60px', height: '60px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', border: 'none', cursor: activeSlide === 0 ? 'not-allowed' : 'pointer',
            opacity: activeSlide === 0 ? 0.5 : 1,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => { if (activeSlide !== 0) e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseOut={e => { if (activeSlide !== 0) e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={onNext}
          disabled={activeSlide === totalSlides - 1}
          className="glass-panel"
          style={{
            width: '60px', height: '60px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', border: 'none', cursor: activeSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            opacity: activeSlide === totalSlides - 1 ? 0.5 : 1,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => { if (activeSlide !== totalSlides - 1) e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseOut={e => { if (activeSlide !== totalSlides - 1) e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '4rem',
        left: '5%',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        zIndex: 50
      }}>
        <div style={{ fontSize: '2rem', fontWeight: 300, display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span>0{activeSlide + 1}</span>
          <span style={{ fontSize: '1rem', opacity: 0.5 }}>/ 0{totalSlides}</span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeSlide ? '30px' : '8px',
                height: '3px',
                borderRadius: '3px',
                backgroundColor: '#fff',
                opacity: i === activeSlide ? 1 : 0.3,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          ))}
        </div>
      </div>


    </>
  );
};

export default UIElements;
