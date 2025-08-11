import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

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

  const categories = [
    'All',
    'Landscape Architecture',
    'Architectural Design',
    'Building Renovation',
    '3D Modeling & Rendering',
    '2D Drafting & Planning',
    'Electronics Design',
    'Software & Web Development',
    '3D Printing & Prototyping',
    'Technical & Creative Consultancy'
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Landscape Design",
      category: "Landscape Architecture",
      description: "Contemporary outdoor space design with sustainable elements and modern aesthetics.",
      image: img1,
      tags: ["Landscape", "Sustainable Design", "Modern"]
    },
    {
      id: 2,
      title: "Residential Complex Design",
      category: "Architectural Design",
      description: "Multi-story residential complex with innovative architectural solutions.",
      image: img2,
      tags: ["Residential", "Architecture", "Modern"]
    },
    {
      id: 3,
      title: "Commercial Building Renovation",
      category: "Building Renovation",
      description: "Complete renovation of commercial space with modern functionality.",
      image: img3,
      tags: ["Commercial", "Renovation", "Modern"]
    },
    {
      id: 4,
      title: "Architectural 3D Visualization",
      category: "3D Modeling & Rendering",
      description: "Photorealistic 3D rendering for architectural presentation.",
      image: img4,
      tags: ["3D Rendering", "Visualization", "Architecture"]
    },
    {
      id: 5,
      title: "Technical Floor Plans",
      category: "2D Drafting & Planning",
      description: "Detailed 2D floor plans and technical drawings for construction.",
      image: img5,
      tags: ["2D Drafting", "Floor Plans", "Technical"]
    },
    {
      id: 6,
      title: "PCB Design & Layout",
      category: "Electronics Design",
      description: "Custom printed circuit board design for electronic devices.",
      image: img6,
      tags: ["PCB Design", "Electronics", "Engineering"]
    },
    {
      id: 7,
      title: "Full-Stack Web Application",
      category: "Software & Web Development",
      description: "Modern web application with responsive design and advanced functionality.",
      image: img7,
      tags: ["Web Development", "Full-Stack", "Responsive"]
    },
    {
      id: 8,
      title: "3D Printing Solutions",
      category: "3D Printing & Prototyping",
      description: "Custom 3D printing services for rapid prototyping and manufacturing.",
      image: img8,
      tags: ["3D Printing", "Prototyping", "Manufacturing"]
    },
    {
      id: 9,
      title: "Technology Consulting Project",
      category: "Technical & Creative Consultancy",
      description: "Strategic technology consulting for business transformation.",
      image: img9,
      tags: ["Consulting", "Technology", "Strategy"]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our diverse range of projects across multiple disciplines
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

        {/* Projects Grid */}
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
                  style={{ 
                    opacity: 1,
                    zIndex: 10,
                    position: 'relative',
                    display: 'block'
                  }}
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
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {project.category}
                  </span>
                  <button className="text-slate-400 hover:text-white transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
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
    </section>
  );
};

export default Portfolio;
