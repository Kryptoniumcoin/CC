import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Michael Anderson",
    location: "Dallas, TX",
    text: "I was paying way too much for my auto insurance. CompareOnCall found me a better policy with the same coverage for $847 less per year! The whole process took less than 10 minutes on the phone.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    saved: "$847/year",
    occupation: "Small Business Owner",
    date: "2 days ago"
  },
  {
    name: "Jennifer Martinez",
    location: "Phoenix, AZ",
    text: "After my accident, other companies wanted to charge me a fortune. CompareOnCall found me affordable coverage despite my record. Their agent was so helpful and understanding!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    saved: "$623/year",
    occupation: "Nurse",
    date: "1 week ago"
  },
  {
    name: "Robert Wilson",
    location: "Atlanta, GA",
    text: "I thought I had a good rate until I called CompareOnCall. They saved me over $500 annually and even got me better coverage. The best part? No paperwork!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    saved: "$506/year",
    occupation: "Construction Manager",
    date: "3 days ago"
  }
];

const EnhancedReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Real People, Real Savings</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied customers who are saving big on their auto insurance
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-yellow-400 text-6xl opacity-25">
                <Quote />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg relative">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{reviews[currentIndex].name}</h3>
                    <p className="text-sm text-gray-600">{reviews[currentIndex].location}</p>
                    <p className="text-sm text-gray-500">{reviews[currentIndex].occupation}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{reviews[currentIndex].text}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Saved {reviews[currentIndex].saved}</span>
                  <span>{reviews[currentIndex].date}</span>
                </div>
              </div>
            </div>

            <div className="bg-green-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Wait? Save Today!</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 flex-shrink-0" />
                  <span>Average savings of $650/year</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 flex-shrink-0" />
                  <span>No paperwork required</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 flex-shrink-0" />
                  <span>Instant quotes by phone</span>
                </li>
              </ul>
              <a
                href="tel:+1-8334615733"
                className="mt-6 block w-full bg-white text-green-600 text-center py-3 rounded-full font-bold hover:bg-green-50 transition"
              >
                Call Now: +1-833-461-5733
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevReview}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedReviews; 