import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- DATA ---
const testimonialsData = {
  clients: [
    {
      id: 1,
      quote: "Digital Workforce PH didn't just find us employees; they found us team members who fit our culture perfectly. The transition to remote staffing was seamless and our productivity has increased by 40%.",
      author: "Sarah Jenkins",
      role: "CEO, TechStream London",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      quote: "Their EOR services made expanding into the Philippines effortless. Compliance, payroll, and HR were handled perfectly, allowing us to focus on our core business. Highly recommend for any company going global.",
      author: "Dr. Maria Santos",
      role: "Operations Director, HealthFirst Global",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 3,
      quote: "We scaled our support team from 5 to 50 in three months. The quality of talent provided was exceptional, and the speed of deployment was unmatched in the industry.",
      author: "James Wilson",
      role: "VP of Operations, LogiTech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ],
  talents: [
    {
      id: 1,
      quote: "Working here feels like being part of a global family. The benefits are real, the support is constant, and the opportunities to work with international brands are amazing. I've grown both personally and professionally.",
      author: "Mark De Guzman",
      role: "Senior React Developer",
      image: "/profile1.jpg"
    },
    {
      id: 2,
      quote: "The training programs and career development opportunities are outstanding. I've been able to work on projects for Fortune 500 companies while living in Manila. The work-life balance is excellent.",
      author: "Anna Reyes",
      role: "UX Designer & Team Lead",
      image: "/profile2.png"
    },
    {
      id: 3,
      quote: "Finally, a company that values its people. The hybrid setup and the health benefits are a game changer for me and my family. Proud to be part of DWPH.",
      author: "Carlos Mendoza",
      role: "Data Analyst",
      image: "/profile3.jpg"
    }
  ]
};

// Animation variants for sliding
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 1,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 1,
  }),
};

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('clients'); // 'clients' or 'talents'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // --- STRIP ANIMATIONS ---
  const xStripTop = useTransform(scrollYProgress, [0, 0.9], ["-100%", "0%"]);
  const xStripBottom = useTransform(scrollYProgress, [0, 0.9], ["100%", "0%"]);

  const contentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);

  const currentData = testimonialsData[activeCategory];
  const totalItems = currentData.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const nextIndex = (currentIndex + 1) % totalItems;

  // Calculate indicator width and position
  const indicatorWidth = `${(1 / totalItems) * 100}%`;
  const indicatorLeft = `${(currentIndex / totalItems) * 100}%`;

  // Gradient text class
  const activeTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-[#1e4b92] to-[#6ca443]";

  return (
    <section ref={containerRef} id="testimonials" className="relative bg-gray-50 font-sans min-h-[150vh] overflow-hidden">
      
      {/* --- STRIPS CONTAINER --- */}
      <div className="absolute top-0 left-0 w-full h-[55vh] z-0 pointer-events-none flex flex-col">
        <motion.div 
            style={{ x: xStripTop }}
            className="flex-1 w-full relative overflow-hidden"
        >
            <img 
                src="/strip1.png" 
                alt="" 
                className="w-full h-full object-cover" 
            />
        </motion.div>

        <motion.div 
            style={{ x: xStripBottom }}
            className="flex-1 w-full relative overflow-hidden"
        >
            <img 
                src="/strip2.png" 
                alt="" 
                className="w-full h-full object-cover" 
            />
        </motion.div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <motion.div 
        className="container mx-auto px-6 relative z-10 max-w-7xl pt-[65vh] pb-24"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
          
          {/* --- LEFT COLUMN: TABS & NAV --- */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-4 min-h-[300px]">
            
            {/* TABS */}
            <div className="flex flex-col items-start">
              <button
                onClick={() => { setActiveCategory('clients'); setCurrentIndex(0); setDirection(1); }}
                className={`text-left text-lg font-normal mb-4 transition-all duration-300 ${
                  activeCategory === 'clients' ? activeTextGradient + ' font-semibold' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                From our partners
              </button>
              <button
                onClick={() => { setActiveCategory('talents'); setCurrentIndex(0); setDirection(1); }}
                className={`text-left text-lg font-normal transition-all duration-300 ${
                  activeCategory === 'talents' ? activeTextGradient + ' font-semibold' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                From our candidates
              </button>
            </div>

            {/* NAVIGATION BUTTONS */}
            <div className="flex gap-4 mt-auto">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:text-brand-black hover:border-brand-black transition-all group bg-white"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:text-brand-black hover:border-brand-black transition-all group bg-white"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CARDS & INDICATOR --- */}
          <div className="lg:col-span-8 relative flex flex-col justify-center">
            
            {/* CARDS CONTAINER */}
            <div className="relative min-h-[400px] flex items-center overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                {/* ACTIVE CARD */}
                <motion.div
                  key={`${activeCategory}-${currentIndex}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="w-full lg:w-[95%] bg-white p-10 md:p-14 rounded-sm z-20 relative h-[400px] flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 font-medium line-clamp-6">
                        "{currentData[currentIndex].quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img 
                        src={currentData[currentIndex].image} 
                        alt={currentData[currentIndex].author}
                        className="w-full h-full object-cover"
                        onError={(e) => e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"}
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-black">
                        {currentData[currentIndex].author}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                        {currentData[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* NEXT CARD PREVIEW */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[95%] w-[40%] h-[80%] opacity-40 z-10 hidden lg:block pointer-events-none overflow-hidden pl-10">
                  <p className="text-xl text-gray-400 leading-relaxed mb-10 font-medium">
                    "{currentData[nextIndex].quote}"
                  </p>
              </div>

            </div>

            {/* --- EXTERNAL PROGRESS INDICATOR --- */}
            <div className="mt-12 relative h-[2px] bg-gray-100 w-full lg:w-[95%]">
              <motion.div 
                className="absolute top-0 h-full bg-gradient-to-r from-[#1e4b92] via-[#6ca443] to-brand-yellow"
                initial={{ width: indicatorWidth, left: indicatorLeft }}
                animate={{ width: indicatorWidth, left: indicatorLeft }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;