import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from './Footer';

// --- Custom Paper Plane SVG ---
const PaperPlane = ({ style, className }) => (
  <motion.svg
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M2 12L22 2L12 22L10 14L2 12Z" />
  </motion.svg>
);

// Simplified ScrollButton logic for cleaner framer implementation
const ScrollingTextButton = ({ text, primary }) => (
  <motion.button
    className={`
      group relative overflow-hidden px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl
      ${primary 
        ? 'bg-white text-brand-black' 
        : 'bg-brand-black text-white border border-white/10'
      }
    `}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="relative overflow-hidden h-6">
      {/* FIX: Changed -translate-y-full to -translate-y-1/2.
         The flex container has 2 items, so its height is 2x the view height.
         Translating 100% moves it entirely out of view. Translating 50% moves it up one line.
      */}
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
        <span className="flex items-center justify-center h-6 shrink-0">{text}</span>
        <span className="flex items-center justify-center h-6 shrink-0">{text}</span>
      </div>
    </div>
  </motion.button>
);


const Contact = () => {
  const containerRef = useRef(null);
  
  // Scroll Hooks for Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation Values - Amplified for "More Obvious" effect
  const planeX = useTransform(scrollYProgress, [0, 1], ["-20%", "150%"]);
  const planeY = useTransform(scrollYProgress, [0, 1], ["80%", "-150%"]);
  const planeRotate = useTransform(scrollYProgress, [0, 1], [45, -20]); // More dynamic rotation
  const planeScale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1.2]); // Grows as it flies
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section 
        ref={containerRef} 
        id="contact" 
        className="relative py-32 bg-white overflow-hidden"
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Main CTA Card - Expanded Size & Less Rounded */}
          <div className="relative bg-brand-yellow rounded-3xl p-16 md:p-32 overflow-hidden shadow-2xl min-h-[600px] flex flex-col justify-center">
            
            {/* --- ANIMATED BACKGROUND --- */}
            <motion.div 
              style={{ y: bgY }}
              className="absolute inset-0 z-0 opacity-40 pointer-events-none"
            >
               <div className="absolute top-[-30%] right-[-10%] w-[800px] h-[800px] bg-white rounded-full blur-[120px] mix-blend-overlay" />
               <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] bg-brand-black rounded-full blur-[100px] opacity-20" />
            </motion.div>

            {/* --- GIANT SCROLLING 3D PAPER PLANE --- */}
            <PaperPlane 
                style={{ 
                    x: planeX, 
                    y: planeY, 
                    rotate: planeRotate,
                    scale: planeScale
                }}
                className="absolute z-0 text-white/30 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none drop-shadow-2xl top-1/2 left-0"
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Clean Headline - Removed "Start Your Journey" badge */}
                <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-sm">
                  Ready to Take Flight?
                </h2>
                
                <p className="text-white/80 text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto tracking-wide">
                  Whether you need to build a world-class team or find your dream career, the journey starts here. 
                </p>
              </motion.div>

              {/* Minimalist Scrolling Text Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <ScrollingTextButton text="Hire Talent" primary={true} />
                <ScrollingTextButton text="Apply for Jobs" primary={false} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer is rendered here */}
      <Footer />
    </>
  );
};

export default Contact;