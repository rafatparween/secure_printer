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




"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full overflow-x-hidden bg-white">

      {/* ================= HERO ================= */}
      <div className="relative w-full min-h-[520px] lg:h-[600px]">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/sliderdiff.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/95 via-[#0b2a4a]/75 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1280px] mx-auto h-full flex items-center lg:items-start px-4 sm:px-8 lg:px-12 py-16 lg:pt-[80px]">

          <div className="w-full max-w-[640px] text-white">

            {/* HEADING */}
            <h1 className="
              text-[28px]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[52px]
              font-semibold
              leading-[36px]
              sm:leading-[46px]
              lg:leading-[60px]
              tracking-[-0.3px]
              mb-4 lg:mb-5
            ">
              Our best protection now includes AI-powered scam detection.
            </h1>

            {/* TEXT */}
            <p className="
              text-[15px]
              sm:text-[17px]
              lg:text-[18px]
              text-gray-200
              leading-relaxed
              mb-6 lg:mb-8
            ">
              Norton. Advanced tech for advanced threats.
            </p>

            {/* BUTTON */}
            <button className="
              bg-yellow-400
              hover:bg-yellow-500
              text-black
              font-semibold
              px-7 sm:px-9
              py-3.5
              rounded-full
              text-[15px]
              sm:text-[16px]
              transition
            ">
              Get started
            </button>

          </div>
        </div>
      </div>

      {/* ================= FLOAT PANEL ================= */}
    {/* ================= FLOATING PANEL ================= */}
<div className="relative z-20 px-4 sm:px-6 lg:px-8">

  {/* FLOAT CONTROL WRAPPER */}
  <div className="
    max-w-[1280px]
    mx-auto
    -translate-y-8
    sm:-translate-y-12
    lg:-translate-y-20
  ">

    <div
      className="
      bg-[#f3f3f3]
      rounded-[18px]
      lg:rounded-[24px]
      shadow-lg
      px-5 sm:px-8 lg:px-10
      py-8 lg:py-10
      w-full
    "
    >

      {/* RESPONSIVE GRID */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-y-8
        gap-x-6
        items-center
      ">

        {/* TITLE */}
        <div className="text-center lg:text-left lg:pr-6">
          <h2 className="
            text-[20px]
            sm:text-[21px]
            lg:text-[22px]
            font-semibold
            leading-[30px]
            lg:leading-[34px]
          ">
            Choose the right protection for you.
          </h2>
        </div>

        {/* ITEM */}
        {[
          { icon: "/bannericon1.svg", text: "Get all-in-one antivirus" },
          { icon: "/bannericon2.svg", text: "Browse safely with a VPN" },
          { icon: "/bannericon1.svg", text: "Protect your identity" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center
              text-center gap-3
              cursor-pointer
              min-w-0
            "
          >
            <img
              src={item.icon}
              alt=""
              className="w-9 h-9 shrink-0 object-contain"
            />

            <p className="text-[15px] font-medium leading-5">
              {item.text}
            </p>
          </div>
        ))}

        {/* HELP */}
        <div className="
          text-center lg:text-left
          lg:border-l
          border-gray-300
          lg:pl-6
        ">
          <p className="text-gray-500 text-sm mb-2">
            Still not sure yet?
          </p>

          <p className="text-blue-600 font-semibold text-base hover:underline cursor-pointer">
            Call Us :
            <span className="ml-2 text-gray-800 text-sm font-medium">
              +1 (877) 889-5857
            </span>
          </p>
        </div>

      </div>
    </div>
  </div>
</div>

    </section>
  );
}