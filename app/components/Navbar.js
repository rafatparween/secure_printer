// "use client";
// import { useState } from "react";
// import { FaPhoneAlt, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { FiUser } from "react-icons/fi";
// import Link from "next/link";
// import { useCart } from "../context/CartContext";
// import Image from "next/image";

// export default function Navbar() {
//   const { getTotalItems } = useCart();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-white border-b border-gray-200 relative z-50">
//       <div className="h-3 bg-gradient-to-b from-white to-yellow-50"></div>

//       <div className="max-w-[1320px] h-[80px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        
//         {/* LOGO */}
//         <div className="flex items-center space-x-4 mb-3 md:mb-0">
//           <div className="relative">
//             <Image 
//               src="/logo1.png" 
//               alt="Secureyourpc Logo" 
//               width={200} 
//               height={200} 
//               className="object-contain" 
//             />
//           </div>
//           <div>
//             <span className="text-lg text-gray-900 font-bold tracking-wide">
//               Authorised Reseller
//             </span>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center justify-between w-full md:w-auto">

//           {/* Desktop Icons */}
//           <div className="hidden md:flex flex-col md:flex-row items-center md:space-x-8">

//             {/* CALL NOW */}
//             <div className="flex items-center space-x-4 p-3 rounded-2xl bg-gradient-to-r from-yellow-50 to-white hover:from-yellow-100 hover:to-white border border-yellow-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md mb-3 md:mb-0">
//               <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-3 rounded-full shadow-md">
//                 <FaPhoneAlt className="text-black text-base" />
//               </div>
//               <div className="flex flex-col leading-tight">
//                 <span className="text-xs text-yellow-700 font-semibold tracking-wider uppercase">
//                   CALL NOW
//                 </span>
//                 <span className="text-lg font-bold text-gray-900 tracking-tight">
//                   +1 (833) 351-1202
//                 </span>
//               </div>
//             </div>

//             {/* Icons */}
//             <div className="flex items-center space-x-6 flex-wrap justify-center md:justify-start">

//               {/* Wishlist */}
//               <div className="relative group">
//                 <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-4 flex items-center justify-center transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-110 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
//                   <FaHeart className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
//                 </div>
//                 <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border border-white">
//                   0
//                 </span>
//               </div>

//               {/* User */}
//               <div className="group">
//   <Link href="/login">   {/* ← Your navigation link */}
//     <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-4 flex items-center justify-center transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-110 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
//       <FiUser className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
//     </div>
//   </Link>
// </div>

//               {/* Cart */}
//               <Link href="/cart">
//                 <div className="relative group cursor-pointer">
//                   <div className="flex items-center space-x-3 bg-gradient-to-br from-yellow-50 to-white rounded-2xl pl-4 pr-5 py-3 transition-all duration-300 group-hover:from-yellow-100 group-hover:to-white group-hover:scale-105 border border-yellow-200 group-hover:border-yellow-400 shadow-sm hover:shadow-md">
//                     <FaShoppingCart className="text-gray-700 text-xl group-hover:text-yellow-700 transition-colors duration-300" />
//                     <span className="text-base font-bold text-gray-900 group-hover:text-yellow-800 transition-colors">
//                       ${getTotalItems() > 0 ? getTotalItems() * 1 : 0}.00
//                     </span>
//                   </div>
//                   <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border border-white">
//                     {getTotalItems()}
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Hamburger */}
//           <div className="md:hidden ml-4">
//             <button
//               className="text-gray-700 text-2xl p-2"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="h-4 bg-gradient-to-b from-white to-yellow-50"></div>

//       {/* DESKTOP NAVIGATION */}
//       <nav className="w-full bg-gradient-to-r from-yellow-50 to-white border-t border-b border-yellow-200 hidden md:block">
//         <div className="max-w-[1320px] mx-auto flex justify-center">
//           <ul className="flex space-x-12 text-[16px] font-semibold py-5">
            
//             <li>
//               <Link
//                 href="/"
//                 className="relative text-yellow-800 pb-3 px-2 transition-all duration-300 group"
//               >
//                 HOME
//                 <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-600 rounded-full"></span>
//                 <span className="absolute inset-0 bg-yellow-100 rounded-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/about"
//                 className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group"
//               >
//                 ABOUT US
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/blog"
//                 className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group"
//               >
//                 BLOG
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/disclaimer"
//                 className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group"
//               >
//                 DISCLAIMER
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/contact"
//                 className="relative text-gray-700 pb-3 px-2 transition-all duration-300 hover:text-yellow-700 group"
//               >
//                 CONTACT US
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//           </ul>
//         </div>
//       </nav>

//       <div className="h-3 bg-gradient-to-t from-white to-yellow-50 hidden md:block"></div>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden z-40 ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-end px-4 pt-4">
//           <button
//             className="text-gray-700 text-2xl"
//             onClick={() => setMenuOpen(false)}
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <div className="py-8 px-6">
//           <ul className="flex flex-col space-y-6">

//             <li>
//               <Link
//                 href="/"
//                 className="relative text-yellow-800 font-semibold text-lg py-2 px-3 block transition-all duration-300 group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 HOME
//                 <span className="absolute bottom-0 left-3 w-[calc(100%-24px)] h-1 bg-yellow-600 rounded-full"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/about"
//                 className="relative text-gray-700 font-semibold text-lg py-2 px-3 block transition-all duration-300 hover:text-yellow-700 group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 ABOUT US
//                 <span className="absolute bottom-0 left-3 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/blog"
//                 className="relative text-gray-700 font-semibold text-lg py-2 px-3 block transition-all duration-300 hover:text-yellow-700 group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 BLOG
//                 <span className="absolute bottom-0 left-3 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/disclaimer"
//                 className="relative text-gray-700 font-semibold text-lg py-2 px-3 block transition-all duration-300 hover:text-yellow-700 group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 DISCLAIMER
//                 <span className="absolute bottom-0 left-3 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/contact"
//                 className="relative text-gray-700 font-semibold text-lg py-2 px-3 block transition-all duration-300 hover:text-yellow-700 group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 CONTACT US
//                 <span className="absolute bottom-0 left-3 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
//               </Link>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }



