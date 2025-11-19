



// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ShoppingCart } from 'lucide-react';

// export default function CartPage() {
//   const [cart, setCart] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Load cart from localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       try {
//         const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         setCart(savedCart);
//       } catch (error) {
//         console.error("Error reading cart from localStorage:", error);
//         setCart([]);
//       }
//       setIsLoading(false);
//     }
//   }, []);

//   // Quantity update (using quantity not qty)
//   const updateQty = (productId, newQty) => {
//     if (newQty < 1) return;

//     const updatedCart = cart.map(item =>
//       item.id === productId ? { ...item, quantity: newQty } : item
//     );

//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Remove item
//   const removeItem = (productId) => {
//     const updatedCart = cart.filter(item => item.id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Clear cart
//   const clearCart = () => {
//     setCart([]);
//     localStorage.setItem("cart", JSON.stringify([]));
//   };

//   // Total items
//   const getTotalItems = () => {
//     return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
//   };

//   // Total price
//   const getTotalPrice = () => {
//     return cart.reduce(
//       (sum, item) =>
//         sum + (item.discountPrice || item.price) * (item.quantity || 1),
//       0
//     );
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!cart || cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
//         <div className="max-w-md w-full text-center">
//           <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
//             <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
//               <ShoppingBag className="w-12 h-12 text-blue-500" />
//             </div>

//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Your Cart is Empty
//             </h2>

//             <p className="text-gray-600 mb-8 text-lg">
//               Looks like you haven't added any items to your cart yet.
//             </p>

//             <Link
//               href="/"
//               className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Shopping Cart</h1>

//           <div className="flex items-center justify-center gap-4 text-gray-600">
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
//               <ShoppingCart className="w-5 h-5 text-blue-500" />
//               <span className="font-semibold">{getTotalItems()} items</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* Cart Items */}
//           <div className="lg:col-span-2">
//             <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden">

//               <div className="p-6 border-b border-gray-200/50">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Cart Items
//                   </h2>

//                   <button
//                     onClick={clearCart}
//                     className="flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold transition-colors duration-200"
//                   >
//                     <Trash2 className="w-5 h-5" />
//                     Clear Cart
//                   </button>
//                 </div>
//               </div>

//               <div className="divide-y divide-gray-200/50">
//                 {cart.map((item) => (
//                   <div key={item.id} className="p-6 hover:bg-gray-50/50 transition-colors duration-200">
//                     <div className="flex gap-6">

//                       {/* Image */}
//                       <div className="flex-shrink-0">
//                         <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center shadow-lg">
//                           {item.image ? (
//                             <img
//                               src={item.image}
//                               alt={item.name}
//                               className="w-16 h-16 object-cover rounded-lg"
//                             />
//                           ) : (
//                             <ShoppingBag className="w-8 h-8 text-blue-500" />
//                           )}
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1 min-w-0">

//                         <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
//                           {item.name}
//                         </h3>

//                         <div className="flex items-center gap-4 mb-3">
//                           <span className="text-2xl font-bold text-blue-600">
//                             ${(item.discountPrice || item.price).toFixed(2)}
//                           </span>

//                           <div className="text-sm text-gray-500">
//                             $
//                             {(
//                               (item.quantity || 1) *
//                               (item.discountPrice || item.price)
//                             ).toFixed(2)}{" "}
//                             total
//                           </div>
//                         </div>

//                         {/* Qty Controls */}
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <span className="text-sm font-medium text-gray-700">Quantity:</span>

//                             <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl shadow-sm">

//                               <button
//                                 onClick={() => updateQty(item.id, (item.quantity || 1) - 1)}
//                                 className="p-2 hover:bg-gray-100 rounded-l-xl transition-colors"
//                               >
//                                 <Minus className="w-4 h-4" />
//                               </button>

//                               <input
//                                 type="number"
//                                 min="1"
//                                 value={item.quantity || 1}
//                                 onChange={(e) =>
//                                   updateQty(item.id, Number(e.target.value))
//                                 }
//                                 className="w-16 py-2 text-center border-0 bg-transparent focus:outline-none focus:ring-0"
//                               />

//                               <button
//                                 onClick={() => updateQty(item.id, (item.quantity || 1) + 1)}
//                                 className="p-2 hover:bg-gray-100 rounded-r-xl transition-colors"
//                               >
//                                 <Plus className="w-4 h-4" />
//                               </button>
//                             </div>
//                           </div>

