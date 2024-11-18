import React from 'react';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  onClick: () => void;
}

export default function PropertyCard({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  onClick,
}: PropertyCardProps) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <PropertyFeature icon={<Bed size={18} />} value={`${beds} Beds`} />
          <PropertyFeature icon={<Bath size={18} />} value={`${baths} Baths`} />
          <PropertyFeature icon={<Square size={18} />} value={`${sqft} sqft`} />
        </div>
      </div>
    </div>
  );
}

const PropertyFeature = ({ icon, value }: { icon: React.ReactNode; value: string }) => (
  <div className="flex items-center text-gray-600">
    <span className="mr-1">{icon}</span>
    <span className="text-sm">{value}</span>
  </div>
);