// pages/help-center.js

import Image from 'next/image';
import Link from 'next/link';

const helpOptions = [
  { 
    label: 'Download & Install', 
    icon: '📥',
    description: 'Get your software up and running quickly',
    color: 'from-yellow-400 to-yellow-600'
  },
  { 
    label: 'Buy & Renew', 
    icon: '💳',
    description: 'Purchase new licenses or renew existing ones',
    color: 'from-yellow-500 to-amber-600'
  },
  { 
    label: 'Account Help', 
    icon: '👤',
    description: 'Manage your account and profile settings',
    color: 'from-amber-500 to-orange-600'
  },
];

const productOptions = [
  { 
    label: 'Device Protection', 
    icon: '🛡️',
    description: 'Complete security for all your devices',
    color: 'from-yellow-400 to-yellow-600'
  },
  { 
    label: 'Password Manager', 
    icon: '🔐',
    description: 'Secure and manage all your passwords',
    color: 'from-yellow-500 to-amber-600'
  },
  { 
    label: 'Online Backup', 
    icon: '☁️',
    description: 'Automatic cloud backup solutions',
    color: 'from-amber-500 to-orange-600'
  },
  { 
    label: 'Norton VPN Standard', 
    icon: '🌐',
    description: 'Secure and private internet browsing',
    color: 'from-yellow-400 to-yellow-600'
  },
  { 
    label: 'Norton Family', 
    icon: '👨‍👩‍👧‍👦',
    description: 'Parental controls and family safety',
    color: 'from-yellow-500 to-amber-600'
  },
  { 
    label: 'Norton Small Business', 
    icon: '💼',
    description: 'Security solutions for small businesses',
    color: 'from-amber-500 to-orange-600'
  },
];

export default function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-amber-50 flex flex-col items-center px-4 py-16">
      <div className="max-w-[1248px] w-full">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 relative">
          {/* Background Decorative Elements */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-24 h-24 bg-amber-300/20 rounded-full blur-2xl"></div>
          
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight bg-gradient-to-r from-yellow-700 to-amber-800 bg-clip-text text-transparent">
            What can we help you with?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-medium">
            Expert support for all your technical needs and product queries
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 w-full border-2 border-yellow-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search for help articles, guides, or contact support..."
                className="w-full outline-none text-gray-700 text-lg bg-transparent placeholder-gray-500 font-medium"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold px-6 py-3 rounded-xl ml-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-yellow-600 hover:to-amber-700">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Help Options Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Help Categories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Get instant assistance with our most common support categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {helpOptions.map(({ label, icon, description, color }) => (
              <div
                key={label}
                className="group relative flex flex-col items-center bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-2 border-yellow-100 overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative mb-6 p-6 bg-gradient-to-br ${color} rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <span className="text-4xl">{icon}</span>
                </div>
                
                {/* Content */}
                <span className="text-2xl font-bold text-gray-900 text-center mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-amber-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {label}
                </span>
                <p className="text-gray-600 text-center mb-6 leading-relaxed font-medium">
                  {description}
                </p>
                
                {/* Hover Arrow */}
                <div className="flex items-center text-yellow-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="font-semibold mr-2">Get help</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Options Grid - Now 6 items */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Product Support
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dedicated support for all our security products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productOptions.map(({ label, icon, description, color }) => (
              <div
                key={label}
                className="group relative flex flex-col items-center bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-2 border-amber-100 overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative mb-6 p-6 bg-gradient-to-br ${color} rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <span className="text-4xl">{icon}</span>
                </div>
                
                {/* Content */}
                <span className="text-2xl font-bold text-gray-900 text-center mb-3 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {label}
                </span>
                <p className="text-gray-600 text-center mb-6 leading-relaxed font-medium">
                  {description}
                </p>
                
                {/* Hover Arrow */}
                <div className="flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="font-semibold mr-2">Learn more</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

       

      </div>
    </div>
  );
}