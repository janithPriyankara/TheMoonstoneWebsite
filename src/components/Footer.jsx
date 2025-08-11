import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Facebook, Instagram, Linkedin, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              The Moonstone <span className="text-blue-400 ml-2">(Pvt) Ltd.</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Multidisciplinary experts in electronics, software, architecture, and design.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">Sanasuma, Wawlagala, Baddegama, Sri Lanka</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">+94 77 870 2053 | </span>
                <a href="https://wa.me/94741840977" target="_blank" rel="noopener" className="flex items-center text-gray-300 hover:text-green-500">
                  <MessageSquare className="h-4 w-4 mr-1 text-green-500" />
                  +94 74 184 0977
                </a>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-white mb-1">Email & WhatsApp</h4>
                <div className="flex items-center mb-1">
                  <Mail className="h-4 w-4 mr-2 text-blue-400" />
                  <span className="text-gray-300">themoonstone100@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2 text-green-500" />
                  <a href="https://wa.me/94741840977" target="_blank" rel="noopener" className="text-gray-300 hover:text-green-500 font-semibold">+94 74 184 0977</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Electronics Design</li>
              <li className="text-gray-300">Software Development</li>
              <li className="text-gray-300">Architectural Design</li>
              <li className="text-gray-300">3D Printing</li>
              <li className="text-gray-300">Consulting Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 The Moonstone (Pvt) Ltd. All rights reserved.</p>
              <p className="mt-1">Registration No.: PV00325510</p>
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-blue-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-pink-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-blue-700">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://wa.me/94778702053" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-green-500">
                <MessageSquare className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-red-600">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

