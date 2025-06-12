
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce React App",
      description: "A fully responsive e-commerce platform built with React.js, featuring product catalog, shopping cart, and checkout functionality with modern UI/UX design.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      link: "https://github.com/johndoe/ecommerce-app",
      demo: "#"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description: "An interactive portfolio website featuring Three.js 3D animations, smooth scrolling, and responsive design. Showcases modern web development techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Three.js", "React", "GSAP", "WebGL"],
      link: "https://github.com/johndoe/3d-portfolio",
      demo: "#"
    },
    {
      id: 3,
      title: "WordPress Business Theme",
      description: "Custom WordPress theme for business websites with advanced customization options, SEO optimization, and mobile-first responsive design.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["WordPress", "PHP", "JavaScript", "SCSS"],
      link: "https://github.com/johndoe/business-theme",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in frontend development, 
            3D integration, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover-scale hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Code
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 group"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    Live Demo
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
