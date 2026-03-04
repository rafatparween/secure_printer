// "use client";

// import Image from "next/image";
// import { useState } from "react";

// export default function TableVersion() {

//   const [open, setOpen] = useState(null);

//   const securityFeatures = [
//     {
//       title: "Cloud Backup",
//       content: "Prevent data loss by saving your files in the cloud."
//     },
//     {
//       title: "Scam Protection",
//       content: "Stay safer from scams online and in text."
//     },
//     {
//       title: "Real-Time Threat Protection",
//       content: "Anti-virus technology detects online threats."
//     },
//     {
//       title: "Password Manager",
//       content: "Create and store strong passwords."
//     }
//   ];

//   const toggle = (i) => {
//     setOpen(open === i ? null : i);
//   };

//   return (
//     <main className="bg-[#f5f6f7] min-h-screen">

//       {/* ================= HERO SECTION ================= */}
//       <section className="max-w-[1200px] mx-auto px-6 py-20">

//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* LEFT TEXT */}
//           <div>

//             <p className="text-[18px] text-gray-700 mb-6">
//               Norton™ 360 plans
//             </p>

//             <h1 className="text-[44px] md:text-[56px] font-bold leading-[1.1] text-[#1a1a1a] mb-8">
//               Devices + online <br />
//               privacy protection
//             </h1>

//             <p className="text-[20px] text-gray-700 leading-relaxed mb-10 max-w-[520px]">
//               Genie’s AI engine scans SMS messages for sophisticated scams so you can check your texts
//               with peace of mind, device security blocks hackers, and Norton VPN helps keep your online
//               activity private.
//             </p>

//             <button className="bg-[#ffe01b] border-2 border-black px-10 py-4 rounded-full font-semibold text-[18px] hover:bg-yellow-300 transition">
//               Get started
//             </button>

//           </div>

         
// <div className="relative w-[530px] h-[530px]">
//   <Image
//     src="/oipboy.jpg"
//     alt="family laptop"
//     fill
//     quality={100}
//     className="rounded-3xl object-cover"
//   />
// </div>


//         </div>

//       </section>


//       {/* ================= SECOND ROW ================= */}
     


//       {/* ================= SECURITY FEATURES DROPDOWN ================= */}
     

//     </main>
//   );
// }


"use client";

import Image from "next/image";
import { useState } from "react";

export default function TableVersion() {
  const [open, setOpen] = useState(null);

  const securityFeatures = [
    {
      title: "Cloud Backup",
      content: "Prevent data loss by saving your files in the cloud."
    },
    {
      title: "Scam Protection",
      content: "Stay safer from scams online and in text."
    },
    {
      title: "Real-Time Threat Protection",
      content: "Anti-virus technology detects online threats."
    },
    {
      title: "Password Manager",
      content: "Create and store strong passwords."
    }
  ];

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <main className="bg-[#f5f6f7] min-h-screen overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-20">
        {/* Mobile-first: flex column, lg: grid 2 columns */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT TEXT - Order on mobile: appears first */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <p className="text-base sm:text-[18px] text-gray-700 mb-4 sm:mb-6">
              Norton™ 360 plans
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight lg:leading-[1.1] text-[#1a1a1a] mb-6 sm:mb-8">
              Devices + online <br className="hidden sm:block" />
              privacy protection
            </h1>

            <p className="text-base sm:text-lg lg:text-[20px] text-gray-700 leading-relaxed mb-8 sm:mb-10 max-w-[520px] mx-auto lg:mx-0">
              Genie's AI engine scans SMS messages for sophisticated scams so you can check your texts
              with peace of mind, device security blocks hackers, and Norton VPN helps keep your online
              activity private.
            </p>

            <button className="bg-[#ffe01b] border-2 border-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-[18px] hover:bg-yellow-300 transition w-full sm:w-auto">
              Get started
            </button>
          </div>

          {/* RIGHT IMAGE - Order on mobile: appears second */}
          <div className="order-2 lg:order-2 w-full flex justify-center">
            <div className="relative w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[530px] aspect-square">
              <Image
                src="/oipboy.jpg"
                alt="family laptop"
                fill
                sizes="(max-width: 640px) 350px, (max-width: 768px) 450px, (max-width: 1024px) 500px, 530px"
                quality={100}
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND ROW (Security Features) ================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-6 pb-12 sm:pb-16 lg:pb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1a1a1a] mb-8 sm:mb-12">
          Key Security Features
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
              onClick={() => toggle(index)}
            >
              <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-[#1a1a1a]">
                {feature.title}
              </h3>
              <p className={`text-sm sm:text-base text-gray-600 transition-all ${
                open === index ? "block" : "hidden sm:block"
              }`}>
                {feature.content}
              </p>
              <button className="sm:hidden text-[#ffe01b] font-medium text-sm mt-2">
                {open === index ? "Show less" : "Learn more"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECURITY FEATURES DROPDOWN (Alternative layout for desktop) ================= */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-6 pb-12 sm:pb-16 lg:pb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1a1a1a] mb-8 sm:mb-12">
          Detailed Security Features
        </h2>
        
        <div className="hidden lg:block bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Desktop Table View - Exactly as original would be */}
          <div className="divide-y divide-gray-200">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-2 p-6 hover:bg-gray-50 transition-colors">
                <div className="font-semibold text-gray-900">{feature.title}</div>
                <div className="text-gray-600">{feature.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion View */}
        <div className="block lg:hidden space-y-3">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{feature.title}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === index && (
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