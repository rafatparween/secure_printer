// // pages/index.js
// import { FaCheck, FaShieldAlt, FaUserShield, FaCloud, FaWifi, FaCrown, FaStar, FaLock, FaRocket } from 'react-icons/fa';
// import Image from 'next/image';

// export default function Banner() {
//   return (
//     <section className="w-full bg-gradient-to-br from-white via-blue-50 to-white py-20">
//       <div className="max-w-[1320px] mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          
//           {/* Left Content Section */}
//           <div className="flex-1">
//             {/* Badge */}
//             <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//               <FaCrown className="mr-2 text-yellow-300" />
//               Business.com's #1 Choice 2024
//             </div>
            
//             {/* Heading */}
//             <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
//               Business.com's<br />
//               <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
//                 #1 choice for small<br />
//                 business security
//               </span>
//             </h1>
            
//             {/* Description */}
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Protect your business from cyberthreats with the easy-to-use, automated security solution recommended by business.com.
//             </p>
            
//             {/* CTA Button */}
//             <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold text-xl rounded-full px-10 py-5 border-2 border-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg mb-4">
//               Start your free trial
//             </button>
            
//             {/* Pricing Note */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm max-w-lg">
//               <p className="text-sm text-gray-600">
//                 For Norton Small Business covering 10 devices. After 7 days, renews at 
//                 <span className="text-green-600 font-bold"> $99.99</span> for the first year then 
//                 <span className="font-semibold"> $179.99/year</span> thereafter. See subscription details below*
//               </p>
//             </div>

//             {/* Trust Indicators */}
//             <div className="flex items-center gap-6 mt-8">
//               <div className="flex items-center">
//                 <div className="flex -space-x-2 mr-3">
//                   {[1,2,3].map((i) => (
//                     <div key={i} className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
//                   ))}
//                 </div>
//                 <span className="text-sm text-gray-600 font-medium">50,000+ Businesses Protected</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Image with Features on Left Side */}
//           <div className="flex-1 flex items-center justify-center">
//             <div className="relative flex items-center gap-6">
              
//               {/* Features Cards - Now on LEFT Side of Image */}
              

//               {/* Woman Image with Bottom Extras */}
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-20"></div>
//                 <div className="relative">
//                   <Image
//   src="/sidebarpic.png"
//   alt="Business professional"
//   width={566}
//   height={620}
//   className=" object-cover rounded-2xl shadow-2xl border-4 border-white"
// />
                  
//                   {/* Floating Badge */}
//                   <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-2xl shadow-xl">
//                     <div className="flex items-center text-sm font-bold">
//                       <FaShieldAlt className="mr-2" />
//                       SECURED
//                     </div>
//                   </div>

//                   {/* Bottom Extra Content */}
//                   <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
//                     <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl p-4 shadow-2xl border border-white/20">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
//                             <FaLock className="text-white text-lg" />
//                           </div>
//                           <div>
//                             <div className="font-bold text-sm">24/7 PROTECTION</div>
//                             <div className="text-white/80 text-xs">Active Monitoring</div>
//                           </div>
//                         </div>
//                         <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
//                           <FaRocket className="text-yellow-300 mr-1 text-sm" />
//                           <span className="text-white font-bold text-sm">LIVE</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

     
       
//       </div>
//     </section>
//   );
// }




// pages/index.js
import { FaCheck, FaShieldAlt, FaUserShield, FaCloud, FaWifi, FaCrown, FaStar, FaLock, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-br from-white via-yellow-50 to-white py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          
          {/* Left Content Section */}
          <div className="flex-1">
            
            {/* Norton Style Badge */}
            <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-md border border-black/20">
              <FaCrown className="mr-2 text-black" />
              Business.com's #1 Choice 2024
            </div>
            
            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
               Choose the Perfect Norton<br />
              <span className="text-yellow-500">
              
                Security Plan for Your Needs
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We offer the full range of Norton™ security subscriptions for individuals, families, and small businesses. All products are genuine and activated through your Norton account.  </p>
            
            {/* Norton Style CTA Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl rounded-full px-10 py-5 border-2 border-black transition-all duration-300 shadow-md hover:shadow-xl">
              Start your free trial
            </button>
            
            {/* Pricing Note */}
            {/* <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm max-w-lg mt-4">
              <p className="text-sm text-gray-700">
                For Norton Small Business covering 10 devices. After 7 days, renews at 
                <span className="text-yellow-600 font-bold"> $99.99</span> for the first year then 
                <span className="font-semibold"> $179.99/year</span> thereafter. See subscription details below*
              </p>
            </div> */}

            {/* Trust Indicators */}
            {/* <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-700 font-medium">50,000+ Businesses Protected</span>
              </div>
            </div> */}
          </div>

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative flex items-center gap-6">
              
              {/* Woman Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-300 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative">
                  
                  <Image
                    src="/sidebarpic.png"
                    alt="Business professional"
                    width={566}
                    height={620}
                    className="object-cover rounded-2xl shadow-xl border-4 border-white"
                  />
                  
                  {/* SECURED Badge */}
                  <div className="absolute -top-3 -right-3 bg-yellow-500 text-black px-4 py-2 rounded-2xl shadow-xl border border-black/20">
                    <div className="flex items-center text-sm font-bold">
                      <FaShieldAlt className="mr-2" />
                      SECURED
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                    <div className="bg-black text-white rounded-2xl p-4 shadow-2xl border border-white/10">
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                            <FaLock className="text-white text-lg" />
                          </div>
                          <div>
                            <div className="font-bold text-sm"> PROTECTION</div>
                            <div className="text-white/80 text-xs">Active Monitoring</div>
                          </div>
                        </div>

                        <div className="flex items-center bg-yellow-500 text-black rounded-full px-3 py-1 border border-black/20">
                          <FaRocket className="mr-1 text-sm" />
                          <span className="font-bold text-sm">LIVE</span>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
