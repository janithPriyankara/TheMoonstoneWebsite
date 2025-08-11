import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-white">The Moonstone (Pvt) Ltd.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Your one-stop partner for engineering, design, IT, and creative solutions.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                We deliver modern solutions in electronics, product design, architecture, IT, software, web development, photography, innovation, consultancy, and more. Now offering specialized services like electroplating and rapid prototyping. Explore our portfolio and get in touch for a quote or consultation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Electronics & Product Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">IT & Software Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Architectural & Creative Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Other Services: Electroplating & More</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/logo.png" 
                alt="The Moonstone (PVT) LTD" 
                className="w-full max-w-md mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-gray-600/20 rounded-full blur-3xl transform scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

