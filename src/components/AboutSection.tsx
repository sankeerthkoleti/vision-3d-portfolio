
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="inline-block relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="John Doe - Frontend Developer"
                className="w-80 h-80 object-cover rounded-full shadow-2xl hover-scale"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="hover-scale">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Frontend Developer & Creative Designer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I am a passionate frontend web developer with expertise in modern web technologies 
                  including React.js, Three.js, and WordPress. With a strong background in UI/UX design, 
                  I create engaging, responsive websites that deliver exceptional user experiences.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  My journey in web development started with HTML and CSS, and has evolved to include 
                  advanced JavaScript frameworks, 3D web graphics, and modern development workflows. 
                  I'm particularly excited about the intersection of web development and interactive 3D experiences.
                </p>

                {/* Skills */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Core Skills</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">React.js</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Three.js</span>
                        <span className="text-sm text-gray-500">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">WordPress</span>
                        <span className="text-sm text-gray-500">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">UI/UX Design</span>
                        <span className="text-sm text-gray-500">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
