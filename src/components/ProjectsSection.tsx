import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Infinity Connect",
      description: "An image recognition–powered feature enabling profile photo–based user search, significantly enhancing user discovery and engagement beyond traditional ID-based search methods.",
      image: "https://drive.google.com/uc?export=view&id=1I2K8-jEkjSgNG6Smw9bLgYiN0S9VSsKN",
      technologies: ["React.js", "SpringBoot", "MySQL", "Machine Learning"],
      link: "https://github.com/sankeerthkoleti/infinityconnectfrontened.git"
    },
    {
      id: 2,
      title: "AgroFix",
      description: "A full-stack online vegetable marketplace with guest checkout, order tracking, and product management features. Enabled seamless purchasing without account creation, combining convenience with efficient admin-side control and real-time order handling.",
      image: "https://drive.google.com/uc?export=view&id=1D9LUeAS0xwrK8dDw2Eig67AA39Jh5OFd",
      technologies: ["React.js", "Node.js", "SQLite"],
      link: "https://github.com/sankeerthkoleti/AgroFix.git"
    },
    {
      id: 3,
      title: "Money Manager",
      description: "A simple budget management website to track money lent to customers. Features intuitive interface for managing finances and tracking lending activities with comprehensive reporting.",
      image: "https://drive.google.com/uc?export=view&id=1E9Su_-smPVQHuiL45MQS4wQ9s9-qdqrM",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "https://github.com/sankeerthkoleti/financemanager.git"
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
            full-stack development, and modern web technologies.
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
                    className="w-full group"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Code
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
