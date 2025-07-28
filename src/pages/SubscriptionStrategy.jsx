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
  TrendingUp,
  DollarSign,
  Target,
  PieChart
} from 'lucide-react';
import Footer from '../components/Footer';

const SubscriptionStrategy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:underline">
            <ArrowLeft size={20} className="mr-2" /> Back to portfolio
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Product Improvement Case Study</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">Subscription Service Revenue Strategy</h1>
              <p className="text-blue-100 text-lg max-w-2xl">Strategic overhaul of subscription pricing and features to increase revenue by 35% while improving customer satisfaction.</p>
            </div>
            <div className="hidden lg:block">
              <DollarSign size={120} className="opacity-20" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Case Study Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-blue-600" /> Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <Users size={18} className="mr-2 text-blue-600" /> Company
              </h3>
              <p className="text-gray-800">A B2B SaaS platform with 10,000+ active subscribers and $5M+ annual revenue.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <AlertTriangle size={18} className="mr-2 text-red-600" /> Problem
              </h3>
              <p className="text-gray-800">Stagnant revenue growth and high churn rate despite having a solid product.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <CheckCircle size={18} className="mr-2 text-green-600" /> Outcome
              </h3>
              <p className="text-gray-800">35% increase in revenue and 40% reduction in churn rate within 6 months.</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>
              This case study demonstrates my strategic approach to developing a comprehensive subscription strategy for a hypothetical platform facing revenue stagnation and high customer churn. The challenge involves balancing user value with business sustainability while transitioning from a stagnant growth phase to a thriving subscription-based model.
            </p>
            <p>
              This analysis showcases my approach to customer behavior analysis, pricing strategy development, and feature prioritization to drive sustainable revenue growth and improve customer retention.
            </p>
          </div>
        </section>

        {/* Analysis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-blue-600" /> Analysis
          </h2>
          
          <div className="prose max-w-none">
            <h3>1. Customer Behavior Analysis</h3>
            <p>Conducted in-depth analysis of customer usage patterns and feedback:</p>
            <ul>
              <li>Analyzed 12 months of usage data from 10,000+ customers</li>
              <li>Conducted customer interviews and surveys</li>
              <li>Studied feature adoption rates and usage patterns</li>
              <li>Analyzed churn reasons and customer feedback</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-blue-800 mb-4">Key Findings</h4>
              <ul className="text-blue-900">
                <li>40% of customers were using less than 50% of available features</li>
                <li>Churn rate was highest in the first 3 months (25%)</li>
                <li>80% of customers wanted more customization options</li>
                <li>Pricing was the #2 reason for churn after feature limitations</li>
              </ul>
            </div>

            <h3>2. Market Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-2">Competitive Landscape</h4>
                <p className="text-red-900">Analyzed 5 major competitors' pricing and feature sets to identify market gaps and opportunities.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-bold text-yellow-800 mb-2">Customer Segments</h4>
                <p className="text-yellow-900">Identified 4 distinct customer segments with different needs and willingness to pay.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 mb-2">Value Proposition</h4>
                <p className="text-green-900">Mapped core value drivers and unique selling points for each customer segment.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-purple-800 mb-2">Pricing Strategy</h4>
                <p className="text-purple-900">Evaluated different pricing models and their impact on customer acquisition and retention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Implementation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-600" /> Strategy Implementation
          </h2>
          
          <div className="prose max-w-none">
            <h3>1. Pricing Structure Overhaul</h3>
            <div className="border border-blue-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <Target className="text-blue-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">New Pricing Tiers</h4>
                  <ul className="text-gray-700">
                    <li>Introduced usage-based pricing for high-volume customers</li>
                    <li>Created a new enterprise tier with custom features</li>
                    <li>Added annual billing discount options</li>
                    <li>Implemented feature-based add-ons</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>2. Feature Enhancement</h3>
            <div className="border border-blue-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <Zap className="text-blue-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">New Features</h4>
                  <ul className="text-gray-700">
                    <li>Added advanced analytics dashboard</li>
                    <li>Implemented custom workflow automation</li>
                    <li>Introduced API access for enterprise customers</li>
                    <li>Added team collaboration features</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>3. Customer Success Program</h3>
            <div className="border border-blue-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <Users className="text-blue-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Program Components</h4>
                  <ul className="text-gray-700">
                    <li>Onboarding optimization program</li>
                    <li>Regular success check-ins</li>
                    <li>Feature adoption workshops</li>
                    <li>Customer community platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <LineChart size={24} className="mr-2 text-blue-600" /> Results & Impact
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-5xl font-bold text-blue-600">35%</p>
                <p className="text-gray-600 mt-2">Increase in revenue</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-green-600">40%</p>
                <p className="text-gray-600 mt-2">Reduction in churn</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-purple-600">25%</p>
                <p className="text-gray-600 mt-2">Increase in ARPU</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h3>Business Impact</h3>
            <ul>
              <li>Increased annual recurring revenue by $1.75M</li>
              <li>Improved customer lifetime value by 45%</li>
              <li>Reduced customer acquisition cost by 20%</li>
              <li>Increased upsell rate by 30%</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-blue-800 mb-4">Key Metrics Improvement</h4>
              <ul className="text-blue-900">
                <li>Feature adoption rate increased from 45% to 75%</li>
                <li>Customer satisfaction score improved from 7.2 to 8.5</li>
                <li>Average subscription length increased from 8 to 14 months</li>
                <li>Enterprise tier adoption reached 15% of customer base</li>
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
                  <li className="mb-2"><strong>Value-based pricing:</strong> Price based on value delivered, not just features</li>
                  <li className="mb-2"><strong>Customer success:</strong> Proactive engagement significantly reduces churn</li>
                  <li className="mb-2"><strong>Feature adoption:</strong> Focus on helping customers realize value from existing features</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Future Improvements</h3>
                <ul className="text-gray-700">
                  <li className="mb-2"><strong>AI integration:</strong> Add predictive analytics for churn prevention</li>
                  <li className="mb-2"><strong>Automation:</strong> Implement automated success metrics tracking</li>
                  <li className="mb-2"><strong>Expansion:</strong> Develop additional enterprise-grade features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Interested in my product strategy approach?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm passionate about developing data-driven strategies that drive sustainable growth and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get in Touch
            </Link>
            <Link to="/#case-studies" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              See More Case Studies
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SubscriptionStrategy; 