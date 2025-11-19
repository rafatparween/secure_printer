import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-300 mt-16">
      <div className="max-w-[1320px] mx-auto px-6 py-16">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Company Info */}
          <div className="space-y-6">

            {/* LOGO BOX */}
            <div className="flex items-center space-x-3">
            
             <div className="flex items-center space-x-3">

  {/* IMAGE LOGO ADDED HERE */}
  <Image 
    src="/logo1.png"     // 👉 your logo path
    alt="logo"
    width={200}
    height={200}
    className="rounded-xl shadow-md"
  />

  <div>
   
    <span className="text-xs text-gray-500 font-medium tracking-wide block">
     Authorised Reseller
    </span>
  </div>

</div>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              EZ Tech Printer Solutions LLC is an Authorized Norton Empower Reseller specializing in providing genuine cybersecurity solutions and professional activation support.
            </p>

            {/* Icons Replaced With Images */}
            <div className="flex space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
                <Image src="/insta.webp" alt="icon1" width={30} height={30} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
                <Image src="/facebook.webp" alt="icon2" width={30} height={30} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
                <Image src="/twitter.webp" alt="icon3" width={30} height={30} />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-300">
                Help & Support
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/disclaimer" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-300">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Subscribe to our newsletter for the latest security updates and offers.
              </p>
            </div>

            {/* Input + Yellow Button */}
            <div className="space-y-4">
              <div className="flex group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 border border-gray-400 rounded-l-lg 
                    focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                />
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-r-lg 
                  hover:bg-yellow-600 transition-all duration-200 font-semibold shadow-sm">
                  Subscribe
                </button>
              </div>

              {/* Norton Box Image */}
              <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                <Image src="/logo1.png" alt="norton" width={100} height={40} />
                <p className="text-sm font-semibold text-gray-900 mt-2">No spam guaranteed</p>
                <p className="text-xs text-gray-500">Unsubscribe anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 <span className="font-semibold text-yellow-600">EZ Tech Printer Solutions LLC</span>.
              All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms-conditions" className="text-gray-600 hover:text-yellow-600 text-sm">
                TERMS & CONDITIONS
              </Link>
              <Link href="/activation-installation" className="text-gray-600 hover:text-yellow-600 text-sm">
                 ACTIVATION & INSTALLATION SUPPORT
              </Link>
               <Link href="/renewal" className="text-gray-600 hover:text-yellow-600 text-sm">
                  RENEWAL
              </Link>
              
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
