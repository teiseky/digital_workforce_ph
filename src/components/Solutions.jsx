import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Users, GraduationCap, Building, Monitor, 
  Briefcase, ShieldCheck, MapPin, PenTool, 
  Globe, Server, ArrowLeft, ArrowRight, Lightbulb, Rocket,
  Code, Calculator, Layout, Headphones, Anchor, Facebook, ExternalLink
} from 'lucide-react';

// --- DATA: SERVICES (Business Owners) ---
const serviceData = [
  { 
    title: "Executive Search", 
    icon: Search, 
    desc: "Sourcing top-tier leadership and niche talent for both local and international markets." 
  },
  { 
    title: "Remote Staffing", 
    icon: Globe, 
    desc: "Connecting you with vetted Filipino remote professionals to scale your global operations." 
  },
  { 
    title: "Managed IT Solutions", 
    icon: Server, 
    desc: "Full-scale technical support, infrastructure management, and cybersecurity for 24/7 reliability." 
  },
  { 
    title: "HR Integrated Services", 
    icon: Briefcase, 
    desc: "End-to-end payroll, benefits administration, and compliance handling for your workforce." 
  },
  { 
    title: "Employer of Record", 
    icon: ShieldCheck, 
    desc: "We handle the legal entities and local compliance; you simply manage the talent." 
  },
  { 
    title: "Corporate Events", 
    icon: Users, 
    desc: "Strategic planning and logistics for large-scale company gatherings and conferences." 
  },
  { 
    title: "Corporate Training", 
    icon: GraduationCap, 
    desc: "Upskilling teams for the modern digital landscape with tailored learning programs." 
  },
  { 
    title: "Talent Mapping", 
    icon: MapPin, 
    desc: "Deep market intelligence to identify the best talent pools and salary benchmarks." 
  },
  { 
    title: "Seat Leasing", 
    icon: Building, 
    desc: "Plug-and-play office infrastructure in prime Metro Manila locations." 
  },
  { 
    title: "Branding & Marketing", 
    icon: PenTool, 
    desc: "Outsourced creative teams to drive your global campaigns and brand identity." 
  },
  { 
    title: "Business Consulting", 
    icon: Lightbulb, 
    desc: "Expert guidance on operational efficiency, market entry, and organizational structure." 
  },
  { 
    title: "B.O.T Solutions", 
    icon: Rocket, 
    desc: "Build-Operate-Transfer: We build and stabilize your team, then transfer ownership to you." 
  },
];

// --- DATA: CAREERS (Job Seekers) ---
const careerData = [
  {
    title: "Laravel Developer",
    icon: Code,
    desc: "Build robust web applications and contribute to innovative projects. 5+ years exp."
  },
  {
    title: "Senior Accountant",
    icon: Calculator,
    desc: "Certified Public Accountant (CPA) with 5+ years in financial statement analysis."
  },
  {
    title: "UI/UX Engineer",
    icon: Layout,
    desc: "Design, develop, and optimize intuitive interfaces that delight users."
  },
  {
    title: "BIM Modeler",
    icon: Building,
    desc: "Transform design concepts into virtual reality using advanced architectural software."
  },
  {
    title: "Virtual Assistant",
    icon: Headphones,
    desc: "Support global operations from anywhere. Organized, detail-oriented, and communicative."
  },
  {
    title: "Audit Senior",
    icon: ShieldCheck,
    desc: "Lead audit processes ensuring accuracy and compliance. Fully Qualified ACA/ACCA/CPA."
  },
  {
    title: "Graphic Designer",
    icon: PenTool,
    desc: "Create stunning visuals and impactful designs for global brand campaigns."
  },
  {
    title: "Account Executive",
    icon: Users,
    desc: "Fluent in Japanese? Leverage your skills to foster connections and drive business growth."
  },
  {
    title: "Structural Design Mgr",
    icon: Anchor,
    desc: "Lead the team in developing cutting-edge structures. 10+ years relevant experience."
  },
  {
    title: "SEO Specialist",
    icon: Search,
    desc: "Enhance visibility and drive organic traffic for WordPress and Shopify platforms."
  },
  {
    title: "IT Support",
    icon: Monitor,
    desc: "Ensure smooth operations and provide top-notch technical support."
  },
  {
    title: "Procurement Manager",
    icon: Briefcase,
    desc: "Lead procurement strategies, optimize costs, and manage supplier relationships."
  },
];

