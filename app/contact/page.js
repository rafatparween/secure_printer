// "use client";

// import { useState } from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane, FaWhatsapp, FaComments } from "react-icons/fa";
// import JivoChat from "../JivoChat";


// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   const contactMethods = [
//     {
//       icon: FaPhoneAlt,
//       title: "Call Us",
//       details: "+1 (833) 351-1202",
//       description: "Speak directly with our support team",
//       action: "Call Now",
//       color: "from-green-600 to-green-700"
//     },
//     // {
//     //   icon: FaEnvelope,
//     //   title: "Email Us",
//     //   details: "support@eztechprintersolutions.com",
//     //   description: "Send us your questions and concerns",
//     //   action: "Send Email",
//     //   color: "from-blue-600 to-blue-700"
//     // },
//     // {
//     //   icon: FaWhatsapp,
//     //   title: "WhatsApp",
//     //   details: "+1 (808) 468-1018",
//     //   description: "Quick chat support via WhatsApp",
//     //   action: "Start Chat",
//     //   color: "from-green-500 to-green-600"
//     // },
//     {
//       icon: FaComments,
//       title: "Live Chat",
//       details: "Available ",
//       description: "Instant messaging with our technicians",
//       action: "Chat Now",
//       color: "from-purple-600 to-purple-700"
//     }
//   ];

//   const supportHours = [
//     { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM EST" },
//     { day: "Saturday", hours: "10:00 AM - 6:00 PM EST" },
//     { day: "Sunday", hours: "12:00 PM - 5:00 PM EST" }
//   ];

//   return (
//     <>
//     <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
     
      
//       {/* Hero Banner */}
//       <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-white">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <div className="flex justify-center mb-6">
//             <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm">
//               <FaHeadset className="text-5xl" />
//             </div>
//           </div>
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
//             Contact Us
//           </h1>
//           <p className="text-yellow-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
//             Get in Touch with Our Norton Support Experts
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         {/* Contact Methods Grid */}
//         {/* Contact Methods Section with Grey Background */}
// <div className="bg-gray-100 py-16 rounded-3xl mb-20 shadow-inner">
//   <div className="flex justify-center">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
//       {contactMethods.map((method, index) => (
//         <div 
//           key={index} 
//           className="group bg-white rounded-2xl shadow-xl border border-yellow-100 p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
//         >
//           {/* Decorative Background */}
//           <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
          
//           <div className={`bg-gradient-to-r ${method.color} text-white p-6 rounded-2xl inline-flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg mx-auto`}>
//             <method.icon className="text-4xl" />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
//           <p className="text-gray-700 font-semibold mb-2 text-lg">{method.details}</p>
//           <p className="text-gray-500 text-sm mb-5">{method.description}</p>
//           <button className="w-full bg-gradient-to-r from-gray-50 to-white border-2 border-yellow-200 text-yellow-700 py-4 rounded-xl font-semibold hover:from-yellow-50 hover:to-white hover:border-yellow-400 hover:text-yellow-800 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
//             {method.action}
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

//         {/* Contact Form & Info Section */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-all duration-300">
//             <div className="flex items-center mb-6">
//               <div className="bg-yellow-100 p-3 rounded-xl mr-4">
//                 <FaPaperPlane className="text-yellow-600 text-2xl" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
//             </div>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
//                     placeholder="Your full name"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
//                     placeholder="+1 (877) 889-5857"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
//                   >
//                     <option value="">Select a subject</option>
//                     <option value="activation">Activation Support</option>
//                     <option value="renewal">Subscription Renewal</option>
//                     <option value="technical">Technical Issues</option>
//                     <option value="billing">Billing Questions</option>
//                     <option value="general">General Inquiry</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Message *</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="6"
//                   className="w-full px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none"
//                   placeholder="Please describe your issue or question in detail..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
//               >
//                 Send Message
//                 <FaPaperPlane className="inline ml-2" />
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             {/* Business Info */}
//             <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center mb-6">
//                 <div className="bg-blue-100 p-3 rounded-xl mr-4">
//                   <FaMapMarkerAlt className="text-blue-600 text-2xl" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Business Information</h3>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">EZ Tech Printer Solutions LLC</h4>
//                   <p className="text-gray-600">Authorized Norton Reseller</p>
//                 </div>
                
//                 <div className="flex items-start">
//                   <FaMapMarkerAlt className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-700 font-semibold">Registered Office</p>
//                     <p className="text-gray-600">United States</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Support Hours */}
//             <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center mb-6">
//                 <div className="bg-green-100 p-3 rounded-xl mr-4">
//                   <FaClock className="text-green-600 text-2xl" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Support Hours</h3>
//               </div>
              
//               <div className="space-y-3">
//                 {supportHours.map((schedule, index) => (
//                   <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
//                     <span className="text-gray-700 font-semibold">{schedule.day}</span>
//                     <span className="text-gray-600">{schedule.hours}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
//                 <p className="text-yellow-700 text-sm text-center">
//                   <strong>Emergency Support:</strong> Available  for critical security issues
//                 </p>
//               </div>
//             </div>

