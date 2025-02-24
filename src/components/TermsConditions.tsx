import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Terms and Conditions</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using CompareOnCall's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">2. Description of Services</h2>
            <p>CompareOnCall provides insurance comparison and connection services. We connect consumers with insurance providers and licensed agents who can offer insurance products.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account information</li>
              <li>Notify us of any unauthorized use of our services</li>
              <li>Use our services in compliance with applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">4. Insurance Quotes</h2>
            <p>Insurance quotes provided through our service are estimates based on the information you provide. Final rates and coverage are subject to verification and acceptance by the insurance provider.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">5. Limitation of Liability</h2>
            <p>CompareOnCall is not an insurance provider and does not guarantee coverage or rates. We are not liable for any decisions made based on the information provided through our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">6. Third-Party Services</h2>
            <p>Our service may connect you with third-party insurance providers. We are not responsible for their services, policies, or practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">7. Modifications to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-3">8. Contact Information</h2>
            <p>For questions about these Terms and Conditions, please contact us at:</p>
            <p className="mt-2">
              Email: info@compareoncall.com<br />
              Phone: +1-833-461-5733
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions; 