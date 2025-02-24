import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle } from 'lucide-react';

const FloatingCallButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center">
      {isExpanded && (
        <div className="mr-4 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-bold text-sm">Don't Miss Out! Limited Time Offer!</span>
          </div>
        </div>
      )}
      <a
        href="tel:+1-8334615733"
        className="bg-green-600 hover:bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
      >
        <Phone className="w-8 h-8 animate-pulse" />
      </a>
    </div>
  );
};

export default FloatingCallButton; 