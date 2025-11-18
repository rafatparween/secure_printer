

// "use client";

// import React, { useState, useEffect } from 'react';
// import { printerProducts } from '../data/printerProducts';
// import { useCart } from '../context/CartContext';

// const PrinterProductList = () => {
//   const [products] = useState(printerProducts);
//   const [filteredProducts, setFilteredProducts] = useState(printerProducts);
//   const [sortBy, setSortBy] = useState('featured');
//   const [priceRange, setPriceRange] = useState([0, 2000]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [wishlist, setWishlist] = useState(new Set());
//   const [cart, setCart] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const {addToCart} = useCart();

//   // Filter products based on category and price
//   useEffect(() => {
//     let filtered = [...products];
    
//     // Filter by category
//     if (selectedCategory !== 'all') {
//       filtered = filtered.filter(product => product.category === selectedCategory);
//     }
    
//     // Filter by price
//     filtered = filtered.filter(product => 
//       product.discountPrice >= priceRange[0] && product.discountPrice <= priceRange[1]
//     );
    
//     // Sort products
//     switch (sortBy) {
//       case 'price-low':
//         filtered.sort((a, b) => a.discountPrice - b.discountPrice);
//         break;
//       case 'price-high':
//         filtered.sort((a, b) => b.discountPrice - a.discountPrice);
//         break;
//       case 'rating':
//         filtered.sort((a, b) => b.rating - a.rating);
//         break;
//       case 'newest':
//         filtered.sort((a, b) => b.id - a.id);
//         break;
//       default:
//         // featured - keep original order
//         break;
//     }
    
//     setFilteredProducts(filtered);
//   }, [selectedCategory, priceRange, sortBy, products]);

//   // Update cart count
//   useEffect(() => {
//     const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//     setCartCount(totalItems);
//   }, [cart]);

//   const toggleWishlist = (productId) => {
//     const newWishlist = new Set(wishlist);
//     if (newWishlist.has(productId)) {
//       newWishlist.delete(productId);
//     } else {
//       newWishlist.add(productId);
//     }
//     setWishlist(newWishlist);
//   };

 

//   const removeFromCart = (productId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(productId);
//       return;
//     }
    
//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const getTotalCartPrice = () => {
//     return cart.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
//   };

//   const categories = ['all', 'Home & Office', 'Professional', 'Professional Photo'];

//   return (
//     <div>
    
    

//       {/* Filters & Controls */}
//       <section className="bg-white/10 backdrop-blur-md border-y border-white/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-white mb-2">Category</label>
//               <select 
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
//               >
//                 {categories.map(category => (
//                   <option key={category} value={category} className="bg-slate-800">
//                     {category === 'all' ? 'All Printers' : category}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-white mb-2">Price Range</label>
//               <div className="flex items-center space-x-4">
//                 <span className="text-white/80 text-sm">${priceRange[0]}</span>
//                 <input 
//                   type="range" 
//                   min="0" 
//                   max="2000" 
//                   value={priceRange[1]}
//                   onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
//                   className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
//                 />
//                 <span className="text-white/80 text-sm">${priceRange[1]}</span>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-white mb-2">Sort By</label>
//               <select 
//                 value={sortBy} 
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="rating">Highest Rated</option>
//                 <option value="newest">Newest First</option>
//               </select>
//             </div>

//             <div className="flex items-end">
//               <div className="text-white backdrop-blur-sm bg-white/10 rounded-xl px-4 py-2 border border-white/20">
//                 <span className="font-semibold">{filteredProducts.length}</span> products found
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section id="products-section" className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
//               Premium Printer Collection
//             </h2>
//             <p className="text-xl text-white/80 max-w-2xl mx-auto">
//               Carefully curated selection of high-performance printers for every need and budget
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard 
//                 key={product.id} 
//                 product={product} 
//                 isWishlisted={wishlist.has(product.id)}
//                 onWishlistToggle={toggleWishlist}
//                 onAddToCart={addToCart}
//               />
//             ))}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center py-12 backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20">
//               <div className="text-6xl mb-4">😔</div>
//               <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
//               <p className="text-white/70">Try adjusting your filters to see more products</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Cart Sidebar */}
//       {cart.length > 0 && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-2xl max-w-sm">
//             <h3 className="text-white font-semibold mb-3 text-lg">Your Cart ({cartCount})</h3>
//             <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
//               {cart.map(item => (
//                 <div key={item.id} className="flex justify-between items-center text-sm backdrop-blur-sm bg-white/10 rounded-xl p-3">
//                   <span className="text-white truncate flex-1 mr-2 font-medium">{item.name}</span>
//                   <div className="flex items-center space-x-2">
//                     <button 
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                     >
//                       -
//                     </button>
//                     <span className="text-white w-4 text-center font-semibold">{item.quantity}</span>
//                     <button 
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                     >
//                       +
//                     </button>
//                     <button 
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-300 hover:text-red-200 ml-2 transition-colors"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-between items-center border-t border-white/30 pt-4">
//               <span className="text-white font-bold text-lg">Total: ${getTotalCartPrice().toFixed(2)}</span>
//               <button className="bg-white/30 hover:bg-white/40 text-slate-800 font-semibold px-6 py-2 rounded-xl text-sm transition-all duration-300 transform hover:scale-105">
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Features Section */}
     
