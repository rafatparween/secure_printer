// "use client";

// import React, { useState, useEffect } from "react";
// import { printerProducts } from "../data/printerProducts";
// import { useCart } from "../context/CartContext";


// const PrinterStore = () => {
//   // const [products] = useState(printerProducts);
//   const [filteredProducts, setFilteredProducts] = useState(printerProducts);
//   const [sortBy, setSortBy] = useState("featured");
//   const [priceRange, setPriceRange] = useState([0, 2000]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const { addToCart } = useCart();

//   useEffect(() => {
//     let filtered = [...products];
//     if (selectedCategory !== "all") {
//       filtered = filtered.filter((p) => p.category === selectedCategory);
//     }
//     filtered = filtered.filter(
//       (p) => p.discountPrice >= priceRange[0] && p.discountPrice <= priceRange[1]
//     );
//     if (sortBy === "price-low") filtered.sort((a, b) => a.discountPrice - b.discountPrice);
//     if (sortBy === "price-high") filtered.sort((a, b) => b.discountPrice - a.discountPrice);
//     if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
//     if (sortBy === "newest") filtered.sort((a, b) => b.id - a.id);
//     setFilteredProducts(filtered);
//   }, [selectedCategory, priceRange, sortBy, products]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#59c7b5] via-[#0095d4] to-[#0077b6]">

//       <section className="py-10">
//         <div className="grid md:grid-cols-3 gap-8 px-8">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-md"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover rounded-xl mb-4"
//               />
//               <h3 className="text-white text-xl font-bold mb-2">{product.name}</h3>
//               <p className="text-white/80 text-sm mb-4">{product.description}</p>
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-white text-lg font-semibold">
//                   ${product.discountPrice}
//                 </span>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="bg-white/30 hover:bg-white/40 text-gray-900 font-semibold px-4 py-2 rounded-xl"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PrinterStore;



"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const PrinterStore = () => {
  // ❗ You don't have printerProducts file, so start with empty array
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    // 🟦 filteredProducts has no base data → so no filter logic needed
    // If future me products add karogi, yahan add karna
    setFilteredProducts([]); 
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#59c7b5] via-[#0095d4] to-[#0077b6]">
      <section className="py-10">
        <div className="grid md:grid-cols-3 gap-8 px-8">
          {filteredProducts.length === 0 && (
            <p className="text-white text-center col-span-3 text-xl font-semibold">
              No products found. (Add product data first)
            </p>
          )}

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-white text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-white/80 text-sm mb-4">{product.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-white text-lg font-semibold">
                  ${product.discountPrice}
                </span>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-white/30 hover:bg-white/40 text-gray-900 font-semibold px-4 py-2 rounded-xl"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrinterStore;
