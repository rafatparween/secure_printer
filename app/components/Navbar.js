// "use client";
// import { useState, useEffect } from "react";
// import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import Link from "next/link";
// import { useCart } from "../context/CartContext";
// import Image from "next/image";

// export default function Navbar() {
//   const { getTotalItems } = useCart();
//   const [menuOpen, setMenuOpen] = useState(false);

//   /* ===== Prevent body scroll when menu opens (Mobile fix) ===== */
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "auto";
//   }, [menuOpen]);

//   return (
//     <header className="w-full bg-[#242424] border-b border-gray-200 relative z-50 overflow-x-hidden">

//       {/* Top Gradient */}
//       <div className="h-2 bg-gradient-to-b from-white to-yellow-50"></div>

//       {/* ================= NAVBAR ================= */}
//       <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center min-h-[72px] lg:h-20">

//           {/* LEFT SIDE */}
//           <div className="flex items-center min-w-0">

//             {/* LOGO (responsive safe scaling) */}
//             <div className="flex-shrink-0">
//               <Image
//                 src="/nortonnew.svg"
//                 alt="Secureyourpc Logo"
//                 width={220}
//                 height={80}
//                 priority
//                 className="
//                   object-contain
//                   w-[140px]
//                   sm:w-[170px]
//                   md:w-[200px]
//                   lg:w-64
//                   h-auto
//                 "
//               />
//             </div>

//             {/* DESKTOP NAV */}
//             <nav className="hidden lg:block ml-10 xl:ml-12">
//               <ul className="flex space-x-8 xl:space-x-10 text-[16px] xl:text-[17px] font-semibold">

//                 {[
//                   { name: "HOME", href: "/" },
//                   { name: "ABOUT US", href: "/about" },
//                   { name: "PRODUCTS", href: "/Products" },
//                   { name: "BLOG", href: "/blog" },
//                   { name: "CONTACT US", href: "/contact" },
//                 ].map((item, i) => (
//                   <li key={i}>
//                     <Link
//                       href={item.href}
//                       className="relative text-white py-2 px-3 transition-all duration-300 hover:text-yellow-700 group"
//                     >
//                       {item.name}
//                       <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                   </li>
//                 ))}

//               </ul>
//             </nav>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center space-x-3 sm:space-x-6">

//             {/* CART */}
//             <Link href="/cart" className="relative shrink-0">
//               <div className="flex items-center space-x-2 bg-gradient-to-br from-yellow-50 to-white rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 border border-yellow-200 shadow-sm hover:scale-105 transition">

//                 <FaShoppingCart className="text-gray-700 text-lg sm:text-xl" />

//                 <span className="hidden sm:block text-sm sm:text-base font-bold text-gray-900">
//                   ${getTotalItems() > 0 ? getTotalItems() : 0}.00
//                 </span>
//               </div>

//               {getTotalItems() > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border border-white">
//                   {getTotalItems()}
//                 </span>
//               )}
//             </Link>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition border border-white/20"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>

//           </div>
//         </div>
//       </div>

//       {/* ================= OVERLAY ================= */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
//           menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setMenuOpen(false)}
//       />

//       {/* ================= MOBILE SIDE MENU ================= */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* HEADER */}
//         <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-yellow-50 to-white">
//           <Image
//             src="/logo1.png"
//             alt="Logo"
//             width={160}
//             height={60}
//             className="object-contain"
//           />

//           <button
//             onClick={() => setMenuOpen(false)}
//             className="text-2xl p-2 border rounded-lg"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         {/* LINKS */}
//         <div className="flex flex-col h-[calc(100%-80px)] p-6 overflow-y-auto">

//           <ul className="space-y-3 flex-1">
//             {[
//               ["HOME", "/"],
//               ["ABOUT US", "/about"],
//               ["BLOG", "/blog"],
//               ["DISCLAIMER", "/disclaimer"],
//               ["CONTACT US", "/contact"],
//             ].map(([name, link], i) => (
//               <li key={i}>
//                 <Link
//                   href={link}
//                   onClick={() => setMenuOpen(false)}
//                   className="block font-semibold text-lg py-4 px-5 rounded-xl hover:bg-gray-50 transition"
//                 >
//                   {name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* CART BOX */}
//           <div className="mt-6 p-5 bg-yellow-50 rounded-xl border">
//             <p className="font-semibold mb-2">
//               Cart Total: $
//               {getTotalItems() > 0 ? getTotalItems() : 0}.00
//             </p>

//             <Link
//               href="/cart"
//               onClick={() => setMenuOpen(false)}
//               className="block text-center bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition"
//             >
//               View Cart & Checkout
//             </Link>
//           </div>
//         </div>
//       </aside>
//     </header>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
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
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[72px] lg:h-20">

          {/* LEFT SIDE */}
          <div className="flex items-center min-w-0">

            {/* LOGO */}
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

          {/* RIGHT SIDE - Toll Free + Cart */}
          <div className="flex items-center space-x-5 sm:space-x-7 lg:space-x-10">

            {/* Toll Free - Icon with Call Now above number */}
            <a 
              href="tel:18006055408" 
              className="hidden sm:flex items-center space-x-2 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-amber-500 p-2 rounded-full shadow-md group-hover:scale-110 transition-all duration-300">
                <FaPhoneAlt className="text-white text-xs" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-semibold text-yellow-400 uppercase tracking-wider">Call Now</span>
                <span className="text-white font-bold text-sm leading-tight">1-800-605-5408</span>
              </div>
            </a>

            {/* CART */}
            <Link href="/cart" className="relative shrink-0">
              <div className="flex items-center space-x-2 bg-gradient-to-br from-yellow-50 to-white rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 border border-yellow-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                <FaShoppingCart className="text-gray-700 text-base sm:text-lg" />
                <span className="hidden sm:block text-sm font-bold text-gray-900">
                  ${getTotalItems() > 0 ? getTotalItems() : 0}.00
                </span>
              </div>

              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border-2 border-white shadow-md">
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

          {/* Mobile Toll Free */}
          <a
            href="tel:18006055408"
            onClick={() => setMenuOpen(false)}
            className="mb-5 flex items-center space-x-3 pb-3 border-b border-gray-100 group"
          >
            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 p-2 rounded-full shadow-md">
              <FaPhoneAlt className="text-white text-xs" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold text-yellow-600 uppercase tracking-wider">Call Now</span>
              <span className="text-gray-800 font-bold text-sm">1-800-605-5408</span>
            </div>
          </a>

          <ul className="space-y-2 flex-1">
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
                  className="block font-semibold text-base py-3 px-4 rounded-xl hover:bg-gray-50 transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CART BOX */}
          <div className="mt-4 p-4 bg-yellow-50 rounded-xl border">
            <p className="font-semibold mb-2 text-sm">
              Cart Total: $
              {getTotalItems() > 0 ? getTotalItems() : 0}.00
            </p>

            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-yellow-600 text-white font-semibold py-2.5 rounded-lg hover:bg-yellow-700 transition text-sm"
            >
              View Cart & Checkout
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}