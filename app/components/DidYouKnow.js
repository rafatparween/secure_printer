// pages/did-you-know.js
import Image from 'next/image';

export default function DidYouKnow() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50  px-4 ">
      <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-white to-yellow-50/50 flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-100 hover:shadow-3xl transition-all duration-500">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 lg:py-16">
          {/* Badge */}
          
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Did you know
            <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">?</span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold mb-6 leading-tight">
            Online scams: <span className="bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent">don't be a victim.</span>
          </div>
          
          <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-10 font-medium">
            Learn more about some of the most common scams and crimes our customers encounter as well as useful tips to help prevent you from being victimized.
          </div>

          {/* Stats Grid */}
         
          
          {/* CTA Buttons */}
          
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-yellow-100/50 to-amber-100/30">
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] group">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/family.webp"
                alt="Family using a computer safely"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-700"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Elements */}
             
            </div>
            
            {/* Floating Card */}
           
          </div>
        </div>
      </div>
    </div>
  );
}