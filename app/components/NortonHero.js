"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full bg-white">

      {/* ===== HERO FULL BACKGROUND IMAGE ===== */}
      <div className="relative w-full h-[600px]">

        <Image
          src="/sliderdiff.png"
          alt="bg"
          fill
          priority
          className="object-cover"
        />

        {/* LEFT DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/95 via-[#0b2a4a]/75 to-transparent" />

        {/* LEFT TEXT */}
       <div className="relative z-10 max-w-[1280px] mx-auto h-full flex items-start px-8 lg:px-12 pt-[80px]">

          
          <div className="max-w-[640px] text-white">

            {/* HEADING */}
            <h1 className="
              text-[44px] 
              lg:text-[52px] 
              leading-[52px] 
              lg:leading-[60px] 
              font-semibold 
              tracking-[-0.3px]
              mb-5
            ">
              Our best protection now includes AI-powered scam detection.
            </h1>

            {/* SUBTEXT */}
            <p className="
              text-[18px] 
              text-gray-200 
              mb-8 
              leading-[28px]
            ">
              Norton. Advanced tech for advanced threats.
            </p>

            {/* BUTTON */}
            <button className="
              bg-yellow-400 
              hover:bg-yellow-500 
              text-black 
              font-semibold 
              px-9 
              py-3.5 
              rounded-full 
              text-[16px]
              transition
            ">
              Get started
            </button>

          </div>
        </div>
      </div>

      {/* ===== FLOATING BOTTOM PANEL ===== */}
      <div className="relative -mt-20 px-6">
        <div className="
          max-w-[1280px] 
          mx-auto 
          bg-[#f3f3f3] 
          rounded-[24px] 
          shadow-md 
          px-10 
          py-10
        ">

          <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6">

            {/* LEFT TITLE */}
            <div className="pr-6">
              <h2 className="
                text-[22px] 
                font-semibold 
                text-black 
                text-bold
                leading-[34px]
              ">
                Choose the right protection for you.
              </h2>
            </div>

            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center gap-3 cursor-pointer">
              <img src="/bannericon1.svg" className="w-9 h-9" />
              <p className="text-[15px] font-medium text-black leading-5">
                Get all-in-one antivirus
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center gap-3 cursor-pointer">
              <img src="/bannericon2.svg" className="w-9 h-9" />
              <p className="text-[15px] font-medium text-black leading-5">
                Browse safely with a VPN
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center gap-3 cursor-pointer">
              <img src="/bannericon1.svg" className="w-9 h-9" />
              <p className="text-[15px] font-medium text-black leading-5">
                Protect your identity
              </p>
            </div>

            {/* HELP SECTION */}
            <div className="border-l border-gray-300 pl-6 text-left">
  <p className="text-gray-500 text-sm mb-2">
    Still not sure yet?
  </p>

  <div className="space-y-1">
    <p className="text-blue-600 font-semibold text-base cursor-pointer hover:underline transition duration-200">
      Call Us 
    </p>

    <p className="text-lg font-bold text-gray-800 hover:text-blue-600 transition duration-200 cursor-pointer">
     +1 (877) 889-5857
    </p>

    
  </div>
</div>

          </div>
        </div>
      </div>

    </div>
  );
}
