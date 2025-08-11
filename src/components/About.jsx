import React from 'react';
import { CheckCircle, Users, Award, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Multidisciplinary Expertise",
      description: "We bring together electronics, software, architecture, and creative design under one roof."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaborative Approach",
      description: "We work closely with clients to understand their objectives and transform ideas into tangible results."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality & Excellence",
      description: "Professional standards throughout every engagement, emphasizing quality, reliability, and long-term value."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Real-World Engineering",
      description: "Our workflows reflect real-world engineering best practices, supported by continuous improvement."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About THE MOONSTONE Electronics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A registered multidisciplinary solutions provider known for expertise in electronics, software, 
            architecture, and creative design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Foundation</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded on a foundation of hands-on engineering and design excellence, we have consistently 
              delivered impactful results across a variety of sectors. Our team brings a wealth of experience 
              to each project, merging technical precision with creativity to tackle complex challenges and 
              achieve high-quality outcomes.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At THE MOONSTONE, we don't merely provide services; we create solutions designed to perform, 
              adapt, and endure. Our commitment to professional standards ensures that every project, from 
              initial consultation to final delivery, meets the highest expectations.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 font-semibold">Registration No.: PV00325510</p>
              <p className="text-blue-700 mt-2">Sanasuma, Wawlagala, Baddegama, Sri Lanka</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Core Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Electronics Design</h4>
              <p className="text-sm text-gray-600">Embedded systems and high-performance electronics design</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Software Development</h4>
              <p className="text-sm text-gray-600">Full-stack software products and engineering tools</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Architecture & Design</h4>
              <p className="text-sm text-gray-600">Architectural consultation and creative design solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Manufacturing</h4>
              <p className="text-sm text-gray-600">Custom PCB design and 3D printing services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

