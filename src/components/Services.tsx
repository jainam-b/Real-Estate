import React from 'react';
import { Home, Key, DollarSign, Building } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Buy a Home',
    description: 'Find your place with an immersive photo experience and the most listings.',
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: 'Rent a Home',
    description: 'Discover your next rental with detailed filters and verified listings.',
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Sell a Home',
    description: 'Get the best value for your home with our expert market analysis.',
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Investment Properties',
    description: 'Explore high-yield investment opportunities in prime locations.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}