// --- DATA: FB POSTS ---
const fbPosts = Array.from({ length: 8 }).map((_, i) => ({
  src: `/post${i + 1}.jpg`,
  alt: `Job Opportunity ${i + 1}`
}));

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
    <section id="solutions" className="py-24 bg-white relative font-sans w-full min-h-screen overflow-hidden">
      
      {/* BACKGROUND IMAGE FIX 
        - Increased opacity to 0.25 for better visibility
        - 'backgroundAttachment: fixed' prevents the image from resizing/glitching when container height changes
        - 'backgroundPosition: center top' anchors it nicely
      */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div 
            className="w-full h-full opacity-80"
            style={{
                backgroundImage: 'url(/solutions-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundAttachment: 'fixed', 
                backgroundRepeat: 'no-repeat'
            }}
         />
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
      </div>

      <style>{`
        /* Hide Scrollbar Utility */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .animate-gradient-text {
            background-size: 200% auto;
            animation: textShine 4s linear infinite;
        }
        @keyframes textShine {
            to {
                background-position: 200% center;
            }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-50 p-1.5 rounded-full inline-flex relative shadow-inner border border-slate-200">
            <motion.div
              className="absolute top-1.5 bottom-1.5 bg-slate-900 rounded-full shadow-lg z-0"
              initial={false}
              animate={{
                left: activeTab === 'business' ? '6px' : '50%',
                width: 'calc(50% - 6px)',
                x: activeTab === 'business' ? 0 : 0
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <button
              onClick={() => handleTabChange('business')}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${
                activeTab === 'business' ? 'text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              FOR BUSINESS
            </button>
            <button
              onClick={() => handleTabChange('candidates')}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${
                activeTab === 'candidates' ? 'text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              FOR CANDIDATES
            </button>
          </div>
        </div>

        {/* Dynamic Header */}
        <div className="text-center mb-14 min-h-[140px] flex flex-col justify-end">
           <AnimatePresence mode='wait'>
            {activeTab === 'business' ? (
              <motion.div
                key="header-business"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-yellow-500 font-extrabold text-xs tracking-[0.2em] uppercase mb-4 block">
                  Our Expertise
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
                  Comprehensive Solutions
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-green-600 to-yellow-500 animate-gradient-text mt-1">
                     For Global Growth
                  </span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed font-medium">
                  Infrastructure, compliance, and top-tier talent management for local startups to global enterprises.
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
                <span className="text-green-600 font-extrabold text-xs tracking-[0.2em] uppercase mb-4 block">
                  Join Our Team
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
                  Fostering Careers
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-green-600 to-yellow-500 animate-gradient-text mt-1">
                     Connecting Top Talent
                  </span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed font-medium">
                  Find your next big opportunity. We cultivate excellence where top talent thrives.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Unified Grid Container - REDUCED MIN-HEIGHT FOR CLOSER BUTTONS */}
        <div className="min-h-[420px] relative"> 
            <AnimatePresence mode='wait'>
              <motion.div
                key={`${activeTab}-${currentPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {currentItems.map((item, index) => (
                    <div
                      key={item.title}
                      className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-300 h-full flex flex-col items-start relative overflow-hidden"
                    >
                      {/* Hover Decoration */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Icon - Black by default, Yellow on Hover */}
                      <div className="mb-6 p-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <item.icon 
                            className="w-10 h-10 text-slate-900 group-hover:text-yellow-500 transition-colors duration-300" 
                        />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors z-10">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-500 leading-relaxed text-sm flex-grow font-medium z-10">
                        {item.desc}
                      </p>
                      
                      {/* More Details Link (Only for Candidates) */}
                      {activeTab === 'candidates' && (
                          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-yellow-600 transition-colors cursor-pointer z-10">
                              More Details <ArrowRight className="w-4 h-4" />
                          </div>
                      )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
        </div>

        {/* Navigation - REDUCED TOP MARGIN */}
        <div className="flex items-center justify-center gap-6 mt-8">
            <button
                onClick={prevPage}
                className="group w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all duration-300"
                aria-label="Previous Page"
            >
                <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-yellow-400 transition-colors group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
                {[...Array(totalPages)].map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentPage === idx ? 'w-8 bg-slate-900' : 'w-2 bg-slate-200'
                        }`}
                    />
                ))}
            </div>

            <button
                onClick={nextPage}
                className="group w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all duration-300"
                aria-label="Next Page"
            >
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-yellow-400 transition-colors group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>

        {/* --- NEW SECTION: Facebook Job Feed (Visible only for Candidates) --- */}
        <AnimatePresence>
          {activeTab === 'candidates' && (
            <motion.div
              layout 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-20 pt-10 border-t border-slate-100"
            >
              {/* Header for FB Section */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-blue-600 font-bold text-[10px] tracking-widest uppercase mb-2 flex items-center gap-2">
                    Social Media Updates
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Latest Openings
                  </h3>
                </div>
                
                <a 
                  href="https://facebook.com/yourpage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xs font-bold bg-[#1877F2] text-white px-6 py-3 rounded-full hover:bg-[#166fe5] hover:shadow-lg transition-all duration-300"
                >
                  <Facebook className="w-4 h-4 fill-white" />
                  View Facebook Page
                </a>
              </div>

              {/* Scrollable Container */}
              <div className="relative group/slider">
                <div className="flex overflow-x-auto gap-4 pb-8 px-1 -mx-1 no-scrollbar scroll-smooth snap-x snap-mandatory">
                  {fbPosts.map((post, index) => (
                    <div 
                      key={index} 
                      className="flex-none w-64 md:w-72 aspect-[4/5] relative rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-50 snap-center group/card cursor-pointer"
                    >
                      {/* Image Placeholder */}
                      <img 
                        src={post.src} 
                        alt={post.alt} 
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        onError={(e) => {
                           e.target.src = "https://placehold.co/400x500/f1f5f9/1e293b?text=Job+Post"; 
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="text-slate-900 text-xs font-bold px-4 py-2 bg-yellow-400 rounded-full shadow-lg flex items-center gap-2">
                           View Post <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Solutions;