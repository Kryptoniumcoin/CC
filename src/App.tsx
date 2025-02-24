import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Shield, CheckCircle2, Clock, Phone, Mail, Facebook, Instagram, Car, DollarSign, Heart, Award, Star, Users, FileCheck, ArrowRight, Menu, X, AlertTriangle, Zap, Timer as TimerIcon } from 'lucide-react';
=======
import { Shield, CheckCircle2, Clock, Phone, Mail, Facebook, Instagram, Car, DollarSign, Heart, Award, Star, Users, FileCheck, ArrowRight, Menu, X } from 'lucide-react';
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
import Timer from './components/Timer';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import PrivacyPolicy from './components/PrivacyPolicy';
<<<<<<< HEAD
import PopupOffer from './components/PopupOffer';
import NoFormsSection from './components/NoFormsSection';
import FloatingCTA from './components/FloatingCTA';
=======
import TermsConditions from './components/TermsConditions';
import OfferBanner from './components/OfferBanner';
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
<<<<<<< HEAD
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
=======
  const [showTermsConditions, setShowTermsConditions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
<<<<<<< HEAD
    
    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
=======
    return () => window.removeEventListener('scroll', handleScroll);
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
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

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {showPopup && <PopupOffer onClose={() => setShowPopup(false)} />}
      <FloatingCTA />

=======
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
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
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
<<<<<<< HEAD
            <a href="tel:+1-8334615733" className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-400 transition flex items-center space-x-2 animate-pulse">
              <Phone className="w-5 h-5" />
              <span className="font-bold">+1-833-461-5733</span>
=======
            <a href="tel:+1-8334615733" className="bg-green-600 px-6 py-2 rounded-full hover:bg-green-500 transition flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1-833-461-5733</span>
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
<<<<<<< HEAD
          <div className="md:hidden absolute top-full left-0 right-0 bg-green-800 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#why-us" className="hover:text-green-200" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
              <a href="#about" className="hover:text-green-200" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="tel:+1-8334615733" className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-400 transition flex items-center justify-center space-x-2 animate-pulse">
                <Phone className="w-5 h-5" />
                <span className="font-bold">+1-833-461-5733</span>
=======
          <div className="md:hidden fixed top-[72px] left-0 right-0 bg-green-800 py-4 px-4 shadow-lg z-50">
            <div className="flex flex-col space-y-4">
              <a href="#why-us" className="hover:text-green-200" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
              <a href="#about" className="hover:text-green-200" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="tel:+1-8334615733" className="bg-green-600 px-6 py-2 rounded-full hover:bg-green-500 transition flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1-833-461-5733</span>
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
              </a>
            </div>
          </div>
        )}
      </header>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative min-h-[600px] mt-16 flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549925245-f20a7c0495ee?auto=format&fit=crop&q=80"
            alt="Happy family with car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full mb-4 animate-bounce">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-semibold">Limited Time Offer - Act Now!</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Skip the Hassle - Get Your Auto Insurance Quote by Phone!
            </h1>
            <p className="text-xl text-white mb-8 max-w-xl">
              Save up to 50% on your car insurance in minutes. Our licensed experts are ready to find you the best rates from top providers.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="tel:+1-8334615733" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-400 transition inline-flex items-center space-x-3 transform hover:scale-105 animate-pulse">
                <Phone className="w-6 h-6" />
                <span>Call Now: +1-833-461-5733</span>
              </a>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5" />
                <span>Takes only 2 minutes</span>
              </div>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div className="text-white">
                  <p className="font-semibold">15+ people saved in the last hour</p>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
=======
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
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
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

<<<<<<< HEAD
      {/* No Forms Section */}
      <NoFormsSection />

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition">
              <div className="text-4xl font-bold text-green-600 mb-2 flex justify-center items-center">
                <Zap className="w-8 h-8 mr-2" />
                50%
              </div>
              <p className="text-gray-600">Average Savings on Car Insurance</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition">
              <div className="text-4xl font-bold text-green-600 mb-2 flex justify-center items-center">
                <TimerIcon className="w-8 h-8 mr-2" />
                2 min
              </div>
              <p className="text-gray-600">Quick Quote Process</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition">
              <div className="text-4xl font-bold text-green-600 mb-2 flex justify-center items-center">
                <Users className="w-8 h-8 mr-2" />
                24/7
              </div>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition">
              <div className="text-4xl font-bold text-green-600 mb-2 flex justify-center items-center">
                <Shield className="w-8 h-8 mr-2" />
                100%
              </div>
              <p className="text-gray-600">Satisfaction Guaranteed</p>
            </div>
