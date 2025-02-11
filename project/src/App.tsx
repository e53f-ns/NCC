import React, { useState, useEffect } from 'react';
import { Shield, Star, Clock, CreditCard, Users, Phone, Calendar, Clock3, MessageSquare, ChevronDown, Sparkles, Crown, Zap, Heart, Gift, Diamond } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousPage, setPreviousPage] = useState('home');

  const handlePageChange = (newPage) => {
    if (newPage !== currentPage && !isAnimating) {
      setIsAnimating(true);
      setPreviousPage(currentPage);
      setCurrentPage(newPage);
      setTimeout(() => setIsAnimating(false), 500); // Match transition duration
    }
  };

  const getPageClass = (pageName) => {
    if (!isAnimating) return '';
    if (pageName === currentPage) return 'page-enter page-enter-active';
    if (pageName === previousPage) return 'page-exit page-exit-active';
    return '';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-900/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text cursor-pointer" onClick={() => handlePageChange('home')}>
              Night City Companions
            </h1>
            <div className="flex gap-4">
              <button 
                onClick={() => handlePageChange('home')}
                className={`px-4 py-2 rounded-full transition ${currentPage === 'home' ? 'bg-purple-600' : 'hover:bg-purple-900/30'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handlePageChange('services')}
                className={`px-4 py-2 rounded-full transition ${currentPage === 'services' ? 'bg-purple-600' : 'hover:bg-purple-900/30'}`}
              >
                Services
              </button>
              <button 
                onClick={() => handlePageChange('book')}
                className={`px-4 py-2 rounded-full transition ${currentPage === 'book' ? 'bg-purple-600' : 'hover:bg-purple-900/30'}`}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="page-container">
        {/* Home Page */}
        <div className={`page ${getPageClass('home')} ${currentPage !== 'home' && !isAnimating ? 'hidden' : ''}`}>
          {/* Hero Section */}
          <header className="relative h-screen flex items-center justify-center">
            <div 
              className="absolute inset-0 z-0" 
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.3)'
              }}
            />
            <div className="relative z-10 text-center px-4">
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Night City Companions
              </h1>
              <p className="text-xl text-gray-300 mb-8">Premium Virtual Companionship Services</p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => handlePageChange('book')}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition"
                >
                  Book Now
                </button>
                <button 
                  onClick={() => handlePageChange('services')}
                  className="border border-purple-500 hover:bg-purple-900/30 px-8 py-3 rounded-full transition"
                >
                  Our Services
                </button>
              </div>
            </div>
          </header>

          {/* Features */}
          <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<Shield className="w-8 h-8 text-purple-500" />}
                  title="Secure & Discrete"
                  description="Advanced encryption and privacy protection for all our clients"
                />
                <FeatureCard 
                  icon={<Star className="w-8 h-8 text-purple-500" />}
                  title="Premium Experience"
                  description="Highly rated companions with verified profiles"
                />
                <FeatureCard 
                  icon={<Clock className="w-8 h-8 text-purple-500" />}
                  title="24/7 Availability"
                  description="Round-the-clock service to suit your schedule"
                />
              </div>
            </div>
          </section>

          {/* Services Preview */}
          <section className="py-20 bg-black/80">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                  title="Virtual Dating"
                  price="500"
                  features={[
                    "Personal attention",
                    "Custom experience",
                    "Voice chat included"
                  ]}
                />
                <ServiceCard
                  title="Premium Package"
                  price="1000"
                  features={[
                    "Extended sessions",
                    "Priority booking",
                    "Exclusive content"
                  ]}
                  highlighted={true}
                />
                <ServiceCard
                  title="VIP Experience"
                  price="2000"
                  features={[
                    "Full customization",
                    "Dedicated companion",
                    "24/7 availability"
                  ]}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Services Page */}
        <div className={`page ${getPageClass('services')} ${currentPage !== 'services' && !isAnimating ? 'hidden' : ''}`}>
          <ServicesPage setCurrentPage={handlePageChange} />
        </div>

        {/* Booking Page */}
        <div className={`page ${getPageClass('book')} ${currentPage !== 'book' && !isAnimating ? 'hidden' : ''}`}>
          <BookingPage />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-purple-900/30">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Night City Companions. A Virtual Entertainment Service.</p>
          <p className="mt-2 text-sm">This is a fictional service for in-game entertainment purposes only.</p>
        </div>
      </footer>
    </div>
  );
}

function ServicesPage({ setCurrentPage }) {
  const packages = [
    {
      title: "Virtual Dating",
      price: 500,
      icon: <Heart className="w-12 h-12 text-purple-500" />,
      description: "Perfect for first-time clients seeking a personalized virtual experience.",
      features: [
        "1-hour personal attention",
        "Custom experience tailored to your interests",
        "High-quality voice chat",
        "Text messaging",
        "Virtual date planning",
        "Basic profile access"
      ]
    },
    {
      title: "Premium Package",
      price: 1000,
      icon: <Crown className="w-12 h-12 text-purple-500" />,
      description: "Enhanced experience with priority features and extended sessions.",
      features: [
        "3-hour dedicated session",
        "Priority booking system",
        "Exclusive content access",
        "HD video chat",
        "Virtual reality options",
        "24/7 concierge service",
        "Premium profile access"
      ],
      highlighted: true
    },
    {
      title: "VIP Experience",
      price: 2000,
      icon: <Diamond className="w-12 h-12 text-purple-500" />,
      description: "The ultimate luxury package with full customization and dedicated service.",
      features: [
        "Unlimited session duration",
        "Dedicated personal companion",
        "Full customization options",
        "Private virtual environment",
        "Exclusive VIP content",
        "Priority support",
        "Complete profile access",
        "Custom scenario creation"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Virtual Reality Enhancement",
      icon: <Zap className="w-8 h-8" />,
      description: "Immersive VR experience with advanced haptic feedback",
      price: 300
    },
    {
      title: "Custom Scenario Design",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Personalized virtual environments and storylines",
      price: 400
    },
    {
      title: "Gift Package",
      icon: <Gift className="w-8 h-8" />,
      description: "Virtual gifts and surprises for your companion",
      price: 200
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-purple-900/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Our Premium Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of companionship with our cutting-edge virtual services. 
            Choose from our carefully curated packages designed to provide the perfect experience.
          </p>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`p-8 rounded-lg border transition-all hover:transform hover:-translate-y-1 ${
                  pkg.highlighted 
                    ? 'bg-purple-900/30 border-purple-500 shadow-lg shadow-purple-500/20' 
                    : 'bg-purple-900/20 border-purple-500/30'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-3xl font-bold text-purple-500">${pkg.price}</p>
                  </div>
                  {pkg.icon}
                </div>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setCurrentPage('book')}
                  className={`w-full py-3 rounded-full transition ${
                    pkg.highlighted
                      ? 'bg-purple-500 hover:bg-purple-600'
                      : 'border border-purple-500 hover:bg-purple-900/30'
                  }`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-purple-900/20 border border-purple-500/30 hover:border-purple-500 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-purple-500 font-bold">${service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-purple-900/20 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Experience?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your perfect package and start your journey into the future of companionship.
          </p>
          <button 
            onClick={() => setCurrentPage('book')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-full transition text-lg font-semibold"
          >
            Book Your Session Now
          </button>
        </div>
      </section>
    </div>
  );
}

function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState('premium');
  const [selectedCompanion, setSelectedCompanion] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const companions = [
    { id: '1', name: 'Luna Star', speciality: 'Virtual Reality Expert', rating: 4.9, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { id: '2', name: 'Neon Shadow', speciality: 'Cyberpunk Experience', rating: 4.8, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { id: '3', name: 'Crystal Echo', speciality: 'Digital Intimacy Coach', rating: 5.0, image: 'https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Book Your Experience</h1>
        
        {/* Booking Form */}
        <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30">
          {/* Package Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-purple-500" />
              Select Package
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['virtual', 'premium', 'vip'].map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-4 rounded-lg border transition ${
                    selectedPackage === pkg
                      ? 'border-purple-500 bg-purple-900/30'
                      : 'border-purple-500/30 hover:border-purple-500'
                  }`}
                >
                  <h3 className="text-lg font-semibold capitalize">{pkg}</h3>
                  <p className="text-gray-400 text-sm">
                    {pkg === 'virtual' ? '$500' : pkg === 'premium' ? '$1000' : '$2000'}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Companion Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              Choose Your Companion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {companions.map((companion) => (
                <button
                  key={companion.id}
                  onClick={() => setSelectedCompanion(companion.id)}
                  className={`p-4 rounded-lg border transition ${
                    selectedCompanion === companion.id
                      ? 'border-purple-500 bg-purple-900/30'
                      : 'border-purple-500/30 hover:border-purple-500'
                  }`}
                >
                  <img
                    src={companion.image}
                    alt={companion.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold">{companion.name}</h3>
                  <p className="text-gray-400 text-sm">{companion.speciality}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 text-purple-500" />
                    <span>{companion.rating}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-500" />
                Select Date
              </h2>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 rounded-lg bg-purple-900/20 border border-purple-500/30 focus:border-purple-500 transition"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-purple-500" />
                Select Time
              </h2>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-3 rounded-lg bg-purple-900/20 border border-purple-500/30 focus:border-purple-500 transition"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-500" />
              Special Requests
            </h2>
            <textarea
              className="w-full p-3 rounded-lg bg-purple-900/20 border border-purple-500/30 focus:border-purple-500 transition h-32"
              placeholder="Any special requests or preferences..."
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition text-lg font-semibold">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-purple-900/20 border border-purple-500/30 hover:border-purple-500 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ServiceCard({ title, price, features, highlighted = false }) {
  return (
    <div className={`p-6 rounded-lg ${
      highlighted 
        ? 'bg-purple-900/30 border-purple-500' 
        : 'bg-purple-900/20 border-purple-500/30'
    } border hover:border-purple-500 transition`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">${price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Star className="w-4 h-4 text-purple-500" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-2 rounded-full transition ${
        highlighted
          ? 'bg-purple-500 hover:bg-purple-600'
          : 'border border-purple-500 hover:bg-purple-900/30'
      }`}>
        Select Package
      </button>
    </div>
  );
}

export default App;