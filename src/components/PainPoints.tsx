import React from 'react';
import { DollarSign, Clock, ShieldAlert, FileX, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    icon: <DollarSign className="w-12 h-12 text-red-500" />,
    problem: "Paying Too Much?",
    solution: "Save up to 50% on your current premium. Our customers save an average of $650/year!",
    cta: "Start Saving Now"
  },
  {
    icon: <ShieldAlert className="w-12 h-12 text-red-500" />,
    problem: "Bad Driving Record?",
    solution: "We work with insurers who specialize in high-risk drivers. Get affordable coverage regardless of your history.",
    cta: "Get Covered Today"
  },
  {
    icon: <FileX className="w-12 h-12 text-red-500" />,
    problem: "Denied Coverage?",
    solution: "Our network includes providers who offer SR-22 insurance and coverage for drivers with previous denials.",
    cta: "Find Your Policy"
  },
  {
    icon: <Clock className="w-12 h-12 text-red-500" />,
    problem: "Need Insurance Now?",
    solution: "Get instant coverage with just one phone call. No waiting periods or complicated paperwork.",
    cta: "Get Instant Coverage"
  }
];

const PainPoints = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Struggling with Your Current Insurance?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't let insurance problems stress you out. We have solutions for every situation!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-600">
                    {point.problem}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {point.solution}
                  </p>
                  <a
                    href="tel:+1-8334615733"
                    className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700"
                  >
                    <span>{point.cta}</span>
                    <AlertCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-50 p-6 rounded-xl inline-block">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">
              🚨 Don't Wait Until It's Too Late! 🚨
            </h3>
            <p className="text-yellow-700 mb-4">
              Rates are increasing soon. Lock in your low rate today!
            </p>
            <a
              href="tel:+1-8334615733"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition transform hover:scale-105"
            >
              Call +1-833-461-5733 Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints; 