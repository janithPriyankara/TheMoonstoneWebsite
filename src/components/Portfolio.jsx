import React, { useState, useEffect } from 'react';
import { ExternalLink, Filter, X, Calendar, MapPin, Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import images directly
import img1 from '../assets/WFqf4r8xjX30.jpg';
import img2 from '../assets/Yy2ko7buRjJU.jpg';
import img3 from '../assets/p1FOI77pun7m.webp';
import img4 from '../assets/cHxs18UuT0my.jpg';
import img5 from '../assets/zs6HzLm4peVw.jpg';
import img6 from '../assets/49c5lAnXl1Fp.jpg';
import img7 from '../assets/cA3MvAvbX4CN.png';
import img8 from '../assets/5IosMemRsQ0A.png';
import img9 from '../assets/LaRW5x093xOO.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Categories with detailed project data
  const categoriesData = {
    'Mechanical Engineering': {
      title: 'Mechanical Engineering',
      description: 'CAD design, analysis, and mechanical system optimization',
      mainImage: img1,
      slideImages: [img1, img2, img3],
      projects: [
        {
          id: 1,
          title: "Industrial Machine Design",
          description: "Custom machinery design for manufacturing automation.",
          image: img1,
          tags: ["CAD Design", "Manufacturing", "Automation"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "6 members",
          duration: "8 months",
          details: "Complete design and analysis of industrial machinery including 3D modeling, finite element analysis, and manufacturing documentation."
        },
        {
          id: 2,
          title: "Product Development Project",
          description: "Consumer product design from concept to production.",
          image: img2,
          tags: ["Product Design", "CAD", "Prototyping"],
          year: "2024",
          location: "Kandy, Sri Lanka",
          teamSize: "4 members",
          duration: "6 months",
          details: "End-to-end product development including market research, conceptual design, detailed engineering, and prototype testing."
        }
      ]
    },
    'Electrical Engineering': {
      title: 'Electrical Engineering',
      description: 'Power systems, control panels, and automation solutions',
      mainImage: img2,
      slideImages: [img2, img4, img5],
      projects: [
        {
          id: 3,
          title: "Industrial Control Panel Design",
          description: "Custom electrical control panels for industrial automation.",
          image: img2,
          tags: ["Control Systems", "Industrial", "Automation"],
          year: "2024",
          location: "Galle, Sri Lanka",
          teamSize: "5 members",
          duration: "4 months",
          details: "Design and implementation of electrical control systems including motor control, safety systems, and HMI interfaces."
        },
        {
          id: 4,
          title: "Power Distribution System",
          description: "Electrical power system design for commercial building.",
          image: img4,
          tags: ["Power Systems", "Commercial", "Design"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "7 members",
          duration: "6 months",
          details: "Complete electrical power distribution system design including load calculations, panel design, and safety systems."
        }
      ]
    },
    'Civil Engineering': {
      title: 'Civil Engineering',
      description: 'Structural design and infrastructure development',
      mainImage: img3,
      slideImages: [img3, img6, img7],
      projects: [
        {
          id: 5,
          title: "Residential Building Design",
          description: "Complete structural design for multi-story residential complex.",
          image: img3,
          tags: ["Structural Design", "Residential", "Construction"],
          year: "2023",
          location: "Matara, Sri Lanka",
          teamSize: "8 members",
          duration: "10 months",
          details: "Comprehensive civil engineering design including foundation design, structural analysis, and construction documentation."
        },
        {
          id: 6,
          title: "Bridge Infrastructure Project",
          description: "Pedestrian bridge design with modern structural solutions.",
          image: img6,
          tags: ["Bridge Design", "Infrastructure", "Modern"],
          year: "2024",
          location: "Kandy, Sri Lanka",
          teamSize: "10 members",
          duration: "12 months",
          details: "Complete bridge design including structural analysis, foundation engineering, and construction supervision."
        }
      ]
    },
    'Industrial Engineering': {
      title: 'Industrial Engineering',
      description: 'Process optimization and lean manufacturing solutions',
      mainImage: img4,
      slideImages: [img4, img8, img9],
      projects: [
        {
          id: 7,
          title: "Manufacturing Process Optimization",
          description: "Lean manufacturing implementation for improved efficiency.",
          image: img4,
          tags: ["Process Optimization", "Lean Manufacturing", "Efficiency"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "6 members",
          duration: "5 months",
          details: "Complete process analysis and optimization resulting in 30% efficiency improvement and waste reduction."
        }
      ]
    },
    'Electronics Design': {
      title: 'Electronics Design',
      description: 'Circuit design and electronic system development',
      mainImage: img5,
      slideImages: [img5, img1, img2],
      projects: [
        {
          id: 8,
          title: "IoT Sensor Network",
          description: "Custom electronics for IoT monitoring system.",
          image: img5,
          tags: ["Electronics", "IoT", "Sensors"],
          year: "2024",
          location: "Remote",
          teamSize: "4 members",
          duration: "6 months",
          details: "Design and development of custom electronic circuits for environmental monitoring including sensor integration and wireless communication."
        },
        {
          id: 9,
          title: "Smart Control System",
          description: "Intelligent control electronics for automation.",
          image: img1,
          tags: ["Smart Systems", "Control", "Automation"],
          year: "2024",
          location: "Galle, Sri Lanka",
          teamSize: "5 members",
          duration: "4 months",
          details: "Development of smart control electronics with machine learning capabilities for industrial automation applications."
        }
      ]
    },
    'PCB Design': {
      title: 'PCB Design',
      description: 'Professional PCB layout and manufacturing preparation',
      mainImage: img6,
      slideImages: [img6, img3, img4],
      projects: [
        {
          id: 10,
          title: "Multi-layer PCB Design",
          description: "Complex PCB design for electronic product development.",
          image: img6,
          tags: ["PCB Design", "Electronics", "Manufacturing"],
          year: "2024",
          location: "Remote",
          teamSize: "3 members",
          duration: "3 months",
          details: "Professional PCB design including schematic capture, layout optimization, and design for manufacturing guidelines."
        }
      ]
    },
    'Electronics Product Prototyping': {
      title: 'Electronics Product Prototyping',
      description: 'Rapid prototyping and product validation',
      mainImage: img7,
      slideImages: [img7, img5, img6],
      projects: [
        {
          id: 11,
          title: "Smart Device Prototype",
          description: "Functional prototype development for smart home device.",
          image: img7,
          tags: ["Prototyping", "Smart Device", "Testing"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "5 members",
          duration: "4 months",
          details: "Complete prototype development including hardware design, firmware development, and functional testing."
        }
      ]
    },
    '3D Design/Modeling': {
      title: '3D Design/Modeling',
      description: 'Professional 3D modeling and design visualization',
      mainImage: img8,
      slideImages: [img8, img7, img9],
      projects: [
        {
          id: 12,
          title: "Product Visualization",
          description: "3D modeling and rendering for product marketing.",
          image: img8,
          tags: ["3D Modeling", "Visualization", "Rendering"],
          year: "2024",
          location: "Remote",
          teamSize: "3 members",
          duration: "2 months",
          details: "High-quality 3D models and photorealistic renderings for product presentation and marketing materials."
        }
      ]
    },
    '3D Printing': {
      title: '3D Printing',
      description: 'Rapid prototyping and custom manufacturing',
      mainImage: img9,
      slideImages: [img9, img1, img8],
      projects: [
        {
          id: 13,
          title: "Custom Part Manufacturing",
          description: "3D printed components for prototype development.",
          image: img9,
          tags: ["3D Printing", "Prototyping", "Manufacturing"],
          year: "2024",
          location: "Kandy, Sri Lanka",
          teamSize: "2 members",
          duration: "3 months",
          details: "Custom 3D printed parts for various projects including functional prototypes and design validation models."
        }
      ]
    },
    'Engraving': {
      title: 'Engraving',
      description: 'Precision engraving and custom marking solutions',
      mainImage: img1,
      slideImages: [img1, img2, img3],
      projects: [
        {
          id: 14,
          title: "Custom Engraving Project",
          description: "Precision laser engraving for commercial applications.",
          image: img1,
          tags: ["Laser Engraving", "Custom", "Precision"],
          year: "2024",
          location: "Galle, Sri Lanka",
          teamSize: "2 members",
          duration: "1 month",
          details: "High-precision laser engraving services for industrial marking and custom design applications."
        }
      ]
    },
    'Electronics-Automation': {
      title: 'Electronics-Automation',
      description: 'Automation systems and electronic control solutions',
      mainImage: img2,
      slideImages: [img2, img4, img6],
      projects: [
        {
          id: 15,
          title: "Industrial Automation System",
          description: "Complete automation solution for manufacturing process.",
          image: img2,
          tags: ["Automation", "PLC", "Control Systems"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "6 members",
          duration: "8 months",
          details: "Full automation system implementation including PLC programming, sensor integration, and HMI development."
        }
      ]
    },
    'Architectural Design': {
      title: 'Architectural Design',
      description: 'Complete architectural design from concept to construction',
      mainImage: img3,
      slideImages: [img3, img5, img7],
      projects: [
        {
          id: 16,
          title: "Modern Residential Design",
          description: "Contemporary residential architecture with sustainable features.",
          image: img3,
          tags: ["Architecture", "Residential", "Sustainable"],
          year: "2024",
          location: "Kandy, Sri Lanka",
          teamSize: "8 members",
          duration: "12 months",
          details: "Complete architectural design including concept development, detailed drawings, and construction supervision."
        }
      ]
    },
    'Landscape Architecture': {
      title: 'Landscape Architecture',
      description: 'Sustainable outdoor space design and planning',
      mainImage: img4,
      slideImages: [img4, img6, img8],
      projects: [
        {
          id: 17,
          title: "Garden Complex Design",
          description: "Large-scale landscape architecture with water features.",
          image: img4,
          tags: ["Landscape", "Garden Design", "Water Features"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "6 members",
          duration: "6 months",
          details: "Comprehensive landscape design including plant selection, irrigation systems, and hardscape elements."
        }
      ]
    },
    'Interior Design': {
      title: 'Interior Design',
      description: 'Professional interior design and space planning',
      mainImage: img5,
      slideImages: [img5, img7, img9],
      projects: [
        {
          id: 18,
          title: "Commercial Interior Design",
          description: "Modern office space design with functional layout.",
          image: img5,
          tags: ["Interior Design", "Commercial", "Modern"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "5 members",
          duration: "4 months",
          details: "Complete interior design including space planning, material selection, and furniture coordination."
        }
      ]
    },
    'Exterior Design': {
      title: 'Exterior Design',
      description: 'Building exterior design and facade solutions',
      mainImage: img6,
      slideImages: [img6, img8, img1],
      projects: [
        {
          id: 19,
          title: "Modern Facade Design",
          description: "Contemporary building exterior with energy-efficient features.",
          image: img6,
          tags: ["Facade Design", "Modern", "Energy Efficient"],
          year: "2024",
          location: "Galle, Sri Lanka",
          teamSize: "4 members",
          duration: "3 months",
          details: "Innovative facade design combining aesthetics with functionality and energy efficiency."
        }
      ]
    },
    'Scaled Modeling-Physical': {
      title: 'Scaled Modeling-Physical',
      description: 'Physical architectural models and scale representations',
      mainImage: img7,
      slideImages: [img7, img9, img2],
      projects: [
        {
          id: 20,
          title: "Architectural Scale Model",
          description: "Detailed physical model for architectural presentation.",
          image: img7,
          tags: ["Scale Model", "Architecture", "Physical Model"],
          year: "2024",
          location: "Matara, Sri Lanka",
          teamSize: "3 members",
          duration: "2 months",
          details: "Precision scale model construction for architectural visualization and client presentation."
        }
      ]
    },
    'Building Renovation': {
      title: 'Building Renovation',
      description: 'Building restoration and modernization services',
      mainImage: img8,
      slideImages: [img8, img1, img3],
      projects: [
        {
          id: 21,
          title: "Heritage Building Renovation",
          description: "Restoration of colonial-era building with modern amenities.",
          image: img8,
          tags: ["Renovation", "Heritage", "Restoration"],
          year: "2023",
          location: "Kandy, Sri Lanka",
          teamSize: "10 members",
          duration: "14 months",
          details: "Complete renovation preserving historical character while adding modern functionality and safety features."
        }
      ]
    },
    '2D Drafting and Planning': {
      title: '2D Drafting and Planning',
      description: 'Technical drafting and construction documentation',
      mainImage: img9,
      slideImages: [img9, img2, img4],
      projects: [
        {
          id: 22,
          title: "Construction Documentation",
          description: "Detailed technical drawings for construction project.",
          image: img9,
          tags: ["Technical Drawing", "Construction", "Documentation"],
          year: "2024",
          location: "Remote",
          teamSize: "4 members",
          duration: "3 months",
          details: "Comprehensive technical drawings including floor plans, sections, and construction details."
        }
      ]
    },
    '3D Modeling and Rendering': {
      title: '3D Modeling and Rendering',
      description: 'Advanced 3D visualization and architectural rendering',
      mainImage: img1,
      slideImages: [img1, img3, img5],
      projects: [
        {
          id: 23,
          title: "Architectural Visualization",
          description: "Photorealistic 3D rendering for architectural project.",
          image: img1,
          tags: ["3D Rendering", "Visualization", "Architecture"],
          year: "2024",
          location: "Remote",
          teamSize: "3 members",
          duration: "2 months",
          details: "High-quality 3D visualizations including interior and exterior renderings with realistic lighting and materials."
        }
      ]
    },
    'Software Product Development and Design': {
      title: 'Software Product Development and Design',
      description: 'End-to-end software product development',
      mainImage: img2,
      slideImages: [img2, img4, img6],
      projects: [
        {
          id: 24,
          title: "E-commerce Platform",
          description: "Custom e-commerce solution with modern UI/UX design.",
          image: img2,
          tags: ["Software Development", "E-commerce", "UI/UX"],
          year: "2024",
          location: "Remote",
          teamSize: "8 members",
          duration: "10 months",
          details: "Complete e-commerce platform development including payment integration, inventory management, and analytics dashboard."
        }
      ]
    },
    'Software Solutions': {
      title: 'Software Solutions',
      description: 'Custom software development and enterprise solutions',
      mainImage: img3,
      slideImages: [img3, img5, img7],
      projects: [
        {
          id: 25,
          title: "Enterprise Management System",
          description: "Custom ERP solution for manufacturing company.",
          image: img3,
          tags: ["Enterprise Software", "ERP", "Custom Development"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "12 members",
          duration: "18 months",
          details: "Comprehensive enterprise resource planning system with modules for inventory, finance, and human resources."
        }
      ]
    },
    'Web Design and Development': {
      title: 'Web Design and Development',
      description: 'Modern, responsive websites and web applications',
      mainImage: img4,
      slideImages: [img4, img6, img8],
      projects: [
        {
          id: 26,
          title: "Corporate Website",
          description: "Professional corporate website with CMS integration.",
          image: img4,
          tags: ["Web Development", "Corporate", "CMS"],
          year: "2024",
          location: "Remote",
          teamSize: "5 members",
          duration: "4 months",
          details: "Modern responsive website with content management system, SEO optimization, and performance optimization."
        }
      ]
    },
    'Graphics Design': {
      title: 'Graphics Design',
      description: 'Professional graphic design and visual communication',
      mainImage: img5,
      slideImages: [img5, img7, img9],
      projects: [
        {
          id: 27,
          title: "Brand Identity Design",
          description: "Complete brand identity package for startup company.",
          image: img5,
          tags: ["Brand Identity", "Logo Design", "Marketing"],
          year: "2024",
          location: "Remote",
          teamSize: "3 members",
          duration: "2 months",
          details: "Comprehensive brand identity including logo design, brand guidelines, and marketing material templates."
        }
      ]
    },
    'Event Photography - Graduations, Preshoots': {
      title: 'Event Photography - Graduations, Preshoots',
      description: 'Professional event and portrait photography',
      mainImage: img6,
      slideImages: [img6, img8, img1],
      projects: [
        {
          id: 28,
          title: "University Graduation Photography",
          description: "Professional graduation photography for university ceremony.",
          image: img6,
          tags: ["Event Photography", "Graduation", "Portrait"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "4 members",
          duration: "1 day",
          details: "Complete graduation ceremony coverage including individual portraits, group photos, and ceremony highlights."
        }
      ]
    },
    'Drone Photography': {
      title: 'Drone Photography',
      description: 'Aerial photography and unique perspective shots',
      mainImage: img7,
      slideImages: [img7, img9, img2],
      projects: [
        {
          id: 29,
          title: "Real Estate Aerial Photography",
          description: "Drone photography for luxury property marketing.",
          image: img7,
          tags: ["Drone Photography", "Real Estate", "Aerial"],
          year: "2024",
          location: "Kandy, Sri Lanka",
          teamSize: "2 members",
          duration: "2 days",
          details: "Professional aerial photography showcasing property features and surrounding landscape for marketing purposes."
        }
      ]
    },
    'Drone Videography': {
      title: 'Drone Videography',
      description: 'Professional aerial videography and cinematography',
      mainImage: img8,
      slideImages: [img8, img1, img3],
      projects: [
        {
          id: 30,
          title: "Event Drone Videography",
          description: "Cinematic drone coverage for corporate event.",
          image: img8,
          tags: ["Drone Videography", "Event", "Cinematic"],
          year: "2024",
          location: "Galle, Sri Lanka",
          teamSize: "3 members",
          duration: "1 day",
          details: "Professional drone videography creating cinematic coverage of corporate event with multiple angle shots and post-production editing."
        }
      ]
    },
    'Hobby Robotics': {
      title: 'Hobby Robotics',
      description: 'Educational and hobby robotics projects',
      mainImage: img9,
      slideImages: [img9, img2, img4],
      projects: [
        {
          id: 31,
          title: "Educational Robot Kit",
          description: "Custom robotics kit for STEM education programs.",
          image: img9,
          tags: ["Robotics", "Education", "STEM"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "4 members",
          duration: "6 months",
          details: "Development of educational robotics platform including hardware design, programming curriculum, and teaching materials."
        }
      ]
    },
    'Innovation Consultancies': {
      title: 'Innovation Consultancies',
      description: 'Strategic innovation consulting and creative solutions',
      mainImage: img1,
      slideImages: [img1, img3, img5],
      projects: [
        {
          id: 32,
          title: "Digital Transformation Strategy",
          description: "Innovation consulting for manufacturing company digitalization.",
          image: img1,
          tags: ["Innovation", "Digital Transformation", "Strategy"],
          year: "2024",
          location: "Matara, Sri Lanka",
          teamSize: "6 members",
          duration: "8 months",
          details: "Comprehensive digital transformation strategy including technology assessment, implementation roadmap, and change management."
        }
      ]
    },
    'General Consultancies': {
      title: 'General Consultancies',
      description: 'Professional consulting across multiple disciplines',
      mainImage: img2,
      slideImages: [img2, img4, img6],
      projects: [
        {
          id: 33,
          title: "Project Management Consulting",
          description: "Project management optimization for infrastructure project.",
          image: img2,
          tags: ["Project Management", "Consulting", "Infrastructure"],
          year: "2024",
          location: "Kandy, Sri Lanka",
          teamSize: "5 members",
          duration: "12 months",
          details: "Strategic project management consulting including process optimization, team coordination, and risk management for large infrastructure project."
        }
      ]
    }
  };

  const categories = ['All', ...Object.keys(categoriesData)];

  // Get all projects for filtering
  const allProjects = Object.values(categoriesData).flatMap(category => category.projects);

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : categoriesData[activeFilter]?.projects || [];

  // CategoryTile component for hover slideshow
  const CategoryTile = ({ category, data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (!isHovered) return;
      
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % data.slideImages.length);
      }, 1000);

      return () => clearInterval(interval);
    }, [isHovered, data.slideImages.length]);

    return (
      <div
        className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentSlide(0);
        }}
        onClick={() => setSelectedCategory(category)}
      >
        <div className="relative overflow-hidden h-64">
          {isHovered ? (
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="h-full"
            >
              {data.slideImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${category} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={data.mainImage}
              alt={category}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200">
              {data.title}
            </h3>
            <p className="text-gray-300 text-sm group-hover:text-gray-200">
              {data.description}
            </p>
            <div className="mt-3 flex items-center text-slate-400 group-hover:text-slate-300">
              <span className="text-xs font-medium">View Projects</span>
              <ExternalLink className="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // CategoryModal component for detailed view
  const CategoryModal = ({ category, data, onClose }) => {
    if (!category || !data) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{data.title}</h2>
              <p className="text-gray-300">{data.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors duration-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 mr-2" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <MapPin className="w-3 h-3 mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Users className="w-3 h-3 mr-2" />
                        <span>{project.teamSize}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed">{project.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our diverse range of projects across engineering, technology, design, and innovation
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-slate-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Show category tiles when "All" is selected or individual projects when filtered */}
        {activeFilter === 'All' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(categoriesData).map(([category, data]) => (
              <CategoryTile
                key={category}
                category={category}
                data={data}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Category Modal */}
        {selectedCategory && (
          <CategoryModal
            category={selectedCategory}
            data={categoriesData[selectedCategory]}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
