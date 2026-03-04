// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function NortonPlans() {
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
//             src="/protected.avif" // 👉 replace with your image path
//             alt="norton mobile"
//             width={643}
//             height={570}
//             className="relative z-10"
//           />
//         </div>

//         {/* Right Content */}
//         <div>
//           <p className="text-sm mb-3 text-gray-700">
//             Norton™ 360 with LifeLock™ plans
//           </p>

//           <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
//             Devices + online privacy + identity protection
//           </h2>

//           <p className="text-gray-700 mb-8">
//             Protect your devices, privacy, and identity in one plan. Scam
//             Protection Pro blocks scam calls, detects scams online and in emails,
//             and identity theft support helps restore your identity and reimburse
//             stolen funds.
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

export default function NortonPlans() {
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
          {/* Removed absolute div with fixed dimensions that was causing issues */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none">
            <Image
              src="/protected.avif"
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
            Norton™ 360 with LifeLock™ plans
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            Devices + online privacy + identity protection
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Protect your devices, privacy, and identity in one plan. Scam
            Protection Pro blocks scam calls, detects scams online and in emails,
            and identity theft support helps restore your identity and reimburse
            stolen funds.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 transition px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg w-full sm:w-auto">
            Get started
          </button>
        </div>
      </section>

      {/* Security Features Section - Added back since it was commented out but should be part of the component */}
      <section className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 sm:mb-12">
          Key Security Features
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => toggleFeature(index)}
            >
              <h4 className="font-semibold text-base sm:text-lg mb-2">{feature.title}</h4>
              <p className={`text-sm sm:text-base text-gray-600 transition-all ${
                openFeature === index ? "block" : "hidden sm:block"
              }`}>
                {feature.content}
              </p>
              <button className="sm:hidden text-yellow-600 text-sm mt-2 font-medium">
                {openFeature === index ? "Show less" : "Learn more"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}