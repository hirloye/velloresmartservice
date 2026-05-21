import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideContent from './SlideContent';

const HeroCarousel = ({ slides, activeSlide }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence initial={false}>
        {slides.map((slide, index) => {
          // Calculate relative position to active slide
          const offset = index - activeSlide;
          
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                x: `${offset * 100}%`,
                scale: offset === 0 ? 1 : 0.85,
                opacity: Math.abs(offset) > 1 ? 0 : offset === 0 ? 1 : 0.4,
                filter: `blur(${Math.abs(offset) * 10}px)`,
                zIndex: offset === 0 ? 10 : 0
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                mass: 1,
                duration: 1.2
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              {/* Local Video Background */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: '#050505'
              }}>
                <video 
                  src={slide.video}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6 // Darken video slightly for text readability
                  }}
                />
                {/* Cinematic Vignette Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: 'radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(3,3,5,0.9) 100%)',
                  pointerEvents: 'none'
                }} />
              </div>

            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Independent Global Text Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', // Let clicks pass through to carousel if needed
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 20
      }}>
        <AnimatePresence mode="wait">
          <SlideContent key={activeSlide} slide={slides[activeSlide]} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroCarousel;