//                           <button
//                             onClick={() => removeItem(item.id)}
//                             className="flex items-center gap-2 text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                             <span className="text-sm font-medium">Remove</span>
//                           </button>
//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl p-6 sticky top-6">

//               <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                 Order Summary
//               </h3>

//               <div className="space-y-4 mb-6">

//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Total Items:</span>
//                   <span className="font-semibold text-gray-800">{getTotalItems()}</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Subtotal:</span>
//                   <span className="font-semibold text-gray-800">${getTotalPrice().toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Shipping:</span>
//                   <span className="font-semibold text-green-600">FREE</span>
//                 </div>

//                 <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-4">
//                   <span className="text-gray-800">Total:</span>
//                   <span className="text-blue-600 text-xl">${getTotalPrice().toFixed(2)}</span>
//                 </div>

//               </div>

//               <div className="space-y-4">
//                 <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
//                   Proceed to Checkout
//                 </button>

//                 <Link
//                   href="/"
//                   className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105"
//                 >
//                   <ArrowLeft className="w-5 h-5" />
//                   Continue Shopping
//                 </Link>
//               </div>

//               {/* Trust Badges */}
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="grid grid-cols-3 gap-4 text-center">

//                   <div className="text-center">
//                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <span className="text-green-600 text-sm font-bold">✓</span>
//                     </div>
//                     <span className="text-xs text-gray-600">Secure Payment</span>
//                   </div>

//                   <div className="text-center">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <span className="text-blue-600 text-sm font-bold">🚚</span>
//                     </div>
//                     <span className="text-xs text-gray-600">Free Shipping</span>
//                   </div>

//                   <div className="text-center">
//                     <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <span className="text-amber-600 text-sm font-bold">↻</span>
//                     </div>
//                     <span className="text-xs text-gray-600">Easy Returns</span>
//                   </div>

//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }




// "use client";
// import { useCart } from "../context/CartContext";

// export default function Cart() {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div className="max-w-3xl mx-auto py-12 px-4">
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

//       {cart.length === 0 && (
//         <p className="text-gray-600">Your cart is empty.</p>
//       )}

//       <div className="space-y-6">
//         {cart.map((item) => (
//           <div key={item.id} className="border p-4 rounded shadow-sm">
//             <h2 className="font-semibold">{item.name}</h2>
//             <p className="text-sm text-gray-600">Qty: {item.qty}</p>
//             <p className="font-bold text-blue-600">${item.price}</p>

//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.qty, 0);
  };

  const shipping = getSubtotal() > 0 ? 5.99 : 0;
  const tax = getSubtotal() * 0.08;
  const total = getSubtotal() + shipping + tax;

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-8 px-4">

      {/* 🔰 Top Norton Banner */}
      <div className="w-full bg-[#FFD700] text-black font-semibold text-center py-3 rounded-b-xl shadow-md mb-6 tracking-wide">
        <span className="text-lg">🔒 Norton Secured — Your Protection Starts Here</span>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#000000] mb-2">
            Norton Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-6 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-[#000] mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Secure your devices today with Norton protection.
            </p>
           
<Link href="/">
  <button className="bg-[#000000] text-[#FFD700] px-8 py-3 rounded-xl font-semibold hover:bg-[#111] transition-all duration-300 shadow-md">
    Continue Shopping
  </button>
</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-6">
                <h2 className="text-xl font-bold text-black mb-6">Cart Items</h2>
                
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-[#FFF5CC] transition-all border border-gray-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-[#000000] rounded-lg flex items-center justify-center shadow-md">
                          <span className="text-xl font-bold text-[#FFD700]">
                            {item.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-black text-lg">{item.name}</h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold border border-gray-300">
                              Qty: {item.qty}
                            </span>
                            <span className="text-black font-bold">
                              ${item.price} each
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-black">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-all shadow-md"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-black mb-6 pb-4 border-b border-gray-300">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Items ({getTotalItems()})</span>
                    <span className="font-semibold">${getSubtotal().toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Shipping</span>
                    <span className="font-semibold">
                      {shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-300 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-black">Total</span>
                      <span className="text-2xl font-bold text-[#000000]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFD700]"
                    />
                    <button className="bg-black text-[#FFD700] px-6 py-3 rounded-xl font-semibold hover:bg-[#111] transition-all">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-[#FFD700] text-black py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#e6c400] transition-all shadow-lg mb-4">
                  Proceed to Checkout
                </button>

                {/* Security Badges */}
                <div className="text-center">
                  <div className="flex justify-center space-x-6 mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-[#000] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Secure checkout • Norton SSL Encrypted
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
