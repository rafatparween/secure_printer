"use client";

import { FaShieldAlt, FaUserLock, FaCookie, FaUserCheck, FaShareAlt, FaDatabase } from "react-icons/fa";


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
     
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FaUserLock className="text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-yellow-100 text-lg md:text-xl max-w-2xl mx-auto">
            Your Privacy and Security Are Our Priority
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                At EZ Tech Printer Solutions LLC, we value your privacy. This Privacy Policy explains how we collect, use, protect, and share your information.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-3/4"></div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-xl mr-4">
                <FaDatabase className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">1. Information We Collect</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We collect the following:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 group hover:bg-yellow-100 transition-all duration-300">
                <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-yellow-800 transition-colors">
                  Contact Information
                </h4>
                <p className="text-gray-700">
                  Name, email address, phone number, billing address
                </p>
              </div>

              {/* Account Information */}
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 group hover:bg-yellow-100 transition-all duration-300">
                <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-yellow-800 transition-colors">
                  Account Information
                </h4>
                <p className="text-gray-700">
                  Username, password (encrypted), order details
                </p>
              </div>

              {/* Payment Information */}
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 group hover:bg-yellow-100 transition-all duration-300">
                <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-yellow-800 transition-colors">
                  Payment Information
                </h4>
                <p className="text-gray-700">
                  Processed securely through third-party payment providers<br />
                  <span className="text-sm text-yellow-700 font-semibold">(We do not store full card numbers.)</span>
                </p>
              </div>

              {/* Usage Data */}
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 group hover:bg-yellow-100 transition-all duration-300">
                <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-yellow-800 transition-colors">
                  Usage Data
                </h4>
                <p className="text-gray-700">
                  IP address, device details, browser information, interaction logs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-xl mr-4">
                <FaUserCheck className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">2. How We Use Your Information</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">To process your Norton order and deliver your product key</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">To assist with activation, installation, and setup</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">To send order confirmations or service-related communication</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">To comply with legal and security obligations</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-6">
              <p className="text-green-800 font-semibold text-center">
                We do not sell your personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Sharing Your Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-xl mr-4">
                <FaShareAlt className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">3. Sharing Your Information</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We only share information with:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">Norton/Gen Digital systems for license provisioning</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">Secure payment processors (Stripe, PayPal, etc.)</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 flex-1">Technical support providers assisting with activation</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-800 font-semibold text-center">
                We never sell, rent, or trade customer data.
              </p>
            </div>
          </div>
        </div>

        {/* Cookies & Tracking */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                <FaCookie className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">4. Cookies & Tracking</h3>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <p className="text-gray-700 text-lg text-center">
                We use cookies to improve website experience, troubleshoot issues, and analyze usage.
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-xl mr-4">
                <FaUserCheck className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">5. Your Rights</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Depending on your region, you may request:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 group hover:bg-yellow-100 transition-all duration-300">
                <p className="text-gray-700 font-semibold group-hover:text-yellow-800 transition-colors">
                  Access to your personal data
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 group hover:bg-yellow-100 transition-all duration-300">
                <p className="text-gray-700 font-semibold group-hover:text-yellow-800 transition-colors">
                  Corrections to inaccurate data
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 group hover:bg-yellow-100 transition-all duration-300">
                <p className="text-gray-700 font-semibold group-hover:text-yellow-800 transition-colors">
                  Deletion of personal information
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 group hover:bg-yellow-100 transition-all duration-300">
                <p className="text-gray-700 font-semibold group-hover:text-yellow-800 transition-colors">
                  Withdrawal from marketing communication
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border border-yellow-200">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 text-white p-4 rounded-2xl">
              <FaShieldAlt className="text-2xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Privacy Protected</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We are committed to safeguarding your personal information and maintaining transparency in all our data practices.
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}