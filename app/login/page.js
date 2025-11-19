"use client";

import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaGoogle, FaFacebook, FaApple, FaArrowRight } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 2000);
  };

  const socialLogins = [
    {
      icon: FaGoogle,
      name: "Google",
      color: "from-red-500 to-red-600",
      textColor: "text-white"
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      color: "from-blue-600 to-blue-700",
      textColor: "text-white"
    },
    {
      icon: FaApple,
      name: "Apple",
      color: "from-gray-800 to-gray-900",
      textColor: "text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
     
      
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[80vh] px-4 py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-yellow-200 hover:shadow-2xl transition-all duration-300">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-t-2xl p-8 text-white text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <FaShieldAlt className="text-3xl" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-yellow-100">Sign in to your Norton account</p>
            </div>

            {/* Card Body */}
            <div className="p-8">
              {/* Social Login Buttons */}
              <div className="space-y-4 mb-6">
                {socialLogins.map((social, index) => (
                  <button
                    key={index}
                    className={`w-full bg-gradient-to-r ${social.color} ${social.textColor} py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3`}
                  >
                    <social.icon className="text-xl" />
                    <span>Continue with {social.name}</span>
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="relative flex items-center my-8">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm font-semibold">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold text-sm">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-gray-700 font-semibold text-sm">Password</label>
                    <Link href="/forgot-password" className="text-yellow-600 hover:text-yellow-700 text-sm font-semibold transition-colors duration-300">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-12 py-4 bg-yellow-50 border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-yellow-600 transition-colors duration-300"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded-md transition-all duration-300 ${
                        formData.rememberMe 
                          ? 'bg-yellow-600 border-yellow-600' 
                          : 'bg-white border-gray-300'
                      }`}>
                        {formData.rememberMe && (
                          <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-700 text-sm font-semibold">Remember me</span>
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-yellow-700 hover:to-yellow-800 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <FaArrowRight className="text-sm" />
                    </>
                  )}
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-300">
                    Sign up now
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <FaLock className="text-green-500 text-xl mx-auto mb-2" />
              <p className="text-xs text-gray-600 font-semibold">Secure Login</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <FaShieldAlt className="text-blue-500 text-xl mx-auto mb-2" />
              <p className="text-xs text-gray-600 font-semibold">256-bit SSL</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <svg className="w-5 h-5 text-purple-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <p className="text-xs text-gray-600 font-semibold">Privacy Protected</p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-6 border border-yellow-200 text-center">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <FaShieldAlt className="text-green-500 text-xl" />
              <span className="text-gray-700 font-semibold">Norton Secured</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your login information is protected by Norton security
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}