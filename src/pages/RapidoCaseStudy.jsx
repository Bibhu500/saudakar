import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  TrendingDown, 
  Users, 
  MessageSquare, 
  Map, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  BarChart4,
  LineChart,
  Search,
  Lightbulb
} from 'lucide-react';
import Footer from '../components/Footer';

const RapidoCaseStudy = () => {
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
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Root Cause Analysis</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">Rapido's Driver Rating Dropped by 15%</h1>
              <p className="text-blue-100 text-lg max-w-2xl">A comprehensive analysis and strategic solution to address the sudden decline in driver ratings for India's leading bike taxi service.</p>
            </div>
            <div className="hidden lg:block">
              <TrendingDown size={120} className="opacity-20" />
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
              <p className="text-gray-800">Rapido, India's largest bike taxi platform with operations in over 100 cities.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <AlertTriangle size={18} className="mr-2 text-red-600" /> Problem
              </h3>
              <p className="text-gray-800">15% drop in driver ratings over a 2-month period, affecting driver retention and customer satisfaction.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <CheckCircle size={18} className="mr-2 text-green-600" /> Outcome
              </h3>
              <p className="text-gray-800">Identified key drivers of rating decline and implemented a multi-phased solution improving ratings by 18%.</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>
              This case study demonstrates my analytical approach to solving complex product management challenges using Rapido's hypothetical driver rating decline scenario. In this exercise, I analyze how I would approach diagnosing and addressing a 15% drop in driver ratings over two months - a critical issue that would significantly impact driver satisfaction, retention, and overall platform quality.
            </p>
            <p>
              The scenario is particularly challenging as it involves multiple stakeholders (drivers, passengers, operations) and potential root causes spanning technology, process, and human factors. This analysis showcases my systematic approach to problem-solving, data-driven decision making, and solution prioritization.
            </p>
            <p>
              This case study outlines my methodical approach to root cause analysis, stakeholder research, data interpretation, and strategic solution development - core competencies essential for effective product management.
            </p>
          </div>
        </section>
        
        {/* Problem Definition */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <AlertTriangle size={24} className="mr-2 text-red-600" /> Problem Definition
          </h2>
          
          <div className="prose max-w-none">
            <p>In this hypothetical scenario, the data team flagged a concerning trend in driver quality metrics:</p>
            
            <ul>
              <li><strong>Driver ratings dropped from 4.7 to 4.0 (15% decrease) within 60 days</strong></li>
              <li>Negative reviews increased by 35%, with keywords like "late," "unprofessional," and "route" appearing frequently</li>
              <li>Driver churn increased by 12% compared to the previous quarter</li>
              <li>The issue was most prominent in tier-1 cities (Delhi, Mumbai, Bangalore)</li>
            </ul>
            
            <p>The timing of this decline coincided with two significant events:</p>
            <ol>
              <li>The rollout of a new route optimization algorithm in July</li>
              <li>A 10% expansion in our driver base to meet growing demand</li>
            </ol>
            
            <p>Given Rapido's business model, where drivers are rated on a 5-star scale after each ride, and those maintaining a rating above 4.2 receive priority ride assignments and incentives, this decline represented a serious threat to both driver economics and platform quality.</p>
            
            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <h4 className="font-bold text-blue-800 mb-2">Business Impact Assessment</h4>
              <p className="text-blue-900 mb-4">If left unaddressed, the rating decline would create several cascading effects:</p>
              <ul className="text-blue-800">
                <li>20% projected increase in driver churn over 6 months</li>
                <li>15% estimated decrease in rider retention</li>
                <li>~$1.2M additional recruitment costs to replace churned drivers</li>
                <li>Potential market share loss of 3-5% in key metropolitan areas</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Root Cause Analysis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Search size={24} className="mr-2 text-blue-600" /> Root Cause Analysis
          </h2>
          
          <div className="prose max-w-none">
            <p>To identify the root causes, I would employ a structured approach combining data analysis, user research, and cross-functional collaboration:</p>
            
            <h3>1. Data Mining & Analytics</h3>
            <p>Working with the data science team, my analysis would focus on:</p>
            <ul>
              <li><strong>Rating patterns by time of day, geography, driver tenure, and ride distance</strong></li>
              <li>Correlation between rating drops and specific app features/updates</li>
              <li>Text analysis of rider reviews (sentiment and keyword frequency)</li>
              <li>Driver behavior metrics (cancellation rate, on-time arrival, route adherence)</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-xl my-6">
              <h4 className="font-bold mb-4">Key Data Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Temporal Analysis:</p>
                  <ul className="text-sm">
                    <li>Rating decline was 25% worse during peak hours (8-10 AM, 5-8 PM)</li>
                    <li>Weekend ratings were 18% lower than weekday ratings</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Geographic Analysis:</p>
                  <ul className="text-sm">
                    <li>High-traffic areas showed 30% greater rating decline</li>
                    <li>Newly expanded service areas experienced 22% more negative reviews</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Behavioral Patterns:</p>
                  <ul className="text-sm">
                    <li>Driver cancellations increased by 15% post algorithm update</li>
                    <li>New drivers (&lt; 3 months) received 40% more negative reviews</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Review Analysis:</p>
                  <ul className="text-sm">
                    <li>67% of negative reviews mentioned "wrong route"</li>
                    <li>43% mentioned "waiting time" or "late arrival"</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3>2. User Research</h3>
            <p>To complement quantitative findings, I would design a mixed-methods research approach:</p>
            <ul>
              <li><strong>Driver interviews (n=40):</strong> In-depth interviews with drivers across performance tiers</li>
              <li><strong>Rider surveys (n=2,500):</strong> Targeted feedback from riders who had given low ratings</li>
              <li><strong>Field observations:</strong> 20 hours of ride-alongs to observe the driver experience firsthand</li>
            </ul>
            
            <h3>3. Findings: Four Root Causes Identified</h3>
            
            <div className="bg-yellow-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-yellow-800 mb-4">Root Cause #1: Algorithm Issues</h4>
              <div className="flex items-start">
                <Map className="text-yellow-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-yellow-900">The new route optimization algorithm was prioritizing shorter routes over rider preferences and local knowledge. 78% of interviewed drivers reported the app routing them through congested areas they would typically avoid.</p>
                  <p className="font-medium mt-2">Evidence:</p>
                  <ul className="text-sm text-yellow-800">
                    <li>GPS data showed a 35% increase in routing through known traffic hotspots</li>
                    <li>72% of negative reviews mentioned "bad route selection"</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-green-800 mb-4">Root Cause #2: Driver Onboarding Gaps</h4>
              <div className="flex items-start">
                <Users className="text-green-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-green-900">The rapid expansion of our driver pool was not matched with adequate training. New drivers were missing crucial information about service standards and app functionality.</p>
                  <p className="font-medium mt-2">Evidence:</p>
                  <ul className="text-sm text-green-800">
                    <li>New drivers (&lt; 3 months) received 40% more complaints about professionalism</li>
                    <li>Only 35% of new drivers could correctly identify all app features in knowledge tests</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-blue-800 mb-4">Root Cause #3: Misaligned Incentives</h4>
              <div className="flex items-start">
                <DollarSign className="text-blue-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-blue-900">Driver incentives were primarily focused on ride volume, not quality. This encouraged behaviors like rushing rides and accepting too many rides without adequate rest periods.</p>
                  <p className="font-medium mt-2">Evidence:</p>
                  <ul className="text-sm text-blue-800">
                    <li>Drivers earning maximum incentives had 23% lower ratings on average</li>
                    <li>60% of drivers reported feeling "rushed" to complete rides to meet incentive targets</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-purple-800 mb-4">Root Cause #4: Poor Feedback Mechanisms</h4>
              <div className="flex items-start">
                <MessageSquare className="text-purple-600 mr-4 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-purple-900">Drivers received minimal actionable feedback on their low ratings, creating frustration and disengagement. 85% of interviewed drivers couldn't identify specific behaviors to improve.</p>
                  <p className="font-medium mt-2">Evidence:</p>
                  <ul className="text-sm text-purple-800">
                    <li>Driver app had no detailed breakdown of rating factors</li>
                    <li>70% of drivers rated below 4.2 had not been contacted by support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solution Development */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-600" /> Solution Development
          </h2>
          
          <div className="prose max-w-none">
            <p>Based on the root causes identified, I would develop a comprehensive solution strategy with both immediate fixes and longer-term structural improvements:</p>
            
            <h3>Phase 1: Quick Wins (Implemented in 2 Weeks)</h3>
            
            <div className="border border-blue-200 rounded-xl p-6 my-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs py-1 px-3">
                PROPOSED
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Algorithm Adjustment</h4>
              <div className="flex items-start">
                <Map className="text-blue-600 mr-4 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-700">Roll back the route optimization algorithm to the previous version while engineering teams work on fixes.</p>
                  <p className="text-gray-600 text-sm mt-2"><strong>Expected Metrics:</strong> 25% immediate reduction in route-related complaints</p>
                </div>
              </div>
            </div>
            
            <div className="border border-blue-200 rounded-xl p-6 my-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs py-1 px-3">
                PROPOSED
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Targeted Driver Communication</h4>
              <div className="flex items-start">
                <MessageSquare className="text-blue-600 mr-4 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-700">Create a direct outreach program for all drivers with ratings below 4.2, offering personalized coaching and troubleshooting.</p>
                  <p className="text-gray-600 text-sm mt-2"><strong>Expected Metrics:</strong> 30% of contacted drivers improve ratings within 2 weeks</p>
                </div>
              </div>
            </div>
            
            <h3>Phase 2: Systematic Improvements (6-8 Week Timeline)</h3>
            
            <div className="border border-blue-200 rounded-xl p-6 my-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs py-1 px-3">
                PROPOSED
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Enhanced Onboarding Program</h4>
              <div className="flex items-start">
                <Users className="text-blue-600 mr-4 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-700">Redesign driver onboarding with mandatory in-app tutorials, in-person sessions for city-specific knowledge, and a "shadow period" where new drivers are paired with experienced mentors.</p>
                  <p className="text-gray-600 text-sm mt-2"><strong>Expected Metrics:</strong> New driver ratings improve by 32% compared to pre-intervention cohorts</p>
                </div>
              </div>
            </div>
            
            <div className="border border-blue-200 rounded-xl p-6 my-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs py-1 px-3">
                PROPOSED
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Incentive Restructuring</h4>
              <div className="flex items-start">
                <DollarSign className="text-blue-600 mr-4 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-700">Redesign the incentive structure to balance quantity with quality metrics. Introduce tiered bonuses based on rating thresholds and rider feedback.</p>
                  <p className="text-gray-600 text-sm mt-2"><strong>Expected Metrics:</strong> 28% reduction in rush-related complaints, 15% improvement in overall service quality scores</p>
                </div>
              </div>
            </div>
            
            <h3>Phase 3: Long-term Strategic Initiatives (8-12 Week Timeline)</h3>
            
            <div className="border border-blue-200 rounded-xl p-6 my-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs py-1 px-3">
                IN PROGRESS
              </div>
              <h4 className="font-bold text-gray-800 mb-2">AI-Powered Feedback System</h4>
              <div className="flex items-start">
                <BarChart4 className="text-blue-600 mr-4 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-700">Developed a comprehensive driver dashboard with granular feedback visualization, personalized improvement tips, and peer benchmarking.</p>
                  <p className="text-gray-600 text-sm mt-2"><strong>Expected Impact:</strong> 20% improvement in driver self-correction behaviors, 15% reduction in repeat issues</p>
                </div>
              </div>
            </div>
            
            <div className="border border-blue-200 rounded-xl p-6 my-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-600 text-white text-xs py-1 px-3">
                PLANNED
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Route Algorithm 2.0</h4>
              <div className="flex items-start">
                <Map className="text-blue-600 mr-4 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-700">Collaborate with engineering to redesign the routing algorithm incorporating driver feedback, historical traffic patterns, and real-time congestion data with driver override options.</p>
                  <p className="text-gray-600 text-sm mt-2"><strong>Expected Impact:</strong> 35% reduction in route complaints, 20% improvement in estimated time accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expected Results & Impact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <LineChart size={24} className="mr-2 text-green-600" /> Expected Results & Impact
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-5xl font-bold text-blue-600">18%</p>
                <p className="text-gray-600 mt-2">Expected increase in driver ratings (4.0 → 4.72) within 90 days</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-green-600">24%</p>
                <p className="text-gray-600 mt-2">Projected reduction in driver churn compared to baseline</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-purple-600">40%</p>
                <p className="text-gray-600 mt-2">Anticipated decrease in negative reviews mentioning route and wait time issues</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>The multi-phase intervention strategy would likely produce significant improvements across all key metrics:</p>
            
            <h3>Projected Quantitative Outcomes</h3>
            <ul>
              <li><strong>Driver Quality:</strong> Average driver rating would recover to 4.72 (exceeding pre-decline levels)</li>
              <li><strong>Business Impact:</strong> Projected 12% improvement in rider retention, 8% increase in new user conversions</li>
              <li><strong>Driver Satisfaction:</strong> Estimated Driver Net Promoter Score increase from 35 to 68</li>
              <li><strong>Financial Impact:</strong> Projected $850,000 saved in recruitment costs due to reduced churn</li>
            </ul>
            
            <h3>Expected Qualitative Improvements</h3>
            <ul>
              <li><strong>Driver Empowerment:</strong> Drivers would feel more supported and equipped to provide quality service</li>
              <li><strong>Culture Shift:</strong> Focus would shift from pure growth metrics to balanced quality and growth targets</li>
              <li><strong>Cross-Functional Collaboration:</strong> Enhanced partnership between product, engineering, and operations teams</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-blue-800 mb-4">Key Success Factors</h4>
              <p className="text-blue-900">
                This comprehensive approach would demonstrate the importance of balancing growth with quality metrics. The data-driven, user-centered methodology addresses immediate problems while building sustainable systems to prevent similar issues in the future.
              </p>
              <p className="text-blue-700 font-medium mt-2">The multi-stakeholder approach ensures all parties are aligned on quality standards and outcomes.</p>
            </div>
          </div>
        </section>
        
        {/* Learnings & Reflection */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Lightbulb size={24} className="mr-2 text-yellow-600" /> Learnings & Reflection
          </h2>
          
          <div className="prose max-w-none">
            <p>This project reinforced several critical product management principles and provided valuable insights:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Learnings</h3>
                <ul className="text-gray-700">
                  <li className="mb-2"><strong>Balance quantitative and qualitative insights:</strong> Data flagged the issue, but user research uncovered the root causes</li>
                  <li className="mb-2"><strong>Prioritize incremental improvements:</strong> The phased approach allowed for quick wins while building toward systemic solutions</li>
                  <li className="mb-2"><strong>Align incentives with desired behaviors:</strong> When metrics and rewards contradict user expectations, quality suffers</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">If I Were to Do It Again</h3>
                <ul className="text-gray-700">
                  <li className="mb-2"><strong>Institute pre-launch feedback loops:</strong> Create mechanisms to catch algorithm issues before full deployment</li>
                  <li className="mb-2"><strong>Consider regional variations:</strong> Account for city-specific challenges earlier in the solution design</li>
                  <li className="mb-2"><strong>Establish real-time monitoring:</strong> Implement dashboards to catch rating trends before they become significant problems</li>
                </ul>
              </div>
            </div>
            
            <p>
              This project exemplifies my approach to product management: using data to identify issues, research to understand root causes, cross-functional collaboration to develop solutions, and methodical implementation to drive measurable results.
            </p>
            <p>
              Most importantly, it demonstrates how seemingly technical problems (like algorithm changes) often have significant human components that require a holistic approach spanning product, operations, and human-centered design.
            </p>
          </div>
        </section>
      </main>
      
      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Interested in my approach to product challenges?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm passionate about using data and user-centered design to solve complex problems and drive measurable business impact.
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

export default RapidoCaseStudy; 