// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function AdvanceProtection() {
//   const [openFeature, setOpenFeature] = useState(null);

//   const toggleFeature = (index) => {
//     setOpenFeature(openFeature === index ? null : index);
//   };

//   const securityFeatures = [
//     {
//       title: "Real-time Threat Protection",
//       content:
//         "Advanced security helps protect your device against malware, ransomware, and viruses in real time.",
//     },
//     {
//       title: "Secure VPN",
//       content:
//         "Browse anonymously and securely with a no-log VPN to help protect your data on public Wi-Fi.",
//     },
//     {
//       title: "Dark Web Monitoring",
//       content:
//         "We monitor the dark web and notify you if your personal information is found.",
//     },
//     {
//       title: "Password Manager",
//       content:
//         "Generate, store, and manage your passwords securely across devices.",
//     },
//   ];

//   return (
//     <main className="w-full bg-white py-16 px-4 md:px-10">
//       {/* Heading */}
//       <h1 className="text-center text-3xl md:text-5xl font-semibold mb-16">
//         Find what fits your digital life.
//       </h1>

//       {/* Hero Section */}
//       <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Phone Image */}
//         <div className="relative flex justify-center">
//           <div className="absolute w-[420px] h-[260px] "></div>

//           <Image
//             src="/vpngirl.webp" // 👉 replace with your image path
//             alt="norton mobile"
//             width={643}
//             height={570}
//             className="relative z-10"
//           />
//         </div>

//         {/* Right Content */}
//         <div>
//           <p className="text-sm mb-3 text-gray-700">
//            Norton™ VPN plans
//           </p>

//           <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
//            Advanced online privacy protection
//           </h2>

//           <p className="text-gray-700 mb-8">
//             Stay safer online with a top-performing VPN, access your favorite content around the world, and safeguard your personal information with Password Manager and Dark Web Monitoring.
//           </p>

//           <button className="bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 rounded-full font-semibold text-lg">
//             Get started
//           </button>
//         </div>
//       </section>

//       {/* Subscription Section */}
     

//       {/* Security Features Dropdown */}
     
//     </main>
//   );
// }



"use client";
import Image from "next/image";
import { useState } from "react";

export default function AdvanceProtection() {
  const [openFeature, setOpenFeature] = useState(null);

  const toggleFeature = (index) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  const securityFeatures = [
    {
      title: "Real-time Threat Protection",
      content:
        "Advanced security helps protect your device against malware, ransomware, and viruses in real time.",
    },
    {
      title: "Secure VPN",
      content:
        "Browse anonymously and securely with a no-log VPN to help protect your data on public Wi-Fi.",
    },
    {
      title: "Dark Web Monitoring",
      content:
        "We monitor the dark web and notify you if your personal information is found.",
    },
    {
      title: "Password Manager",
      content:
        "Generate, store, and manage your passwords securely across devices.",
    },
  ];

  return (
    <main className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-10 overflow-x-hidden">
      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-12 md:mb-16 px-2">
        Find what fits your digital life.
      </h1>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Phone Image - Order changes on mobile */}
        <div className="relative flex justify-center w-full order-1 lg:order-1">
          {/* Removed the problematic absolute div with fixed dimensions */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none">
            <Image
              src="/vpngirl.webp"
              alt="norton mobile"
              width={643}
              height={570}
              className="relative z-10 w-full h-auto"
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 643px"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="order-2 lg:order-2 text-center lg:text-left px-2 sm:px-4 lg:px-0">
          <p className="text-xs sm:text-sm mb-2 sm:mb-3 text-gray-700">
            Norton™ VPN plans
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            Advanced online privacy protection
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Stay safer online with a top-performing VPN, access your favorite content around the world, and safeguard your personal information with Password Manager and Dark Web Monitoring.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 transition px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg w-full sm:w-auto">
            Get started
          </button>
        </div>
      </section>

      {/* Security Features Section - Added back for completeness */}
      <section className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 sm:mb-12 px-4">
          Key Security Features
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all cursor-pointer border border-gray-100"
              onClick={() => toggleFeature(index)}
            >
              <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className={`text-sm sm:text-base text-gray-600 transition-all ${
                openFeature === index ? "block" : "hidden sm:block"
              }`}>
                {feature.content}
              </p>
              <button className="sm:hidden text-yellow-600 font-medium text-sm mt-2">
                {openFeature === index ? "Show less" : "Learn more"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Features Accordion - Mobile view */}
      <section className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 sm:mb-12 px-4">
          Detailed Protection Features
        </h2>
        
        <div className="hidden lg:block bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              {securityFeatures.slice(0, 2).map((feature, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {securityFeatures.slice(2, 4).map((feature, index) => (
                <div key={index + 2} className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="block lg:hidden space-y-3 px-2 sm:px-4">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFeature(index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900">{feature.title}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFeature === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFeature === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm">
                  {feature.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}