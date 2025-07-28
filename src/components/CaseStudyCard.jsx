import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target } from 'lucide-react';

const CaseStudyCard = ({ title, type, icon, slug, description, isDetailed = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Compact impact data
  const impactData = {
    'rapido-driver-rating': { impact: '+18%', color: 'text-green-600', bg: 'bg-green-50' },
    'ecommerce-checkout': { impact: '47%', color: 'text-blue-600', bg: 'bg-blue-50' },
    'wallet-redesign': { impact: '+32%', color: 'text-purple-600', bg: 'bg-purple-50' },
    'ecommerce-conversion-rate': { impact: '+22%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    'chatgpt-length-control': { impact: '40%', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    'subscription-strategy': { impact: '+35%', color: 'text-orange-600', bg: 'bg-orange-50' },
    'laptops-delhi-daily': { impact: '2.5K', color: 'text-pink-600', bg: 'bg-pink-50' },
    'windows-11-teardown': { impact: 'Deep', color: 'text-indigo-600', bg: 'bg-indigo-50' }
  };

  const cardImpact = impactData[slug] || { impact: '+X%', color: 'text-gray-600', bg: 'bg-gray-50' };

  const getTypeStyle = () => {
    switch (type) {
      case 'RCA': return { bg: 'bg-red-600', textColor: 'text-white' };
      case 'Design': return { bg: 'bg-purple-600', textColor: 'text-white' };
      case 'Metrics': return { bg: 'bg-green-600', textColor: 'text-white' };
      case 'Strategy': return { bg: 'bg-yellow-600', textColor: 'text-white' };
      case 'Product Enhancement': return { bg: 'bg-blue-600', textColor: 'text-white' };
      case 'Guesstimate': return { bg: 'bg-pink-600', textColor: 'text-white' };
      case 'Framework': return { bg: 'bg-blue-600', textColor: 'text-white' };
      case 'Teardown': return { bg: 'bg-indigo-600', textColor: 'text-white' };
      default: return { bg: 'bg-gray-600', textColor: 'text-white' };
    }
  };

  const typeStyle = getTypeStyle();

  return (
    <div 
      className={`min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col mx-2 my-3 overflow-hidden border border-gray-100 transform hover:scale-105 cursor-pointer ${isHovered ? 'ring-1 ring-blue-400' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Impact Banner */}
      <div className={`${cardImpact.bg} px-4 py-2.5 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-white/70 rounded">
            {React.cloneElement(icon, { size: 16 })}
          </div>
          <div className={`text-sm font-bold ${cardImpact.color}`}>{cardImpact.impact}</div>
        </div>
        <div className={`px-3 py-1 ${typeStyle.bg} ${typeStyle.textColor} text-xs font-bold rounded-full shadow-sm`}>
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-grow">
        <h3 className="text-base font-bold mb-2 text-gray-800 leading-tight line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-3">{description}</p>
        
        {/* Simple PM indicator */}
        <div className="flex items-center gap-1 mb-3">
          <Target size={12} className="text-blue-500" />
          <span className="text-xs text-gray-500">Product Strategy</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        {isDetailed ? (
          <Link 
            to={`/case-studies/${slug}`} 
            className={`w-full flex items-center justify-center gap-2 ${typeStyle.bg} ${typeStyle.textColor} py-2.5 px-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm group`}
          >
            <span>View Case</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div className="w-full flex items-center justify-center bg-gray-100 text-gray-500 py-2.5 px-3 rounded-lg text-sm">
            <span>Coming Soon</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard; 