"use client";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Navbar() {
  const { getTotalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#242424] border-b border-gray-200 relative z-50">
      {/* Top Gradient Border */}
      <div className="h-2 bg-gradient-to-b from-white to-yellow-50"></div>

      {/* Main Navbar */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT SIDE - LOGO & DESKTOP NAVIGATION */}
          <div className="flex items-center">
            {/* Logo - Increased Size */}
            <div className="flex-shrink-0">
              <Image 
                src="/nortonnew.svg" 
                alt="Secureyourpc Logo" 
                width={220} 
                height={80} 
                className="object-contain w-40 h-14 sm:w-48 sm:h-16 md:w-56 md:h-20 lg:w-64 lg:h-22"
                priority
              />
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:block ml-10 xl:ml-12">
              <ul className="flex space-x-8 xl:space-x-10 text-[16px] xl:text-[17px] font-semibold">
                <li>
                  <Link
                    href="/"
                    className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
                  >
                    HOME
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-600 rounded-full"></span>
                    <span className="absolute inset-0 bg-white rounded-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
                  >
                    ABOUT US
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

                 <li>
                  <Link
                    href="/Products"
                    className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
                  >
                    PRODUCTS
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>


                <li>
                  <Link
                    href="/blog"
                    className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
                  >
                    BLOG
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

               
                <li>
                  <Link
                    href="/contact"
                    className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
                  >
                    CONTACT US
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* RIGHT SIDE - CART & MOBILE MENU BUTTON */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <div className="flex items-center space-x-2 bg-gradient-to-br from-yellow-50 to-white rounded-xl sm:rounded-2xl pl-3 pr-4 py-2 sm:pl-4 sm:pr-5 sm:py-3 transition-all duration-300 hover:from-yellow-100 hover:to-white hover:scale-105 border border-yellow-200 hover:border-yellow-400 shadow-sm hover:shadow-md">
                <FaShoppingCart className="text-gray-700 text-lg sm:text-xl hover:text-yellow-700 transition-colors duration-300" />
                <span className="text-sm sm:text-base font-bold text-gray-900 hover:text-yellow-800 transition-colors hidden sm:block">
                  ${getTotalItems() > 0 ? getTotalItems() * 1 : 0}.00
                </span>
              </div>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shadow-lg border border-white">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 text-2xl p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      {/* <div className="h-2 bg-gradient-to-t from-white to-yellow-50 hidden lg:block"></div> */}

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-white">
          <div className="flex-shrink-0">
            <Image 
              src="/logo1.png" 
              alt="Secureyourpc Logo" 
              width={180} 
              height={65} 
              className="object-contain"
              priority
            />
          </div>
          <button
            className="text-gray-700 text-2xl p-3 rounded-lg hover:bg-white transition-colors duration-200 border border-gray-200"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="py-8 px-6 h-full flex flex-col">
          <ul className="flex flex-col space-y-3 flex-1">
            <li>
              <Link
                href="/"
                className="flex items-center text-yellow-800 font-semibold text-lg py-5 px-6 rounded-xl bg-yellow-50 border-2 border-yellow-300 transition-all duration-300 hover:bg-yellow-100 hover:scale-105 shadow-sm"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative flex items-center">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-4"></span>
                  HOME
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="flex items-center text-gray-700 font-semibold text-lg py-5 px-6 rounded-xl hover:bg-gray-50 hover:text-yellow-700 border-2 border-transparent hover:border-yellow-200 transition-all duration-300 hover:scale-105"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 hover:bg-yellow-500 transition-colors"></span>
                ABOUT US
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="flex items-center text-gray-700 font-semibold text-lg py-5 px-6 rounded-xl hover:bg-gray-50 hover:text-yellow-700 border-2 border-transparent hover:border-yellow-200 transition-all duration-300 hover:scale-105"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 hover:bg-yellow-500 transition-colors"></span>
                BLOG
              </Link>
            </li>

            <li>
              <Link
                href="/disclaimer"
                className="flex items-center text-gray-700 font-semibold text-lg py-5 px-6 rounded-xl hover:bg-gray-50 hover:text-yellow-700 border-2 border-transparent hover:border-yellow-200 transition-all duration-300 hover:scale-105"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 hover:bg-yellow-500 transition-colors"></span>
                DISCLAIMER
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="flex items-center text-gray-700 font-semibold text-lg py-5 px-6 rounded-xl hover:bg-gray-50 hover:text-yellow-700 border-2 border-transparent hover:border-yellow-200 transition-all duration-300 hover:scale-105"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 hover:bg-yellow-500 transition-colors"></span>
                CONTACT US
              </Link>
            </li>
          </ul>

          {/* Mobile Cart Section */}
          <div className="mt-auto p-6 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border-2 border-yellow-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700 font-semibold text-lg">Cart Total:</span>
              <span className="text-xl font-bold text-yellow-700">
                ${getTotalItems() > 0 ? getTotalItems() * 1 : 0}.00
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <span>Items in cart:</span>
              <span className="font-semibold">{getTotalItems()} items</span>
            </div>
            <Link 
              href="/cart" 
              className="block w-full text-center bg-yellow-600 text-white font-semibold text-lg py-4 px-6 rounded-xl hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              View Cart & Checkout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}