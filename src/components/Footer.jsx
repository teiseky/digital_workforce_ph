import React from 'react';
// Using Lucide icons, assuming a solid/filled variant exists or using Fa for FontAwesome as a fallback pattern if needed.
// For this example, I'll use the default Lucide icons but style them to look solid.
// If you have specific solid icon components, replace them here.
import { Facebook, Linkedin, Instagram, Twitter as TikTok } from 'lucide-react'; // Using Twitter as placeholder for TikTok if not available in your Lucide version

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100 font-sans">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column (Left) */}
          <div className="md:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <img src="/logo.png" alt="DW Global Logo" className="h-20 mb-8" />
            
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              Providing world-class talents as key pieces to top-notch teams. The bridge between local expertise and the global market.
            </p>
            
            {/* Social Media - Solid Icons, No Background */}
            <div className="flex gap-4 text-brand-black">
              <a href="#" className="hover:text-brand-yellow transition-colors"><Facebook size={20} fill="currentColor" /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Linkedin size={20} fill="currentColor" /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Instagram size={20} /></a>
              {/* Note: Lucide doesn't have a filled TikTok icon by default. Using a placeholder or a different icon set is recommended for a true solid look. */}
              <a href="#" className="hover:text-brand-yellow transition-colors"><TikTok size={20} fill="currentColor" /></a> 
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Columns (Right) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Solutions with Sub-links */}
            <div>
              <h4 className="font-bold text-brand-black mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Remote Staffing</a></li>
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Executive Search</a></li>
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Managed IT</a></li>
                <li><a href="#" className="hover:text-brand-yellow transition-colors">HR Solutions</a></li>
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Seat Leasing</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-bold text-brand-black mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#about" className="hover:text-brand-yellow transition-colors">Our Story</a></li>
                <li><a href="#testimonials" className="hover:text-brand-yellow transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact - No Icons */}
            <div>
              <h4 className="font-bold text-brand-black mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li>
                  <span className="block">Zen Building, San Antonio,</span>
                  <span>Makati City, Metro Manila</span>
                </li>
                <li>
                  <a href="tel:+63281234567" className="hover:text-brand-yellow transition-colors">+63 (2) 8123 4567</a>
                </li>
                <li>
                  <a href="mailto:hello@digitalworkforce.ph" className="hover:text-brand-yellow transition-colors">hello@digitalworkforce.ph</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Digital Workforce. All rights reserved.</p>
          <p>Site by: <span className="font-bold text-brand-black">MERDEGIA</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;