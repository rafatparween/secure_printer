"use client";

import { FaDesktop, FaMobileAlt, FaShieldAlt, FaDownload, FaKey, FaCog, FaSync, FaTools, FaHeadset, FaComments } from "react-icons/fa";

import Image from "next/image";

export default function ActivationSupport() {
  const supportServices = [
    {
      icon: FaKey,
      title: "Help signing into Norton account",
      description: "Assistance with Norton account access and authentication"
    },
    {
      icon: FaDownload,
      title: "Redeeming your product key",
      description: "Step-by-step guidance for product key activation"
    },
    {
      icon: FaDesktop,
      title: "Downloading and installing the software",
      description: "Complete installation support for all devices"
    },
    {
      icon: FaCog,
      title: "Configuring features like VPN, Password Manager, Dark Web Monitoring",
      description: "Optimal setup for all Norton security features"
    },
    {
      icon: FaSync,
      title: "Transferring Norton to a new device",
      description: "Seamless migration between devices"
    },
    {
      icon: FaTools,
      title: "Troubleshooting activation issues",
      description: "Quick resolution of common activation problems"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
   
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm">
              <FaHeadset className="text-5xl" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Norton Activation & Setup Assistance
          </h1>
          <p className="text-yellow-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We help you activate, install, and configure Norton on any device.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Overview Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 mb-16 text-center hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Setup Support
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Our expert technicians provide complete assistance with Norton activation, installation, 
            and configuration across all your devices. Get professional help to ensure your cybersecurity 
            is properly set up and optimized.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                <FaShieldAlt className="text-yellow-600 text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete support services for all your Norton setup needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-2xl mb-4 group-hover:from-yellow-200 group-hover:to-yellow-100 transition-all duration-300">
                    <service.icon className="text-yellow-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Support Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Devices</h2>
            <p className="text-gray-600">We provide setup assistance for all major platforms</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                <FaDesktop className="text-blue-600 text-3xl mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900">Windows PC</h3>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl mb-4 group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300">
                <svg className="w-8 h-8 text-gray-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74,17,21.95,15.66,21.97C14.32,22,13.89,21.18,12.37,21.18C10.84,21.18,10.37,21.95,9.1,22C7.79,22.05,6.8,20.68,5.96,19.47C4.25,17,2.94,12.45,4.7,9.39C5.57,7.87,7.13,6.91,8.82,6.88C10.1,6.86,11.32,7.75,12.11,7.75C12.89,7.75,14.37,6.68,15.92,6.84C16.57,6.87,18.39,7.1,19.56,8.82C19.47,8.88,17.39,10.1,17.41,12.63C17.44,15.65,20.06,16.66,20.09,16.67C20.06,16.74,19.67,18.11,18.71,19.5ZM13,3.5C13.73,2.67,14.94,2.04,15.94,2C16.07,3.17,15.6,4.35,14.9,5.19C14.21,6.04,13.07,6.7,11.95,6.61C11.8,5.46,12.36,4.26,13,3.5Z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Mac</h3>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-4 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                <FaMobileAlt className="text-green-600 text-3xl mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900">Android</h3>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl mb-4 group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300">
                <FaMobileAlt className="text-purple-600 text-3xl mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900">iOS</h3>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Request Setup Help */}
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-8 text-white text-center hover:shadow-xl transition-all duration-300 group">
            <div className="bg-white/20 p-4 rounded-2xl inline-flex items-center justify-center mb-6">
              <FaHeadset className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Request Setup Help</h3>
            <p className="text-yellow-100 mb-6 leading-relaxed">
              Get professional assistance with your Norton installation and configuration from our certified technicians.
            </p>
            <button className="bg-white text-yellow-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-full">
              Get Help Now
            </button>
          </div>

          {/* Chat with Technician */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center hover:shadow-xl transition-all duration-300 group">
            <div className="bg-white/20 p-4 rounded-2xl inline-flex items-center justify-center mb-6">
              <FaComments className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Chat with a Technician</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Instant live chat support with our Norton experts for quick setup questions and troubleshooting.
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-full">
              Start Chat
            </button>
          </div>
        </div>

        {/* Support Process */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Our Support Process Works</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="relative">
                <div className="bg-yellow-100 text-yellow-700 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  1
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Reach out via chat or support request</p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="bg-yellow-100 text-yellow-700 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  2
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Device Assessment</h3>
              <p className="text-gray-600 text-sm">We analyze your setup requirements</p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="bg-yellow-100 text-yellow-700 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  3
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Guided Setup</h3>
              <p className="text-gray-600 text-sm">Step-by-step installation assistance</p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="bg-yellow-100 text-yellow-700 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  4
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Configuration</h3>
              <p className="text-gray-600 text-sm">Optimize all security features</p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}