import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Users, GraduationCap, Building, Monitor, 
  Briefcase, ShieldCheck, MapPin, PenTool, 
  Globe, Server, ArrowLeft, ArrowRight, Lightbulb, Rocket,
  Code, Calculator, Layout, Headphones, Anchor
} from 'lucide-react';

// --- DATA: SERVICES (Business Owners) ---
const serviceData = [
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

// --- DATA: CAREERS (Job Seekers) ---
const careerData = [
  {
    title: "Laravel Developer",
    icon: <Code className="w-6 h-6" />,
    desc: "Build robust web applications and contribute to innovative projects. 5+ years exp."
  },
  {
    title: "Senior Accountant",
    icon: <Calculator className="w-6 h-6" />,
    desc: "Certified Public Accountant (CPA) with 5+ years in financial statement analysis."
  },
  {
    title: "UI/UX Engineer",
    icon: <Layout className="w-6 h-6" />,
    desc: "Design, develop, and optimize intuitive interfaces that delight users."
  },
  {
    title: "BIM Modeler",
    icon: <Building className="w-6 h-6" />,
    desc: "Transform design concepts into virtual reality using advanced architectural software."
  },
  {
    title: "Virtual Assistant",
    icon: <Headphones className="w-6 h-6" />,
    desc: "Support global operations from anywhere. Organized, detail-oriented, and communicative."
  },
  {
    title: "Audit Senior",
    icon: <ShieldCheck className="w-6 h-6" />,
    desc: "Lead audit processes ensuring accuracy and compliance. Fully Qualified ACA/ACCA/CPA."
  },
  {
    title: "Graphic Designer",
    icon: <PenTool className="w-6 h-6" />,
    desc: "Create stunning visuals and impactful designs for global brand campaigns."
  },
  {
    title: "Account Executive",
    icon: <Users className="w-6 h-6" />,
    desc: "Fluent in Japanese? Leverage your skills to foster connections and drive business growth."
  },
  {
    title: "Structural Design Mgr",
    icon: <Anchor className="w-6 h-6" />,
    desc: "Lead the team in developing cutting-edge structures. 10+ years relevant experience."
  },
  {
    title: "SEO Specialist",
    icon: <Search className="w-6 h-6" />,
    desc: "Enhance visibility and drive organic traffic for WordPress and Shopify platforms."
  },
  {
    title: "IT Support",
    icon: <Monitor className="w-6 h-6" />,
    desc: "Ensure smooth operations and provide top-notch technical support."
  },
  {
    title: "Procurement Manager",
    icon: <Briefcase className="w-6 h-6" />,
    desc: "Lead procurement strategies, optimize costs, and manage supplier relationships."
  },
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('business'); // 'business' | 'candidates'
  const [currentPage, setCurrentPage] = useState(0);
  
  // Select data based on tab
  const activeData = activeTab === 'business' ? serviceData : careerData;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(activeData.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Reset page when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const currentItems = activeData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="solutions" className="py-20 bg-white relative overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
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

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-full inline-flex relative">
            <motion.div
              className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm z-0"
              initial={false}
              animate={{
                left: activeTab === 'business' ? '4px' : '50%',
                width: 'calc(50% - 4px)',
                x: activeTab === 'business' ? 0 : 0
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <button
              onClick={() => handleTabChange('business')}
              className={`relative z-10 px-6 py-2 rounded-full text-xs font-bold tracking-wide transition-colors duration-300 ${
                activeTab === 'business' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              FOR BUSINESS
            </button>
            <button
              onClick={() => handleTabChange('candidates')}
              className={`relative z-10 px-6 py-2 rounded-full text-xs font-bold tracking-wide transition-colors duration-300 ${
                activeTab === 'candidates' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              FOR CANDIDATES
            </button>
          </div>
        </div>

        {/* Dynamic Header - Fixed Height */}
        <div className="text-center mb-12 min-h-[160px] flex flex-col justify-end">
           <AnimatePresence mode='wait'>
            {activeTab === 'business' ? (
              <motion.div
                key="header-business"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-brand-yellow font-bold text-xs tracking-widest uppercase mb-3 block">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-brand-yellow to-gray-900 animate-gradient pb-1">
                    Comprehensive Solutions
                  </span>
                  <span className="text-black block mt-1">for Every Business Need</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                  From local startups to global enterprises, we provide the infrastructure and talent to scale without limits.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="header-candidates"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-brand-yellow font-bold text-xs tracking-widest uppercase mb-3 block">
                  Our Opportunities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-brand-yellow to-gray-900 animate-gradient pb-1">
                    Fostering Careers
                  </span>
                  <span className="text-black block mt-1">Connecting Top Talent</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                  Cultivating careers and excellence. Where top talent thrives in a culture of success.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Unified Grid - Fixed Height Wrapper */}
        <div className="min-h-[420px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={`${activeTab}-${currentPage}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {currentItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="group bg-white p-6 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:border-brand-yellow/50 transition-all duration-300 h-full flex flex-col items-start"
                  >
                    {/* Icon */}
                    <div className="mb-4 text-gray-700 group-hover:text-brand-yellow transition-colors duration-300">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-yellow transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                      {item.desc}
                    </p>
                    
                    {/* More Details Link (Only for Candidates) */}
                    {activeTab === 'candidates' && (
                        <span className="mt-4 text-xs font-bold text-gray-900 border-b border-brand-yellow pb-0.5 group-hover:text-brand-yellow transition-colors cursor-pointer">
                            More Details
                        </span>
                    )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
            <button
                onClick={prevPage}
                className="group w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-brand-yellow hover:bg-gray-50 transition-all duration-300"
                aria-label="Previous Page"
            >
                <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-brand-yellow transition-colors group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <div className="flex gap-1.5">
                {[...Array(totalPages)].map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1 rounded-full transition-all duration-300 ${
                            currentPage === idx ? 'w-6 bg-brand-black' : 'w-1 bg-gray-200'
                        }`}
                    />
                ))}
            </div>

            <button
                onClick={nextPage}
                className="group w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-brand-yellow hover:bg-gray-50 transition-all duration-300"
                aria-label="Next Page"
            >
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-yellow transition-colors group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Solutions;