// "use client";

// import { useState } from "react";
// import { FaSearch, FaCalendar, FaUser, FaArrowRight, FaTag, FaShare, FaComment, FaBookmark } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";

// import Image from "next/image";
// import Help from "../components/Help";
// import DidYouKnow from "../components/DidYouKnow";



// export default function Blog() {
//   const [searchTerm, setSearchTerm] = useState("");
  
//   const blogPosts = [
//     {
//       id: 1,
//       title: "5 Essential Cybersecurity Tips Every Home User Should Know",
//       excerpt: "Protect your family and devices with these simple yet effective security practices that can prevent 90% of common cyber threats.",
//       category: "Security Tips",
//       author: "John Davis",
//       date: "Dec 15, 2024",
//       readTime: "5 min read",
//       image: "/b2.avif",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Understanding Norton 360: Complete Protection Suite Explained",
//       excerpt: "A deep dive into Norton 360 features and how each component works together to provide comprehensive digital protection.",
//       category: "Product Guide",
//       author: "Sarah Chen",
//       date: "Dec 12, 2024",
//       readTime: "8 min read",
//        image: "/a4.avif",
//     },
//     {
//       id: 3,
//       title: "How to Spot Phishing Emails: A Practical Guide",
//       excerpt: "Learn the telltale signs of phishing attempts and how to protect your personal information from email scams.",
//       category: "Threat Awareness",
//       author: "Mike Rodriguez",
//       date: "Dec 10, 2024",
//       readTime: "6 min read",
//        image: "/a6.avif",
//     },
//     {
//       id: 4,
//       title: "The Importance of Regular Software Updates for Security",
//       excerpt: "Why keeping your software updated is crucial for maintaining strong cybersecurity defenses against new threats.",
//       category: "Best Practices",
//       author: "Emily Watson",
//       date: "Dec 8, 2024",
//       readTime: "4 min read",
//        image: "/a3.avif",
//     },
//     {
//       id: 5,
//       title: "Setting Up Parental Controls: Protecting Your Children Online",
//       excerpt: "Step-by-step guide to configuring effective parental controls across devices and platforms.",
//       category: "Family Safety",
//       author: "David Kim",
//       date: "Dec 5, 2024",
//       readTime: "7 min read",
//       image: "/a2.avif",
//     },
//     {
//       id: 6,
//       title: "Mobile Security: Protecting Your Smartphone from Modern Threats",
//       excerpt: "Essential security measures for your mobile devices in an increasingly mobile-first world.",
//       category: "Mobile Security",
//       author: "Lisa Thompson",
//       date: "Dec 3, 2024",
//       readTime: "5 min read",
//        image: "/b3.avif",
//     }
//   ];

//   const categories = [
//     "All Topics",
//     "Security Tips",
//     "Product Guide",
//     "Threat Awareness",
//     "Best Practices",
//     "Family Safety",
//     "Mobile Security"
//   ];

//   const featuredPost = blogPosts.find(post => post.featured);

//   return (
//     <>
//     <section
//   className="w-[1248px] h-[350px] mt-[20px] bg-cover bg-center flex items-center justify-center mx-auto rounded-2xl overflow-hidden shadow-2xl"
//   style={{ backgroundImage: "url('/woman.webp')" }}
// >
//   <div className="max-w-5xl w-full px-4">
//     <h1 className="text-4xl md:text-[43px] font-extrabold text-black mb-8">
//       What can we help you with?
//     </h1>

//     <div className="flex items-center bg-white rounded-full shadow-lg px-6 py-4 w-full max-w-3xl border border-gray-200">
//       <FiSearch className="text-gray-500 text-xl mr-3" />
//       <input
//         type="text"
//         placeholder="Type your questions or issue here"
//         className="w-full outline-none text-gray-700 text-lg"
//       />
//     </div>
//   </div>
// </section>

// <Help/>
// <DidYouKnow/>
    
