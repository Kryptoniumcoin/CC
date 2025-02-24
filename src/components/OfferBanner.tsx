import React from 'react';
import { Clock } from 'lucide-react';

const OfferBanner = () => {
  return (
    <div className="bg-green-600 text-white py-3 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span className="text-center">Limited Time Offer: Get Free Roadside Assistance When You Get a Quote Today!</span>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner; 