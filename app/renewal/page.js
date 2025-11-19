"use client";

import { FaSync, FaShieldAlt, FaMobile, FaDesktop, FaCheckCircle, FaArrowRight, FaClock, FaLock } from "react-icons/fa";


export default function Renewal() {
  const renewalServices = [
    {
      icon: FaSync,
      title: "Subscription renewal",
      description: "Quick and secure renewal process for your Norton subscription"
    },
    {
      icon: FaMobile,
      title: "Device reactivation",
      description: "Reactivate protection on all your devices after renewal"
    },
    {
      icon: FaShieldAlt,
      title: "Fixing expired license issues",
      description: "Resolve any problems with expired or invalid licenses"
    },
    {
      icon: FaCheckCircle,
      title: "Upgrading to a higher plan (e.g., Deluxe → Premium)",
      description: "Upgrade your protection with enhanced features and coverage"
    }
  ];

  const plans = [
    {
      name: "Norton Standard",
      devices: 1,
      price: "$49.99",
      period: "year",
      features: ["Antivirus", "Firewall", "Password Manager", "10GB Cloud Backup"]
    },
    {
      name: "Norton Deluxe",
      devices: 5,
      price: "$79.99",
      period: "year",
      features: ["All Standard features", "Parental Controls", "50GB Cloud Backup", "VPN"],
      popular: true
    },
    {
      name: "Norton Premium",
      devices: 10,
      price: "$99.99",
      period: "year",
      features: ["All Deluxe features", "Dark Web Monitoring", "100GB Cloud Backup", "Priority Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
 
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm">
              <FaSync className="text-5xl" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Renew Your Norton Subscription
          </h1>
          <p className="text-yellow-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            If your Norton subscription has expired, we can help you renew it quickly and securely.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Overview Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 mb-16 text-center hover:shadow-xl transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seamless Renewal Process
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Don't leave your devices unprotected. Our streamlined renewal process ensures your 
              cybersecurity continues without interruption. Get back to full protection in minutes.
            </p>
          </div>
        </div>

        {/* What We Handle Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                <FaLock className="text-yellow-600 text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Handle</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete renewal services to keep your protection active
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {renewalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-2xl mb-4 group-hover:from-yellow-200 group-hover:to-yellow-100 transition-all duration-300">
                    <service.icon className="text-yellow-600 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Renewal Plans */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Renewal Plan</h2>
            <p className="text-gray-600">Select the perfect protection level for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl border-2 p-6 hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 transform hover:scale-105' 
                  : 'border-yellow-200 bg-white'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.devices} Device{plan.devices > 1 ? 's' : ''}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-12 text-white text-center mb-16 hover:shadow-xl transition-all duration-300">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/20 p-4 rounded-2xl inline-flex items-center justify-center mb-6">
              <FaSync className="text-4xl" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Renew Now</h2>
            <p className="text-yellow-100 text-xl mb-8 leading-relaxed">
              Don't wait until it's too late. Renew your Norton subscription today and ensure continuous protection for all your devices.
            </p>
            <button className="group bg-white text-yellow-700 px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center">
              Renew My Subscription
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 text-center hover:shadow-xl transition-all duration-300 group">
            <div className="bg-green-100 p-4 rounded-2xl inline-flex items-center justify-center mb-4">
              <FaLock className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Protection</h3>
            <p className="text-gray-600">
              Never experience gaps in your cybersecurity coverage
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 text-center hover:shadow-xl transition-all duration-300 group">
            <div className="bg-blue-100 p-4 rounded-2xl inline-flex items-center justify-center mb-4">
              <FaClock className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Process</h3>
            <p className="text-gray-600">
              Renew and reactivate in just a few minutes
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 text-center hover:shadow-xl transition-all duration-300 group">
            <div className="bg-purple-100 p-4 rounded-2xl inline-flex items-center justify-center mb-4">
              <FaCheckCircle className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Transition</h3>
            <p className="text-gray-600">
              All your settings and preferences preserved
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need Help With Renewal?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our support team is available to assist you with any renewal questions or issues. 
                Get expert help to ensure your protection continues uninterrupted.
              </p>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300">
                Contact Support
              </button>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-6 rounded-2xl inline-flex items-center justify-center">
                <FaShieldAlt className="text-4xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16 p-12 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border border-yellow-200">
          <div className="flex justify-center mb-6">
            <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg">
              <FaShieldAlt className="text-3xl" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Authorized Norton Renewals</h3>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            All renewals processed through official Norton channels with guaranteed authenticity
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white rounded-xl p-4 shadow-md border border-yellow-200">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Genuine Licenses</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border border-yellow-200">
              <div className="text-2xl font-bold text-gray-900">Instant</div>
              <div className="text-gray-600">Activation</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border border-yellow-200">
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}