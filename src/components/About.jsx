import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowUpRight, ArrowRight } from 'lucide-react';

// --- DATA: Blogs ---
const blogs = [
  {
    category: "Industry Event",
    title: "Recruiters' Summit Manila 2024",
    image: "/blog1.webp", 
    description: "Connecting with top talent acquisition leaders to shape the future of recruitment in the Philippines."
  },
  {
    category: "Community",
    title: "City Clark Sneaker Expo 2",
    image: "/blog-sneaker.jpg", 
    description: "Bridging business and lifestyle culture at the biggest sneaker event in Clark."
  },
  {
    category: "Summit",
    title: "IBPAP Summit 2024",
    image: "/blog-ibpap.jpg", 
    description: "Aligning with industry giants to drive innovation in the IT-BPM sector."
  },
  {
    category: "Global",
    title: "Client Meet & Greet: Digital Consulting PH Goes to Singapore",
    image: "/blog-sg.jpg", 
    description: "Strengthening international partnerships and exploring new horizons in Singapore."
  },
  {
    category: "Recruitment",
    title: "DCPH x GetHired Job Fair",
    image: "/blog-jobfair.jpg", 
    description: "Empowering job seekers and connecting top-tier talent with global career opportunities."
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "What services does Digital Workforce provide?",
    answer: "We offer end-to-end workforce and business solutions including remote staffing, executive search, HR-integrated services, managed IT, talent mapping, seat leasing, and business consulting for both local and global clients."
  },
  {
    question: "How does your remote staffing process work?",
    answer: "We source, vet, and onboard qualified Filipino talent based on your requirements. You choose your ideal candidate, and we handle HR, compliance, IT support, and workforce management so your team can start quickly and operate smoothly."
  },
  {
    question: "Do you hire for international companies?",
    answer: "Yes. We connect global businesses with world-class Filipino professionals and provide Employer of Record (EOR), compliance, and operational support to ensure seamless cross-border hiring."
  },
  {
    question: "Are there additional fees or hidden costs?",
    answer: "No. All pricing is transparent and tailored to your specific workforce needs. We provide clear cost breakdowns before onboarding any team member or service."
  },
  {
    question: "Can you support large-scale team expansion?",
    answer: "Absolutely. Our scalable model allows companies to grow from one hire to full departments—supported by recruitment, HR, IT, and workspace solutions designed for long-term stability."
  }
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      
      {/* CSS to hide scrollbar across browsers */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* =========================================
            SECTION 1: BLOGS / INSIGHTS
           ========================================= */}
        <div className="mb-32 border-b border-gray-100 pb-20">
            {/* Blog Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-normal text-brand-black mb-3 tracking-tight">
                        Latest Happenings
                    </h2>
                    <p className="text-gray-500 font-light max-w-md">
                        Updates from our latest events, summits, and global client visits.
                    </p>
                </motion.div>
                
                <motion.a 
                    href="#insights"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-black hover:text-brand-yellow transition-colors"
                >
                    View All Updates
                    <span className="bg-gray-100 p-2 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <ArrowRight size={16} />
                    </span>
                </motion.a>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
                <div className="flex gap-6 w-max px-2">
                    {blogs.map((post, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            // Fixed width cards for horizontal scrolling
                            className="group relative h-[420px] w-[300px] md:w-[350px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex-shrink-0"
                        >
                            {/* Background Image */}
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                                {/* Slide up content wrapper */}
                                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase mb-3 block">
                                        {post.category}
                                    </span>
                                    <h3 className="text-white text-xl font-bold leading-tight mb-4 line-clamp-3">
                                        {post.title}
                                    </h3>
                                    
                                    {/* Description reveals on hover */}
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                        <div className="overflow-hidden">
                                            <p className="text-gray-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                                {post.description}
                                            </p>
                                            <div className="text-brand-yellow mt-4 flex items-center  text-xs font-medium gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                                Read More <ArrowUpRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>


        {/* =========================================
            SECTION 2: FAQ
           ========================================= */}
        
        {/* FAQ Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-brand-black mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-1 mt-2">
             <p className="text-sm md:text-base font-normal text-gray-500">
               Redesign the Future: From Puzzle to Paper Plane
             </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-gray-100 last:border-0 transition-all duration-300 ${isOpen ? 'pb-5' : 'pb-3'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between text-left py-2 group/btn"
                  >
                    <span className={`text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-brand-black font-medium' : 'text-gray-400 font-normal group-hover/btn:text-gray-600'}`}>
                      {faq.question}
                    </span>
                    <span className={`ml-4 p-1.5 rounded-full transition-colors ${isOpen ? 'bg-brand-yellow/10 text-brand-black' : 'text-gray-300'}`}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-base text-gray-500 leading-relaxed mt-2 pr-6 font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* CTA Link */}
            <div className="mt-8">
                <a href="#contact" className="inline-flex items-center gap-2 text-brand-yellow font-medium text-base hover:gap-3 transition-all group">
                    Let's Talk 
                    <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Image Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] w-full hidden lg:block"
          >
             <div className="absolute inset-0 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img 
                   src="/faq.png" 
                   alt="FAQ Visual" 
                   className="w-full h-full object-cover"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;