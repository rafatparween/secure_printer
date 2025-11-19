"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane, FaWhatsapp, FaComments } from "react-icons/fa";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactMethods = [
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      details: "+1 (833) 351-1202",
      description: "Speak directly with our support team",
      action: "Call Now",
      color: "from-green-600 to-green-700"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "support@eztechprintersolutions.com",
      description: "Send us your questions and concerns",
      action: "Send Email",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: "+1 (808) 468-1018",
      description: "Quick chat support via WhatsApp",
      action: "Start Chat",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaComments,
      title: "Live Chat",
      details: "Available ",
      description: "Instant messaging with our technicians",
      action: "Chat Now",
      color: "from-purple-600 to-purple-700"
    }
  ];

  const supportHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM EST" },
    { day: "Sunday", hours: "12:00 PM - 5:00 PM EST" }
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
            Contact Us
          </h1>
          <p className="text-yellow-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get in Touch with Our Norton Support Experts
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 text-center hover:shadow-xl transition-all duration-300 group">
              <div className={`bg-gradient-to-r ${method.color} text-white p-4 rounded-2xl inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-700 font-semibold mb-2">{method.details}</p>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <button className="w-full bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 text-yellow-700 py-3 rounded-xl font-semibold hover:from-yellow-100 hover:to-white hover:border-yellow-400 transition-all duration-300">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form & Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                <FaPaperPlane className="text-yellow-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="activation">Activation Support</option>
                    <option value="renewal">Subscription Renewal</option>
                    <option value="technical">Technical Issues</option>
                    <option value="billing">Billing Questions</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none"
                  placeholder="Please describe your issue or question in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
                <FaPaperPlane className="inline ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Business Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Business Information</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">EZ Tech Printer Solutions LLC</h4>
                  <p className="text-gray-600">Authorized Norton Reseller</p>
                </div>
                
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Registered Office</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-xl mr-4">
                  <FaClock className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Support Hours</h3>
              </div>
              
              <div className="space-y-3">
                {supportHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-semibold">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-yellow-700 text-sm text-center">
                  <strong>Emergency Support:</strong> Available  for critical security issues
                </p>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-6 text-white text-center hover:shadow-xl transition-all duration-300">
              <FaHeadset className="text-3xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Quick Response Guaranteed</h4>
              <p className="text-yellow-100 text-sm">
                We typically respond to all inquiries within 1-2 hours during business hours
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 mb-16 hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">What information should I provide for activation support?</h4>
                <p className="text-gray-600 text-sm">Have your product key, Norton account email, and device details ready.</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">How long does activation support take?</h4>
                <p className="text-gray-600 text-sm">Most activation issues are resolved within 15-30 minutes.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide support for all Norton products?</h4>
                <p className="text-gray-600 text-sm">Yes, we support all Norton 360, Antivirus, and LifeLock products.</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">Is there a charge for support services?</h4>
                <p className="text-gray-600 text-sm">Basic activation and setup support is free for all customers.</p>
              </div>
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