// import Image from "next/image";

// export default function NortonSmallBusinessCard() {
//   return (
//     <div className="relative w-full max-w-[1256px] mx-auto overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] group">

//       {/* Background Image */}
//       <div className="relative w-full h-[420px] md:h-[520px] lg:h-[600px]">
//         <Image
//           src="/wemenpic.avif"
//           alt="Norton Small Business"
//           fill
//           priority
//           className="object-cover group-hover:scale-105 transition duration-700 ease-out"
//         />

//         {/* Dark + Light Premium Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16">

//         {/* Badge */}
//         <div className="mb-6">
//           <span className="px-5 py-2 text-sm font-semibold tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
//             Norton Small Business
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-white font-bold leading-tight
//           text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-2xl">
//           Protect your small
//           <span className="block">business, no matter</span>
//         </h2>

//         {/* Sub Text */}
//         <p className="mt-4 text-white/90 font-semibold
//           text-lg sm:text-xl lg:text-2xl">
//           where you are
//         </p>

//         {/* Description */}
//         <p className="mt-6 text-white/80 max-w-xl leading-relaxed
//           text-base sm:text-lg">
//           Enjoy peace of mind knowing your devices and customer data are secure.
//         </p>

//         {/* Button */}
//         <div className="mt-8">
//           <button className="relative px-10 py-4 font-bold text-lg text-black rounded-full
//             bg-gradient-to-r from-yellow-400 to-yellow-500
//             hover:from-yellow-500 hover:to-yellow-600
//             transition duration-300
//             shadow-[0_10px_30px_rgba(255,200,0,0.4)]
//             hover:shadow-[0_15px_40px_rgba(255,200,0,0.6)]
//             hover:-translate-y-1">

//             Get Started

//             {/* Shine Effect */}
//             <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
//               bg-gradient-to-r from-transparent via-white/40 to-transparent
//               blur-md transition duration-500" />
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }



import Image from "next/image";

export default function NortonSmallBusinessCard() {
  return (
    <div className="relative w-full max-w-[1256px] mx-auto overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] group">
      {/* Background Image Container - Responsive heights */}
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[520px] lg:h-[600px]">
        <Image
          src="/wemenpic.avif"
          alt="Norton Small Business"
          fill
          priority
          className="object-cover group-hover:scale-105 transition duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1256px"
        />

        {/* Dark + Light Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content - Improved mobile positioning */}
      <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-16">
        {/* Badge */}
        <div className="mb-4 sm:mb-5 md:mb-6">
          <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            Norton Small Business
          </span>
        </div>

        {/* Heading - Responsive text sizes */}
        <h2 className="text-white font-bold leading-tight max-w-2xl
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Protect your small
          <span className="block mt-1 sm:mt-0">business, no matter</span>
        </h2>

        {/* Sub Text */}
        <p className="mt-3 sm:mt-4 text-white/90 font-semibold
          text-base sm:text-lg md:text-xl lg:text-2xl">
          where you are
        </p>

        {/* Description */}
        <p className="mt-4 sm:mt-5 md:mt-6 text-white/80 max-w-xl leading-relaxed
          text-sm sm:text-base md:text-lg">
          Enjoy peace of mind knowing your devices and customer data are secure.
        </p>

        {/* Button - Responsive sizing */}
        <div className="mt-6 sm:mt-7 md:mt-8">
          <button className="relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 font-bold 
            text-base sm:text-lg text-black rounded-full
            bg-gradient-to-r from-yellow-400 to-yellow-500
            hover:from-yellow-500 hover:to-yellow-600
            transition duration-300 w-full sm:w-auto
            shadow-[0_10px_30px_rgba(255,200,0,0.4)]
            hover:shadow-[0_15px_40px_rgba(255,200,0,0.6)]
            hover:-translate-y-1">

            Get Started

            {/* Shine Effect */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-transparent via-white/40 to-transparent
              blur-md transition duration-500" />
          </button>
        </div>
      </div>

      {/* Optional: Bottom gradient for better text readability on very small screens */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none lg:hidden" />
    </div>
  );
}