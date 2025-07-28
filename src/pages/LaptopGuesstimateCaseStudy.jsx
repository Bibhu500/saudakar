import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calculator, 
  Users, 
  Building2, 
  TrendingUp,
  Target,
  CheckCircle,
  BarChart4,
  Search,
  Lightbulb,
  FileText,
  Video,
  Presentation
} from 'lucide-react';
import Footer from '../components/Footer';

const LaptopGuesstimateCaseStudy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:underline">
            <ArrowLeft size={20} className="mr-2" /> Back to portfolio
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Market Sizing Guesstimate</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">Laptops Sold Daily in Delhi</h1>
              <p className="text-indigo-100 text-lg max-w-2xl">Presented by Bibhu Ranjan - Guesstimates Interview Round</p>
            </div>
            <div className="hidden lg:block">
              <Calculator size={120} className="opacity-20" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        
        {/* Embedded Video */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Video size={24} className="mr-2 text-red-600" /> Video Analysis
          </h2>
          
          <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Detailed Guesstimate Walkthrough</h3>
                <p className="text-red-700">Watch my complete methodology and thought process for solving this market sizing problem.</p>
              </div>
              <a href="https://drive.google.com/file/d/1vtyvGvqiLLHgxtLxEzlrv5Zt3dgI9eAG/view?usp=drive_link" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                <Video size={16} />
                Open in Drive
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-2">
              <iframe 
                src="https://drive.google.com/file/d/1vtyvGvqiLLHgxtLxEzlrv5Zt3dgI9eAG/preview" 
                className="w-full h-64 md:h-96 rounded-lg"
                allow="autoplay"
                title="Laptops Sold Daily in Delhi - Guesstimate Video Analysis">
              </iframe>
            </div>
          </div>
        </section>

        {/* Embedded Presentation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Presentation size={24} className="mr-2 text-blue-600" /> Presentation Slides
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Complete Analysis Breakdown</h3>
                <p className="text-blue-700">Navigate through my structured approach with detailed assumptions, calculations, and insights.</p>
              </div>
              <a href="https://docs.google.com/presentation/d/1xNd1cowQPTkw-UMnqiDAHjEwVp7cp7vr/edit?usp=drive_link&ouid=103925767314942357400&rtpof=true&sd=true" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                <Presentation size={16} />
                Open in Drive
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-2">
              <iframe 
                src="https://docs.google.com/presentation/d/1xNd1cowQPTkw-UMnqiDAHjEwVp7cp7vr/embed?start=false&loop=false&delayms=3000" 
                className="w-full h-64 md:h-96 rounded-lg"
                allowfullscreen="true" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"
                title="Laptops Sold Daily in Delhi - Guesstimate Presentation">
              </iframe>
            </div>
          </div>
        </section>

        {/* Objective */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Target size={24} className="mr-2 text-indigo-600" /> Objective
          </h2>
          
          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
            <p className="text-indigo-900 text-lg font-medium">
              <strong>Question:</strong> What is the guesstimate for the number of laptops sold in Delhi on an average routine day?
            </p>
            <p className="text-indigo-800 mt-4">
              <strong>Objective:</strong> Estimate how many laptops are sold on an average day in Delhi.
            </p>
          </div>
        </section>

        {/* Guesstimate Flow */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-600" /> Guesstimate Flow
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
              <h3 className="font-semibold text-blue-800">Clarifying Questions</h3>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
              <h3 className="font-semibold text-green-800">Assumptions</h3>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
              <h3 className="font-semibold text-purple-800">Estimation</h3>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
              <h3 className="font-semibold text-orange-800">Conclusion</h3>
            </div>
          </div>
        </section>

        {/* Clarifying Question */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-blue-600" /> Clarifying Question
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
            <h3 className="font-bold text-blue-800 mb-4">What is the population of Delhi?</h3>
            <p className="text-blue-900">
              If it is not provided by the examiner or in any related question, we will assume it to be <strong>20 million</strong>.
            </p>
          </div>
        </section>

        {/* Population & Demographics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Users size={24} className="mr-2 text-green-600" /> Population & Demographics
          </h2>
          
          <div className="prose max-w-none">
            <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-6">
              <h3 className="font-bold text-green-800 mb-4">Basic Assumptions</h3>
              <ul className="text-green-900">
                <li><strong>Total Population of Delhi:</strong> ~20 million</li>
                <li><strong>Active purchasing age group (10–50 years):</strong> More likely to buy laptops</li>
                <li><strong>This population (10-50):</strong> 40% of total population = <strong>8 million</strong></li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-4">Age Group Segmentation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-2">20–50 (College + Working)</h5>
                  <div className="text-2xl font-bold text-blue-600">70%</div>
                  <div className="text-gray-600">5.6 million of total 8 million</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-2">10–20 (School + College)</h5>
                  <div className="text-2xl font-bold text-purple-600">30%</div>
                  <div className="text-gray-600">2.4 million of total 8 million</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Age Group Analysis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Calculator size={24} className="mr-2 text-purple-600" /> Age Group Analysis
          </h2>
          
          <div className="space-y-6">
            {/* 20-50 Age Group */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <h3 className="font-bold text-blue-800 mb-4">20–50 Age Group (Working Professionals and College Students)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-700">30% are capable of buying or own laptops:</span>
                  <span className="font-semibold text-blue-900">30% of 5.6M = 1,680,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700">15% replace or buy new laptops annually:</span>
                  <span className="font-semibold text-blue-900">15% of 1.68M = 252,000/year</span>
                </div>
              </div>
              <p className="text-blue-800 mt-4 text-sm">
                This group contributes to significant annual laptop sales for replacement or new personal laptops due to financial capabilities.
              </p>
            </div>

            {/* 10-20 Age Group */}
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
              <h3 className="font-bold text-purple-800 mb-4">10–20 Age Group (School and College Students)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-700">40% are capable of buying or own laptops:</span>
                  <span className="font-semibold text-purple-900">40% of 2.4M = 960,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-700">30% replace or buy new laptops annually:</span>
                  <span className="font-semibold text-purple-900">30% of 960,000 = 288,000/year</span>
                </div>
              </div>
              <p className="text-purple-800 mt-4 text-sm">
                This group contributes to significant annual laptop sales for first-time buyers for educational or personal reasons.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Purchases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Building2 size={24} className="mr-2 text-orange-600" /> Corporate Laptop Purchases
          </h2>
          
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
            <h3 className="font-bold text-orange-800 mb-4">Corporate Market Assumptions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-orange-700">Delhi employees in laptop-requiring sectors:</span>
                <span className="font-semibold text-orange-900">2 million employees</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-700">Companies replace/buy 15% new laptops yearly:</span>
                <span className="font-semibold text-orange-900">15% of 2M = 300,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-700">Only 15% fulfilled from Delhi stores:</span>
                <span className="font-semibold text-orange-900">15% of 300,000 = 45,000/year</span>
              </div>
            </div>
            <p className="text-orange-800 mt-4 text-sm">
              (Rest bought in bulk or centrally managed)
            </p>
          </div>
        </section>

        {/* Industry Growth */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <TrendingUp size={24} className="mr-2 text-green-600" /> Industry Growth Contribution
          </h2>
          
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
            <h3 className="font-bold text-green-800 mb-4">Annual Growth Rate: 5%</h3>
            <div className="space-y-3">
              <div className="text-green-900">
                Combined yearly laptop purchases from age groups + corporate sales: 
                <strong>(252,000 + 288,000 + 45,000) = 585,000 laptops/year</strong>
              </div>
              <div className="text-green-900">
                5% growth contribution: <strong>5% of 585,000 = 29,250 new consumers/year</strong>
              </div>
            </div>
            <p className="text-green-800 mt-4 text-sm">
              This growth indicates a steady increase in demand for laptops in the market.
            </p>
          </div>
        </section>

        {/* Final Calculation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <BarChart4 size={24} className="mr-2 text-indigo-600" /> Total Annual Laptop Sales
          </h2>
          
          <div className="bg-gray-100 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-gray-800 mb-4">Sources Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="font-medium text-gray-700">20–50 age group</div>
                <div className="text-xl font-bold text-blue-600">252,000</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="font-medium text-gray-700">10–20 age group (first-time buyers)</div>
                <div className="text-xl font-bold text-purple-600">288,000</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="font-medium text-gray-700">Corporate purchases in Delhi</div>
                <div className="text-xl font-bold text-orange-600">45,000</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="font-medium text-gray-700">Growth contribution</div>
                <div className="text-xl font-bold text-green-600">29,250</div>
              </div>
            </div>
            <div className="border-t pt-4 mt-4 text-center">
              <div className="text-2xl font-bold text-indigo-600">Total: 619,250 laptops/year</div>
            </div>
          </div>

          {/* Daily Calculation */}
          <div className="bg-indigo-50 border border-indigo-200 p-8 rounded-xl text-center">
            <h3 className="font-bold text-indigo-800 mb-4 text-xl">Daily Laptop Sales Estimate</h3>
            <div className="text-lg text-indigo-900 mb-4">
              619,250 ÷ 365 days = 
            </div>
            <div className="text-4xl font-bold text-indigo-600">~1,696 laptops/day</div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <CheckCircle size={24} className="mr-2 text-green-600" /> Conclusion
          </h2>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Final Estimation</h3>
              <div className="text-5xl font-bold text-indigo-600 mb-4">~1,696</div>
              <div className="text-xl text-gray-700 mb-6">laptops sold per day in Delhi</div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Using all the assumptions: individual replacements, student first-time purchases, 
                corporate refresh cycles, and market growth.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* CTA Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Interested in my analytical approach?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I bring structured thinking and quantitative analysis skills to solve complex product management challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Get in Touch
            </Link>
            <Link to="/" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaptopGuesstimateCaseStudy; 