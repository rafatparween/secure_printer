import Image from "next/image";

export default function NortonSmallBusinessCard() {
  return (
    <div className="relative w-full max-w-[1256px] mx-auto overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] group">

      {/* Background Image */}
      <div className="relative w-full h-[420px] md:h-[520px] lg:h-[600px]">
        <Image
          src="/wemenpic.avif"
          alt="Norton Small Business"
          fill
          priority
          className="object-cover group-hover:scale-105 transition duration-700 ease-out"
        />

        {/* Dark + Light Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16">

        {/* Badge */}
        <div className="mb-6">
          <span className="px-5 py-2 text-sm font-semibold tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            Norton Small Business
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-white font-bold leading-tight
          text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-2xl">
          Protect your small
          <span className="block">business, no matter</span>
        </h2>

        {/* Sub Text */}
        <p className="mt-4 text-white/90 font-semibold
          text-lg sm:text-xl lg:text-2xl">
          where you are
        </p>

        {/* Description */}
        <p className="mt-6 text-white/80 max-w-xl leading-relaxed
          text-base sm:text-lg">
          Enjoy peace of mind knowing your devices and customer data are secure.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="relative px-10 py-4 font-bold text-lg text-black rounded-full
            bg-gradient-to-r from-yellow-400 to-yellow-500
            hover:from-yellow-500 hover:to-yellow-600
            transition duration-300
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
    </div>
  );
}
