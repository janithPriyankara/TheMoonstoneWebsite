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

  // Categories with detailed project data - reorganized by related groups
  const categoriesData = {
    // Architecture & Design Group (related categories together)
    'Architectural Design': {
      title: 'Architectural Design',
      description: 'Innovative and sustainable architectural solutions',
      mainImage: img2,
      slideImages: [img2, img1, img9],
      projects: [
        {
          id: 2,
          title: "Sustainable Residential Complex",
          description: "Eco-friendly residential development with solar panels and rainwater harvesting.",
          image: img2,
          tags: ["Sustainable", "Residential", "Eco-Friendly"],
          year: "2024",
          location: "Kandy, Sri Lanka",
          teamSize: "12 members",
          duration: "18 months",
          details: "A revolutionary sustainable housing project incorporating passive solar design, green rooftops, rainwater harvesting, and energy-efficient materials. The design maximizes natural light and ventilation while minimizing environmental impact."
        },
        {
          id: 12,
          title: "Modern Office Complex",
          description: "Contemporary office design with flexible workspaces and green elements.",
          image: img9,
          tags: ["Commercial", "Modern", "Flexible Workspace"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "15 members",
          duration: "24 months",
          details: "Innovative office complex featuring modular workspaces, collaborative areas, and integrated technology solutions for the modern workplace."
        }
      ]
    },
    'Landscape Architecture': {
      title: 'Landscape Architecture',
      description: 'Sustainable and innovative outdoor space design',
      mainImage: img1,
      slideImages: [img1, img2, img3],
      projects: [
        {
          id: 1,
          title: "Modern Landscape Design",
          description: "Contemporary outdoor space design with sustainable elements and modern aesthetics.",
          image: img1,
          tags: ["Landscape", "Sustainable Design", "Modern"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "8 members",
          duration: "6 months",
          details: "A comprehensive landscape design project featuring sustainable water management, native plant selection, and modern hardscape elements. The project includes eco-friendly lighting systems and recreational areas."
        },
        {
          id: 11,
          title: "Eco-Friendly Garden Complex",
          description: "Large-scale garden design with water features and native plants.",
          image: img2,
          tags: ["Eco-Friendly", "Garden", "Water Features"],
          year: "2024",
          location: "Kandy, Sri Lanka",
          teamSize: "6 members",
          duration: "4 months",
          details: "An expansive garden complex featuring drought-resistant native plants, rainwater harvesting systems, and natural stone pathways. The design emphasizes biodiversity and environmental sustainability."
        },
        {
          id: 12,
          title: "Urban Park Development",
          description: "Community-focused urban park with recreational facilities.",
          image: img3,
          tags: ["Urban Planning", "Community", "Recreation"],
          year: "2023",
          location: "Galle, Sri Lanka",
          teamSize: "10 members",
          duration: "8 months",
          details: "A multi-functional urban park designed to serve diverse community needs. Features include children's play areas, fitness zones, walking trails, and community gathering spaces with sustainable landscaping."
        }
      ]
    },
    'Building Renovation': {
      title: 'Building Renovation',
      description: 'Restoration and modernization of existing structures',
      mainImage: img3,
      slideImages: [img3, img5, img2],
      projects: [
        {
          id: 3,
          title: "Commercial Building Renovation",
          description: "Complete renovation of commercial space with modern functionality.",
          image: img3,
          tags: ["Commercial", "Renovation", "Modern"],
          year: "2023",
          location: "Matara, Sri Lanka",
          teamSize: "8 members",
          duration: "5 months",
          details: "Complete transformation of a heritage commercial building, preserving historical elements while introducing modern amenities and accessibility features."
        }
      ]
    },
    '3D Modeling & Rendering': {
      title: '3D Modeling & Rendering',
      description: 'Photorealistic visualizations and 3D presentations',
      mainImage: img4,
      slideImages: [img4, img7, img8],
      projects: [
        {
          id: 4,
          title: "Architectural 3D Visualization",
          description: "Photorealistic 3D rendering for architectural presentation.",
          image: img4,
          tags: ["3D Rendering", "Visualization", "Architecture"],
          year: "2024",
          location: "Remote",
          teamSize: "4 members",
          duration: "3 months",
          details: "High-quality 3D visualizations for multiple architectural projects, including interior and exterior renderings, virtual tours, and animation sequences."
        }
      ]
    },
    '2D Drafting & Planning': {
      title: '2D Drafting & Planning',
      description: 'Technical drawings and construction documentation',
      mainImage: img5,
      slideImages: [img5, img1, img6],
      projects: [
        {
          id: 5,
          title: "Technical Floor Plans",
          description: "Detailed 2D floor plans and technical drawings for construction.",
          image: img5,
          tags: ["2D Drafting", "Floor Plans", "Technical"],
          year: "2024",
          location: "Multiple Locations",
          teamSize: "6 members",
          duration: "Ongoing",
          details: "Comprehensive technical documentation including floor plans, elevations, sections, and detail drawings for various construction projects."
        }
      ]
    },
    'Electronics Design': {
      title: 'Electronics Design',
      description: 'PCB design and electronic system development',
      mainImage: img6,
      slideImages: [img6, img8, img7],
      projects: [
        {
          id: 6,
          title: "PCB Design & Layout",
          description: "Custom printed circuit board design for electronic devices.",
          image: img6,
          tags: ["PCB Design", "Electronics", "Engineering"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "5 members",
          duration: "4 months",
          details: "Advanced PCB design for IoT devices, including schematic design, component selection, layout optimization, and manufacturing preparation."
        }
      ]
    },
    'Software & Web Development': {
      title: 'Software & Web Development',
      description: 'Full-stack applications and web solutions',
      mainImage: img7,
      slideImages: [img7, img8, img9],
      projects: [
        {
          id: 7,
          title: "Full-Stack Web Application",
          description: "Modern web application with responsive design and advanced functionality.",
          image: img7,
          tags: ["Web Development", "Full-Stack", "Responsive"],
          year: "2024",
          location: "Remote",
          teamSize: "8 members",
          duration: "6 months",
          details: "A comprehensive web application built with React, Node.js, and modern technologies. Features include user authentication, real-time updates, and mobile-responsive design."
        }
      ]
    },
    '3D Printing & Prototyping': {
      title: '3D Printing & Prototyping',
      description: 'Rapid prototyping and manufacturing solutions',
      mainImage: img8,
      slideImages: [img8, img6, img4],
      projects: [
        {
          id: 8,
          title: "3D Printing Solutions",
          description: "Custom 3D printing services for rapid prototyping and manufacturing.",
          image: img8,
          tags: ["3D Printing", "Prototyping", "Manufacturing"],
          year: "2024",
          location: "Colombo, Sri Lanka",
          teamSize: "4 members",
          duration: "Ongoing",
          details: "Comprehensive 3D printing services including design optimization, material selection, and post-processing for various industries including automotive, medical, and consumer products."
        }
      ]
    },
    'Technical & Creative Consultancy': {
      title: 'Technical & Creative Consultancy',
      description: 'Strategic consulting for business transformation',
      mainImage: img9,
      slideImages: [img9, img1, img5],
      projects: [
        {
          id: 9,
          title: "Technology Consulting Project",
          description: "Strategic technology consulting for business transformation.",
          image: img9,
          tags: ["Consulting", "Technology", "Strategy"],
          year: "2024",
          location: "Multiple Locations",
          teamSize: "6 members",
          duration: "Ongoing",
          details: "Comprehensive technology consulting services helping businesses adopt new technologies, optimize processes, and drive digital transformation initiatives."
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
        <div className="relative overflow-hidden h-64 bg-gray-600">
          {/* Show a static image by default and overlay the slideshow on hover */}
          <img
            src={data.mainImage || data.slideImages[0]}
            alt={category}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Slideshow overlay only on hover */}
          {isHovered && (
            <div className="absolute inset-0 z-10">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
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
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="text-center">
              <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto mb-2" />
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View {data.projects.length} Projects
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-slate-300 transition-colors duration-300">
            {category}
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {data.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              {data.projects.length} Project{data.projects.length !== 1 ? 's' : ''}
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    );
  };

  // Modal component for detailed view
  const CategoryModal = ({ category, data, onClose }) => {
    if (!category || !data) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{category}</h2>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {data.projects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.details}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        {project.teamSize}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.duration}
                      </div>
                    </div>
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
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our diverse range of projects organized by related disciplines. Hover over categories to see dynamic previews, click to explore detailed project galleries. Related services are grouped together for easy navigation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center text-gray-400 mb-4 w-full justify-center">
            <Filter className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Filter by Category:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-slate-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Tiles or Filtered Projects */}
        {activeFilter === 'All' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(categoriesData).map(([category, data]) => (
              <CategoryTile key={category} category={category} data={data} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700 group"
              >
                <div className="relative overflow-hidden" style={{ minHeight: '256px' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-slate-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      {project.duration}
                    </span>
                    <button className="text-slate-400 hover:text-white transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && activeFilter !== 'All' && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found for the selected category.
            </p>
          </div>
        )}

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center group"
          >
            Start Your Project
            <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Category Modal */}
      {selectedCategory && (
        <CategoryModal
          category={selectedCategory}
          data={categoriesData[selectedCategory]}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
