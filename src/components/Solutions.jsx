import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Users, GraduationCap, Building, Monitor, 
  Briefcase, ShieldCheck, MapPin, TrendingUp, PenTool, 
  Globe, Server, ArrowLeft, ArrowRight, Lightbulb, Rocket 
} from 'lucide-react';

// --- DATA ---
// Unified list of 12 services (Perfect for 3 pages of 4 items)
const allServices = [
  { 
    title: "Executive Search", 
    icon: <Search className="w-6 h-6" />, 
    desc: "Sourcing top-tier leadership and niche talent for both local and international markets." 
  },
  { 
    title: "Remote Staffing", 
    icon: <Globe className="w-6 h-6" />, 
    desc: "Connecting you with vetted Filipino remote professionals to scale your global operations." 
  },
  { 
    title: "Managed IT Solutions", 
    icon: <Server className="w-6 h-6" />, 
    desc: "Full-scale technical support, infrastructure management, and cybersecurity for 24/7 reliability." 
  },
  { 
    title: "HR Integrated Services", 
    icon: <Briefcase className="w-6 h-6" />, 
    desc: "End-to-end payroll, benefits administration, and compliance handling for your workforce." 
  },
  { 
    title: "Employer of Record (EOR)", 
    icon: <ShieldCheck className="w-6 h-6" />, 
    desc: "We handle the legal entities and local compliance; you simply manage the talent." 
  },
  { 
    title: "Corporate Events", 
    icon: <Users className="w-6 h-6" />, 
    desc: "Strategic planning and logistics for large-scale company gatherings and conferences." 
  },
  { 
    title: "Corporate Training", 
    icon: <GraduationCap className="w-6 h-6" />, 
    desc: "Upskilling teams for the modern digital landscape with tailored learning programs." 
  },
  { 
    title: "Talent Mapping", 
    icon: <MapPin className="w-6 h-6" />, 
    desc: "Deep market intelligence to identify the best talent pools and salary benchmarks." 
  },
  { 
    title: "Seat Leasing", 
    icon: <Building className="w-6 h-6" />, 
    desc: "Plug-and-play office infrastructure in prime Metro Manila locations." 
  },
  { 
    title: "Branding & Marketing", 
    icon: <PenTool className="w-6 h-6" />, 
    desc: "Outsourced creative teams to drive your global campaigns and brand identity." 
  },
  { 
    title: "Business Consulting", 
    icon: <Lightbulb className="w-6 h-6" />, 
    desc: "Expert guidance on operational efficiency, market entry, and organizational structure." 
  },
  { 
    title: "B.O.T Solutions", 
    icon: <Rocket className="w-6 h-6" />, 
    desc: "Build-Operate-Transfer: We build and stabilize your team, then transfer ownership to you." 
  },
];

// --- COMPONENTS ---

const BackgroundGlobe = () => (
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.03] z-0 translate-y-1/2">
    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M10,100 a90,30 0 1,0 180,0 a90,30 0 1,0 -180,0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M100,10 a30,90 0 1,0 0,180 a30,90 0 1,0 0,-180" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M36,36 a90,90 0 0,1 128,128" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      <path d="M36,164 a90,90 0 0,0 128,-128" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" />
      <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  </div>
);

const Solutions = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(allServices.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentServices = allServices.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden font-sans">
      {/* Background Image with Reduced Opacity and Smaller Size */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/solutions-bg.png)',
          backgroundSize: '70%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>


      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-brand-yellow font-bold text-sm tracking-widest uppercase mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-brand-yellow to-gray-900 animate-gradient pb-1">
              Comprehensive Solutions
            </span>
            <br />
            <span className="text-black">for Every Business Need</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            From local startups to global enterprises, we provide the infrastructure, 
            talent, and strategy you need to scale without limits.
          </motion.p>
        </div>

        {/* Services Grid (2x2) */}
        <div className="min-h-[500px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentServices.map((service, index) => (
                  <div
                    key={service.title}
                    className="group bg-white p-6 md:p-8 rounded-3xl hover:bg-gray-50 transition-all duration-500 h-full flex flex-col items-start"
                  >
                    {/* Clean Icon Styling */}
                    <div className="mb-6 relative">
                      <div className="text-gray-700 group-hover:text-brand-yellow transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>

                  <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-brand-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-base">
                    {service.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-16">
            
            {/* Prev Button */}
            <button
                onClick={prevPage}
                className="group w-14 h-14 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:border-brand-yellow hover:bg-gray-50 transition-all duration-300"
                aria-label="Previous Page"
            >
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow transition-colors group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex gap-2">
                {[...Array(totalPages)].map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentPage === idx ? 'w-8 bg-brand-black' : 'w-1.5 bg-gray-200'
                        }`}
                    />
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={nextPage}
                className="group w-14 h-14 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:border-brand-yellow hover:bg-gray-50 transition-all duration-300"
                aria-label="Next Page"
            >
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow transition-colors group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Solutions;