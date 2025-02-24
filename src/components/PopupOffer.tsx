import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Phone, Clock } from 'lucide-react';

interface PopupOfferProps {
  onClose: () => void;
}

const PopupOffer: React.FC<PopupOfferProps> = ({ onClose }) => {
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
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+1-8334615733"
              className="block w-full bg-black text-yellow-400 py-4 rounded-full text-center font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 animate-[shake_0.5s_ease-in-out_infinite]"
            >
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>CALL +1-833-461-5733 NOW!</span>
              </div>
            </a>
            
            <div className="text-center">
              <p className="text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600 italic">"I saved $847 on my premium!" - Sarah M.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupOffer; 