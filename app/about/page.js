"use client";

import { FaShieldAlt, FaRocket, FaUsers, FaGlobeAmericas, FaAward, FaHeadset } from "react-icons/fa";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm">
              <FaShieldAlt className="text-5xl" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            About EZ Tech Printer Solutions LLC
          </h1>
          <p className="text-yellow-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your Trusted Partner in Cybersecurity Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <FaRocket className="text-blue-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                EZ Tech Printer Solutions LLC is an Authorized Norton Empower Reseller specializing in providing genuine cybersecurity solutions and professional activation support. Our mission is to help customers secure their devices, protect their identity, and maintain digital privacy through trusted Norton™ products.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-200">
              <Image
                src="/a2.avif"
                alt="Cybersecurity Protection"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-blue-600/20"></div>
            </div>
          </div>
        </div>

        {/* What We Deliver Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 mb-16 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-8">
            <div className="bg-green-100 p-3 rounded-xl mr-4">
              <FaAward className="text-green-600 text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">What We Deliver</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center group hover:from-yellow-100 hover:to-white hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <FaShieldAlt className="text-yellow-700 text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Genuine Norton licenses</h3>
              <p className="text-gray-600 text-sm">Authentic products directly from authorized channels</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center group hover:from-yellow-100 hover:to-white hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <svg className="w-6 h-6 text-yellow-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Instant email delivery</h3>
              <p className="text-gray-600 text-sm">Immediate access to your products</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center group hover:from-yellow-100 hover:to-white hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <FaHeadset className="text-yellow-700 text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Installation assistance</h3>
              <p className="text-gray-600 text-sm">Expert guidance for setup</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center group hover:from-yellow-100 hover:to-white hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <svg className="w-6 h-6 text-yellow-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Account setup support</h3>
              <p className="text-gray-600 text-sm">Help with Norton account configuration</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center group hover:from-yellow-100 hover:to-white hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <FaUsers className="text-yellow-700 text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Professional customer service</h3>
              <p className="text-gray-600 text-sm">Dedicated support team</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 text-center group hover:from-yellow-100 hover:to-white hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 p-4 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <FaAward className="text-yellow-700 text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Authorized Reseller</h3>
              <p className="text-gray-600 text-sm">Official Norton Empower Partner</p>
            </div>
          </div>
        </div>

        {/* Who We Serve Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200">
                <Image
                  src="/a1.webp"
                  alt="Individual Protection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200 mt-8">
                <Image
                  src="/a5.avif"
                  alt="Home Security"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent"></div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200 -mt-8">
                <Image
                  src="/a3.avif"
                  alt="Business Solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200">
                <Image
                  src="/a6.avif"
                  alt="Global Reach"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-xl mr-4">
                  <FaGlobeAmericas className="text-purple-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Who We Serve</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We serve individuals, homes, and small businesses across the U.S. and internationally
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-semibold">Individual Consumers</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-semibold">Family & Home Protection</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-semibold">Small Businesses</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-semibold">International Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge Section */}
        <div className="text-center mt-16 p-12 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border border-yellow-200">
          <div className="flex justify-center mb-6">
            <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg">
              <FaShieldAlt className="text-3xl" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Authorized Norton Reseller</h3>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto mb-6">
            Trusted by thousands of customers for genuine cybersecurity solutions
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white rounded-xl p-4 shadow-md border border-yellow-200">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Genuine Products</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border border-yellow-200">
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border border-yellow-200">
              <div className="text-2xl font-bold text-gray-900">Instant</div>
              <div className="text-gray-600">Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}