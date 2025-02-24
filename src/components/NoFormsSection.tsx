import React from 'react';
import { Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const NoFormsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full mb-6">
            <span className="font-bold">🎉 NO FORMS REQUIRED! 🎉</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Skip the Paperwork - Get Your Quote in 2 Minutes!
          </h2>
          
          <p className="text-gray-600 mb-8">
            No endless forms to fill out. Just one quick phone call connects you with our insurance experts who will find you the best rates!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">One Simple Call</h3>
              <p className="text-sm text-gray-600">
                No complicated forms. Just call us for an instant quote.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">2 Minutes or Less</h3>
              <p className="text-sm text-gray-600">
                Get your personalized quote in under 2 minutes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Instant Coverage</h3>
              <p className="text-sm text-gray-600">
                Get covered right away with our instant approval.
              </p>
            </div>
          </div>
          
          <a
            href="tel:+1-8334615733"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-500 transition transform hover:scale-105"
          >
            <span>Get Your Quote Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <p className="mt-4 text-sm text-gray-500">
            Average call duration: 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoFormsSection; 