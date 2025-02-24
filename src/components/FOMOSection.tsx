import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Users, TrendingUp, Phone } from 'lucide-react';

const FOMOSection = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [recentCalls, setRecentCalls] = useState(42);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);

    // Simulate increasing call count
    const callTimer = setInterval(() => {
      setRecentCalls((prev) => prev + Math.floor(Math.random() * 3));
    }, 15000);

    return () => {
      clearInterval(timer);
      clearInterval(callTimer);
    };
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full mb-6">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-bold">LIMITED TIME OFFER</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss Out on These Exclusive Savings!
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Offer Ends In:</h3>
              <p className="text-2xl font-bold text-yellow-400">
                {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Recent Callers:</h3>
              <p className="text-2xl font-bold text-yellow-400">{recentCalls}+</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Average Savings:</h3>
              <p className="text-2xl font-bold text-yellow-400">$650/year</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-yellow-400 text-black p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-2">
                🔥 BONUS OFFER: First 50 Callers Today 🔥
              </h3>
              <p className="font-semibold">
                Get an Extra $50 Off Your Monthly Premium!
              </p>
            </div>

            <a
              href="tel:+1-8334615733"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-500 transition transform hover:scale-105 animate-pulse"
            >
              <Phone className="w-6 h-6" />
              <span>CALL +1-833-461-5733 NOW!</span>
            </a>

            <p className="mt-4 text-sm text-gray-400">
              * Limited time offer. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FOMOSection; 