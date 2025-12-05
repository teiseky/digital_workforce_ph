import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Twitter as TikTok, Send, ArrowRight } from 'lucide-react';

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100 font-sans relative z-50">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column (Left) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="mb-8">
                 <img src="/logo.png" alt="DW Global Logo" className="h-20 object-contain" onError={(e) => {e.target.style.display='none'; e.target.parentElement.innerHTML = '<h3 class=\'text-2xl font-bold text-gray-900 tracking-tight\'><span class=\'text-[#0057B8]\'>Digital</span>Workforce</h3>'}} />
            </div>
            
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              Providing world-class talents as key pieces to top-notch teams. The bridge between local expertise and the global market.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 text-gray-900">
              <a href="#" className="hover:text-[#F2A900] transition-colors"><Facebook size={20} fill="currentColor" strokeWidth={0} /></a>
              <a href="#" className="hover:text-[#F2A900] transition-colors"><Linkedin size={20} fill="currentColor" strokeWidth={0} /></a>
              <a href="#" className="hover:text-[#F2A900] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#F2A900] transition-colors"><TikTok size={20} fill="currentColor" strokeWidth={0} /></a> 
            </div>
          </div>

          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Columns (Right) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-[#F2A900] transition-colors">Remote Staffing</a></li>
                <li><a href="#" className="hover:text-[#F2A900] transition-colors">Executive Search</a></li>
                <li><a href="#" className="hover:text-[#F2A900] transition-colors">Managed IT</a></li>
                <li><a href="#" className="hover:text-[#F2A900] transition-colors">HR Solutions</a></li>
                <li><a href="#" className="hover:text-[#F2A900] transition-colors">Seat Leasing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#about" className="hover:text-[#F2A900] transition-colors">Our Story</a></li>
                <li><a href="#testimonials" className="hover:text-[#F2A900] transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-[#F2A900] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#F2A900] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li>
                  <span className="block">Zen Building, San Antonio,</span>
                  <span>Makati City, Metro Manila</span>
                </li>
                <li>
                  <a href="tel:+63281234567" className="hover:text-[#F2A900] transition-colors">+63 (2) 8123 4567</a>
                </li>
                <li>
                  <a href="mailto:hello@digitalworkforce.ph" className="hover:text-[#F2A900] transition-colors">hello@digitalworkforce.ph</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Digital Workforce. All rights reserved.</p>
          <p>Site by: <span className="font-bold text-gray-900">MERDEGIA</span></p>
        </div>
      </div>
    </footer>
  );
};

// --- Scrolling Text Button ---
const ScrollingTextButton = ({ text, primary }) => (
  <motion.button
    className={`
      group relative overflow-hidden px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl
      ${primary 
        ? 'bg-[#F2A900] text-white' 
        : 'bg-white text-[#F2A900] border-2 border-[#F2A900]'
      }
    `}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="relative overflow-hidden h-7">
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
        <span className="flex items-center justify-center h-7 shrink-0">{text}</span>
        <span className="flex items-center justify-center h-7 shrink-0">{text}</span>
      </div>
    </div>
  </motion.button>
);

// --- Paper Plane with Trail Animation ---
const PaperPlaneWithTrail = ({ scrollYProgress }) => {
  // Animation paths - Centered flight path
  const x = useTransform(scrollYProgress, [0, 1], ["-40%", "110%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Gentle drift
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  
  return (
    <motion.div 
      style={{ x, y, rotate, scale }}
      className="absolute top-0 left-0 pointer-events-none w-full h-full flex items-center justify-center"
    >
       <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] text-white opacity-90 drop-shadow-2xl translate-x-10">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
             <motion.path
                d="M -60 60 Q -20 60 10 50"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3 3"
                style={{ opacity: 0.6 }}
             />
             <motion.path
                d="M -50 70 Q -10 70 20 58"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="2 4"
                style={{ opacity: 0.4 }}
             />
            <path 
              d="M10 50 L90 20 L60 80 L50 60 L10 50Z" 
              fill="currentColor" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinejoin="round"
            />
            <path d="M10 50 L90 20 L50 60" fill="black" fillOpacity="0.1" />
          </svg>
       </div>
    </motion.div>
  );
};

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div className="flex flex-col min-h-screen">
      <section 
        ref={containerRef} 
        id="contact" 
        className="relative w-full min-h-[750px] overflow-hidden flex flex-col bg-white"
      >
        
        {/* --- 1. STRIPED BACKGROUND (Z-0) --- */}
        <div className="absolute inset-0 z-0 w-full h-full flex flex-col opacity-100">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <img 
                src="strip1.png" 
                alt="" 
                className="w-full h-auto object-cover min-h-[120px] flex-shrink-0" 
              />
              <img 
                src="strip2.png" 
                alt="" 
                className="w-full h-auto object-cover min-h-[120px] flex-shrink-0" 
              />
            </React.Fragment>
          ))}
        </div>

        {/* --- 2. WHITE WAVE/CURVE OVERLAY (Z-20) --- */}
        <div 
          className="absolute inset-0 z-20 bg-white shadow-[10px_0_40px_rgba(0,0,0,0.1)]"
          style={{
            clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0% 100%)' 
          }}
        ></div>
        <div className="absolute inset-0 z-20 md:hidden bg-gradient-to-r from-white via-white to-transparent"></div>

        {/* --- 3. ANIMATED PAPER PLANE (Z-25) --- */}
        {/* Centered via flex container in component */}
        <div className="absolute inset-0 z-25 pointer-events-none overflow-hidden">
             <PaperPlaneWithTrail scrollYProgress={scrollYProgress} />
        </div>

        {/* --- 4. TEXT CONTENT CONTAINER (Z-30) --- */}
        <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-center min-h-[750px]">
          <div className="max-w-2xl pt-24 pb-24 md:pt-0 md:pb-0">
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
               {/* Headline */}
               <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[0.95] tracking-tighter drop-shadow-sm">
                  Ready to Take Flight?
               </h2>
               
               <p className="text-gray-600 text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-lg tracking-wide">
                  Whether you need to build a world-class team or find your dream career, the journey starts here. 
               </p>

               {/* Buttons */}
               <div className="flex flex-col sm:flex-row justify-start gap-6 mb-16">
                 <ScrollingTextButton text="Hire Talent" primary={true} />
                 <ScrollingTextButton text="Apply for Jobs" primary={false} />
               </div>

               {/* Contact / Name Email Input Form */}
               <div className="border-t border-gray-100 pt-10">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Or get in touch directly</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="bg-gray-50 border-2 border-transparent focus:border-[#F2A900] hover:bg-gray-100 px-6 py-3 rounded-full outline-none transition-all duration-300 w-full sm:w-auto flex-1 text-gray-700"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-gray-50 border-2 border-transparent focus:border-[#F2A900] hover:bg-gray-100 px-6 py-3 rounded-full outline-none transition-all duration-300 w-full sm:w-auto flex-1 text-gray-700"
                    />
                    <button className="bg-[#0057B8] text-white p-3 rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-md flex items-center justify-center">
                       <ArrowRight size={24} />
                    </button>
                  </div>
               </div>

            </motion.div>
          </div>
        </div>

      </section>

      {/* Footer is rendered here */}
      <Footer />
    </div>
  );
};

export default Contact;