//             {/* Quick Response */}
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-6 text-white text-center hover:shadow-xl transition-all duration-300">
//               <FaHeadset className="text-3xl mx-auto mb-4" />
//               <h4 className="text-xl font-bold mb-2">Quick Response Guaranteed</h4>
//               <p className="text-yellow-100 text-sm">
//                 We typically respond to all inquiries within 1-2 hours during business hours
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 mb-16 hover:shadow-xl transition-all duration-300">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
//             <p className="text-gray-600">Quick answers to common questions</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-4">
//               <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
//                 <h4 className="font-semibold text-gray-900 mb-2">What information should I provide for activation support?</h4>
//                 <p className="text-gray-600 text-sm">Have your product key, Norton account email, and device details ready.</p>
//               </div>
//               <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
//                 <h4 className="font-semibold text-gray-900 mb-2">How long does activation support take?</h4>
//                 <p className="text-gray-600 text-sm">Most activation issues are resolved within 15-30 minutes.</p>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
//                 <h4 className="font-semibold text-gray-900 mb-2">Do you provide support for all Norton products?</h4>
//                 <p className="text-gray-600 text-sm">Yes, we support all Norton 360, Antivirus, and LifeLock products.</p>
//               </div>
//               <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
//                 <h4 className="font-semibold text-gray-900 mb-2">Is there a charge for support services?</h4>
//                 <p className="text-gray-600 text-sm">Basic activation and setup support is free for all customers.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Trust Badge */}
        
//       </div>

//       {/* Bottom Gradient */}
//       <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
//     </div>
//     <JivoChat/>
//     </>
//   );
// }





"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane, FaWhatsapp, FaComments, FaPhone, FaShieldAlt, FaStar, FaThumbsUp, FaAward, FaUsers } from "react-icons/fa";
import JivoChat from "../JivoChat";


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

  const supportHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM EST" },
    { day: "Sunday", hours: "12:00 PM - 5:00 PM EST" }
  ];

  const premiumFeatures = [
    { icon: FaShieldAlt, title: "Enterprise Security", desc: "Military-grade protection for your digital assets" },
    { icon: FaUsers, title: "Expert Team", desc: "Certified professionals with 10+ years experience" },
    { icon: FaStar, title: "Premium Support", desc: "Priority queue with dedicated support agents" },
    { icon: FaThumbsUp, title: "99.9% Satisfaction", desc: "Trusted by over 50,000+ happy customers" }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
     
      
      {/* Hero Banner - Width fixed to 1248px with white space on sides */}
    <div className="px-4 md:px-6 lg:px-8 mt-14">
  <div className="max-w-[1248px] mx-auto bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 pt-16 pb-10 md:pt-20 md:pb-12 text-white rounded-3xl shadow-xl overflow-hidden relative">
    
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>

    <div className="relative px-4 text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg">
          <FaHeadset className="text-4xl" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
        Contact Us
      </h1>

      <p className="text-yellow-50 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-6">
        Need help? Our Norton experts are just a call away.
      </p>

      <div className="inline-flex items-center gap-3 bg-white text-yellow-800 px-6 py-3 rounded-full font-semibold text-base md:text-lg shadow-lg hover:scale-105 transition duration-300">
        <span className="text-xl">📞</span>
        Call our experts: <span className="font-bold">1-800-605-5408</span>
      </div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-[1248px] mx-auto px-4 py-16">
        {/* Premium Toll-Free Support Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 rounded-2xl shadow-2xl mb-20 overflow-hidden transform hover:scale-[1.01] transition-all duration-500 relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="flex items-center space-x-5 mb-4 md:mb-0">
              <div className="bg-white/25 p-5 rounded-full backdrop-blur-sm shadow-lg">
                <FaPhone className="text-4xl text-white" />
              </div>
              <div>
                <p className="text-white/90 text-sm uppercase tracking-wider font-semibold">24/7 Toll-Free Priority Support</p>
                <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">+1 (800) 605 - 5408</h3>
                <p className="text-yellow-100 text-sm mt-2">Instant connection • No waiting • Premium assistance</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 text-lg">
                <FaPhoneAlt className="text-amber-600" />
                Call Now
              </button>
              {/* <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-lg">
                <FaComments />
                Live Chat
              </button> */}
            </div>
          </div>
        </div>

        {/* Premium Features Grid - Added as replacement for removed contactMethods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg border border-yellow-100 p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white p-4 rounded-xl inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-md">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Form & Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 p-3 rounded-xl mr-4 shadow-md">
                <FaPaperPlane className="text-white text-2xl" />
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
                    placeholder="+1 (800) 605 - 5408"
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
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
                <FaPaperPlane className="inline ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Business Info */}
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl mr-4 shadow-md">
                  <FaMapMarkerAlt className="text-white text-2xl" />
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
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl mr-4 shadow-md">
                  <FaClock className="text-white text-2xl" />
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
              
              <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                <p className="text-yellow-700 text-sm text-center font-medium">
                  <strong>Emergency Support:</strong> Available 24/7 for critical security issues
                </p>
              </div>
            </div>

            {/* Quick Response Premium Card */}
            <div className="bg-gradient-to-r from-yellow-600 to-amber-700 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <FaHeadset className="text-4xl mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Premium Support</h4>
                <p className="text-yellow-100 text-sm mb-3">
                  We typically respond to all inquiries within 1-2 hours during business hours
                </p>
                <div className="flex justify-center gap-1 text-yellow-200">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-16 hover:shadow-2xl transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 border border-yellow-200 hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-gray-900 mb-2">What information should I provide for activation support?</h4>
                <p className="text-gray-600 text-sm">Have your product key, Norton account email, and device details ready.</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 border border-yellow-200 hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-gray-900 mb-2">How long does activation support take?</h4>
                <p className="text-gray-600 text-sm">Most activation issues are resolved within 15-30 minutes.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 border border-yellow-200 hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide support for all Norton products?</h4>
                <p className="text-gray-600 text-sm">Yes, we support all Norton 360, Antivirus, and LifeLock products.</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 border border-yellow-200 hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-gray-900 mb-2">Is there a charge for support services?</h4>
                <p className="text-gray-600 text-sm">Basic activation and setup support is free for all customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
    <JivoChat/>
    </>
  );
}
