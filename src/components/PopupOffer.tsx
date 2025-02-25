<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { X, Phone, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Timer from './Timer';
=======
import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Phone, Clock } from 'lucide-react';
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
=======
import React from 'react';
import { X, Phone, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Timer from './Timer';
>>>>>>> b8b85e1d3856037ef5b9c3c4f9257b552f934dea

interface PopupOfferProps {
  onClose: () => void;
}

const PopupOffer: React.FC<PopupOfferProps> = ({ onClose }) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b8b85e1d3856037ef5b9c3c4f9257b552f934dea
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-yellow-50 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header with hazard sign */}
        <div className="bg-black text-yellow-400 p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-200"
          >
            <X className="w-6 h-6" />
          </button>
          <AlertTriangle className="w-16 h-16 mx-auto mb-2" />
          <h3 className="text-2xl font-bold">
            ⚠️ URGENT NOTICE ⚠️
          </h3>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <Timer />
          </div>

          <div className="text-black mb-6">
            <p className="text-lg font-bold mb-2">
              🚨 FINAL CALL: Only 3 Spots Remaining!
            </p>
            <p className="text-sm mb-4">
              Lock in your exclusive rate before it expires:
            </p>
          </div>

          <div className="bg-black/5 rounded-lg p-4 mb-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm">Save up to <span className="font-bold">50%</span> on your premium</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm"><span className="font-bold">Extra $10/month</span> savings guaranteed</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm"><span className="font-bold">Free</span> roadside assistance included</p>
              </div>
<<<<<<< HEAD
=======
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-black text-yellow-400 rounded-full p-1"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div className="bg-yellow-400 -mt-10 mx-auto w-16 h-16 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-black" />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">⚠️ SPECIAL OFFER ALERT! ⚠️</h3>
            <p className="text-red-600 font-bold mb-4">
              Save Extra $50/Month - Limited Time Only!
            </p>
            
            <div className="bg-black text-yellow-400 rounded-lg p-4 mb-4">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <p className="font-bold">Offer Expires In:</p>
              <p className="text-2xl font-bold">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-green-600 font-semibold">✓ Instant Quote by Phone</p>
              <p className="text-green-600 font-semibold">✓ Save up to 50% on Premium</p>
              <p className="text-green-600 font-semibold">✓ Additional $50/Month Savings</p>
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
=======
>>>>>>> b8b85e1d3856037ef5b9c3c4f9257b552f934dea
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+1-8334615733"
<<<<<<< HEAD
<<<<<<< HEAD
              className="block w-full bg-black text-yellow-400 py-4 rounded-full text-center font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 animate-pulse"
=======
              className="block w-full bg-black text-yellow-400 py-4 rounded-full text-center font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 animate-[shake_0.5s_ease-in-out_infinite]"
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
=======
              className="block w-full bg-black text-yellow-400 py-4 rounded-full text-center font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 animate-pulse"
>>>>>>> b8b85e1d3856037ef5b9c3c4f9257b552f934dea
            >
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>CALL +1-833-461-5733 NOW!</span>
              </div>
            </a>
            
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-center text-sm text-gray-600">
              <p>⭐⭐⭐⭐⭐</p>
              <p>"Saved $847 on my premium!" - Sarah M.</p>
=======
            <div className="text-center">
              <p className="text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 italic">"I saved $847 on my premium!" - Sarah M.</p>
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
=======
            <div className="text-center text-sm text-gray-600">
              <p>⭐⭐⭐⭐⭐</p>
              <p>"Saved $847 on my premium!" - Sarah M.</p>
>>>>>>> b8b85e1d3856037ef5b9c3c4f9257b552f934dea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default PopupOffer;
=======
export default PopupOffer; 
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
=======
export default PopupOffer;
>>>>>>> b8b85e1d3856037ef5b9c3c4f9257b552f934dea
