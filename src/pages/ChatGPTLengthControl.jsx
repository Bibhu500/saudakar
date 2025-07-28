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
  PieChart,
  Settings,
  Cpu,
  Battery,
  Type,
  Sliders
} from 'lucide-react';
import Footer from '../components/Footer';

const ChatGPTLengthControl = () => {
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
              <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Product Enhancement Case Study</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">ChatGPT Response Length Control Feature</h1>
              <p className="text-blue-100 text-lg max-w-2xl">A product improvement proposal to add response length controls in ChatGPT, reducing compute costs and giving users precise control over output length.</p>
            </div>
            <div className="hidden lg:block">
              <Settings size={120} className="opacity-20" />
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
                <MessageSquare size={18} className="mr-2 text-blue-600" /> Product
              </h3>
              <p className="text-gray-800">ChatGPT - OpenAI's conversational AI platform with millions of daily users worldwide.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <AlertTriangle size={18} className="mr-2 text-red-600" /> Problem
              </h3>
              <p className="text-gray-800">Users receive unnecessarily lengthy responses for simple queries, wasting compute resources and user time.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <CheckCircle size={18} className="mr-2 text-green-600" /> Solution
              </h3>
              <p className="text-gray-800">Response length control dropdown with preset options (Brief, Quick, Enough) for optimal user experience.</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>
              In this product analysis case study, I explore a significant opportunity to improve both user satisfaction and operational efficiency for ChatGPT through response length controls. This demonstrates my approach to identifying user pain points and developing feature solutions that balance user needs with business objectives. Currently, users often receive verbose responses when they need concise answers, leading to wasted time and unnecessary compute consumption.
            </p>
            <p>
              This case study outlines my analysis of the problem, proposed solution, and the expected impact on both user experience and business metrics.
            </p>
          </div>
        </section>

        {/* Problem Analysis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-blue-600" /> Problem Analysis
          </h2>
          
          <div className="prose max-w-none">
            <h3>1. Current User Pain Points</h3>
            <p>Through user behavior analysis and feedback, I identified several key issues:</p>
            <ul>
              <li>Users frequently request "brief" or "concise" responses in their prompts</li>
              <li>Simple questions generate unnecessarily long explanations</li>
              <li>Users have to explicitly add length constraints to get desired response sizes</li>
              <li>Inconsistent response lengths across similar query types</li>
            </ul>

            <div className="bg-red-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-red-800 mb-4">Key Issues Identified</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Clock className="text-red-600 mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h5 className="font-semibold text-red-900">Time Inefficiency</h5>
                    <p className="text-red-800 text-sm">Users spend extra time reading lengthy responses for simple queries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cpu className="text-red-600 mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h5 className="font-semibold text-red-900">Compute Waste</h5>
                    <p className="text-red-800 text-sm">Unnecessary token generation increases operational costs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Type className="text-red-600 mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h5 className="font-semibold text-red-900">Poor UX</h5>
                    <p className="text-red-800 text-sm">Users must manually specify length requirements in prompts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Battery className="text-red-600 mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h5 className="font-semibold text-red-900">Resource Drain</h5>
                    <p className="text-red-800 text-sm">Higher server load and energy consumption</p>
                  </div>
                </div>
              </div>
            </div>

            <h3>2. Business Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-bold text-yellow-800 mb-2">Cost Implications</h4>
                <ul className="text-yellow-900 text-sm">
                  <li>Unnecessary token generation increases API costs</li>
                  <li>Higher compute resource consumption</li>
                  <li>Increased infrastructure scaling needs</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-2">User Experience</h4>
                <ul className="text-blue-900 text-sm">
                  <li>Frustration with verbose responses</li>
                  <li>Time wasted parsing long answers</li>
                  <li>Need for additional clarification prompts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proposed Solution */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-600" /> Proposed Solution
          </h2>
          
          <div className="prose max-w-none">
            <h3>Response Length Control Feature</h3>
            <div className="border border-blue-200 rounded-xl p-6 my-6">
              <div className="flex items-start">
                <Sliders className="text-blue-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Feature Components</h4>
                  <p className="text-gray-700 mb-4">Add a dropdown menu in the chat input area with three preset options:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-1">Quick (50-200 words)</h5>
                      <p className="text-green-700 text-sm">For simple questions, definitions, and quick answers</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-1">Brief (200-300 words)</h5>
                      <p className="text-blue-700 text-sm">For moderate explanations and summaries</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-800 mb-1">Enough (300-500 words)</h5>
                      <p className="text-purple-700 text-sm">For detailed explanations and comprehensive answers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3>Implementation Details</h3>
            <div className="bg-gray-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-gray-800 mb-4">Technical Approach</h4>
              <ul className="text-gray-700 space-y-2">
                <li><strong>UI Integration:</strong> Add dropdown next to the send button in the chat input</li>
                <li><strong>Default Setting:</strong> "Brief" as the default option for optimal balance</li>
                <li><strong>System Prompt:</strong> Automatically append length instructions to user prompts</li>
                <li><strong>Token Management:</strong> Set max token limits based on selected length</li>
                <li><strong>User Preference:</strong> Remember user's last selected option</li>
              </ul>
            </div>

            <h3>User Flow</h3>
            <div className="border border-gray-200 rounded-xl p-6 my-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <p className="ml-4 text-gray-700">User types their question in the chat input</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <p className="ml-4 text-gray-700">User selects desired response length from dropdown (defaulted to "Brief")</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <p className="ml-4 text-gray-700">System automatically appends length constraint to the prompt</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <p className="ml-4 text-gray-700">ChatGPT generates response within specified length parameters</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Impact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <LineChart size={24} className="mr-2 text-blue-600" /> Expected Impact
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">25-40%</div>
                <div className="text-gray-600">Reduction in average response length</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
                <div className="text-gray-600">Decrease in compute costs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
                <div className="text-gray-600">Improvement in user satisfaction</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <TrendingUp className="mr-2 text-green-600" size={20} /> Business Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <DollarSign className="text-green-600 mr-2 shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Reduced operational costs through optimized token usage</span>
                </li>
                <li className="flex items-start">
                  <Cpu className="text-green-600 mr-2 shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Lower server load and improved system efficiency</span>
                </li>
                <li className="flex items-start">
                  <Battery className="text-green-600 mr-2 shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Reduced energy consumption and environmental impact</span>
                </li>
                <li className="flex items-start">
                  <BarChart4 className="text-green-600 mr-2 shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Better resource allocation for complex queries</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <Users className="mr-2 text-blue-600" size={20} /> User Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock className="text-blue-600 mr-2 shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Faster reading and comprehension of responses</span>
                </li>
                <li className="flex items-start">
                  <Target className="text-blue-600 mr-2 shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">More precise answers tailored to user needs</span>
                </li>
                <li className="flex items-start">
                  <Settings className="text-blue-600 mr-2 shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Greater control over interaction experience</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-blue-600 mr-2 shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Improved productivity and workflow efficiency</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Target size={24} className="mr-2 text-blue-600" /> Implementation Roadmap
          </h2>
          
          <div className="space-y-6">
            <div className="border border-blue-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">1</div>
                <h3 className="text-lg font-bold text-gray-800">Phase 1: Research & Design (2 weeks)</h3>
              </div>
              <ul className="text-gray-700 ml-12 space-y-1">
                <li>• User research and validation of length preferences</li>
                <li>• UI/UX design for dropdown component</li>
                <li>• Technical architecture planning</li>
              </ul>
            </div>

            <div className="border border-blue-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">2</div>
                <h3 className="text-lg font-bold text-gray-800">Phase 2: Development (4 weeks)</h3>
              </div>
              <ul className="text-gray-700 ml-12 space-y-1">
                <li>• Frontend implementation of dropdown component</li>
                <li>• Backend integration for length constraints</li>
                <li>• Token management system updates</li>
              </ul>
            </div>

            <div className="border border-blue-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">3</div>
                <h3 className="text-lg font-bold text-gray-800">Phase 3: Testing & Launch (2 weeks)</h3>
              </div>
              <ul className="text-gray-700 ml-12 space-y-1">
                <li>• A/B testing with select user groups</li>
                <li>• Performance optimization and bug fixes</li>
                <li>• Gradual rollout to all users</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <PieChart size={24} className="mr-2 text-blue-600" /> Success Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-blue-800 mb-4">Primary Metrics</h3>
              <ul className="text-blue-900 space-y-2">
                <li>• Average response length reduction</li>
                <li>• Token usage optimization</li>
                <li>• User adoption rate of length controls</li>
                <li>• Time-to-answer improvement</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-green-800 mb-4">Secondary Metrics</h3>
              <ul className="text-green-900 space-y-2">
                <li>• User satisfaction scores</li>
                <li>• Session duration changes</li>
                <li>• Compute cost reduction</li>
                <li>• Feature engagement rates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <CheckCircle size={24} className="mr-2 text-green-600" /> Conclusion
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The ChatGPT Response Length Control feature represents a win-win solution that addresses both user experience pain points and business efficiency concerns. By providing users with simple, intuitive controls over response length, we can significantly improve satisfaction while reducing operational costs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              This feature aligns with the broader trend toward user-centric AI interfaces that prioritize control, efficiency, and personalization. The implementation is straightforward, the impact is measurable, and the benefits are immediate.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              As AI systems become more prevalent in daily workflows, features like this will become essential for maintaining user engagement and system sustainability. This proposal demonstrates how thoughtful product improvements can create substantial value for both users and the business.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChatGPTLengthControl;