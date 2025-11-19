"use client";

import { FaShieldAlt, FaFileContract, FaTrademark, FaCheckCircle, FaExclamationTriangle, FaBalanceScale } from "react-icons/fa";


export default function Disclaimer() {
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
            Disclaimer 
          </h1>
          <p className="text-yellow-100 text-lg md:text-xl max-w-2xl mx-auto">
            Transparency and Trust in Every Transaction
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Disclaimer Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mb-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <FaExclamationTriangle className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Disclaimer</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                EZ Tech Printer Solutions LLC provides this website for informational and purchasing purposes only. By accessing or using this website, you agree to the following terms.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-3/4"></div>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Trademark Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FaTrademark className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Trademark & Brand Information</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              All trademarks, logos, and brand names (including Norton™, LifeLock®, and other product names) are the property of their respective owners. Any use of these marks on this website is strictly for identification and product description.
              Nothing on this website implies endorsement, sponsorship, or partnership with NortonLifeLock Inc. except where explicitly stated as part of the official reseller program.
            </p>
          </div>

          {/* Reseller Status */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start mb-4">
              <div className="bg-green-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FaCheckCircle className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Authorized Reseller Status</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              EZ Tech Printer Solutions LLC is an independent Authorized Reseller under the Norton Empower Reseller Program. We provide genuine Norton™ subscriptions and digital licenses.
              Our offerings may not include every product sold directly by Norton; please refer to individual listings for details.
            </p>
          </div>

          {/* No Misrepresentation */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">No Misrepresentation</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We do not claim to be Norton, NortonLifeLock, or Gen Digital. We do not provide Norton's official customer service. All Norton software is activated and managed through the official Norton platform.
            </p>
          </div>

          {/* FTC Compliance */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start mb-4">
              <div className="bg-yellow-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FaBalanceScale className="text-yellow-600 text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Compliance With FTC Guidelines</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We ensure transparency in marketing and follow all FTC rules regarding truthful advertising, clear disclosures, and accurate product representation. Any material connections or reseller relationships are disclosed here.
            </p>
          </div>
        </div>

        {/* Liability Section - Full Width */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 mt-8 hover:shadow-xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-xl mr-4">
                <FaBalanceScale className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Limitation of Liability</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              This website may contain general information about cybersecurity products. EZ Tech Printer Solutions LLC is not responsible for misuse, data loss, or technical issues arising from improper software installation or third-party services.
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border border-yellow-200">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 text-white p-4 rounded-2xl">
              <FaShieldAlt className="text-2xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Trust & Transparency</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We are committed to providing clear information and genuine products through our authorized reseller program.
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}