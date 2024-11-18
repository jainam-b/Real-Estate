import React from 'react';
import { X, Bed, Bath, Square, MapPin, Calendar, Heart } from 'lucide-react';

interface PropertyDetailsProps {
  property: {
    image: string;
    title: string;
    price: string;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
    description?: string;
    amenities?: string[];
    yearBuilt?: number;
  };
  onClose: () => void;
}

export default function PropertyDetails({ property, onClose }: PropertyDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{property.price}</div>
              <button className="mt-2 flex items-center text-gray-600 hover:text-red-500">
                <Heart size={18} className="mr-1" />
                Save
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 py-6 border-y">
            <PropertyFeature icon={<Bed size={24} />} label="Bedrooms" value={property.beds} />
            <PropertyFeature icon={<Bath size={24} />} label="Bathrooms" value={property.baths} />
            <PropertyFeature icon={<Square size={24} />} label="Square Feet" value={property.sqft} />
            <PropertyFeature
              icon={<Calendar size={24} />}
              label="Year Built"
              value={property.yearBuilt || 2023}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {property.description ||
                'This stunning property offers luxurious living spaces with high-end finishes throughout. Featuring an open concept design, gourmet kitchen, and spectacular views. The perfect blend of comfort and sophistication.'}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {(property.amenities || [
                'Swimming Pool',
                'Home Theater',
                'Wine Cellar',
                'Smart Home System',
                'Private Gym',
                'Outdoor Kitchen',
              ]).map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Tour
            </button>
            <button className="flex-1 bg-gray-100 text-blue-600 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const PropertyFeature = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) => (
  <div className="text-center">
    <div className="text-blue-600 mb-2">{icon}</div>
    <div className="text-sm text-gray-600">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);