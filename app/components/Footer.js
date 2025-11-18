import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-300 mt-16">
      <div className="max-w-[1320px] mx-auto px-6 py-16">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Company Info */}
          <div className="space-y-6">

            {/* LOGO BOX — NO SVG */}
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500 rounded-xl p-3 shadow-md"></div>
              <div>
                <span className="text-2xl font-bold text-yellow-600">Secureyourpc</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide block">
                  Security Solutions
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Secureyourpc provides reliable cybersecurity solutions that protect your devices
              and personal information. We prevent malware, ransomware, and online threats.
            </p>

            {/* ICONS REMOVED → Only Clean Boxes */}
            <div className="flex space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300"></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300"></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300"></div>
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
                  <a className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-300">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    Checkout
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    My Account
                  </a>
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

              {/* No SVG → Clean Norton Box */}
              <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">No spam guaranteed</p>
                <p className="text-xs text-gray-500">Unsubscribe anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 <span className="font-semibold text-yellow-600">Secure Your PC</span>.
              All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <a className="text-gray-600 hover:text-yellow-600 text-sm">Terms of Service</a>
              <a className="text-gray-600 hover:text-yellow-600 text-sm">Privacy Policy</a>
              <a className="text-gray-600 hover:text-yellow-600 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