=======
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
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Common Insurance Struggles We Solve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-12 h-12 text-orange-500" />,
                title: "Paying Too Much?",
                description: "Most drivers overpay by $500+ annually. We'll find you better rates instantly.",
                action: "Save Up To 50% Today"
              },
              {
                icon: <AlertTriangle className="w-12 h-12 text-orange-500" />,
                title: "Denied Coverage?",
                description: "Bad driving record or lapses in coverage? We work with carriers who specialize in high-risk drivers.",
                action: "Get Covered Now"
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-500" />,
                title: "Need Coverage Fast?",
                description: "Don't wait days for quotes. Get insured in minutes with our rapid quote system.",
                action: "Get Instant Quote"
              },
              {
                icon: <FileCheck className="w-12 h-12 text-orange-500" />,
                title: "Confusing Policies?",
                description: "Our experts explain everything in plain English. No insurance jargon.",
                action: "Speak to an Expert"
              },
              {
                icon: <Shield className="w-12 h-12 text-orange-500" />,
                title: "Inadequate Coverage?",
                description: "Find out if you have dangerous gaps in your coverage that could cost you thousands.",
                action: "Review Your Coverage"
              },
              {
                icon: <Users className="w-12 h-12 text-orange-500" />,
                title: "Poor Service?",
                description: "Tired of automated systems? Get personalized support from real insurance experts.",
                action: "Talk to a Human"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href="tel:+1-8334615733" className="inline-flex items-center space-x-2 text-orange-500 font-semibold hover:text-orange-600">
                  <span>{item.action}</span>
=======
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
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* FOMO Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">🔥 Don't Miss Out!</h2>
                  <p className="text-xl mb-4">
                    <span className="font-bold text-orange-400">Only 3 spots left</span> for our exclusive rate-lock guarantee.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Lock in your low rate for 12 months</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Save an extra $10/month guaranteed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Free roadside assistance included</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <Timer />
                  </div>
                  <a href="tel:+1-8334615733" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-400 transition transform hover:scale-105 animate-pulse">
                    Claim Your Offer Now!
                  </a>
                </div>
              </div>
            </div>
=======
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
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By Leading Insurance Providers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <img src="https://logo.clearbit.com/progressive.com" alt="Progressive" className="h-12" />
            <img src="https://logo.clearbit.com/statefarm.com" alt="State Farm" className="h-12" />
            <img src="https://logo.clearbit.com/geico.com" alt="Geico" className="h-12" />
            <img src="https://logo.clearbit.com/allstate.com" alt="Allstate" className="h-12" />
=======
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
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Car Insurance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who save an average of 50% on their car insurance.
            Call now and get your free quote in minutes!
          </p>
          <a href="tel:+1-8334615733" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-400 transition transform hover:scale-105 animate-pulse">
            Call +1-833-461-5733 Now
          </a>
          <p className="mt-4 text-sm text-green-200">No obligation • Free quotes • 100% satisfaction guaranteed</p>
=======
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
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
        </div>
      </section>

      {/* Footer */}
<<<<<<< HEAD
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
=======
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
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
<<<<<<< HEAD
                  <a href="tel:+1-8334615733" className="hover:text-green-200">+1-833-461-5733</a>
=======
                  <a href="tel:+1-8334615733">+1-833-461-5733</a>
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@compareoncall.com</span>
                </div>
              </div>
            </div>
            <div>
<<<<<<< HEAD
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-green-200">About Us</a></li>
                <li><a href="#why-us" className="hover:text-green-200">Why Choose Us</a></li>
                <li><button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-green-200">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61555515786564" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/compareoncall?igsh=MXVka3BlMWt1cGg1MQ==" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
                  <Instagram className="w-6 h-6" />
=======
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61555515786564" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 hover:text-green-200 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/compareoncall?igsh=MXVka3BlMWt1cGg1MQ==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 hover:text-green-200 cursor-pointer" />
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
                </a>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; {new Date().getFullYear()} CompareOnCall. All rights reserved.</p>
=======
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
>>>>>>> 02c9105dd20e7133ffbf05683e0624b5ccfa0be2
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;