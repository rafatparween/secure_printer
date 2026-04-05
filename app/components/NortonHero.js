// "use client";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <div className="w-full bg-white">

//       {/* ===== HERO FULL BACKGROUND IMAGE ===== */}
//       <div className="relative w-full h-[600px]">

//         <Image
//           src="/sliderdiff.png"
//           alt="bg"
//           fill
//           priority
//           className="object-cover"
//         />

//         {/* LEFT DARK OVERLAY */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/95 via-[#0b2a4a]/75 to-transparent" />

//         {/* LEFT TEXT */}
//        <div className="relative z-10 max-w-[1280px] mx-auto h-full flex items-start px-8 lg:px-12 pt-[80px]">

          
//           <div className="max-w-[640px] text-white">

//             {/* HEADING */}
//             <h1 className="
//               text-[44px] 
//               lg:text-[52px] 
//               leading-[52px] 
//               lg:leading-[60px] 
//               font-semibold 
//               tracking-[-0.3px]
//               mb-5
//             ">
//               Our best protection now includes AI-powered scam detection.
//             </h1>

//             {/* SUBTEXT */}
//             <p className="
//               text-[18px] 
//               text-gray-200 
//               mb-8 
//               leading-[28px]
//             ">
//               Norton. Advanced tech for advanced threats.
//             </p>

//             {/* BUTTON */}
//             <button className="
//               bg-yellow-400 
//               hover:bg-yellow-500 
//               text-black 
//               font-semibold 
//               px-9 
//               py-3.5 
//               rounded-full 
//               text-[16px]
//               transition
//             ">
//               Get started
//             </button>

//           </div>
//         </div>
//       </div>

//       {/* ===== FLOATING BOTTOM PANEL ===== */}
//       <div className="relative -mt-20 px-6">
//         <div className="
//           max-w-[1280px] 
//           mx-auto 
//           bg-[#f3f3f3] 
//           rounded-[24px] 
//           shadow-md 
//           px-10 
//           py-10
//         ">

//           <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6">

//             {/* LEFT TITLE */}
//             <div className="pr-6">
//               <h2 className="
//                 text-[22px] 
//                 font-semibold 
//                 text-black 
//                 text-bold
//                 leading-[34px]
//               ">
//                 Choose the right protection for you.
//               </h2>
//             </div>

//             {/* ITEM 1 */}
//             <div className="flex flex-col items-center text-center gap-3 cursor-pointer">
//               <img src="/bannericon1.svg" className="w-9 h-9" />
//               <p className="text-[15px] font-medium text-black leading-5">
//                 Get all-in-one antivirus
//               </p>
//             </div>

//             {/* ITEM 2 */}
//             <div className="flex flex-col items-center text-center gap-3 cursor-pointer">
//               <img src="/bannericon2.svg" className="w-9 h-9" />
//               <p className="text-[15px] font-medium text-black leading-5">
//                 Browse safely with a VPN
//               </p>
//             </div>

//             {/* ITEM 3 */}
//             <div className="flex flex-col items-center text-center gap-3 cursor-pointer">
//               <img src="/bannericon1.svg" className="w-9 h-9" />
//               <p className="text-[15px] font-medium text-black leading-5">
//                 Protect your identity
//               </p>
//             </div>

//             {/* HELP SECTION */}
//             <div className="border-l border-gray-300 pl-6 text-left">
//   <p className="text-gray-500 text-sm mb-2">
//     Still not sure yet?
//   </p>

//   <div>
//   <p className="text-blue-600 font-semibold text-base cursor-pointer hover:underline transition duration-200">
//     Call Us :
//     <span className="ml-2 text-gray-800 text-sm font-medium hover:text-blue-600">
//       +1 (877) 889-5857
//     </span>
//   </p>
// </div>
// </div>

//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }




// export default function NortonHero() {
//   return (
//     <main className="min-h-screen bg-[#f5f2e7] flex items-center justify-center px-6 py-10">
//       <section className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//         {/* Left Content */}
//         <div className="space-y-8">
//           <div className="inline-flex items-center gap-2 rounded-full bg-[#f6c400] px-6 py-4 shadow-[0_6px_0_rgba(0,0,0,0.08)] border border-black/10 text-[#0d1733] font-semibold text-lg group hover:-translate-y-0.5 transition-all duration-300 cursor-default">
//             <span className="text-2xl group-hover:scale-110 transition-transform">♛</span>
//             <span>Business.com&apos;s #1 Choice 2024</span>
//           </div>

