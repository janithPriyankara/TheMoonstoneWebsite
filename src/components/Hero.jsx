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
                <span className="text-white">THE MOONSTONE</span>
                <br />
                <span className="text-gray-400">(PVT) LTD</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Multidisciplinary Solutions Provider
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                The Moonstone (PVT) LTD is a multidisciplinary solutions provider offering landscape architecture, 
                architectural design, building renovations, 2D planning, 3D modeling, and proposal preparation. 
                We also specialize in electronics design, software development, web solutions, and 3D printing, 
                blending creativity with technical expertise to deliver functional, aesthetic, and lasting results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Architectural & Design Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Engineering & Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Creative & Technical Consultancy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">3D Printing & Prototyping</span>
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

