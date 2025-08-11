import React from 'react';
import { 
  Building2, 
  Compass, 
  Hammer, 
  Box, 
  FileText, 
  Cpu, 
  Code, 
  Printer, 
  Users 
} from 'lucide-react';

const Services = () => {
  const serviceGroups = [
    {
      title: "Architectural & Design Services",
      description: "Comprehensive design solutions from concept to completion",
      services: [
        {
          icon: <Compass className="w-8 h-8" />,
          title: "Landscape Architects",
          description: "Creating harmonious outdoor spaces that blend functionality with natural beauty."
        },
        {
          icon: <Building2 className="w-8 h-8" />,
          title: "Architectural Design Services",
          description: "Innovative architectural solutions for residential, commercial, and institutional projects."
        },
        {
          icon: <Hammer className="w-8 h-8" />,
          title: "Building Renovation Services",
          description: "Transforming existing structures with modern design and improved functionality."
        },
        {
          icon: <Box className="w-8 h-8" />,
          title: "3D Modeling & Rendering",
          description: "Photorealistic visualizations and detailed 3D models for design validation."
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "2D Drafting & Planning",
          description: "Precise technical drawings and comprehensive planning documentation."
        }
      ]
    },
    {
      title: "Engineering & Technology Solutions",
      description: "Advanced technical solutions for modern challenges",
      services: [
        {
          icon: <Cpu className="w-8 h-8" />,
          title: "Electronics Design & Engineering",
          description: "Custom electronics solutions, PCB design, and embedded systems development."
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: "Software & Web Development",
          description: "Full-stack software solutions, web applications, and digital platforms."
        },
        {
          icon: <Printer className="w-8 h-8" />,
          title: "3D Printing & Prototyping",
          description: "Rapid prototyping and custom manufacturing using advanced 3D printing technologies."
        }
      ]
    },
    {
      title: "Consultancy & Other Services",
      description: "Expert guidance and specialized solutions",
      services: [
        {
          icon: <Users className="w-8 h-8" />,
          title: "Technical & Creative Consultancy",
          description: "Strategic consulting services combining technical expertise with creative vision."
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions across multiple disciplines, delivering excellence in every project
          </p>
        </div>

        <div className="space-y-16">
          {serviceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {group.title}
                </h3>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-600 group"
                  >
                    <div className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center group"
          >
            Start Your Project
            <Building2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

