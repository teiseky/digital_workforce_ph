import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- COMPONENTS ---

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const motionValue = useMotionValue(0);
  
  const springValue = useSpring(motionValue, { damping: 25, stiffness: 60 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
      const timeout = setTimeout(() => {
        setDisplayValue(value);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const containerRef = useRef(null);
  
  // --- CAROUSEL LOGIC ---
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        // If we've scrolled past the first set of items (halfway), reset position to 0 to loop seamlessly
        // We subtract half width to maintain the smooth illusion if user scrolled manually deep into 2nd set
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        } else {
            scrollContainer.scrollLeft += 0.8; // Adjust auto-scroll speed here
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // --- SCROLL EFFECTS ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax: Background moves slower than scroll
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Background Images Array
  const backgrounds = [
    "/hero-bg1.jpg",
    "/hero-bg2.jpg",
    "/hero-bg3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="bg-white pb-0 font-sans overflow-x-hidden relative">
      
      {/* CSS for Scroll & Animations */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes shine {
            to {
              background-position: 200% center;
            }
        }
        .animate-shine {
            background-size: 200% auto;
            animation: shine 4s linear infinite;
        }
      `}</style>

      {/* --- WRAPPER FOR CARD --- */}
      <div className="relative w-[95%] max-w-[1400px] mx-auto mt-6">

        {/* --- 1. THE HERO CARD --- */}
        <motion.div 
            style={{ y: yParallax }} 
            className="h-[85vh] min-h-[700px] relative overflow-hidden shadow-2xl group flex flex-col justify-center items-center z-20 rounded-3xl"
        >
          
          {/* Dynamic Background Slideshow */}
          <div className="absolute inset-0 z-0 bg-black">
            <AnimatePresence>
              <motion.div
                key={currentBg}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
              />
            </AnimatePresence>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Content Container */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mt-[-30px]">
            
            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1]"
            >
              Local Talents, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow via-yellow-100 to-brand-yellow animate-shine drop-shadow-sm">
                Global Market.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4"
            >
              We bridge the gap between elite Filipino talent and the world's most innovative companies.
            </motion.p>

            {/* --- BUTTONS (Mobile Fix) --- */}
            <div className="relative w-full flex flex-col items-center px-4">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  // Layout Change: Stack on mobile (flex-col), side-by-side on sm+ (flex-row)
                  className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center max-w-lg"
              >
                  {/* Client Button */}
                  <div
                    onClick={() => scrollToSection('contact')}
                    onMouseEnter={() => setHoveredBtn('client')}
                    onMouseLeave={() => setHoveredBtn(null)}
                    // Size Change: Fixed width on larger screens, full width but comfortable height on mobile
                    className="
                      group w-full sm:w-56 h-14
                      bg-brand-yellow hover:bg-yellow-500
                      text-white 
                      rounded-full 
                      transition-all duration-300 ease-out
                      cursor-pointer shadow-xl hover:shadow-2xl 
                      flex items-center justify-center gap-3 px-6
                    "
                  >
                      <span className="font-medium tracking-wide text-sm">I am a Client</span>
                      <span className="relative">
                        <ArrowRight 
                          className={`w-5 h-5 text-white transition-transform duration-200 ${hoveredBtn === 'client' ? 'rotate-0' : '-rotate-45'}`}
                        />
                      </span>
                  </div>

                  {/* Talent Button */}
                  <div
                    onClick={() => scrollToSection('contact')}
                    onMouseEnter={() => setHoveredBtn('talent')}
                    onMouseLeave={() => setHoveredBtn(null)}
                    className="
                      group w-full sm:w-56 h-14
                      bg-white/10 hover:bg-white/20 backdrop-blur-md 
                      text-white border border-white/30 
                      rounded-full
                      transition-all duration-300 ease-out
                      cursor-pointer shadow-lg hover:shadow-xl 
                      flex items-center justify-center gap-3 px-6
                      relative overflow-hidden
                    "
                  >
                      <span className="font-medium tracking-wide text-sm relative z-10">I am a Candidate</span>
                      <span className="relative z-10">
                        <ArrowRight 
                          className={`w-5 h-5 text-white/70 transition-transform duration-200 ${hoveredBtn === 'talent' ? 'rotate-0' : '-rotate-45'}`}
                        />
                      </span>
                  </div>
              </motion.div>

              {/* Hover Text */}
              <div className="absolute top-16 left-0 right-0 h-10 flex justify-center items-center pointer-events-none hidden md:flex">
                  <AnimatePresence mode="wait">
                      {hoveredBtn === 'client' && (
                          <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="bg-brand-yellow/90 backdrop-blur-md text-white font-semibold text-sm px-6 py-3 rounded-2xl shadow-lg border border-brand-yellow/50"
                          >
                              Scale your team with managed IT & HR solutions.
                          </motion.div>
                      )}
                      {hoveredBtn === 'talent' && (
                          <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="bg-white/10 backdrop-blur-md text-white font-semibold text-sm px-6 py-3 rounded-2xl shadow-lg border border-white/20"
                          >
                              Find remote careers with top global employers.
                          </motion.div>
                      )}
                  </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- 2. PARTNERS (Auto-Scroll + Controllable) --- */}
      <div className="max-w-[1400px] mx-auto mt-32 px-4">
        {/* Container for fade effect and scroll */}
        <div className="relative w-full group">
            
            {/* Fade Gradients to indicate scrollability */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrollable Container - "no-scrollbar" hides the dragger */}
            <div 
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="
                    flex overflow-x-auto no-scrollbar 
                    gap-12 md:gap-16 py-8 items-center px-8 
                    snap-none cursor-grab active:cursor-grabbing
                "
            >
                {/* FIRST SET */}
                {[...Array(12)].map((_, i) => (
                    <div 
                        key={`set1-${i}`} 
                        className="
                            flex-shrink-0
                            flex items-center justify-center 
                            grayscale opacity-40 hover:grayscale-0 hover:opacity-100 
                            transition-all duration-500
                        "
                    >
                        <img
                            src={`/CLIENT/client${i+1}.webp`}
                            alt={`Client ${i+1}`}
                            className="h-12 md:h-16 w-auto object-contain select-none pointer-events-none"
                            draggable="false"
                        />
                    </div>
                ))}
                {/* SECOND SET (For seamless looping) */}
                {[...Array(12)].map((_, i) => (
                    <div 
                        key={`set2-${i}`} 
                        className="
                            flex-shrink-0
                            flex items-center justify-center 
                            grayscale opacity-40 hover:grayscale-0 hover:opacity-100 
                            transition-all duration-500
                        "
                    >
                        <img
                            src={`/CLIENT/client${i+1}.webp`}
                            alt={`Client ${i+1}`}
                            className="h-12 md:h-16 w-auto object-contain select-none pointer-events-none"
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>


      {/* --- 3. STATS & MEMBERSHIP --- */}
      <div className="max-w-7xl mx-auto mt-12 text-center px-6">

        {/* Membership Section */}
        <div className="mb-24 pt-8">
          <div className="border border-gray-200 rounded-[1rem] py-16 px-8 relative mx-auto max-w-5xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-6">
                  <p className="text-black/80 font-normal text-sm tracking-[0.2em]">
                    A Proud Member Of
                  </p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                    <div className="group flex flex-col items-center gap-3 cursor-default">
                      <img src="/ibpap.png" alt="IBPAP" className="h-12 w-auto object-contain" />
                    </div>
                    <div className="group flex flex-col items-center gap-3 cursor-default">
                      <img src="/amcham.png" alt="AMCHAM" className="h-20 w-auto object-contain" />
                    </div>
                    <div className="group flex flex-col items-center gap-3 cursor-default">
                        <img src="/apbc.png" alt="ABPC" className="h-12 w-auto object-contain" />
                    </div>
              </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-7xl md:text-8xl font-black text-brand-yellow mb-4 tabular-nums tracking-tight">
                  <Counter value={98} suffix="%" />
                </h3>
                <p className="text-lg md:text-xl text-gray-800/80 uppercase tracking-widest ">Client Satisfaction</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-7xl md:text-8xl font-black text-brand-yellow mb-4 tabular-nums tracking-tight">
                  <Counter value={20} suffix="+" />
                </h3>
                <p className="text-lg md:text-xl text-gray-800/80 uppercase tracking-widest ">Years Experience</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-7xl md:text-8xl font-black text-brand-yellow mb-4 tabular-nums tracking-tight">
                  <Counter value={70} suffix="+" />
                </h3>
                <p className="text-lg md:text-xl text-gray-800/80 uppercase tracking-widest ">Active Partnerships</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;