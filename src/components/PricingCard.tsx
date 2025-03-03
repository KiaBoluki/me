import React from 'react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: { name: string; description?: string; included: boolean }[];
  color: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, subtitle, price, features, color }) => {
  // Map the color prop to Tailwind-compatible classes
  const getBackgroundColorClass = (color: string) => {
    switch (color.toLowerCase()) {
      case 'blue':
        return "bg-blue-100 text-blue-500";
      case 'orange':
        return 'bg-orange-100 text-orange-500';
      case 'green':
        return 'bg-green-100 text-green-500 ';
      default:
        return 'bg-gray-100'; // Fallback
    }
  };

  const backgroundClass = getBackgroundColorClass(color);

  return (
    <div className={`pricing-card bg-white p-6 rounded-lg shadow-md border-t-4 border-${color}-500 hover:shadow-lg transition-shadow`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className={`${backgroundClass} px-4 py-2 mb-4`}>{subtitle}</p>
      <p className="text-3xl font-bold text-gray-800 mb-4">{price}</p>
      <ul className="list-none space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className={`p-2 mb-2 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
            <p>
              <span className={feature.included ? 'text-green-500 mr-2' : 'text-red-500 mr-2'}>
                {feature.included ? '✓' : '✗'}
              </span>
              <span className='text-sm md:text-lg'>{feature.name}</span>
            <span>
              {feature.description && <small className="text-gray-500 block text-xs">{feature.description}</small>}
            </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;