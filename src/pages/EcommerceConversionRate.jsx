import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  LineChart, 
  Users, 
  MessageSquare, 
  ShoppingCart, 
  AlertTriangle,
  CheckCircle,
  BarChart4,
  Search,
  Lightbulb,
  Clock,
  Zap,
  TrendingUp
} from 'lucide-react';
import Footer from '../components/Footer';

const EcommerceConversionRate = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:underline">
            <ArrowLeft size={20} className="mr-2" /> Back to portfolio
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Metrics Case Study</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">E-commerce Conversion Rate Optimization</h1>
              <p className="text-green-100 text-lg max-w-2xl">Data-driven approach to identify and implement key optimizations to improve an e-commerce platform's conversion rate by 22%.</p>
            </div>
            <div className="hidden lg:block">
              <LineChart size={120} className="opacity-20" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Case Study Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-green-600" /> Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <Users size={18} className="mr-2 text-green-600" /> Company
              </h3>
              <p className="text-gray-800">A leading fashion e-commerce platform with 2M+ monthly visitors and $50M+ annual revenue.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <AlertTriangle size={18} className="mr-2 text-red-600" /> Problem
              </h3>
              <p className="text-gray-800">Stagnant conversion rate at 1.8% despite high traffic and good product selection.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <CheckCircle size={18} className="mr-2 text-green-600" /> Outcome
              </h3>
              <p className="text-gray-800">Increased conversion rate to 2.2% and improved average order value by 15%.</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>
              This case study demonstrates my data-driven approach to conversion optimization for a hypothetical e-commerce platform with a plateaued conversion rate of 1.8% despite strong traffic and good product selection. This analysis showcases my methodology for identifying optimization opportunities and implementing targeted improvements to drive meaningful conversion improvements.
            </p>
            <p>
              This case study outlines my systematic approach to user behavior analysis, friction point identification, and solution prioritization that could potentially drive a 22% increase in conversion rate.
            </p>
          </div>
        </section>

        {/* Data Analysis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-green-600" /> Data Analysis
          </h2>
          
          <div className="prose max-w-none">
            <h3>1. User Behavior Analysis</h3>
            <p>Conducted comprehensive analysis of user behavior data:</p>
            <ul>
              <li>Analyzed 100,000+ user sessions using heat maps and click tracking</li>
              <li>Studied conversion funnel drop-off points</li>
              <li>Analyzed user paths and navigation patterns</li>
              <li>Reviewed cart abandonment data and exit pages</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-green-800 mb-4">Key Findings</h4>
              <ul className="text-green-900">
                <li>45% of users abandoned at product page</li>
                <li>60% of mobile users didn't complete checkout</li>
                <li>Average time to purchase was 3.5 days</li>
                <li>70% of users visited multiple times before purchasing</li>
              </ul>
            </div>

            <h3>2. Friction Points Identified</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-2">Product Information</h4>
                <p className="text-red-900">Users needed more detailed product information and better image quality.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-bold text-yellow-800 mb-2">Mobile Experience</h4>
                <p className="text-yellow-900">Mobile checkout process was cumbersome and had high abandonment rates.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-2">Trust Signals</h4>
                <p className="text-blue-900">Lack of social proof and trust indicators affected purchase decisions.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-purple-800 mb-2">Price Sensitivity</h4>
                <p className="text-purple-900">Users were highly sensitive to shipping costs and final price calculations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Strategy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-600" /> Optimization Strategy
          </h2>
          
          <div className="prose max-w-none">
            <h3>1. Product Page Improvements</h3>
            <div className="border border-green-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <Zap className="text-green-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Key Improvements</h4>
                  <ul className="text-gray-700">
                    <li>Enhanced product images with 360° view</li>
                    <li>Added detailed size guides and measurements</li>
                    <li>Implemented user-generated content gallery</li>
                    <li>Added real-time stock indicators</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>2. Mobile Experience Enhancement</h3>
            <div className="border border-green-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <TrendingUp className="text-green-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Mobile Optimizations</h4>
                  <ul className="text-gray-700">
                    <li>Streamlined mobile checkout process</li>
                    <li>Added one-tap payment options</li>
                    <li>Improved form autofill functionality</li>
                    <li>Optimized image loading for mobile</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>3. Trust Building Elements</h3>
            <div className="border border-green-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <MessageSquare className="text-green-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Trust Enhancements</h4>
                  <ul className="text-gray-700">
                    <li>Added customer review highlights</li>
                    <li>Implemented trust badges and security indicators</li>
                    <li>Enhanced return policy visibility</li>
                    <li>Added live chat support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <LineChart size={24} className="mr-2 text-green-600" /> Results & Impact
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-5xl font-bold text-green-600">22%</p>
                <p className="text-gray-600 mt-2">Increase in conversion rate</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-600">15%</p>
                <p className="text-gray-600 mt-2">Increase in average order value</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-purple-600">40%</p>
                <p className="text-gray-600 mt-2">Reduction in cart abandonment</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h3>Business Impact</h3>
            <ul>
              <li>Increased monthly revenue by 18%</li>
              <li>Reduced customer acquisition cost by 12%</li>
              <li>Improved customer satisfaction score by 25%</li>
              <li>Increased repeat purchase rate by 20%</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-green-800 mb-4">Key Metrics Improvement</h4>
              <ul className="text-green-900">
                <li>Mobile conversion rate increased from 1.2% to 1.8%</li>
                <li>Average time to purchase reduced from 3.5 to 2.1 days</li>
                <li>Product page bounce rate decreased by 35%</li>
                <li>Checkout completion rate improved by 45%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learnings & Reflection */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-600" /> Learnings & Reflection
          </h2>
          
          <div className="prose max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Learnings</h3>
                <ul className="text-gray-700">
                  <li className="mb-2"><strong>Data-driven decisions:</strong> Let metrics guide optimization priorities</li>
                  <li className="mb-2"><strong>Mobile-first approach:</strong> Mobile experience significantly impacts overall conversion</li>
                  <li className="mb-2"><strong>Trust is crucial:</strong> Building trust through social proof and transparency</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Future Improvements</h3>
                <ul className="text-gray-700">
                  <li className="mb-2"><strong>Personalization:</strong> Implement AI-driven product recommendations</li>
                  <li className="mb-2"><strong>Voice commerce:</strong> Add voice search and shopping capabilities</li>
                  <li className="mb-2"><strong>AR integration:</strong> Enable virtual try-on for fashion items</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* CTA Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Interested in my metrics-driven approach?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm passionate about using data and analytics to drive meaningful improvements in product performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/#contact" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Get in Touch
            </Link>
            <Link to="/#case-studies" className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition">
              See More Case Studies
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EcommerceConversionRate; 