import React, { useRef, useState, useEffect } from 'react';
import CaseStudyCard from './CaseStudyCard';
import { ChevronLeft, ChevronRight, LineChart, BarChart3, Search, RefreshCw, Lightbulb, FileText, Settings, Laptop, Brush, Car, Target, TrendingUp, Users, Award, Zap, Monitor } from 'lucide-react';

const CaseStudiesSection = () => {
  const scrollContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Product Improvement');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('case-studies');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const caseStudies = {
    RCA: [
      {
        title: "Rapido's Driver Rating Dropped by 15%",
        type: "RCA",
        icon: <Search className="text-blue-600" size={24} />,
        slug: "rapido-driver-rating",
        description: "Root cause analysis and comprehensive strategy to address the sudden drop in driver ratings for Rapido, a bike taxi service.",
        isDetailed: true
      },
      {
        title: "E-commerce Checkout Abandonment",
        type: "RCA",
        icon: <Search className="text-blue-600" size={24} />,
        slug: "ecommerce-checkout",
        description: "Investigating why 35% of users abandon their cart at checkout and implementing solutions to reduce abandonment rate.",
        isDetailed: true
      },
      {
        title: "Mobile App Crash Analysis",
        type: "RCA",
        icon: <Search className="text-blue-600" size={24} />,
        slug: "app-crash-analysis",
        description: "Identifying the root causes of frequent app crashes and implementing a robust error handling system."
      }
    ],
    Design: [
      {
        title: "Digital Wallet Payment Flow Redesign",
        type: "Design",
        icon: <RefreshCw className="text-purple-600" size={24} />,
        slug: "wallet-redesign",
        description: "Redesigning the payment flow for a digital wallet application to reduce drop-offs and improve user satisfaction.",
        isDetailed: true
      },
      {
        title: "Healthcare App UI/UX Overhaul",
        type: "Design",
        icon: <RefreshCw className="text-purple-600" size={24} />,
        slug: "healthcare-app-design",
        description: "Complete redesign of a healthcare app interface to improve accessibility and user engagement for elderly users."
      },
      {
        title: "E-commerce Product Page Redesign",
        type: "Design",
        icon: <RefreshCw className="text-purple-600" size={24} />,
        slug: "product-page-redesign",
        description: "Redesigning product pages to increase conversion rates and improve the overall shopping experience."
      }
    ],
    Metrics: [
      {
        title: "E-commerce Conversion Rate Optimization",
        type: "Metrics",
        icon: <LineChart className="text-green-600" size={24} />,
        slug: "ecommerce-conversion-rate",
        description: "Data-driven approach to identify and implement key optimizations to improve an e-commerce platform's conversion rate by 22%.",
        isDetailed: true
      },
      {
        title: "SaaS Product Retention Analysis",
        type: "Metrics",
        icon: <LineChart className="text-green-600" size={24} />,
        slug: "saas-retention",
        description: "Analyzing user behavior patterns to identify factors affecting retention and implementing targeted improvements."
      },
      {
        title: "Mobile App Engagement Metrics",
        type: "Metrics",
        icon: <LineChart className="text-green-600" size={24} />,
        slug: "app-engagement",
        description: "Developing and tracking key engagement metrics to improve user retention and daily active users."
      }
    ],
    "Product Improvement": [
      {
        title: "ChatGPT Response Length Control Feature",
        type: "Product Enhancement",
        icon: <Settings className="text-blue-600" size={24} />,
        slug: "chatgpt-length-control",
        description: "Product improvement proposal for ChatGPT to add response length controls, reducing compute costs and giving users precise control over output length.",
        isDetailed: true
      },
      {
        title: "Subscription Service Revenue Strategy",
        type: "Strategy",
        icon: <BarChart3 className="text-yellow-600" size={24} />,
        slug: "subscription-strategy",
        description: "Strategic overhaul of subscription pricing and features to increase revenue by 35% while improving customer satisfaction.",
        isDetailed: true
      },
      {
        title: "AI Feature Prioritization Framework",
        type: "Framework",
        icon: <Lightbulb className="text-blue-600" size={24} />,
        slug: "ai-prioritization",
        description: "Creating and implementing a framework to prioritize AI features based on impact, feasibility, and strategic alignment."
      },
      {
        title: "Product Launch Strategy",
        type: "Strategy",
        icon: <FileText className="text-blue-600" size={24} />,
        slug: "product-launch",
        description: "Developing and executing a successful product launch strategy for a new mobile application."
      }
    ],
    "Product Teardowns": [
      {
        title: "Windows 11 Product Teardown",
        type: "Teardown",
        icon: <Monitor className="text-indigo-600" size={24} />,
        slug: "windows-11-teardown",
        description: "Comprehensive analysis of Windows 11's product strategy, user experience, and market positioning through detailed feature breakdown.",
        isDetailed: true
      },
      {
        title: "Spotify Mobile App Teardown",
        type: "Teardown",
        icon: <Monitor className="text-indigo-600" size={24} />,
        slug: "spotify-teardown",
        description: "Deep dive into Spotify's mobile app design, user journey, and monetization strategies."
      },
      {
        title: "Netflix Product Strategy Analysis",
        type: "Teardown",
        icon: <Monitor className="text-indigo-600" size={24} />,
        slug: "netflix-teardown",
        description: "Analyzing Netflix's product evolution, content recommendation algorithms, and subscription model optimization."
      }
    ],
    "Guesstimates": [
      {
        title: "Laptops Sold Daily in Delhi",
        type: "Guesstimate",
        icon: <Laptop className="text-purple-600" size={24} />,
        slug: "laptops-delhi-daily",
        description: "Estimate the number of laptops sold in Delhi on an average weekday using population, income segment, and replacement cycle assumptions.",
        isDetailed: true
      },
      {
        title: "Annual Toothbrush Demand in India",
        type: "Guesstimate",
        icon: <Brush className="text-blue-500" size={24} />,
        slug: "toothbrush-demand-india",
        description: "Break down the total number of toothbrushes sold in India annually by factoring in population, frequency of replacement, and rural vs urban usage."
      },
      {
        title: "Daily Uber Rides in Bangalore",
        type: "Guesstimate",
        icon: <Car className="text-green-600" size={24} />,
        slug: "uber-rides-bangalore",
        description: "Estimate the number of daily Uber rides in Bangalore based on total population, smartphone penetration, and average commute behavior."
      }
    ]
  };

  const tabIcons = {
    RCA: <Search className="mr-2" size={18} />,
    Design: <RefreshCw className="mr-2" size={18} />,
    Metrics: <LineChart className="mr-2" size={18} />,
    "Product Improvement": <Settings className="mr-2" size={18} />,
    "Product Teardowns": <Monitor className="mr-2" size={18} />,
    "Guesstimates": <BarChart3 className="mr-2" size={18} />
  };

  const tabData = {
    RCA: { count: 3, bg: 'bg-red-600', impact: 'Problem Solving' },
    Design: { count: 3, bg: 'bg-purple-600', impact: 'User Experience' },
    Metrics: { count: 3, bg: 'bg-green-600', impact: 'Data-Driven' },
    "Product Improvement": { count: 4, bg: 'bg-blue-600', impact: 'Innovation' },
    "Product Teardowns": { count: 3, bg: 'bg-indigo-600', impact: 'Market Analysis' },
    "Guesstimates": { count: 3, bg: 'bg-pink-600', impact: 'Strategic Thinking' }
  };

  return (
    <section id="case-studies" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/40 to-purple-50/40 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Attention-Grabbing Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <Award size={16} className="animate-pulse" />
            Product Impact Portfolio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Case Studies
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            <span className="font-semibold text-blue-600">Real problems.</span> 
            <span className="font-semibold text-purple-600"> Strategic solutions.</span> 
            <span className="font-semibold text-green-600"> Measurable impact.</span>
          </p>

          {/* Quick Impact Stats */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">30+</div>
              <div className="text-sm text-gray-600">Personal Case Studies</div>
            </div>
            
          </div>
        </div>

        {/* Innovative Tab Design */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {Object.keys(caseStudies).map((tab) => {
            const tabInfo = tabData[tab];
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex items-center px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm group ${
                  activeTab === tab
                    ? `${tabInfo.bg} text-white shadow-xl transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl'
                }`}
              >
                {tabIcons[tab]}
                <div className="text-left">
                  <div>{tab}</div>
                  <div className={`text-xs opacity-75 ${activeTab === tab ? 'text-white' : 'text-gray-500'}`}>
                    {tabInfo.impact}
                  </div>
                </div>
                <div className={`ml-3 px-2 py-1 rounded-full text-xs font-black ${
                  activeTab === tab ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tabInfo.count}
                </div>
                
                {/* Active Tab Indicator */}
                {activeTab === tab && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Case Studies Container */}
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 -ml-6 hidden md:block hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="transition-colors" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 scrollbar-hide snap-x scroll-smooth gap-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {caseStudies[activeTab].map((study, index) => (
              <div key={index} className={`snap-start shrink-0 transition-all duration-500 ${isVisible ? 'animate-slideInUp' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 -mr-6 hidden md:block hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="transition-colors" />
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection; 