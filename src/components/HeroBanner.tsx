import React from 'react';
import { Phone, Shield, Clock, DollarSign } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
          alt="Luxury car"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-xl mx-auto md:mx-0">
          {/* Urgency Banner */}
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full mb-6 animate-pulse">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="font-bold text-sm">Limited Time: Save Extra $50/Month!</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Overpaying for Car Insurance!
            <span className="block text-yellow-400 mt-2">
              Save up to 50% in Minutes
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl mb-8 text-gray-200">
            One call connects you with licensed experts who find you the best rates from top insurers.
          </p>

          {/* CTA Button */}
          <a
            href="tel:+1-8334615733"
            className="inline-flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-green-500 transition transform hover:scale-105 shadow-lg"
          >
            <Phone className="w-6 h-6" />
            <span>Call +1-833-461-5733 Now</span>
          </a>

          {/* Trust Indicators */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Licensed Agents</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">2-Min Quote</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Save $650/Year</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                    alt="Recent customer"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm">
                <span className="text-yellow-400 font-bold">42+ people</span> got quotes in the last hour
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Optimization Notice */}
      <div className="absolute bottom-4 left-4 md:hidden">
        <div className="bg-black/80 rounded-lg p-2 text-xs text-white backdrop-blur-sm">
          <p>👆 Tap to Call Now</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner; 