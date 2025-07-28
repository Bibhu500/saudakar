import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  RefreshCw, 
  Users, 
  MessageSquare, 
  CreditCard, 
  AlertTriangle,
  CheckCircle,
  BarChart4,
  LineChart,
  Search,
  Lightbulb,
  Clock,
  Zap
} from 'lucide-react';
import Footer from '../components/Footer';

const WalletRedesign = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:underline">
            <ArrowLeft size={20} className="mr-2" /> Back to portfolio
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Design Case Study</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">Digital Wallet Payment Flow Redesign</h1>
              <p className="text-purple-100 text-lg max-w-2xl">Redesigning the payment flow for a digital wallet application to reduce drop-offs and improve user satisfaction.</p>
            </div>
            <div className="hidden lg:block">
              <RefreshCw size={120} className="opacity-20" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Case Study Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-purple-600" /> Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <Users size={18} className="mr-2 text-purple-600" /> Company
              </h3>
              <p className="text-gray-800">A leading fintech company with over 5 million active users in Southeast Asia.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <AlertTriangle size={18} className="mr-2 text-red-600" /> Problem
              </h3>
              <p className="text-gray-800">45% drop-off rate in payment flow, leading to lost revenue and poor user experience.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <CheckCircle size={18} className="mr-2 text-green-600" /> Outcome
              </h3>
              <p className="text-gray-800">Reduced drop-off rate by 65% and increased successful transactions by 40%.</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>
              As the Lead Product Designer for a digital wallet application, I was tasked with addressing a critical issue: our payment flow was experiencing a 45% drop-off rate, significantly impacting revenue and user satisfaction. The challenge was particularly acute in emerging markets where users often have limited digital payment experience.
            </p>
            <p>
              This case study outlines my approach to redesigning the payment flow, focusing on user research, iterative design, and measurable improvements in key metrics.
            </p>
          </div>
        </section>

        {/* Research & Analysis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-purple-600" /> Research & Analysis
          </h2>
          
          <div className="prose max-w-none">
            <h3>1. User Research</h3>
            <p>Conducted comprehensive research to understand user pain points:</p>
            <ul>
              <li>User interviews with 50 active and inactive users</li>
              <li>Usability testing sessions with 30 participants</li>
              <li>Heat map analysis of payment flow screens</li>
              <li>Session recordings analysis of 1,000+ failed transactions</li>
            </ul>

            <div className="bg-purple-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-purple-800 mb-4">Key Findings</h4>
              <ul className="text-purple-900">
                <li>65% of users abandoned at the payment confirmation screen</li>
                <li>40% of users couldn't find the payment history</li>
                <li>55% of users were confused by the payment status indicators</li>
                <li>70% of users wanted clearer error messages</li>
              </ul>
            </div>

            <h3>2. Pain Points Identified</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-2">Complex Navigation</h4>
                <p className="text-red-900">Users struggled to navigate between payment screens and find transaction history.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-bold text-yellow-800 mb-2">Unclear Status</h4>
                <p className="text-yellow-900">Payment status indicators were confusing and didn't provide enough feedback.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-2">Error Handling</h4>
                <p className="text-blue-900">Error messages were technical and didn't guide users on next steps.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 mb-2">Trust Issues</h4>
                <p className="text-green-900">Users lacked confidence in the payment process and security measures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Solution */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-600" /> Design Solution
          </h2>
          
          <div className="prose max-w-none">
            <h3>1. Streamlined Payment Flow</h3>
            <div className="border border-purple-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <Zap className="text-purple-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Key Improvements</h4>
                  <ul className="text-gray-700">
                    <li>Reduced payment steps from 5 to 3</li>
                    <li>Added progress indicator</li>
                    <li>Implemented one-tap payment for frequent transactions</li>
                    <li>Added biometric authentication option</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>2. Enhanced Status Communication</h3>
            <div className="border border-purple-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <Clock className="text-purple-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Status Improvements</h4>
                  <ul className="text-gray-700">
                    <li>Real-time transaction status updates</li>
                    <li>Clear success/failure indicators</li>
                    <li>Estimated completion time for pending transactions</li>
                    <li>Push notifications for status changes</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>3. Improved Error Handling</h3>
            <div className="border border-purple-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <AlertTriangle className="text-purple-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Error Handling Improvements</h4>
                  <ul className="text-gray-700">
                    <li>User-friendly error messages</li>
                    <li>Step-by-step recovery instructions</li>
                    <li>Direct support access from error screens</li>
                    <li>Automatic retry for failed transactions</li>
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
                <p className="text-5xl font-bold text-purple-600">65%</p>
                <p className="text-gray-600 mt-2">Reduction in payment flow drop-off rate</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-green-600">40%</p>
                <p className="text-gray-600 mt-2">Increase in successful transactions</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-600">85%</p>
                <p className="text-gray-600 mt-2">User satisfaction with new payment flow</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h3>Business Impact</h3>
            <ul>
              <li>Increased monthly transaction volume by 35%</li>
              <li>Reduced customer support tickets by 45%</li>
              <li>Improved app store rating from 3.8 to 4.5</li>
              <li>Increased user retention by 25%</li>
            </ul>

            <div className="bg-purple-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-purple-800 mb-4">User Feedback</h4>
              <p className="text-purple-900 italic">
                "The new payment flow is so much easier to use. I can complete transactions in half the time, and I always know what's happening with my payment."
              </p>
              <p className="text-purple-700 font-medium mt-2">— Regular User, Indonesia</p>
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
                  <li className="mb-2"><strong>Simplify, then optimize:</strong> Focus on reducing friction before adding features</li>
                  <li className="mb-2"><strong>Context matters:</strong> Design solutions must account for local market conditions</li>
                  <li className="mb-2"><strong>Trust is crucial:</strong> Clear communication builds user confidence</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Future Improvements</h3>
                <ul className="text-gray-700">
                  <li className="mb-2"><strong>AI-powered assistance:</strong> Implement smart suggestions based on user behavior</li>
                  <li className="mb-2"><strong>Offline capabilities:</strong> Enable basic functions without internet connection</li>
                  <li className="mb-2"><strong>Voice interactions:</strong> Add voice commands for hands-free payments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* CTA Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Interested in my design approach?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm passionate about creating user-centered designs that solve real problems and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/#contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Get in Touch
            </Link>
            <Link to="/#case-studies" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition">
              See More Case Studies
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WalletRedesign; 