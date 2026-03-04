// "use client";
// import { useState } from "react";
// import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import Link from "next/link";
// import { useCart } from "../context/CartContext";
// import Image from "next/image";

// export default function Navbar() {
//   const { getTotalItems } = useCart();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-[#242424] border-b border-gray-200 relative z-50">
//       {/* Top Gradient Border */}
//       <div className="h-2 bg-gradient-to-b from-white to-yellow-50"></div>

//       {/* Main Navbar */}
//       <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
          
//           {/* LEFT SIDE - LOGO & DESKTOP NAVIGATION */}
//           <div className="flex items-center">
//             {/* Logo - Increased Size */}
//             <div className="flex-shrink-0">
//               <Image 
//                 src="/nortonnew.svg" 
//                 alt="Secureyourpc Logo" 
//                 width={220} 
//                 height={80} 
//                 className="object-contain w-40 h-14 sm:w-48 sm:h-16 md:w-56 md:h-20 lg:w-64 lg:h-22"
//                 priority
//               />
//             </div>

//             {/* Desktop Navigation - Hidden on mobile */}
//             <nav className="hidden lg:block ml-10 xl:ml-12">
//               <ul className="flex space-x-8 xl:space-x-10 text-[16px] xl:text-[17px] font-semibold">
//                 <li>
//                   <Link
//                     href="/"
//                     className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
//                   >
//                     HOME
//                     <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-600 rounded-full"></span>
//                     <span className="absolute inset-0 bg-white rounded-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/about"
//                     className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
//                   >
//                     ABOUT US
//                     <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                   </Link>
//                 </li>

//                  <li>
//                   <Link
//                     href="/Products"
//                     className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
//                   >
//                     PRODUCTS
//                     <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                   </Link>
//                 </li>


//                 <li>
//                   <Link
//                     href="/blog"
//                     className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
//                   >
//                     BLOG
//                     <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                   </Link>
//                 </li>

               
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
//                   >
//                     CONTACT US
//                     <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           {/* RIGHT SIDE - CART & MOBILE MENU BUTTON */}
//           <div className="flex items-center space-x-4 sm:space-x-6">
//             {/* Cart Icon */}
//             <Link href="/cart" className="relative">
//               <div className="flex items-center space-x-2 bg-gradient-to-br from-yellow-50 to-white rounded-xl sm:rounded-2xl pl-3 pr-4 py-2 sm:pl-4 sm:pr-5 sm:py-3 transition-all duration-300 hover:from-yellow-100 hover:to-white hover:scale-105 border border-yellow-200 hover:border-yellow-400 shadow-sm hover:shadow-md">
//                 <FaShoppingCart className="text-gray-700 text-lg sm:text-xl hover:text-yellow-700 transition-colors duration-300" />
//                 <span className="text-sm sm:text-base font-bold text-gray-900 hover:text-yellow-800 transition-colors hidden sm:block">
//                   ${getTotalItems() > 0 ? getTotalItems() * 1 : 0}.00
//                 </span>
//               </div>
//               {getTotalItems() > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shadow-lg border border-white">
//                   {getTotalItems()}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden text-gray-700 text-2xl p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gradient Border */}
//       {/* <div className="h-2 bg-gradient-to-t from-white to-yellow-50 hidden lg:block"></div> */}

//       {/* MOBILE MENU OVERLAY */}
//       {menuOpen && (
//         <div 
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       {/* MOBILE SIDE MENU */}
//       <div
//         className={`fixed top-0 left-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Mobile Menu Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-white">
//           <div className="flex-shrink-0">
//             <Image 
//               src="/logo1.png" 
//               alt="Secureyourpc Logo" 
//               width={180} 
//               height={65} 
//               className="object-contain"
//               priority
//             />
//           </div>
//           <button
//             className="text-gray-700 text-2xl p-3 rounded-lg hover:bg-white transition-colors duration-200 border border-gray-200"
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close menu"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         {/* Mobile Navigation Links */}
//         <div className="py-8 px-6 h-full flex flex-col">
//           <ul className="flex flex-col space-y-3 flex-1">
//             <li>
//               <Link
//                 href="/"
//                 className="flex items-center text-yellow-800 font-semibold text-lg py-5 px-6 rounded-xl bg-yellow-50 border-2 border-yellow-300 transition-all duration-300 hover:bg-yellow-100 hover:scale-105 shadow-sm"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <span className="relative flex items-center">
//                   <span className="w-2 h-2 bg-yellow-600 rounded-full mr-4"></span>
//                   HOME
//                 </span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/about"
//                 className="flex items-center text-gray-700 font-semibold text-lg py-5 px-6 rounded-xl hover:bg-gray-50 hover:text-yellow-700 border-2 border-transparent hover:border-yellow-200 transition-all duration-300 hover:scale-105"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 hover:bg-yellow-500 transition-colors"></span>
//                 ABOUT US
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/blog"
//                 className="flex items-center text-gray-700 font-semibold text-lg py-5 px-6 rounded-xl hover:bg-gray-50 hover:text-yellow-700 border-2 border-transparent hover:border-yellow-200 transition-all duration-300 hover:scale-105"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 hover:bg-yellow-500 transition-colors"></span>
//                 BLOG
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/disclaimer"
//                 className="flex items-center text-gray-700 font-semibold text-lg py-5 px-6 rounded-xl hover:bg-gray-50 hover:text-yellow-700 border-2 border-transparent hover:border-yellow-200 transition-all duration-300 hover:scale-105"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 hover:bg-yellow-500 transition-colors"></span>
//                 DISCLAIMER
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/contact"
//                 className="flex items-center text-gray-700 font-semibold text-lg py-5 px-6 rounded-xl hover:bg-gray-50 hover:text-yellow-700 border-2 border-transparent hover:border-yellow-200 transition-all duration-300 hover:scale-105"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 hover:bg-yellow-500 transition-colors"></span>
//                 CONTACT US
//               </Link>
//             </li>
//           </ul>

