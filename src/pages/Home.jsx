import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, TrendingUp, Shield, Clock, Users, Globe, Star, ArrowRight, 
  CheckCircle, BarChart3, CreditCard, Truck, RefreshCw, Search, Menu, X, 
  Play, Package, MapPin, Zap, Award, HeartHandshake, IndianRupee
} from 'lucide-react';

const B2BMarketplace = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('retailers');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Dynamic data with useMemo for optimization
  const stats = useMemo(() => [
    { value: '50K+', label: 'Active Retailers', icon: Users },
    { value: '10K+', label: 'Verified Brands', icon: ShoppingBag },
    { value: '28', label: 'States Covered', icon: MapPin },
    { value: '₹500Cr+', label: 'GMV Processed', icon: IndianRupee }
  ], []);

  const keyFeatures = useMemo(() => [
    { icon: Clock, title: '60-Day BNPL', desc: 'Buy now, pay in 60 days with flexible credit terms' },
    { icon: Truck, title: 'End-to-End Logistics', desc: 'We handle everything from order to delivery' },
    { icon: Package, title: 'Low MOQ', desc: 'Start small with minimum order quantities' },
    { icon: Shield, title: 'No Loss Guarantee', desc: 'Risk-free business with payment protection' },
    { icon: MapPin, title: 'Pan India Reach', desc: 'Connect across all major cities and towns' },
    { icon: Award, title: 'Trusted Partners', desc: 'Work with verified and reliable suppliers' }
  ], []);

  const categories = useMemo(() => [
    { name: 'Fashion & Apparel', count: '15K+ brands', color: 'from-pink-500 to-rose-500' },
    { name: 'Home & Living', count: '8K+ brands', color: 'from-green-500 to-emerald-500' },
    { name: 'Beauty & Personal Care', count: '5K+ brands', color: 'from-purple-500 to-violet-500' },
    { name: 'Gifts & Lifestyle', count: '3K+ brands', color: 'from-orange-500 to-amber-500' },
    { name: 'FMCG & Food', count: '4K+ brands', color: 'from-blue-500 to-cyan-500' }
  ], []);

  const testimonials = useMemo(() => [
    { quote: "60-day credit terms changed our cash flow completely. We can now stock more without financial stress.", author: "Rahul Sharma", role: "Retail Store Owner, Delhi" },
    { quote: "Listed our fashion brand and reached 500+ retailers in 3 months. The logistics support is excellent.", author: "Priya Patel", role: "Fashion Brand Founder, Mumbai" },
    { quote: "One platform for discovery, ordering, and payment. It simplified our entire wholesale process.", author: "Amit Kumar", role: "Multi-brand Retailer, Bangalore" }
  ], []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const TabContent = ({ tab }) => {
    const retailerFeatures = [
      { icon: Search, title: 'Smart Discovery', desc: 'AI-powered brand matching for your store category' },
      { icon: CreditCard, title: 'Flexible Payment', desc: '60-day BNPL with instant approval for qualified retailers' },
      { icon: Truck, title: 'Hassle-free Logistics', desc: 'Direct delivery to your store, we handle everything' }
    ];

    const brandFeatures = [
      { icon: Users, title: 'Retailer Network', desc: 'Access 50K+ verified retailers across India' },
      { icon: BarChart3, title: 'Sales Analytics', desc: 'Real-time insights and market trend analysis' },
      { icon: HeartHandshake, title: 'Guaranteed Payments', desc: 'Get paid immediately, we handle retailer credits' }
    ];

    const features = tab === 'retailers' ? retailerFeatures : brandFeatures;
    const title = tab === 'retailers' ? 'Retailers: Discover & Stock Smarter' : 'Brands: Scale & Grow Faster';
    const subtitle = tab === 'retailers' 
      ? 'Find the right brands, get flexible payment terms, and grow your business risk-free'
      : 'List your products, reach more retailers, and scale your brand across India';

    return (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={tab === 'brands' ? 'order-2 lg:order-1' : ''}>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-8">{subtitle}</p>
          <div className="space-y-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105">
            {tab === 'retailers' ? 'Start Shopping' : 'List Your Brand'}
          </button>
        </div>
        <div className={`relative ${tab === 'brands' ? 'order-1 lg:order-2' : ''}`}>
          <div className="aspect-[16/12] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100">
            <div className="w-full h-80 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {tab === 'retailers' ? <ShoppingBag className="h-8 w-8 text-white" /> : <BarChart3 className="h-8 w-8 text-white" />}
                </div>
                <p className="text-indigo-600 font-medium">{tab === 'retailers' ? 'Retailer Dashboard' : 'Brand Analytics'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Optimized Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                B2B Bazaar
              </h1>
              <div className="hidden md:flex ml-10 space-x-8">
                {['Categories', 'For Retailers', 'For Brands', 'Resources'].map((item) => (
                  <a key={item} href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium">Login</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                Join Free
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              India's Premier B2B Marketplace for 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Fashion, Home & FMCG</span>
            </motion.h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              One platform for discovery, payment & fulfillment. Connect retailers with brands across Fashion, Home, Beauty, Gifts & FMCG with 60-day BNPL and end-to-end logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center">
                Start as Retailer <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center">
                List Your Brand
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              {['Free to Join', '60-Day BNPL', 'No Loss Guarantee', 'Pan India Delivery'].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-4 group-hover:bg-indigo-600 transition-colors">
                    <Icon className="h-6 w-6 text-indigo-600 group-hover:text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Modern Commerce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a retailer seeking quality brands or a brand looking to expand reach, we provide the perfect platform.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-lg shadow-sm border">
              {['retailers', 'brands'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-md font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  For {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <TabContent tab={activeTab} />
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose B2B Bazaar?</h2>
            <p className="text-xl text-gray-600">Complete solutions for modern wholesale business</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                    <Icon className="h-6 w-6 text-indigo-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Discover top brands across major business categories</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <ShoppingBag className="h-12 w-12 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our growing community</p>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial}
                className="bg-gray-50 rounded-2xl p-8 lg:p-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl font-medium text-gray-900 mb-8">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join India's fastest-growing B2B marketplace. Get 60-day credit, end-to-end logistics, and access to thousands of verified partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105">
              Start as Retailer
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all">
              Join as Brand
            </button>
          </div>
          <p className="text-indigo-200 mt-6 text-sm">
            No registration fees • Instant approval • 24/7 support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                B2B Bazaar
              </h3>
              <p className="text-gray-300 mb-4">
                India's premier B2B marketplace connecting retailers and brands across Fashion, Home, Beauty, Gifts & FMCG.
              </p>
            </div>
            
            {[
              { title: 'For Retailers', links: ['Discover Brands', '60-Day BNPL', 'Logistics Support', 'Success Stories'] },
              { title: 'For Brands', links: ['List Products', 'Reach Retailers', 'Analytics Dashboard', 'Growth Tools'] },
              { title: 'Support', links: ['Help Center', 'Contact Us', 'Terms of Service', 'Privacy Policy'] }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-300">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 B2B Bazaar. All rights reserved. Made in India 🇮🇳</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default B2BMarketplace;