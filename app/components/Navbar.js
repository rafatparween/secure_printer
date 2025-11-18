// // components/Header.js
// import { FaPhoneAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
// import { FiUser } from 'react-icons/fi';

// export default function Navbar() {
//   return (
//     <header className="w-full bg-white border-b border-gray-200">
//       {/* TOP SPACE */}
//       <div className="h-3 bg-gradient-to-b from-white to-yellow-50"></div>

//       {/* Top Bar */}
//       <div className="max-w-[1320px] h-[80px] mx-auto flex items-center justify-between px-8">
        
//         {/* Left: Logo + Brand */}
//         <div className="flex items-center space-x-4">
          
//           <div className="relative">
//             <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-3 flex items-center justify-center shadow-lg shadow-yellow-200 transform hover:scale-105 transition-all duration-300">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
//               </svg>
//             </div>
//             <div className="absolute -inset-1 bg-yellow-300 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
//           </div>

//           <div>
//             <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent block">
//               Secureyourpc
//             </span>
//             <span className="text-xs text-gray-600 font-medium tracking-wide">
//               Security Solutions
//             </span>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center space-x-8">

//           {/* Call Now */}
//           <div className="flex items-center space-x-4 p-3 rounded-2xl bg-gradient-to-r from-yellow-50 to-white hover:from-yellow-100 hover:to-white border border-yellow-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md">
//             <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-3 rounded-full shadow-md">
//               <FaPhoneAlt className="text-black text-base" />
//             </div>
//             <div className="flex flex-col leading-tight">
//               <span className="text-xs text-yellow-700 font-semibold tracking-wider uppercase">
//                 CALL NOW
//               </span>
//               <span className="text-lg font-bold text-gray-900 tracking-tight">
//                 +1 (833) 351-1202
//               </span>
//             </div>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-6">
            
//             {/* Wishlist */}
//             <div className="relative group">
//               <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-4 flex items-center justify-center transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-110 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
//                 <FaHeart className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
//               </div>
//               <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border border-white">
//                 0
//               </span>
//             </div>

//             {/* User */}
//             <div className="group">
//               <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-4 flex items-center justify-center transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-110 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
//                 <FiUser className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
//               </div>
//             </div>

//             {/* Cart */}
//             <div className="relative group">
//               <div className="flex items-center space-x-3 bg-gradient-to-br from-yellow-50 to-white rounded-2xl pl-4 pr-5 py-3 transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-105 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
//                 <FaShoppingCart className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
//                 <span className="text-base font-bold text-gray-900 group-hover:text-yellow-800 transition-colors">
//                   $0.00
//                 </span>
//               </div>
//               <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border border-white">
//                 0
//               </span>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* SPACE */}
//       <div className="h-4 bg-gradient-to-b from-white to-yellow-50"></div>

//       {/* NAVIGATION */}
//       <nav className="w-full bg-gradient-to-r from-yellow-50 to-white border-t border-b border-yellow-200">
//         <div className="max-w-[1320px] mx-auto flex justify-center">
//           <ul className="flex space-x-12 text-[16px] font-semibold py-5">

//             <li>
//               <a 
//                 href="#" 
//                 className="relative text-yellow-800 pb-3 px-2 transition-all duration-300 group"
//               >
//                 HOME
//                 <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-600 rounded-full"></span>
//                 <span className="absolute inset-0 bg-yellow-100 rounded-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
//               </a>
//             </li>

//             <li>
//               <a 
//                 href="#" 
//                 className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group"
//               >
//                 ABOUT US
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </li>

//             <li>
//               <a 
//                 href="#" 
//                 className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group"
//               >
//                 BLOG
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </li>

//             <li>
//               <a 
//                 href="#" 
//                 className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group"
//               >
//                 DISCLAIMER
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </li>

//             <li>
//               <a 
//                 href="#" 
//                 className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group"
//               >
//                 CONTACT US
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </li>

//           </ul>
//         </div>
//       </nav>

//       {/* SPACE */}
//       <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
//     </header>
//   );
// }



// components/Header.js
"use client";

import { FaPhoneAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { getTotalItems } = useCart();

  return (
    <header className="w-full bg-white border-b border-gray-200">

      {/* TOP SPACE */}
      <div className="h-3 bg-gradient-to-b from-white to-yellow-50"></div>

      {/* Top Bar */}
      <div className="max-w-[1320px] h-[80px] mx-auto flex items-center justify-between px-8">

        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-3 flex items-center justify-center shadow-lg shadow-yellow-200 transform hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            </div>
            <div className="absolute -inset-1 bg-yellow-300 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          </div>

          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent block">
              Secureyourpc
            </span>
            <span className="text-xs text-gray-600 font-medium tracking-wide">
              Security Solutions
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-8">

          {/* Call Now */}
          <div className="flex items-center space-x-4 p-3 rounded-2xl bg-gradient-to-r from-yellow-50 to-white hover:from-yellow-100 hover:to-white border border-yellow-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-3 rounded-full shadow-md">
              <FaPhoneAlt className="text-black text-base" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-yellow-700 font-semibold tracking-wider uppercase">
                CALL NOW
              </span>
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                +1 (833) 351-1202
              </span>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">

            {/* Wishlist */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-4 flex items-center justify-center transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-110 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
                <FaHeart className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
              </div>
              <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border border-white">
                0
              </span>
            </div>

            {/* User */}
            <div className="group">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-4 flex items-center justify-center transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-110 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
                <FiUser className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
              </div>
            </div>

            {/* Cart */}
            <Link href="/cart">
              <div className="relative group cursor-pointer">
                <div className="flex items-center space-x-3 bg-gradient-to-br from-yellow-50 to-white rounded-2xl pl-4 pr-5 py-3 transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-105 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
                  <FaShoppingCart className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
                  <span className="text-base font-bold text-gray-900 group-hover:text-yellow-800 transition-colors">
                    ${getTotalItems() > 0 ? getTotalItems() * 1 : 0}.00
                  </span>
                </div>

                {/* Cart Count */}
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border border-white">
                  {getTotalItems()}
                </span>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* SPACE */}
      <div className="h-4 bg-gradient-to-b from-white to-yellow-50"></div>

      {/* NAVIGATION */}
      <nav className="w-full bg-gradient-to-r from-yellow-50 to-white border-t border-b border-yellow-200">
        <div className="max-w-[1320px] mx-auto flex justify-center">
          <ul className="flex space-x-12 text-[16px] font-semibold py-5">
            <li>
              <a href="#" className="relative text-yellow-800 pb-3 px-2 transition-all duration-300 group">
                HOME
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-600 rounded-full"></span>
                <span className="absolute inset-0 bg-yellow-100 rounded-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            </li>

            <li>
              <a href="#" className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group">
                ABOUT US
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#" className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group">
                BLOG
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#" className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group">
                DISCLAIMER
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#" className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group">
                CONTACT US
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* SPACE */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>

    </header>
  );
}








