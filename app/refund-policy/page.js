"use client";

import { FaUndo, FaKey, FaBox, FaShippingFast, FaHeadset, FaExclamationTriangle } from "react-icons/fa";


export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaUndo className="text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Refund & Return Policy
          </h1>
          <p className="text-yellow-100 text-lg md:text-xl max-w-2xl mx-auto">
            Clear Guidelines for Digital & Physical Products
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Policy Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <FaUndo className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Refund & Return Policy</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                EZ Tech Printer Solutions LLC offers digital Norton™ subscriptions delivered instantly after purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-3/4"></div>
        </div>

        {/* Electronic Delivery Products */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <FaKey className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Electronic Delivery Products</h3>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-800 font-semibold text-center">
                All Norton licenses and digital delivery keys are non-refundable once activated or redeemed.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Refunds are only possible if:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">The license has not been activated</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">The product key is unused</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">Request is made within 7 days of purchase</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800 font-semibold text-center">
                Once a key is delivered and shows "activated/redeemed," it is not eligible for refund.
              </p>
            </div>
          </div>
        </div>

        {/* Incorrect or Non-Working Keys */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-xl mr-4">
                <FaExclamationTriangle className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Incorrect or Non-Working Keys</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              If a license key is invalid or not working:
            </p>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-green-800 text-lg mb-4 text-center">We will:</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 font-semibold">Re-issue a new key, or</p>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 font-semibold">Provide replacement activation, or</p>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 font-semibold">Coordinate with Norton's partner team to resolve the issue</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Products */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-xl mr-4">
                <FaBox className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Physical Products (If applicable)</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">Must be returned within 30 days</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">Must be unopened and unused</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">Subject to restocking fee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-xl mr-4">
                <FaShippingFast className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Shipping</h3>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 text-center">
              <p className="text-gray-700 text-lg font-semibold">
                Customers pay return shipping unless product is defective.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Refunds */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-xl mr-4">
                <FaHeadset className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Contact for Refunds</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="bg-gradient-to-r from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center group hover:from-yellow-100 hover:to-white transition-all duration-300">
                <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                  <svg className="w-6 h-6 text-yellow-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <p className="text-sm text-yellow-700 font-semibold mb-2">EMAIL SUPPORT</p>
                <p className="text-lg font-bold text-gray-900 group-hover:text-yellow-800 transition-colors">
                  support@eztechprintersolutions.com
                </p>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-r from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center group hover:from-yellow-100 hover:to-white transition-all duration-300">
                <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                  <FaHeadset className="text-yellow-700 text-xl" />
                </div>
                <p className="text-sm text-yellow-700 font-semibold mb-2">PHONE SUPPORT</p>
                <p className="text-lg font-bold text-gray-900 group-hover:text-yellow-800 transition-colors">
                  +1 (808) 468-1018
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border border-yellow-200">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 text-white p-4 rounded-2xl">
              <FaUndo className="text-2xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Fair & Transparent Policy</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We strive to provide clear refund guidelines and excellent customer support for all your Norton product needs.
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}