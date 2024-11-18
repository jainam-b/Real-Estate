import React from 'react';
import { ArrowRight, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Discover Your Dream Home
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Explore our curated collection of luxury properties across the globe
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-full shadow-lg flex items-center max-w-2xl animate-slide-up">
            <div className="flex-1 px-4">
              <input
                type="text"
                placeholder="Search by location, property type..."
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center">
              <Search size={20} className="mr-2" />
              Search
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl animate-fade-in-delay-2">
            <Stat number="1000+" text="Properties" />
            <Stat number="500+" text="Happy Clients" />
            <Stat number="50+" text="Cities" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight size={24} className="text-white transform rotate-90" />
      </div>
    </div>
  );
}

const Stat = ({ number, text }: { number: string; text: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-white mb-1">{number}</div>
    <div className="text-gray-200">{text}</div>
  </div>
);