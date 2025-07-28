import React from 'react';
import { Link } from 'react-router-dom';
import BlogNavbar from '../components/BlogNavbar';
import Footer from '../components/Footer';
import { ArrowLeft, Monitor, FileText, Target, Users, TrendingUp, Zap } from 'lucide-react';

const Windows11Teardown = () => {
  return (
    <div className="bg-white font-[Inter]">
      <BlogNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/#case-studies" className="hover:text-blue-600 transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-gray-800 font-medium">Windows 11 Teardown</span>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Monitor size={16} />
                Product Teardown
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Windows 11 Product Teardown
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive analysis of Microsoft's latest operating system, examining its product strategy, 
                user experience design, and market positioning through detailed feature breakdown and competitive analysis.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-3">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Product Strategy</h3>
                <p className="text-sm text-gray-600">Microsoft's vision for the future of computing</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-purple-100 p-3 rounded-lg inline-block mb-3">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">User Experience</h3>
                <p className="text-sm text-gray-600">Design decisions and user journey analysis</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-green-100 p-3 rounded-lg inline-block mb-3">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Market Analysis</h3>
                <p className="text-sm text-gray-600">Competitive positioning and market dynamics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 p-3 rounded-xl">
                  <FileText className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Case Study Overview</h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  This product teardown examines Windows 11, Microsoft's most significant operating system update in years. 
                  Through a systematic analysis, I explore how Microsoft has reimagined the Windows experience for the modern era, 
                  addressing both user needs and business objectives.
                </p>
                
                <p>
                  The analysis covers key areas including the redesigned user interface, enhanced productivity features, 
                  gaming improvements, and Microsoft's strategic positioning in the competitive landscape. I examine the 
                  product decisions that shaped Windows 11 and their implications for users, developers, and the broader ecosystem.
                </p>
                
                <p>
                  This teardown demonstrates my ability to analyze complex products, understand user experience principles, 
                  and evaluate product strategy from both technical and business perspectives. It showcases my analytical 
                  thinking and understanding of how large-scale software products are designed and positioned in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-indigo-600 p-3 rounded-xl">
                  <Zap className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Product Teardown Presentation</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the detailed analysis through this comprehensive presentation covering all aspects of Windows 11's product strategy.
              </p>
            </div>
            
            {/* PDF Embed */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-indigo-600 p-4">
                <div className="flex items-center gap-3">
                  <FileText className="text-white" size={20} />
                  <h3 className="text-white font-semibold">Windows 11 Product Teardown - Complete Analysis</h3>
                </div>
              </div>
              
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://firebasestorage.googleapis.com/v0/b/ieltsappeal-f000c.appspot.com/o/my%20resume%2FFinal%20Assignment%201%20Bibhu%20Ranjan.pdf?alt=media&token=8ab6b6f7-ac59-4c93-9015-91afae5afae8"
                  className="w-full h-full border-0"
                  title="Windows 11 Product Teardown Presentation"
                >
                  <p className="p-8 text-center text-gray-600">
                    Your browser doesn't support PDF embedding. 
                    <a 
                      href="https://firebasestorage.googleapis.com/v0/b/ieltsappeal-f000c.appspot.com/o/my%20resume%2FFinal%20Assignment%201%20Bibhu%20Ranjan.pdf?alt=media&token=8ab6b6f7-ac59-4c93-9015-91afae5afae8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-2"
                    >
                      Click here to view the presentation
                    </a>
                  </p>
                </iframe>
              </div>
            </div>
            
            {/* Download Link */}
            <div className="text-center mt-6">
              <a 
                href="https://firebasestorage.googleapis.com/v0/b/ieltsappeal-f000c.appspot.com/o/my%20resume%2FFinal%20Assignment%201%20Bibhu%20Ranjan.pdf?alt=media&token=8ab6b6f7-ac59-4c93-9015-91afae5afae8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                <FileText size={20} />
                Download Presentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Insights from the Analysis</h2>
              <p className="text-xl text-gray-600">
                Highlights from the comprehensive Windows 11 product teardown
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Design Philosophy</h3>
                <p className="text-gray-700">
                  Windows 11 represents a significant shift towards a more modern, clean design language that prioritizes 
                  simplicity and productivity while maintaining familiarity for existing users.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">User Experience Strategy</h3>
                <p className="text-gray-700">
                  Microsoft has focused on creating a more intuitive and streamlined experience, with particular attention 
                  to touch interactions and modern computing workflows.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ecosystem Integration</h3>
                <p className="text-gray-700">
                  The operating system demonstrates Microsoft's strategy to create a unified ecosystem across devices, 
                  with seamless integration between Windows, Office, and cloud services.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Market Positioning</h3>
                <p className="text-gray-700">
                  Windows 11 positions Microsoft to compete more effectively in the modern computing landscape, 
                  addressing both consumer and enterprise needs with a forward-looking approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link 
                to="/#case-studies"
                className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                <ArrowLeft size={20} />
                Back to Case Studies
              </Link>
              
              <div className="flex gap-4">
                <Link 
                  to="/case-studies/chatgpt-length-control"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  Next: ChatGPT Feature
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Windows11Teardown; 