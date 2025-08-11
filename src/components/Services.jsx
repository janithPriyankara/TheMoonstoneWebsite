import React, { useState } from 'react';
import { Settings, Wrench, Building, Factory, Users, Monitor, Globe, X, ExternalLink, Camera, Palette, Cpu, Printer, Zap, Home, TreePine, Sofa, Hammer, PenTool, Box, Bot, Lightbulb } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceGroups = [
    {
      title: "Electronics & Product Design",
      description: "Modern electronics design and product development",
      services: [
        {
          icon: <Cpu className="w-8 h-8" />,
          title: "Electronics Design",
          description: "Complete electronic circuit design and system development.",
          detailedDescription: "We provide comprehensive electronics design services from concept to production, including analog and digital circuit design, microcontroller programming, and system integration for various applications.",
          portfolioLink: "Electronics Design",
          features: ["Analog Circuit Design", "Digital Circuit Design", "Microcontroller Programming", "System Integration", "Component Selection", "Circuit Simulation"]
        },
        {
          icon: <Cpu className="w-8 h-8" />,
          title: "PCB Design",
          description: "Professional printed circuit board design and layout.",
          detailedDescription: "Our PCB design services include schematic capture, board layout, routing optimization, and design for manufacturing (DFM) to ensure reliable and cost-effective production.",
          portfolioLink: "PCB Design",
          features: ["Schematic Capture", "Multi-layer PCB Layout", "Signal Integrity Analysis", "EMI/EMC Compliance", "Design for Manufacturing", "Prototyping Support"]
        },
        {
          icon: <Box className="w-8 h-8" />,
          title: "Electronics Product Prototyping",
          description: "Rapid prototyping and testing of electronic products.",
          detailedDescription: "We offer complete prototyping services for electronic products, including proof-of-concept development, functional prototypes, and pre-production testing to validate designs before manufacturing.",
          portfolioLink: "Electronics Product Prototyping",
          features: ["Proof of Concept", "Functional Prototypes", "Testing & Validation", "Design Iteration", "Component Sourcing", "Manufacturing Preparation"]
        },
        {
          icon: <Box className="w-8 h-8" />,
          title: "3D Design/Modeling",
          description: "Professional 3D modeling and design visualization.",
          detailedDescription: "Our 3D design services include product modeling, mechanical design, rendering, and visualization for manufacturing, presentation, and marketing purposes.",
          portfolioLink: "3D Design/Modeling",
          features: ["Product Modeling", "Mechanical Design", "Photorealistic Rendering", "Animation", "Technical Drawings", "Design Visualization"]
        },
        {
          icon: <Printer className="w-8 h-8" />,
          title: "3D Printing",
          description: "Professional 3D printing and rapid prototyping services.",
          detailedDescription: "We provide high-quality 3D printing services using various materials and technologies for prototyping, small-batch production, and custom manufacturing solutions.",
          portfolioLink: "3D Printing",
          features: ["Rapid Prototyping", "Custom Manufacturing", "Multiple Materials", "Post-Processing", "Design Optimization", "Small Batch Production"]
        },
        {
          icon: <PenTool className="w-8 h-8" />,
          title: "Engraving",
          description: "Precision engraving services for various materials.",
          detailedDescription: "Our engraving services include laser engraving, CNC engraving, and custom marking solutions for metals, plastics, wood, and other materials with high precision and quality.",
          portfolioLink: "Engraving",
          features: ["Laser Engraving", "CNC Engraving", "Custom Marking", "Multiple Materials", "Precision Work", "Design Services"]
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: "Electronics-Automation",
          description: "Automation solutions and electronic control systems.",
          detailedDescription: "We design and implement automation systems using modern electronics, including PLC programming, sensor integration, and custom control solutions for industrial and commercial applications.",
          portfolioLink: "Electronics-Automation",
          features: ["PLC Programming", "Sensor Integration", "Control Systems", "HMI Development", "Industrial Automation", "Smart Solutions"]
        }
      ]
    },
    {
      title: "Architectural Services",
      description: "Complete architectural design and planning solutions",
      services: [
        {
          icon: <Building className="w-8 h-8" />,
          title: "Architectural Design",
          description: "Complete architectural design from concept to construction.",
          detailedDescription: "Our architectural design services cover residential, commercial, and institutional projects with focus on functionality, aesthetics, and sustainability. We handle everything from initial concepts to detailed construction drawings.",
          portfolioLink: "Architectural Design",
          features: ["Concept Development", "Design Documentation", "Building Permits", "Construction Drawings", "3D Visualization", "Project Management"]
        },
        {
          icon: <TreePine className="w-8 h-8" />,
          title: "Landscape Architecture",
          description: "Outdoor space design and landscape planning.",
          detailedDescription: "We create beautiful and functional outdoor spaces through comprehensive landscape architecture services, including site analysis, plant selection, hardscape design, and sustainable landscaping solutions.",
          portfolioLink: "Landscape Architecture",
          features: ["Site Analysis", "Landscape Design", "Plant Selection", "Hardscape Design", "Irrigation Planning", "Sustainable Landscaping"]
        },
        {
          icon: <Sofa className="w-8 h-8" />,
          title: "Interior Design",
          description: "Professional interior design and space planning.",
          detailedDescription: "Our interior design services transform spaces into functional and beautiful environments through careful planning, material selection, lighting design, and furniture coordination.",
          portfolioLink: "Interior Design",
          features: ["Space Planning", "Material Selection", "Lighting Design", "Furniture Coordination", "Color Schemes", "3D Visualization"]
        },
        {
          icon: <Home className="w-8 h-8" />,
          title: "Exterior Design",
          description: "Building exterior design and facade solutions.",
          detailedDescription: "We specialize in exterior design solutions including facade design, material selection, landscaping integration, and creating cohesive architectural expressions that enhance curb appeal.",
          portfolioLink: "Exterior Design",
          features: ["Facade Design", "Material Selection", "Landscaping Integration", "Curb Appeal Enhancement", "Weather Resistance", "Aesthetic Coordination"]
        },
        {
          icon: <Box className="w-8 h-8" />,
          title: "Scaled Modeling-Physical",
          description: "Physical architectural models and scale representations.",
          detailedDescription: "We create detailed physical scale models for architectural projects, helping clients visualize designs and communicate concepts effectively through tangible representations.",
          portfolioLink: "Scaled Modeling-Physical",
          features: ["Architectural Models", "Scale Representations", "Detail Modeling", "Presentation Models", "Study Models", "Material Simulation"]
        },
        {
          icon: <Hammer className="w-8 h-8" />,
          title: "Building Renovation",
          description: "Complete building renovation and restoration services.",
          detailedDescription: "Our renovation services breathe new life into existing structures through careful planning, modern updates, and preservation of architectural character while improving functionality.",
          portfolioLink: "Building Renovation",
          features: ["Renovation Planning", "Structural Assessment", "Modern Updates", "Character Preservation", "Permit Assistance", "Project Coordination"]
        },
        {
          icon: <PenTool className="w-8 h-8" />,
          title: "2D Drafting and Planning",
          description: "Technical drafting and architectural planning services.",
          detailedDescription: "We provide precise 2D drafting services including floor plans, elevations, sections, and technical drawings for architectural and engineering projects with attention to detail and accuracy.",
          portfolioLink: "2D Drafting and Planning",
          features: ["Floor Plans", "Elevations", "Sections", "Technical Drawings", "As-Built Drawings", "Construction Details"]
        },
        {
          icon: <Box className="w-8 h-8" />,
          title: "3D Modeling and Rendering",
          description: "Advanced 3D visualization and architectural rendering.",
          detailedDescription: "Our 3D modeling and rendering services create photorealistic visualizations of architectural projects, helping clients understand designs and make informed decisions before construction.",
          portfolioLink: "3D Modeling and Rendering",
          features: ["3D Modeling", "Photorealistic Rendering", "Virtual Tours", "Animation", "Lighting Simulation", "Material Visualization"]
        }
      ]
    },
    {
      title: "IT Industry",
      description: "Cutting-edge technology solutions and digital innovation",
      services: [
        {
          icon: <Monitor className="w-8 h-8" />,
          title: "Software Product Development and Design",
          description: "End-to-end software product development and design services.",
          detailedDescription: "We provide comprehensive software product development from ideation to deployment, including UX/UI design, full-stack development, testing, and maintenance for web, mobile, and desktop applications.",
          portfolioLink: "Software Product Development and Design",
          features: ["Product Strategy", "UX/UI Design", "Full-Stack Development", "Mobile App Development", "Quality Assurance", "Deployment & Maintenance"]
        },
        {
          icon: <Monitor className="w-8 h-8" />,
          title: "Software Solutions",
          description: "Custom software development and enterprise solutions.",
          detailedDescription: "We develop custom software solutions tailored to your business needs, including enterprise systems, database solutions, API integrations, and cloud-based applications.",
          portfolioLink: "Software Solutions",
          features: ["Custom Software Development", "Enterprise Systems", "Database Solutions", "API Integration", "Cloud Solutions", "System Integration"]
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Web Design and Development",
          description: "Modern, responsive websites and web applications.",
          detailedDescription: "We create stunning, responsive websites and powerful web applications using the latest technologies, from simple landing pages to complex e-commerce platforms and web applications.",
          portfolioLink: "Web Design and Development",
          features: ["Responsive Web Design", "E-commerce Development", "Content Management Systems", "Progressive Web Apps", "SEO Optimization", "Performance Optimization"]
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: "Graphics Design",
          description: "Professional graphic design and visual communication.",
          detailedDescription: "Our graphic design services include branding, logo design, marketing materials, digital graphics, and visual identity development to help businesses communicate effectively.",
          portfolioLink: "Graphics Design",
          features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Graphics", "Print Design", "Visual Communication"]
        }
      ]
    },
    {
      title: "Photography",
      description: "Professional photography services for all occasions",
      services: [
        {
          icon: <Camera className="w-8 h-8" />,
          title: "Event Photography - Graduations, Preshoots",
          description: "Professional event photography for special occasions.",
          detailedDescription: "We capture memorable moments at graduations, pre-wedding shoots, corporate events, and other special occasions with professional equipment and artistic vision to preserve your precious memories.",
          portfolioLink: "Event Photography - Graduations, Preshoots",
          features: ["Graduation Photography", "Pre-Wedding Shoots", "Corporate Events", "Portrait Photography", "Group Photography", "Photo Editing"]
        },
        {
          icon: <Camera className="w-8 h-8" />,
          title: "Drone Photography",
          description: "Aerial photography and unique perspective shots.",
          detailedDescription: "Our drone photography services provide stunning aerial perspectives for real estate, events, landscapes, and commercial projects using professional-grade drones and experienced pilots.",
          portfolioLink: "Drone Photography",
          features: ["Aerial Photography", "Real Estate Photography", "Landscape Photography", "Commercial Projects", "Event Coverage", "High-Resolution Images"]
        },
        {
          icon: <Camera className="w-8 h-8" />,
          title: "Drone Videography",
          description: "Professional aerial videography and cinematography.",
          detailedDescription: "We create cinematic aerial videos for marketing, events, real estate, and artistic projects using advanced drone technology and professional video editing to deliver stunning visual content.",
          portfolioLink: "Drone Videography",
          features: ["Aerial Videography", "Cinematic Footage", "Marketing Videos", "Event Videos", "Real Estate Tours", "Professional Editing"]
        }
      ]
    },
    {
      title: "Innovation & Consultancy",
      description: "Specialized consulting and innovative solutions",
      services: [
        {
          icon: <Bot className="w-8 h-8" />,
          title: "Hobby Robotics",
          description: "Educational and hobby robotics projects and solutions.",
          detailedDescription: "We design and build custom robotics solutions for educational purposes, hobby projects, and small-scale automation, helping enthusiasts and educators explore the world of robotics.",
          portfolioLink: "Hobby Robotics",
          features: ["Educational Robotics", "Custom Robot Design", "Programming & Control", "Sensor Integration", "Workshops & Training", "Prototype Development"]
        },
        {
          icon: <Lightbulb className="w-8 h-8" />,
          title: "Innovation Consultancies",
          description: "Strategic innovation consulting and creative problem solving.",
          detailedDescription: "Our innovation consultancy services help businesses and individuals develop creative solutions, explore new technologies, and implement innovative approaches to solve complex challenges.",
          portfolioLink: "Innovation Consultancies",
          features: ["Innovation Strategy", "Creative Problem Solving", "Technology Consulting", "Design Thinking", "Product Innovation", "Business Transformation"]
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "General Consultancies",
          description: "Professional consulting across multiple disciplines.",
          detailedDescription: "We provide expert consulting services across engineering, technology, design, and business domains, helping clients make informed decisions and achieve their project goals.",
          portfolioLink: "General Consultancies",
          features: ["Strategic Planning", "Technical Consulting", "Project Management", "Business Analysis", "Risk Assessment", "Implementation Support"]
        }
      ]
    },
    {
      title: "Other Services",
      description: "Additional specialized services to meet your needs.",
      services: [
        {
          icon: <Settings className="w-8 h-8" />,
          title: "Electroplating",
          description: "Professional electroplating services for various materials.",
          detailedDescription: "We offer high-quality electroplating solutions for metals and other materials, ensuring durability, corrosion resistance, and a premium finish for your products.",
          portfolioLink: "Electroplating",
          features: ["Metal Electroplating", "Corrosion Resistance", "Premium Finish", "Custom Solutions", "Durability Enhancement", "Material Compatibility"]
        }
      ]
    }
  ];

  // Service Detail Modal Component
  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    const handlePortfolioClick = () => {
      // Close modal first
      onClose();
      // Scroll to portfolio section and filter by category
      setTimeout(() => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-slate-400 mr-4">
                {service.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Detailed Overview</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {service.detailedDescription}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Features & Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features?.map((feature, index) => (
                  <div key={index} className="flex items-center bg-gray-800 rounded-lg p-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePortfolioClick}
                className="bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group"
              >
                View Portfolio Examples
                <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Quote
              </button>
              <button
                onClick={() => window.location.href = 'mailto:themoonstone100@gmail.com?subject=Service%20Inquiry'}
                className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Send Email
              </button>
              <button
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=themoonstone100@gmail.com&su=Service%20Inquiry', '_blank')}
                className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Open Gmail
              </button>
              <button
                onClick={() => window.open('https://wa.me/94778702053?text=Hello%20Moonstone%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.', '_blank')}
                className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                WhatsApp (Strongly Supported)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive engineering and technology solutions across multiple industries and specializations
          </p>
        </div>

        {serviceGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-3">{group.title}</h3>
              <p className="text-lg text-gray-300">{group.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  onClick={() => setSelectedService(service)}
                  className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <div className="text-slate-400 mb-6 flex justify-center group-hover:text-slate-300 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-slate-200">{service.title}</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200">{service.description}</p>
                  <div className="mt-6 inline-flex items-center text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    <span className="text-sm font-medium">View Details</span>
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;