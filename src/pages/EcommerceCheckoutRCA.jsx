import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowLeft, 
  Search, 
  Users, 
  BarChart3, 
  Lightbulb, 
  Settings,
  CheckCircle,
  AlertCircle,
  Clock,
  DollarSign,
  CreditCard,
  Truck,
  Shield,
  MessageSquare
} from 'lucide-react';

const EcommerceCheckoutRCA = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <AlertCircle className="text-red-600" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">E-commerce Checkout Abandonment</h1>
              <p className="text-gray-600">Root Cause Analysis</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">E-commerce</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">User Experience</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Conversion Rate</span>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Problem Statement</h2>
          <p className="text-gray-600 mb-4">
            In this analytical case study, I examine a hypothetical e-commerce platform experiencing a significant checkout abandonment rate of 68%, well above the industry average of 69.57%. This scenario demonstrates my approach to identifying root causes and developing solutions for conversion optimization challenges, particularly focusing on the mobile user segment.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <div className="flex items-start">
              <AlertCircle className="text-red-600 mt-1 mr-3" size={20} />
              <div>
                <h3 className="font-semibold text-red-800">Key Impact</h3>
                <p className="text-red-700 mt-1">
                  The high abandonment rate was directly affecting our revenue and customer satisfaction metrics. Mobile users were particularly affected, with a 72% abandonment rate compared to 64% on desktop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investigation Process */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Investigation Process</h2>
          
          <div className="space-y-6">
            {/* Data Analysis */}
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <BarChart3 className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Analysis</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Analyzed checkout funnel analytics to identify drop-off points</li>
                  <li>Examined user session recordings to understand behavior patterns</li>
                  <li>Reviewed customer feedback and support tickets</li>
                  <li>Conducted A/B testing on different checkout flows</li>
                </ul>
              </div>
            </div>

            {/* User Research */}
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">User Research</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Conducted user interviews with customers who abandoned checkout</li>
                  <li>Performed usability testing on the checkout process</li>
                  <li>Analyzed heat maps and click patterns</li>
                  <li>Gathered feedback through exit surveys</li>
                </ul>
              </div>
            </div>

            {/* Technical Analysis */}
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Settings className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Analysis</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Reviewed checkout page load times and performance metrics</li>
                  <li>Analyzed payment gateway integration issues</li>
                  <li>Examined form validation and error handling</li>
                  <li>Tested cross-browser and device compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Root Causes */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Root Causes</h2>
          
          <div className="space-y-6">
            {/* Primary Causes */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Primary Causes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="text-red-600 mr-2" size={20} />
                    <h4 className="font-semibold text-red-800">Lengthy Checkout Process</h4>
                  </div>
                  <p className="text-red-700">
                    The checkout process required 5 steps and 12 form fields, causing user fatigue and abandonment.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="text-red-600 mr-2" size={20} />
                    <h4 className="font-semibold text-red-800">Hidden Costs</h4>
                  </div>
                  <p className="text-red-700">
                    Shipping costs and taxes were only revealed at the final step, causing sticker shock.
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Causes */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Secondary Causes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CreditCard className="text-yellow-600 mr-2" size={20} />
                    <h4 className="font-semibold text-yellow-800">Payment Issues</h4>
                  </div>
                  <p className="text-yellow-700">
                    Limited payment options and frequent payment gateway errors.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Truck className="text-yellow-600 mr-2" size={20} />
                    <h4 className="font-semibold text-yellow-800">Shipping Concerns</h4>
                  </div>
                  <p className="text-yellow-700">
                    Unclear delivery timelines and limited shipping options.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="text-yellow-600 mr-2" size={20} />
                    <h4 className="font-semibold text-yellow-800">Trust Issues</h4>
                  </div>
                  <p className="text-yellow-700">
                    Lack of security indicators and trust badges.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="text-yellow-600 mr-2" size={20} />
                    <h4 className="font-semibold text-yellow-800">Support Access</h4>
                  </div>
                  <p className="text-yellow-700">
                    No easy way to get help during checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Development */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Solution Development</h2>
          
          <div className="space-y-6">
            {/* Immediate Actions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Immediate Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-semibold text-green-800">Streamlined Checkout</h4>
                  </div>
                  <ul className="list-disc pl-5 text-green-700 space-y-1">
                    <li>Reduced steps from 5 to 3</li>
                    <li>Implemented guest checkout</li>
                    <li>Added progress indicator</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-semibold text-green-800">Transparent Pricing</h4>
                  </div>
                  <ul className="list-disc pl-5 text-green-700 space-y-1">
                    <li>Added shipping calculator early in process</li>
                    <li>Displayed total cost breakdown</li>
                    <li>Implemented tax calculator</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Long-term Solutions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Long-term Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="text-blue-600 mr-2" size={20} />
                    <h4 className="font-semibold text-blue-800">Enhanced Payment Options</h4>
                  </div>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    <li>Added multiple payment gateways</li>
                    <li>Implemented saved payment methods</li>
                    <li>Added digital wallet support</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="text-blue-600 mr-2" size={20} />
                    <h4 className="font-semibold text-blue-800">Trust Building</h4>
                  </div>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    <li>Added security badges and SSL indicators</li>
                    <li>Implemented live chat support</li>
                    <li>Added customer reviews and ratings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">45%</h3>
              <p className="text-green-700">Reduction in Checkout Abandonment</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">32%</h3>
              <p className="text-blue-700">Increase in Mobile Conversions</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">28%</h3>
              <p className="text-purple-700">Growth in Revenue</p>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Learnings</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Transparency in pricing and process is crucial for user trust</li>
              <li>Mobile optimization should be a priority, not an afterthought</li>
              <li>Reducing friction points can significantly impact conversion rates</li>
              <li>Continuous user feedback is essential for ongoing improvement</li>
            </ul>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Reflection</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              This case study highlights the importance of understanding user behavior and addressing pain points in the checkout process. The significant reduction in abandonment rate demonstrates how small changes in user experience can have a major impact on business metrics.
            </p>
            <p className="text-gray-600">
              The success of this project reinforced the value of data-driven decision making and user-centric design in e-commerce. It also showed how addressing both immediate and long-term solutions can lead to sustainable improvements in user experience and business performance.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EcommerceCheckoutRCA; 