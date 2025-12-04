import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Users, Building, Monitor, Briefcase, UserCheck, Settings, Globe } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setHoveredTab(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { 
      id: 'solutions', 
      label: 'Solutions',
      type: 'mega-columns', 
      columns: [
        {
          title: "Core Staffing",
          items: [
            { icon: <Users size={20}/>, name: "Remote Staffing", desc: "Build dedicated offshore teams." },
            { icon: <UserCheck size={20}/>, name: "Executive Search", desc: "Find top-tier leadership." },
            { icon: <Briefcase size={20}/>, name: "Seat Leasing", desc: "Plug-and-play office space." },
          ]
        },
        {
          title: "Technology",
          items: [
            { icon: <Monitor size={20}/>, name: "Managed IT Services", desc: "24/7 Tech support & infra." },
            { icon: <Globe size={20}/>, name: "App Development", desc: "Custom software solutions." },
          ]
        },
        {
          title: "Corporate Services",
          items: [
            { icon: <Building size={20}/>, name: "HR Solutions", desc: "Payroll & benefits management." },
            { icon: <Settings size={20}/>, name: "Training & Events", desc: "Upskilling and corporate gatherings." },
          ]
        }
      ]
    },
    { 
      id: 'about', 
      label: 'About Us',
      type: 'mega-cards', 
      items: [
        { title: "Who We Are", image: "/about-us1.webp", action: "Read Our Story" },
        { title: "Our Clients", image: "/about-us2.jpg", action: "View Partners" }
      ]
    },
    { id: 'opportunities', label: 'Opportunities' }, 
    { id: 'insights', label: 'Insights' }, 
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-10 left-0 right-0 z-50 flex justify-center px-4"
        onMouseLeave={() => setHoveredTab(null)} 
      >
        <div 
          className={`
            relative flex items-center justify-between 
            px-3 pl-6 py-2.5 
            rounded-full transition-all duration-500
            w-full max-w-5xl
            bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg
          `}
        >
          {/* 1. LOGO */}
          <div 
            className="text-xl tracking-tighter text-black font-bold cursor-pointer select-none shrink-0"
            onClick={scrollToTop}
          >
            <img
              src="/logo.png"
              alt="Digital Workforce PH Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* 2. DESKTOP MENU LINKS */}
          <div className="hidden md:flex items-center justify-center gap-6 flex-1 px-4">
            {navLinks.map((tab) => (
              <div key={tab.id} className="relative group">
                <button
                  onClick={() => !tab.type && scrollToSection(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  className={`
                    relative text-sm font-medium transition-all duration-300 flex items-center gap-1
                    text-black/80
                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1e4b92] hover:to-[#6ca443]
                  `}
                >
                  {tab.label}
                  {tab.type && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 stroke-[2.5] ${hoveredTab === tab.id ? 'rotate-180 text-[#1e4b92]' : 'text-black/40'}`}
                    />
                  )}
                </button>

                {/* --- MEGA MENU --- */}
                <AnimatePresence>
                  {hoveredTab === tab.id && tab.type && (
                     <motion.div
                       initial={{ opacity: 0, y: 10, scale: 0.98 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       exit={{ opacity: 0, y: 10, scale: 0.98 }}
                       transition={{ duration: 0.2, ease: "easeOut" }}
                       className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50 origin-top"
                     >
                       <div 
                           className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden text-left"
                           style={{
                               width: tab.type === 'mega-columns' ? '800px' : '600px'
                           }}
                       >
                             {tab.type === 'mega-columns' && (
                                <div className="p-8 grid grid-cols-3 gap-8 relative z-10">
                                    {tab.columns.map((col, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">
                                                {col.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {col.items.map((item, i) => (
                                                    <li key={i} className="group/item flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                                                        <div className="mt-0.5 text-black/40 group-hover/item:text-[#1e4b92] transition-colors duration-300">
                                                            {item.icon}
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-black text-sm group-hover/item:text-[#1e4b92] transition-colors">{item.name}</p>
                                                            <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                             )}

                             {tab.type === 'mega-cards' && (
                                <div className="p-6 grid grid-cols-2 gap-4 relative z-10">
                                    {tab.items.map((card, idx) => (
                                        <div key={idx} className="relative h-48 rounded-2xl overflow-hidden group/card cursor-pointer bg-gray-100">
                                            {/* LAG FIX: Added loading="lazy" and decoding="async" to images */}
                                            <img 
                                              src={card.image} 
                                              alt={card.title} 
                                              loading="lazy"
                                              decoding="async"
                                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                            
                                            <div className="absolute bottom-0 left-0 p-5 w-full">
                                                <h4 className="text-white font-bold text-lg mb-1">{card.title}</h4>
                                                {/* STYLE FIX: Unbolded text (font-medium) and added brand green color */}
                        <div className="flex items-center gap-2 text-yellow-400 text-xs font-medium translate-y-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
                          <span className="text-yellow-400">{card.action}</span> <ChevronRight size={14} className="text-yellow-400" />
                        </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                             )}
                        </div>
                     </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 3. CTA BUTTON - Reverted to Black */}
          <div className="hidden md:block shrink-0">
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative group overflow-hidden bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-gray-900 transition-colors duration-300"
            >
              <div className="relative flex flex-col items-center h-5 overflow-hidden">
                <span className="block transform transition-transform duration-300 group-hover:-translate-y-full">
                  Get In Touch
                </span>
                <span className="absolute top-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-white">
                  Get In Touch
                </span>
              </div>
            </motion.button>
          </div>

          {/* 4. MOBILE TOGGLE */}
          <div className="md:hidden ml-auto">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2.5 text-black bg-white/40 hover:bg-white/60 rounded-full transition-colors"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="fixed top-28 left-4 right-4 z-40 bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full p-4 text-left font-medium text-black hover:text-[#1e4b92] hover:bg-gray-50 rounded-2xl transition-all flex justify-between items-center"
                >
                  {item.label}
                  {item.type && <ChevronDown size={16} className="text-black/30" />}
                </button>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full p-4 text-center font-bold text-white bg-black rounded-2xl shadow-lg active:scale-95 transition-transform"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;