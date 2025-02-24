import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2, Clock, Phone, Mail, Facebook, Instagram, Car, DollarSign, Heart, Award, Star, Users, FileCheck, ArrowRight, Menu, X } from 'lucide-react';
import Timer from './components/Timer';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import OfferBanner from './components/OfferBanner';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showPrivacyPolicy) {
    return (
      <>
        <header className={`${isScrolled ? 'shadow-md' : ''} fixed w-full top-0 z-50 bg-green-800 text-white py-4 transition-all duration-300`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowPrivacyPolicy(false)}>
              <Shield className="w-8 h-8" />
              <span className="text-2xl font-bold">CompareOnCall</span>
            </div>
          </div>
        </header>
        <PrivacyPolicy />
      </>
    );
  }

  if (showTermsConditions) {
    return (
      <>
        <header className={`${isScrolled ? 'shadow-md' : ''} fixed w-full top-0 z-50 bg-green-800 text-white py-4 transition-all duration-300`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowTermsConditions(false)}>
              <Shield className="w-8 h-8" />
              <span className="text-2xl font-bold">CompareOnCall</span>
            </div>
          </div>
        </header>
        <TermsConditions />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`${isScrolled ? 'shadow-md' : ''} fixed w-full top-0 z-50 bg-green-800 text-white py-4 transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-bold">CompareOnCall</span>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#why-us" className="hover:text-green-200">Why Choose Us</a>
            <a href="#about" className="hover:text-green-200">About Us</a>
            <a href="tel:+1-8334615733" className="bg-green-600 px-6 py-2 rounded-full hover:bg-green-500 transition flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1-833-461-5733</span>
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[72px] left-0 right-0 bg-green-800 py-4 px-4 shadow-lg z-50">
            <div className="flex flex-col space-y-4">
              <a href="#why-us" className="hover:text-green-200" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
              <a href="#about" className="hover:text-green-200" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="tel:+1-8334615733" className="bg-green-600 px-6 py-2 rounded-full hover:bg-green-500 transition flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1-833-461-5733</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Banner - Add sticky positioning */}
      <div className="sticky top-[72px] z-40"> {/* 72px matches header height (16px padding top/bottom + content) */}
        <OfferBanner />
      </div>

      {/* Hero Section - Remove mt-16 and add pt-[72px] */}
      <section className="relative h-[600px] pt-[72px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 max-w-[100vw] overflow-x-hidden h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Don't Overpay for Car Insurance: Get Your Free, No-Obligation Quote Now!</h1>
            <p className="text-base md:text-xl mb-6">Compare Rates from 50+ Top Insurers & Save Up to $1,200 a Year!</p>
            <a href="tel:+1-8334615733" className="bg-green-500 text-white px-4 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-green-400 transition inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now: +1-833-461-5733</span>
            </a>
          </div>
        </div>
      </section>

      {/* Frustration Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8">Tired of the Car Insurance Runaround?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Paying More Than You Should?</h3>
                  <p className="text-gray-600">Feeling like you're throwing money away on overpriced insurance?</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Decoding Confusing Policies?</h3>
                  <p className="text-gray-600">Struggling to understand what you're actually covered for?</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Spending Hours Comparing?</h3>
                  <p className="text-gray-600">Wasting precious time searching for the best deal?</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Dealing with Pushy Salespeople?</h3>
                  <p className="text-gray-600">Feeling pressured into buying coverage you don't need?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timer Section */}
      <section className="bg-green-800 py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <Timer />
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-gray-600">Average Savings on Car Insurance</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">2 min</div>
              <p className="text-gray-600">Quick Quote Process</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Insurance Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Understanding Car Insurance Coverage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Types of Coverage We Offer:</h3>
              <ul className="space-y-4">
                {[
                  "Liability Coverage",
                  "Collision Coverage",
                  "Comprehensive Coverage",
                  "Personal Injury Protection",
                  "Uninsured Motorist Coverage",
                  "Gap Insurance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+1-8334615733" className="mt-8 inline-flex items-center space-x-2 text-green-600 hover:text-green-700">
                <span>Get detailed coverage information</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Why You Need Proper Coverage</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Protects against financial losses from accidents</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Meets state legal requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Covers passengers and other drivers</span>
                </li>
              </ul>
              <a href="tel:+1-8334615733" className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition">
                Speak with an Expert Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Common Car Insurance Challenges & Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                problem: "High Premium Costs",
                solution: "We compare rates from multiple providers to find you the best deal, potentially saving you hundreds annually.",
                icon: <DollarSign className="w-12 h-12 text-green-600" />
              },
              {
                problem: "Complex Policy Terms",
                solution: "Our experts break down complex terms into simple language, ensuring you understand your coverage completely.",
                icon: <FileCheck className="w-12 h-12 text-green-600" />
              },
              {
                problem: "Limited Coverage Options",
                solution: "Access to multiple carriers means more options to customize your coverage based on your needs.",
                icon: <Shield className="w-12 h-12 text-green-600" />
              },
              {
                problem: "Poor Customer Service",
                solution: "24/7 dedicated support team to assist you with claims, questions, and policy changes.",
                icon: <Users className="w-12 h-12 text-green-600" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.problem}</h3>
                <p className="text-gray-600 mb-4">{item.solution}</p>
                <a href="tel:+1-8334615733" className="text-green-600 hover:text-green-700 inline-flex items-center space-x-2">
                  <span>Get Your Solution Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Call Solution Section */}
      <section className="py-16 bg-green-800 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Get Insured in One Simple Call</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                step: "1",
                title: "Call Us",
                description: "Speak with our licensed insurance experts"
              },
              {
                step: "2",
                title: "Share Details",
                description: "Tell us about your vehicle and driving history"
              },
              {
                step: "3",
                title: "Compare Rates",
                description: "We'll find the best rates from top providers"
              },
              {
                step: "4",
                title: "Get Covered",
                description: "Select your policy and get insured instantly"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 relative">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-green-100">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-green-400" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="tel:+1-8334615733" className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-100 transition inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now: +1-833-461-5733</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-8">The Smarter Way to Shop for Car Insurance</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "Unbiased Comparisons",
                description: "We don't favor any particular insurance company. Our goal is to help you find the best deal."
              },
              {
                icon: <Award className="w-10 h-10 text-green-600" />,
                title: "Expert Advice",
                description: "Our licensed insurance agents provide personalized guidance every step of the way."
              },
              {
                icon: <CheckCircle2 className="w-10 h-10 text-green-600" />,
                title: "Fast & Free Service",
                description: "Quick and easy process with no hidden fees or obligations."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">About CompareOnCall</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              CompareOnCall is a leading insurance comparison service in the USA, dedicated to helping drivers find the most competitive car insurance rates. Our team of licensed insurance professionals has years of experience in the industry and understands the unique insurance needs of American drivers.
            </p>
            <p className="text-gray-600 mb-6">
              We work with top-rated insurance providers across the nation to ensure our customers get the best coverage at the most competitive rates. Our commitment to transparency, customer service, and expertise has made us a trusted name in the insurance industry.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6" />
                <span className="text-xl font-bold">CompareOnCall</span>
              </div>
              <p className="text-green-200">Your trusted partner in finding the best insurance rates.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1-8334615733">+1-833-461-5733</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@compareoncall.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61555515786564" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 hover:text-green-200 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/compareoncall?igsh=MXVka3BlMWt1cGg1MQ==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 hover:text-green-200 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p className="mb-2">&copy; 2024 CompareOnCall. All rights reserved.</p>
            <div className="space-x-4">
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-green-200 hover:text-white transition"
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button 
                onClick={() => setShowTermsConditions(true)}
                className="text-green-200 hover:text-white transition"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;