//     </div>
//   );
// };

// const ProductCard = ({ product, isWishlisted, onWishlistToggle, onAddToCart }) => {
//   const discountPercentage = Math.round(((product.price - product.discountPrice) / product.price) * 100);

//   const handleAddToCart = () => {
//     onAddToCart(product);
//   };

//   return (
//     <div className="group bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
//       {/* Card Header with Badges */}
//       <div className="relative">
//         <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
//           {discountPercentage > 0 && (
//             <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//               -{discountPercentage}% OFF
//             </span>
//           )}
//           {product.stock < 5 && product.stock > 0 && (
//             <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//               Low Stock
//             </span>
//           )}
//           {product.stock === 0 && (
//             <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//               Out of Stock
//             </span>
//           )}
//         </div>

//         {/* Wishlist Button */}
//         <button
//           onClick={() => onWishlistToggle(product.id)}
//           className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
//             isWishlisted 
//               ? 'bg-red-500/30 border border-red-400/50 text-red-300 shadow-lg' 
//               : 'bg-white/20 border border-white/30 text-white/80 hover:bg-red-500/30 hover:border-red-400/50 hover:text-red-300 hover:shadow-lg'
//           }`}
//         >
//           <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//           </svg>
//         </button>

//         {/* Product Image */}
//         <div className="aspect-square bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center relative overflow-hidden">
//           {product.image ? (
//             <img 
//               src={product.image} 
//               alt={product.name}
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//           ) : (
//             <div className="text-6xl text-white/40 group-hover:scale-110 transition-transform duration-500">
//               🖨️
//             </div>
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
//             <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-semibold">
//               Quick View
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-6">
//         {/* Category & Rating */}
//         <div className="flex justify-between items-start mb-4">
//           <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
//             {product.category}
//           </span>
//           <div className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
//             <div className="flex text-amber-300">
//               {'★'.repeat(Math.floor(product.rating))}
//               {'☆'.repeat(5 - Math.floor(product.rating))}
//             </div>
//             <span className="text-white/80 text-sm font-semibold">({product.rating})</span>
//           </div>
//         </div>

//         {/* Product Name */}
//         <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-cyan-100 transition-colors duration-300">
//           {product.name}
//         </h3>

//         {/* Description */}
//         <p className="text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
//           {product.description}
//         </p>

//         {/* Features */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {product.features.slice(0, 2).map((feature, index) => (
//             <span key={index} className="bg-white/15 text-white/90 px-3 py-1 rounded-full text-xs border border-white/20">
//               {feature}
//             </span>
//           ))}
//           {product.features.length > 2 && (
//             <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs border border-white/20">
//               +{product.features.length - 2} more
//             </span>
//           )}
//         </div>

//         {/* Price & Stock */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center space-x-2">
//             {product.discountPrice < product.price ? (
//               <>
//                 <span className="text-2xl font-bold text-white">${product.discountPrice}</span>
//                 <span className="text-lg text-white/60 line-through">${product.price}</span>
//               </>
//             ) : (
//               <span className="text-2xl font-bold text-white">${product.price}</span>
//             )}
//           </div>
//           <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
//             product.stock > 5 ? 'bg-green-500/20 text-green-300 border border-green-400/30' : 
//             product.stock > 0 ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30' : 'bg-red-500/20 text-red-300 border border-red-400/30'
//           }`}>
//             {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-3">
//           <button 
//             onClick={() =>  onAddToCart(product)}
//             className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
//               product.stock === 0 
//                 ? 'bg-white/10 text-white/40 cursor-not-allowed' 
//                 : 'bg-white/30 hover:bg-white/40 text-slate-800 transform hover:scale-105 shadow-lg hover:shadow-white/20'
//             }`}
//             disabled={product.stock === 0}
//           >
//             {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrinterProductList;



"use client";

import React, { useState, useEffect } from 'react';
import { printerProducts } from '../data/printerProducts';
import { useCart } from '../context/CartContext';

