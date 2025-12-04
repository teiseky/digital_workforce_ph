import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

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
  
  // Mouse tracking for gradient spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      id="about" 
      className="py-20 bg-white relative group/section overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* Global Gradient Cursor Follower */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/section:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 162, 1, 0.05),
              rgba(108, 164, 67, 0.05),
              rgba(30, 75, 146, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-brand-black mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          
          {/* Subtext */}
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
                {/* Main Image - Clean, no floating elements */}
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