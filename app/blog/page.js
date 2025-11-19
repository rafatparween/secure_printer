"use client";

import { useState } from "react";
import { FaSearch, FaCalendar, FaUser, FaArrowRight, FaTag, FaShare, FaComment, FaBookmark } from "react-icons/fa";
import Image from "next/image";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Cybersecurity Tips Every Home User Should Know",
      excerpt: "Protect your family and devices with these simple yet effective security practices that can prevent 90% of common cyber threats.",
      category: "Security Tips",
      author: "John Davis",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "/b2.avif",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Norton 360: Complete Protection Suite Explained",
      excerpt: "A deep dive into Norton 360 features and how each component works together to provide comprehensive digital protection.",
      category: "Product Guide",
      author: "Sarah Chen",
      date: "Dec 12, 2024",
      readTime: "8 min read",
       image: "/a4.avif",
    },
    {
      id: 3,
      title: "How to Spot Phishing Emails: A Practical Guide",
      excerpt: "Learn the telltale signs of phishing attempts and how to protect your personal information from email scams.",
      category: "Threat Awareness",
      author: "Mike Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
       image: "/a6.avif",
    },
    {
      id: 4,
      title: "The Importance of Regular Software Updates for Security",
      excerpt: "Why keeping your software updated is crucial for maintaining strong cybersecurity defenses against new threats.",
      category: "Best Practices",
      author: "Emily Watson",
      date: "Dec 8, 2024",
      readTime: "4 min read",
       image: "/a3.avif",
    },
    {
      id: 5,
      title: "Setting Up Parental Controls: Protecting Your Children Online",
      excerpt: "Step-by-step guide to configuring effective parental controls across devices and platforms.",
      category: "Family Safety",
      author: "David Kim",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      image: "/a2.avif",
    },
    {
      id: 6,
      title: "Mobile Security: Protecting Your Smartphone from Modern Threats",
      excerpt: "Essential security measures for your mobile devices in an increasingly mobile-first world.",
      category: "Mobile Security",
      author: "Lisa Thompson",
      date: "Dec 3, 2024",
      readTime: "5 min read",
       image: "/b3.avif",
    }
  ];

  const categories = [
    "All Topics",
    "Security Tips",
    "Product Guide",
    "Threat Awareness",
    "Best Practices",
    "Family Safety",
    "Mobile Security"
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
     
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm">
              <FaBookmark className="text-5xl" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Cybersecurity Blog
          </h1>
          <p className="text-yellow-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Expert Insights, Tips, and Guides to Keep You Protected
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-yellow-50 border border-yellow-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 rounded-xl text-gray-700 font-semibold hover:from-yellow-100 hover:to-white hover:border-yellow-400 hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 overflow-hidden mb-12 hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 md:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <span className="text-gray-500">{featuredPost.readTime}</span>
                </div>
                
                <button className="group bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
                  Read Article
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-yellow-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <FaUser className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="group flex items-center text-yellow-700 font-semibold hover:text-yellow-800 transition-colors duration-300">
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-400 hover:text-yellow-600 transition-colors duration-300">
                      <FaShare className="text-lg" />
                    </button>
                    <button className="text-gray-400 hover:text-yellow-600 transition-colors duration-300">
                      <FaBookmark className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Security Insights</h3>
            <p className="text-yellow-100 text-lg mb-6">
              Get the latest cybersecurity tips and product updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl border border-yellow-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-yellow-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Cybersecurity", "Norton 360", "Virus Protection", "Online Safety", "Privacy", "Parental Controls", "Mobile Security", "Phishing", "Software Updates", "Digital Protection"].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 rounded-xl text-gray-700 font-semibold hover:from-yellow-100 hover:to-white hover:border-yellow-400 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <FaTag className="inline mr-2 text-yellow-600" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
    </div>
  );
}