const PrinterProductList = () => {
  const [products] = useState(printerProducts);
  const [filteredProducts, setFilteredProducts] = useState(printerProducts);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const {addToCart} = useCart();

  // Filter products based on category and price
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price
    filtered = filtered.filter(product => 
      product.discountPrice >= priceRange[0] && product.discountPrice <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
        break;
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy, products]);

  // Update cart count
  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, [cart]);

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalCartPrice = () => {
    return cart.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
  };

  const categories = ['all', 'Antivirus', 'VPN', 'Utilities'];

  return (
    <div>
      {/* Header Buttons */}
      <div className="flex justify-center space-x-4 py-8">
        <button className="bg-gray-800 text-white px-6 py-2 font-bold rounded text-sm hover:bg-gray-900 transition-colors">
          NORTON
        </button>
        <button className="bg-red-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-red-700 transition-colors">
          SALE!
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-blue-700 transition-colors">
          SALE!
        </button>
        <button className="bg-green-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-green-700 transition-colors">
          SALE!
        </button>
      </div>

      {/* Filters & Controls */}
      <section className="bg-white/10 backdrop-blur-md border-y border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category === 'all' ? 'All Products' : category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Price Range</label>
              <div className="flex items-center space-x-4">
                <span className="text-white/80 text-sm">${priceRange[0]}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="2000" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-white/80 text-sm">${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            <div className="flex items-end">
              <div className="text-white backdrop-blur-sm bg-white/10 rounded-xl px-4 py-2 border border-white/20">
                <span className="font-semibold">{filteredProducts.length}</span> products found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Norton Security Products
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Complete cybersecurity solutions to protect your digital life across all devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isWishlisted={wishlist.has(product.id)}
                onWishlistToggle={toggleWishlist}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-white/70">Try adjusting your filters to see more products</p>
            </div>
          )}
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full flex justify-center items-center py-12">
        <div
          className="w-full rounded-lg overflow-hidden relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1637511336943-d1c5105c6c57?auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          
          {/* Content */}
          <div className="border border-white/30 p-8 flex flex-col md:flex-row justify-between items-center relative z-10">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">
              Norton Anti Virus Plus<br />1 Year 1 Device
            </h2>

            <button className="bg-transparent text-white font-bold border border-white px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm">
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-2xl max-w-sm">
            <h3 className="text-white font-semibold mb-3 text-lg">Your Cart ({cartCount})</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm backdrop-blur-sm bg-white/10 rounded-xl p-3">
                  <span className="text-white truncate flex-1 mr-2 font-medium">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-white w-4 text-center font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-300 hover:text-red-200 ml-2 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center border-t border-white/30 pt-4">
              <span className="text-white font-bold text-lg">Total: ${getTotalCartPrice().toFixed(2)}</span>
              <button className="bg-white/30 hover:bg-white/40 text-slate-800 font-semibold px-6 py-2 rounded-xl text-sm transition-all duration-300 transform hover:scale-105">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product, isWishlisted, onWishlistToggle, onAddToCart }) => {
  const discountPercentage = Math.round(((product.price - product.discountPrice) / product.price) * 100);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="group bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
      {/* Card Header with Badges */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
          {discountPercentage > 0 && (
            <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              -{discountPercentage}% OFF
            </span>
          )}
          {product.stock < 5 && product.stock > 0 && (
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Low Stock
            </span>
          )}
          {product.stock === 0 && (
            <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Out of Stock
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onWishlistToggle(product.id)}
          className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isWishlisted 
              ? 'bg-red-500/30 border border-red-400/50 text-red-300 shadow-lg' 
              : 'bg-white/20 border border-white/30 text-white/80 hover:bg-red-500/30 hover:border-red-400/50 hover:text-red-300 hover:shadow-lg'
          }`}
        >
          <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="text-6xl text-white/40 group-hover:scale-110 transition-transform duration-500">
              🛡️
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-semibold">
              Quick View
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category & Rating */}
        <div className="flex justify-between items-start mb-4">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
            <div className="flex text-amber-300">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-white/80 text-sm font-semibold">({product.rating})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-cyan-100 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="bg-white/15 text-white/90 px-3 py-1 rounded-full text-xs border border-white/20">
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs border border-white/20">
              +{product.features.length - 2} more
            </span>
          )}
        </div>

        {/* Price & Stock */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            {product.discountPrice < product.price ? (
              <>
                <span className="text-2xl font-bold text-white">${product.discountPrice}</span>
                <span className="text-lg text-white/60 line-through">${product.price}</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-white">${product.price}</span>
            )}
          </div>
          <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
            product.stock > 5 ? 'bg-green-500/20 text-green-300 border border-green-400/30' : 
            product.stock > 0 ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30' : 'bg-red-500/20 text-red-300 border border-red-400/30'
          }`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={handleAddToCart}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
              product.stock === 0 
                ? 'bg-white/10 text-white/40 cursor-not-allowed' 
                : 'bg-white/30 hover:bg-white/40 text-slate-800 transform hover:scale-105 shadow-lg hover:shadow-white/20'
            }`}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrinterProductList;