//     <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
     
      
//       {/* Hero Banner */}
      

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         {/* Search and Filter Section */}
//         <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 mb-12">
//           <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
//             {/* Search Bar */}
//             <div className="flex-1 w-full">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <FaSearch className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 bg-yellow-50 border border-yellow-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
//                 />
//               </div>
//             </div>

//             {/* Categories */}
//             <div className="flex flex-wrap gap-3 justify-center">
//               {categories.map((category, index) => (
//                 <button
//                   key={index}
//                   className="px-4 py-2 bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 rounded-xl text-gray-700 font-semibold hover:from-yellow-100 hover:to-white hover:border-yellow-400 hover:scale-105 transition-all duration-300 shadow-sm"
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Featured Post */}
//         {featuredPost && (
//           <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 overflow-hidden mb-12 hover:shadow-xl transition-all duration-300">
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="relative h-80 md:h-full">
//                 <Image
//                   src={featuredPost.image}
//                   alt={featuredPost.title}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     Featured
//                   </span>
//                 </div>
//               </div>
              
//               <div className="p-8 flex flex-col justify-center">
//                 <div className="flex items-center mb-4">
//                   <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
//                     {featuredPost.category}
//                   </span>
//                 </div>
                
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//                   {featuredPost.title}
//                 </h2>
                
//                 <p className="text-gray-600 text-lg mb-6 leading-relaxed">
//                   {featuredPost.excerpt}
//                 </p>
                
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center space-x-4 text-gray-500">
//                     <div className="flex items-center">
//                       <FaUser className="mr-2" />
//                       <span>{featuredPost.author}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <FaCalendar className="mr-2" />
//                       <span>{featuredPost.date}</span>
//                     </div>
//                   </div>
//                   <span className="text-gray-500">{featuredPost.readTime}</span>
//                 </div>
                
//                 <button className="group bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
//                   Read Article
//                   <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Blog Posts Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {blogPosts.filter(post => !post.featured).map((post) => (
//             <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-yellow-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
//               {/* Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     {post.category}
//                   </span>
//                 </div>
//               </div>
              
//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300 line-clamp-2">
//                   {post.title}
//                 </h3>
                
//                 <p className="text-gray-600 mb-4 line-clamp-3">
//                   {post.excerpt}
//                 </p>
                
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="flex items-center">
//                       <FaUser className="mr-1" />
//                       <span>{post.author}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <FaCalendar className="mr-1" />
//                       <span>{post.date}</span>
//                     </div>
//                   </div>
//                   <span>{post.readTime}</span>
//                 </div>
                
//                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                   <button className="group flex items-center text-yellow-700 font-semibold hover:text-yellow-800 transition-colors duration-300">
//                     Read More
//                     <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
                  
//                   <div className="flex items-center space-x-3">
//                     <button className="text-gray-400 hover:text-yellow-600 transition-colors duration-300">
//                       <FaShare className="text-lg" />
//                     </button>
//                     <button className="text-gray-400 hover:text-yellow-600 transition-colors duration-300">
//                       <FaBookmark className="text-lg" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Newsletter Subscription */}
//         <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl p-8 md:p-12 text-white text-center">
//           <div className="max-w-2xl mx-auto">
//             <h3 className="text-3xl font-bold mb-4">Stay Updated with Security Insights</h3>
//             <p className="text-yellow-100 text-lg mb-6">
//               Get the latest cybersecurity tips and product updates delivered to your inbox.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 rounded-2xl border border-yellow-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
//               />
//               <button className="bg-white text-yellow-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Popular Tags */}
//         <div className="mt-12 text-center">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h3>
//           <div className="flex flex-wrap justify-center gap-3">
//             {["Cybersecurity", "Norton 360", "Virus Protection", "Online Safety", "Privacy", "Parental Controls", "Mobile Security", "Phishing", "Software Updates", "Digital Protection"].map((tag, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 rounded-xl text-gray-700 font-semibold hover:from-yellow-100 hover:to-white hover:border-yellow-400 transition-all duration-300 cursor-pointer shadow-sm"
//               >
//                 <FaTag className="inline mr-2 text-yellow-600" />
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
//     </div>
//     </>
//   );
// }



