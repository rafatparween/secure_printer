"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Check,
  Shield,
  Lock,
  UserCheck,
  Cloud,
  AlertCircle,
  Key,
  Eye,
  Globe,
  Zap,
  Star
} from "lucide-react";

export default function PricingPlans() {
  const [securityOpen, setSecurityOpen] = useState(true);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [identityOpen, setIdentityOpen] = useState(false);

  const Tick = () => (
    <div className="flex justify-center">
      <Check size={18} className="text-green-600" />
    </div>
  );

  const Included = () => (
    <span className="text-green-600 font-medium">included</span>
  );

  const NotIncluded = () => (
    <span className="text-gray-400">not included</span>
  );

  return (
    <div className="w-full bg-[#f3f4f6] py-16 px-4">
      {/* Heading */}
      <div className="max-w-[1256px] mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Find the right plan for you
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Compare prices and key features to see which protection fits best.
        </p>
      </div>

      {/* Table */}
      <div className="max-w-[1256px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Plans Header */}
        <div className="grid grid-cols-4 border-b border-gray-200">
          <div className="p-8 font-semibold text-xl text-gray-900">
            Compare plans
          </div>

          {/* Standard */}
          <div className="p-8 border-l border-gray-200">
            <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">Basic</span>
            <h3 className="mt-4 text-gray-500 text-sm">Norton 360</h3>
            <h2 className="text-3xl font-bold mt-1">Standard</h2>
            <p className="text-green-600 mt-4 font-semibold text-lg">Save 57%*</p>
            <p className="text-sm text-gray-400 line-through">$94.99</p>
            <p className="text-sm font-medium text-gray-700">$39.99 first year</p>
            <p className="mt-4 text-sm text-gray-500">It works out as</p>
            <p className="text-4xl font-bold mt-1 text-gray-900">$3.33 <span className="text-base font-normal text-gray-500">/month</span></p>
          </div>

          {/* Deluxe */}
          <div className="p-8 border-l border-gray-200 bg-gray-50 relative">
            {/* <span className="bg-yellow-400 text-gray-900 text-xs px-3 py-1.5 rounded-full font-medium absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-sm">
              ⭐ Best value
            </span> */}
            <h3 className="mt-4 text-gray-500 text-sm">Norton 360</h3>
            <h2 className="text-3xl font-bold mt-1">Deluxe</h2>
            <p className="text-green-600 mt-4 font-semibold text-lg">Save 58%*</p>
            <p className="text-sm text-gray-400 line-through">$119.99</p>
            <p className="text-sm font-medium text-gray-700">$49.99 first year</p>
            <p className="mt-4 text-sm text-gray-500">It works out as</p>
            <p className="text-4xl font-bold mt-1 text-gray-900">$4.17 <span className="text-base font-normal text-gray-500">/month</span></p>
          </div>

          {/* Select Plus */}
          <div className="p-8 border-l border-gray-200">
            <span className="bg-yellow-400 text-gray-900 text-xs px-3 py-1.5 rounded-full font-medium">Complete solution</span>
            <h3 className="mt-4 text-gray-500 text-sm">Norton 360 with LifeLock</h3>
            <h2 className="text-3xl font-bold mt-1">Select Plus</h2>
            <p className="text-green-600 mt-4 font-semibold text-lg">Save 47%*</p>
            <p className="text-sm text-gray-400 line-through">$189.99</p>
            <p className="text-sm font-medium text-gray-700">$99.99 first year</p>
            <p className="mt-4 text-sm text-gray-500">It works out as</p>
            <p className="text-4xl font-bold mt-1 text-gray-900">$8.33 <span className="text-base font-normal text-gray-500">/month</span></p>
          </div>
        </div>

        {/* Subscription Row */}
        <div className="grid grid-cols-4 border-b border-gray-200">
          <div className="p-6"></div>
          {["Standard", "Deluxe", "Select Plus"].map((plan, i) => (
            <div key={i} className={`p-6 border-l border-gray-200 ${i === 1 ? "bg-gray-50" : ""}`}>
              <p className="text-sm text-gray-500 mb-4">Subscription details below.*</p>
              <button className={`w-full px-6 py-3.5 rounded-lg font-semibold transition-all hover:shadow-md ${
                i === 1 
                  ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900" 
                  : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              }`}>
                Buy {plan}
              </button>
            </div>
          ))}
        </div>

        {/* PROTECTION LEVEL ROW */}
        <div className="grid grid-cols-4 border-b border-gray-200">
          <div className="p-6 font-semibold text-gray-900">
            Protection level
          </div>
          <div className="p-6 border-l border-gray-200">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">
              Essential protection
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Strong protection for your devices and data, with added tools to help you stay safer online.
            </p>
          </div>
          <div className="p-6 border-l border-gray-200 bg-gray-50">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">
              Advanced protection
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Broader protection for multiple devices, with extra tools to help protect your privacy.
            </p>
          </div>
          <div className="p-6 border-l border-gray-200">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">
              Comprehensive protection
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Expanded protection that includes identity monitoring and support, alongside device and privacy protection.
            </p>
          </div>
        </div>

        {/* SECURITY DROPDOWN */}
        <div className="border-b border-gray-200">
          <div
            onClick={() => setSecurityOpen(!securityOpen)}
            className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-gray-600" />
              <span className="font-semibold text-lg text-gray-900">Security Features</span>
            </div>
            {securityOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
          </div>

          {securityOpen && (
            <div className="border-t border-gray-200">
              {/* Cloud Backup */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Cloud size={18} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Cloud Backup</p>
                      <p className="text-gray-500 text-xs mt-1">Prevent data loss by saving your files in the cloud</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center font-medium text-gray-900">2 GB <Tick /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center font-medium text-gray-900">50 GB <Tick /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center font-medium text-gray-900">250 GB <Tick /></div>
              </div>

              {/* Scam Protection */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-gray-500 mt-0.5" />
                    <p className="font-semibold text-gray-900">Scam Protection</p>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
              </div>

              {/* Scam Protection Pro */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Zap size={18} className="text-gray-500 mt-0.5" />
                    <p className="font-semibold text-gray-900">Scam Protection Pro</p>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><NotIncluded /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center"><NotIncluded /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
              </div>

              {/* Real Time */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield size={18} className="text-gray-500 mt-0.5" />
                    <p className="font-semibold text-gray-900">Real-Time Threat Protection</p>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
              </div>

              {/* Password */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Key size={18} className="text-gray-500 mt-0.5" />
                    <p className="font-semibold text-gray-900">Password Manager</p>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
              </div>

              {/* Deepfake */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Eye size={18} className="text-gray-500 mt-0.5" />
                    <p className="font-semibold text-gray-900">Deepfake Protection</p>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
              </div>
            </div>
          )}
        </div>

        {/* ONLINE PRIVACY */}
        <div className="border-b border-gray-200">
          <div
            onClick={() => setPrivacyOpen(!privacyOpen)}
            className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Lock size={20} className="text-gray-600" />
              <span className="font-semibold text-lg text-gray-900">Online Privacy</span>
            </div>
            {privacyOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
          </div>

          {privacyOpen && (
            <div className="border-t border-gray-200">
              {/* VPN */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Globe size={18} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Secure VPN</p>
                      <p className="text-gray-500 text-xs mt-1">Bank-grade encryption for private browsing</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
              </div>

              {/* Dark Web */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Eye size={18} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Dark Web Monitoring</p>
                      <p className="text-gray-500 text-xs mt-1">Monitor if your info appears on dark web</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center font-medium text-gray-900">Basic</div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center font-medium text-gray-900">Advanced</div>
                <div className="p-6 border-l border-b border-gray-200 text-center font-medium text-gray-900">Premium</div>
              </div>

              {/* Tracker Blocker */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield size={18} className="text-gray-500 mt-0.5" />
                    <p className="font-semibold text-gray-900">Tracker Blocker</p>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><NotIncluded /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center"><Included /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
              </div>
            </div>
          )}
        </div>

        {/* IDENTITY PROTECTION */}
        <div className="border-b border-gray-200">
          <div
            onClick={() => setIdentityOpen(!identityOpen)}
            className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <UserCheck size={20} className="text-gray-600" />
              <span className="font-semibold text-lg text-gray-900">Identity Protection</span>
            </div>
            {identityOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
          </div>

          {identityOpen && (
            <div className="border-t border-gray-200">
              {/* Identity Monitoring */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <UserCheck size={18} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Identity Monitoring</p>
                      <p className="text-gray-500 text-xs mt-1"> monitoring of personal information</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><NotIncluded /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center font-medium text-gray-900">Basic</div>
                <div className="p-6 border-l border-b border-gray-200 text-center font-medium text-gray-900">Advanced</div>
              </div>

              {/* Credit Alerts */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Credit Alerts</p>
                      <p className="text-gray-500 text-xs mt-1">Real-time credit file change alerts</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><NotIncluded /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center"><NotIncluded /></div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><Included /></div>
              </div>

              {/* Identity Recovery */}
              <div className="grid grid-cols-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield size={18} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Identity Recovery</p>
                      <p className="text-gray-500 text-xs mt-1">Expert support for identity restoration</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-l border-b border-gray-200 text-center"><NotIncluded /></div>
                <div className="p-6 border-l border-b border-gray-200 bg-gray-50 text-center font-medium text-gray-900">Standard</div>
                <div className="p-6 border-l border-b border-gray-200 text-center font-medium text-gray-900">Comprehensive</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Note */}
      {/* <div className="max-w-[1256px] mx-auto mt-8 text-center text-sm text-gray-500">
        * All prices shown are for the first year of subscription. Regular prices apply after the first term.
      </div> */}
    </div>
  );
}