//           <div className="space-y-3">
//             <h1 className="text-[#0b1735] font-extrabold leading-[0.95] tracking-[-0.03em] text-5xl sm:text-6xl md:text-7xl lg:text-[84px]">
//               Choose the Perfect
//               <br />
//               Norton
//             </h1>

//             <h2 className="text-[#f0b400] font-extrabold leading-[0.95] tracking-[-0.03em] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] relative inline-block">
//               Security Plan for
//               <br />
//               Your Needs
//               <span className="absolute -bottom-2 left-0 w-32 h-1 bg-[#f6c400]/40 rounded-full lg:w-48"></span>
//             </h2>
//           </div>

//           <p className="max-w-2xl text-[#25324b] text-xl sm:text-2xl leading-[1.7] font-medium">
//             We offer the full range of Norton™ security subscriptions for
//             individuals, families, and small businesses. All products are genuine
//             and activated through your Norton account.
//           </p>

//           <div className="flex flex-wrap gap-4 items-center">
//             <button className="rounded-full bg-[#f6c400] px-12 py-6 text-2xl font-bold text-black shadow-[0_8px_0_rgba(0,0,0,0.12)] border-2 border-black/80 hover:translate-y-[1px] hover:shadow-[0_4px_0_rgba(0,0,0,0.12)] transition-all duration-150 active:translate-y-1 active:shadow-none">
//               Start your free trial
//             </button>
//             <div className="flex items-center gap-2 text-[#25324b]/70 text-base font-medium">
//               <span className="flex -space-x-2">
//                 {[...Array(3)].map((_, i) => (
//                   <span key={i} className="w-8 h-8 rounded-full bg-white border-2 border-[#f5f2e7] shadow-sm flex items-center justify-center text-xs font-bold text-[#0b1735]">
//                     👤
//                   </span>
//                 ))}
//               </span>
//               <span>10k+ active users</span>
//             </div>
//           </div>

//           {/* Trust Badges */}
//           <div className="flex flex-wrap gap-6 pt-4">
//             {[
//               { label: "30-Day Money Back", icon: "💰" },
//               { label: "24/7 Support", icon: "🎧" },
//               { label: "SSL Secure", icon: "🔒" }
//             ].map((badge) => (
//               <div key={badge.label} className="flex items-center gap-2 text-sm font-medium text-[#0b1735]/70">
//                 <span className="text-base">{badge.icon}</span>
//                 <span>{badge.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Card */}
//         <div className="flex justify-center lg:justify-end">
//           <div className="relative w-full max-w-[530px]">
//             {/* Top Secure Badge */}
//             <div className="absolute -top-4 right-4 z-20 inline-flex items-center gap-2 rounded-full bg-[#f6c400] px-6 py-3 border border-black/10 shadow-md text-black font-extrabold text-xl group hover:scale-105 transition-transform duration-200">
//               <span className="text-2xl animate-pulse">🛡️</span>
//               <span>SECURED</span>
//             </div>

//             {/* Floating elements */}
//             <div className="absolute -left-8 top-20 z-10 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/30 hidden lg:flex items-center gap-2 text-sm font-semibold text-[#0b1735]">
//               <span className="text-green-500 text-xl">✓</span>
//               <span>Real-time Protection</span>
//             </div>
//             <div className="absolute -right-6 bottom-40 z-10 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/30 hidden lg:flex items-center gap-2 text-sm font-semibold text-[#0b1735]">
//               <span className="text-blue-500 text-xl">⚡</span>
//               <span>99.9% Threat Block</span>
//             </div>

//             {/* Main Image Frame */}
//             <div className="relative overflow-hidden rounded-[24px] border-[4px] border-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] bg-white group transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
//               <img
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
//                 alt="Professional woman in office"
//                 className="h-[700px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />

//               {/* Gradient Overlay for better text readability */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

//               {/* Bottom Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/80 backdrop-blur-md px-8 py-6 rounded-t-[28px] rounded-b-[20px] border-t border-white/10">
//                 <div className="flex items-center gap-4 text-white">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f6c400] to-[#e0a800] text-2xl shadow-lg">
//                     🔒
//                   </div>
//                   <div>
//                     <p className="text-2xl font-extrabold leading-none tracking-tight">PROTECTION</p>
//                     <p className="text-sm text-white/80 mt-1 leading-none flex items-center gap-1">
//                       <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
//                       Active Monitoring
//                     </p>
//                   </div>
//                 </div>

