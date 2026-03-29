import { propertyData } from '../constants/property_data';
import Section from './Section';
import Button from './Button';

const PropertyList = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {propertyData.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">
                  Rp {property.pricing.toLocaleString('id-ID')}
                </span>
                <Button href={`/property/${property.id}`}>View Details</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PropertyList;