//           {/* Mobile Cart Section */}
//           <div className="mt-auto p-6 bg-gradient-to-r from-yellow-50 to-white rounded-2xl border-2 border-yellow-200 shadow-sm">
//             <div className="flex items-center justify-between mb-4">
//               <span className="text-gray-700 font-semibold text-lg">Cart Total:</span>
//               <span className="text-xl font-bold text-yellow-700">
//                 ${getTotalItems() > 0 ? getTotalItems() * 1 : 0}.00
//               </span>
//             </div>
//             <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
//               <span>Items in cart:</span>
//               <span className="font-semibold">{getTotalItems()} items</span>
//             </div>
//             <Link 
//               href="/cart" 
//               className="block w-full text-center bg-yellow-600 text-white font-semibold text-lg py-4 px-6 rounded-xl hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg"
//               onClick={() => setMenuOpen(false)}
//             >
//               View Cart & Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Navbar() {
  const { getTotalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===== Prevent body scroll when menu opens (Mobile fix) ===== */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="w-full bg-[#242424] border-b border-gray-200 relative z-50 overflow-x-hidden">

      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-b from-white to-yellow-50"></div>

      {/* ================= NAVBAR ================= */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[72px] lg:h-20">

          {/* LEFT SIDE */}
          <div className="flex items-center min-w-0">

            {/* LOGO (responsive safe scaling) */}
            <div className="flex-shrink-0">
              <Image
                src="/nortonnew.svg"
                alt="Secureyourpc Logo"
                width={220}
                height={80}
                priority
                className="
                  object-contain
                  w-[140px]
                  sm:w-[170px]
                  md:w-[200px]
                  lg:w-64
                  h-auto
                "
              />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:block ml-10 xl:ml-12">
              <ul className="flex space-x-8 xl:space-x-10 text-[16px] xl:text-[17px] font-semibold">

                {[
                  { name: "HOME", href: "/" },
                  { name: "ABOUT US", href: "/about" },
                  { name: "PRODUCTS", href: "/Products" },
                  { name: "BLOG", href: "/blog" },
                  { name: "CONTACT US", href: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}

              </ul>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-3 sm:space-x-6">

            {/* CART */}
            <Link href="/cart" className="relative shrink-0">
              <div className="flex items-center space-x-2 bg-gradient-to-br from-yellow-50 to-white rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 border border-yellow-200 shadow-sm hover:scale-105 transition">

                <FaShoppingCart className="text-gray-700 text-lg sm:text-xl" />

                <span className="hidden sm:block text-sm sm:text-base font-bold text-gray-900">
                  ${getTotalItems() > 0 ? getTotalItems() : 0}.00
                </span>
              </div>

              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border border-white">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition border border-white/20"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= MOBILE SIDE MENU ================= */}
      <aside
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-yellow-50 to-white">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={160}
            height={60}
            className="object-contain"
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl p-2 border rounded-lg"
          >
            <FaTimes />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col h-[calc(100%-80px)] p-6 overflow-y-auto">

          <ul className="space-y-3 flex-1">
            {[
              ["HOME", "/"],
              ["ABOUT US", "/about"],
              ["BLOG", "/blog"],
              ["DISCLAIMER", "/disclaimer"],
              ["CONTACT US", "/contact"],
            ].map(([name, link], i) => (
              <li key={i}>
                <Link
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="block font-semibold text-lg py-4 px-5 rounded-xl hover:bg-gray-50 transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CART BOX */}
          <div className="mt-6 p-5 bg-yellow-50 rounded-xl border">
            <p className="font-semibold mb-2">
              Cart Total: $
              {getTotalItems() > 0 ? getTotalItems() : 0}.00
            </p>

            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition"
            >
              View Cart & Checkout
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}