"use client";

import { useState } from "react";
import { FaSearch, FaCalendar, FaUser, FaArrowRight, FaTag, FaShare, FaComment, FaBookmark } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import Image from "next/image";
import Help from "../components/Help";
import DidYouKnow from "../components/DidYouKnow";
import JivoChat from "../JivoChat";

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
    <>
      {/* Hero Section - Fixed: Removed fixed width, made fully responsive */}
      <section
        className="w-full min-h-[250px] sm:min-h-[300px] md:h-[350px] mt-4 sm:mt-6 md:mt-[20px] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8 mx-auto rounded-2xl overflow-hidden shadow-2xl max-w-7xl lg:max-w-[1248px]"
        style={{ backgroundImage: "url('/woman.webp')" }}
      >
        <div className="w-full max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-extrabold text-black mb-4 sm:mb-6 md:mb-8 text-center md:text-left">
            What can we help you with?
          </h1>

          <div className="flex items-center bg-white rounded-full shadow-lg px-4 sm:px-6 py-3 sm:py-4 w-full max-w-3xl mx-auto md:mx-0 border border-gray-200">
            <FiSearch className="text-gray-500 text-lg sm:text-xl mr-2 sm:mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Type your questions or issue here"
              className="w-full outline-none text-gray-700 text-base sm:text-lg bg-transparent"
            />
          </div>
        </div>
      </section>

      <Help />
      <DidYouKnow />

      <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 overflow-x-hidden">
        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start lg:items-center justify-between">
              {/* Search Bar */}
              <div className="w-full lg:flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400 text-sm sm:text-base" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-yellow-50 border border-yellow-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Categories - Horizontal scroll on mobile, wrap on larger screens */}
              <div className="w-full lg:w-auto overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mb-2 lg:mb-0">
                <div className="flex lg:flex-wrap gap-2 sm:gap-3 whitespace-nowrap lg:whitespace-normal lg:justify-center">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-gray-700 hover:from-yellow-100 hover:to-white hover:border-yellow-400 hover:scale-105 transition-all duration-300 shadow-sm flex-shrink-0"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 overflow-hidden mb-8 sm:mb-12 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="relative h-64 sm:h-80 lg:h-full w-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaUser className="mr-1 sm:mr-2 flex-shrink-0" />
                        <span className="truncate max-w-[120px] sm:max-w-none">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendar className="mr-1 sm:mr-2 flex-shrink-0" />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>

                  <button className="group bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto">
                    Read Article
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-yellow-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-yellow-700 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex items-center">
                        <FaUser className="mr-1" />
                        <span className="truncate max-w-[80px] sm:max-w-none">{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendar className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    <button className="group flex items-center text-yellow-700 font-semibold hover:text-yellow-800 transition-colors duration-300 text-sm sm:text-base">
                      Read More
                      <FaArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <button className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 p-1">
                        <FaShare className="text-base sm:text-lg" />
                      </button>
                      <button className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 p-1">
                        <FaBookmark className="text-base sm:text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
            <div className="w-full max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Stay Updated with Security Insights</h3>
              <p className="text-yellow-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Get the latest cybersecurity tips and product updates delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 px-4 py-3 rounded-xl sm:rounded-2xl border border-yellow-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                />
                <button className="w-full sm:w-auto bg-white text-yellow-700 px-6 py-3 rounded-xl sm:rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-8 sm:mt-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Popular Topics</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {["Cybersecurity", "Norton 360", "Virus Protection", "Online Safety", "Privacy", "Parental Controls", "Mobile Security", "Phishing", "Software Updates", "Digital Protection"].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-gray-700 hover:from-yellow-100 hover:to-white hover:border-yellow-400 transition-all duration-300 cursor-pointer shadow-sm inline-flex items-center"
                >
                  <FaTag className="inline mr-1 sm:mr-2 text-yellow-600 text-xs sm:text-sm" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="h-3 bg-gradient-to-t from-white to-yellow-50"></div>
      </div>
      <JivoChat/>
     
    </>
  );
}