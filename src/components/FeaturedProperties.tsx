import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import PropertyDetails from './PropertyDetails';

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Modern Villa with Ocean View',
    price: '$2.5M',
    location: 'Malibu, CA',
    beds: 5,
    baths: 4,
    sqft: 4500,
    description: 'Perched high above the Pacific Ocean, this contemporary masterpiece offers breathtaking views and ultimate privacy. Features include a infinity pool, wine cellar, and smart home automation.',
    yearBuilt: 2021,
    amenities: [
      'Infinity Pool',
      'Wine Cellar',
      'Smart Home System',
      'Home Theater',
      'Private Beach Access',
      'Gourmet Kitchen',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Luxury Penthouse Downtown',
    price: '$3.2M',
    location: 'New York, NY',
    beds: 4,
    baths: 3,
    sqft: 3200,
    description: 'Spectacular penthouse in the heart of Manhattan with panoramic city views. Features include floor-to-ceiling windows, private terrace, and premium finishes throughout.',
    yearBuilt: 2020,
    amenities: [
      'Private Terrace',
      'Concierge Service',
      'Fitness Center',
      'Wine Storage',
      'Pet Spa',
      'Valet Parking',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Contemporary Beach House',
    price: '$4.1M',
    location: 'Miami Beach, FL',
    beds: 6,
    baths: 5,
    sqft: 5200,
    description: 'Modern beachfront estate with direct ocean access. Featuring an open floor plan, resort-style pool, and outdoor entertainment area perfect for the Miami lifestyle.',
    yearBuilt: 2022,
    amenities: [
      'Private Beach',
      'Resort Pool',
      'Summer Kitchen',
      'Guest House',
      'Deep Water Dock',
      'Hurricane Windows',
    ],
  },
];

export default function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of luxury properties, each offering unique features and exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              {...property}
              onClick={() => setSelectedProperty(property)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            View All Properties
          </button>
        </div>
      </div>

      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}