//                 <div className="inline-flex items-center gap-2 rounded-full bg-[#f6c400] px-5 py-3 text-black font-extrabold text-xl shadow-lg group-hover:bg-[#e0a800] transition-colors duration-200">
//                   <span className="text-xl animate-pulse">📍</span>
//                   <span>LIVE</span>
//                 </div>
//               </div>

//               {/* Corner accent */}
//               <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-[#f6c400]/60 rounded-tl-2xl pointer-events-none"></div>
//             </div>

//             {/* Rating Badge */}
//             <div className="absolute -bottom-5 left-6 bg-white rounded-full px-5 py-2 shadow-lg border border-gray-100 flex items-center gap-2 z-20">
//               <div className="flex items-center gap-0.5">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-4 h-4 text-[#f6c400] fill-current" viewBox="0 0 24 24">
//                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                   </svg>
//                 ))}
//               </div>
//               <span className="text-xs font-bold text-[#0b1735]">4.9/5</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


// components/HeroSection.jsx
import { Crown, Shield, Lock, MapPin, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function NortonHero() {
  return (
    <section className="w-full bg-gradient-to-br from-amber-50/40 via-white to-amber-50/30 relative overflow-hidden">
      {/* Premium Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-amber-100/5 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - Refined Text Content */}
          <div className="space-y-6">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-4 py-2 shadow-lg animate-pulse">
              <Crown className="w-4 h-4 text-gray-900" />
              <span className="text-xs font-extrabold text-gray-900 tracking-wider uppercase">
                Business.com's #1 Choice 2024
              </span>
            </div>

            {/* Main Heading - Reduced Size & Perfect Alignment */}
            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.15] tracking-tight">
                Choose the Perfect
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.15] tracking-tight">
                Norton
              </h1>
            </div>

            {/* Yellow Highlight - Perfect Size */}
            <div className="space-y-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-amber-500 leading-[1.15] tracking-tight">
                Security Plan for
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-amber-500 leading-[1.15] tracking-tight">
                Your Needs
              </h2>
            </div>

            {/* Description - Clean & Readable */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md font-medium">
              We offer the full range of Norton™ security subscriptions for individuals, 
              families, and small businesses. All products are genuine and activated 
              through your Norton account.
            </p>

            {/* CTA Section */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-bold text-base md:text-lg px-8 md:px-10 py-3.5 md:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <span>Start your free trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Trust Badge */}
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-100">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold text-gray-700">30-Day Risk Free</span>
              </div>
            </div>

            {/* Feature List - Premium Style */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Malware Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Real-time Threat Defense</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Secure VPN Included</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Premium Image Card */}
          <div className="relative">
            {/* Main Card Container */}
            <div className="relative group">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 z-20 animate-bounce">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-4 py-2 shadow-xl">
                  <Shield className="w-4 h-4 text-gray-900" />
                  <span className="text-xs font-extrabold text-gray-900 tracking-wider">
                    100% SECURED
                  </span>
                </div>
              </div>

              {/* Image Card with Border */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-2 shadow-2xl border border-gray-200">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/bannerg.webp"
                    alt="Professional cybersecurity expert"
                    width={550}
                    height={650}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Premium Bottom Bar */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between border border-white/20 shadow-xl">
                      {/* Left Status */}
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-full p-2.5 shadow-lg">
                          <Lock className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <p className="text-white text-xs font-black tracking-wider">
                            ACTIVE PROTECTION
                          </p>
                          <p className="text-gray-300 text-[11px] font-medium">
                            24/7 Real-time Monitoring
                          </p>
                        </div>
                      </div>

                      {/* Live Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
                        </div>
                        <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-3 py-1.5">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-gray-900" />
                            <span className="text-[11px] font-black text-gray-900 tracking-wide">
                              LIVE SECURE
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Rating Badge */}
            <div className="absolute -bottom-4 -left-4 z-20">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-800">Trusted by 10M+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 rounded-full p-2">
                <Shield className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-xs text-gray-600 font-semibold">Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 rounded-full p-2">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-semibold">Award-Winning Protection</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 rounded-full p-2">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63c-.75.51-1.37 1.18-1.82 1.96H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.79 2.59 5.01 4 8.19 4s6.4-1.41 8.19-4H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-semibold">30-Day Money Back</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}