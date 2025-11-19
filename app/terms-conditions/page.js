"use client";

import { FaFileContract, FaGlobe, FaShippingFast, FaDollarSign, FaKey, FaHeadset, FaShieldAlt, FaTrademark } from "react-icons/fa";


export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
    
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaFileContract className="text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-yellow-100 text-lg md:text-xl max-w-2xl mx-auto">
            Guidelines for Using Our Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Terms Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <FaFileContract className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Terms & Conditions</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                These terms govern your use of EZ Tech Printer Solutions LLC's website.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-3/4"></div>
        </div>

        {/* 1. Use of Website */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <FaGlobe className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">1. Use of Website</h3>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 text-center">
              <p className="text-gray-700 text-lg font-semibold">
                You may not copy, misuse, or misrepresent any content.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Product Delivery */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-xl mr-4">
                <FaShippingFast className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">2. Product Delivery</h3>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
              <p className="text-gray-700 text-lg font-semibold">
                Norton subscriptions are delivered electronically through email or direct activation links.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Pricing & Billing */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-xl mr-4">
                <FaDollarSign className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">3. Pricing & Billing</h3>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 text-center">
              <p className="text-gray-700 text-lg font-semibold">
                Prices may vary due to regional taxes, promotions, or Norton's pricing changes.
              </p>
            </div>
          </div>
        </div>

        {/* 4. License Activation */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-xl mr-4">
                <FaKey className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">4. License Activation</h3>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6 text-center">
              <p className="text-gray-700 text-lg font-semibold mb-2">
                All Norton products must be activated on the official Norton platform:
              </p>
              <p className="text-blue-700 text-xl font-bold">my.norton.com</p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We are not responsible for errors caused by:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-center">
                <p className="text-gray-700 font-semibold">Unsupported devices</p>
              </div>
              
              <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-center">
                <p className="text-gray-700 font-semibold">Incorrect emails</p>
              </div>
              
              <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-center">
                <p className="text-gray-700 font-semibold">Pre-existing malware</p>
              </div>
              
              <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-center">
                <p className="text-gray-700 font-semibold">Customer misuse</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Support Services */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-xl mr-4">
                <FaHeadset className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">5. Support Services</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* We Offer */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-green-800 text-lg mb-4 text-center">We offer:</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Installation guidance</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Activation help</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Basic troubleshooting</p>
                  </div>
                </div>
              </div>

              {/* We Do Not Provide */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-red-800 text-lg mb-4 text-center">We do not provide:</h4>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-gray-700 font-semibold">Norton's official support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Limitation of Liability */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                <FaShieldAlt className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">6. Limitation of Liability</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We are not liable for:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center group hover:bg-yellow-100 transition-all duration-300">
                <p className="text-gray-700 font-semibold group-hover:text-yellow-800 transition-colors">Data loss</p>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center group hover:bg-yellow-100 transition-all duration-300">
                <p className="text-gray-700 font-semibold group-hover:text-yellow-800 transition-colors">Improper installation</p>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center group hover:bg-yellow-100 transition-all duration-300">
                <p className="text-gray-700 font-semibold group-hover:text-yellow-800 transition-colors">Third-party service issues</p>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center group hover:bg-yellow-100 transition-all duration-300">
                <p className="text-gray-700 font-semibold group-hover:text-yellow-800 transition-colors">Customer misuse of software</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trademark Notice */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-xl mr-4">
                <FaTrademark className="text-green-600 text-2xl" />
              </div>
              <div>
                <div className="flex items-center">
                  <div className="bg-green-500 text-white p-1 rounded mr-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">6. Trademark & Norton Notice (Required)</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-gray-900 text-xl mb-4 text-center">Trademark Notice</h4>
              <p className="text-gray-700 text-lg text-center leading-relaxed">
                Norton™, Norton 360™, LifeLock®, and related product names are trademarks or registered trademarks of NortonLifeLock Inc. and/or Gen Digital.<br />
                <span className="font-semibold">EZ Tech Printer Solutions LLC</span> uses these marks strictly to identify products offered as part of the Norton Empower Reseller Program.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border border-yellow-200">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 text-white p-4 rounded-2xl">
              <FaFileContract className="text-2xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Clear & Fair Terms</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We believe in transparent terms and conditions to ensure the best experience for all our customers.
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}