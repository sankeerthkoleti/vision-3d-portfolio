
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from './Scene3D';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
        }}
      />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          John <span className="text-primary">Doe</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-fade-in">
          Frontend Web Developer & UI/UX Designer
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
          Passionate about creating beautiful, responsive web experiences with modern technologies like React, Three.js, and WordPress.
        </p>

        <Button 
          onClick={scrollToAbout}
          size="lg"
          className="animate-fade-in hover-scale group"
        >
          Explore My Work
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
