// "use client";
// import Image from 'next/image';
// import { useCart } from "../context/CartContext"; // ✅ added

// const products = [
//   {
//     name: "Norton 360 for Gamers – 3 Devices 2024",
//     image: "/norton-360.jpg",
//     oldPrice: 44,
//     price: 42,
//   },
//   {
//     name: "Norton Utilities Ultimate – 10 Devices, Cleans and Speeds up your PC 2024",
//     image: "/norton-util.jpg",
//     oldPrice: 40,
//     price: 38,
//   },
//   {
//     name: "Norton Secure VPN for up to 5 Devices 2024",
//     image: "/norton-vpn.jpg",
//     oldPrice: 30,
//     price: 27,
//   },
//   {
//     name: "Norton AntiVirus Plus, Antivirus Software- 1 Device with Auto-Renewal 2024",
//     image: "/norton-av.jpg",
//     oldPrice: 24,
//     price: 22,
//   },
// ];

// function ProductRow() {
//   const { addToCart } = useCart(); // ✅ added

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
//       {products.map((prod, idx) => (
//         <div key={idx} className="flex flex-col items-center">
          
//           <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1 mb-4 rounded">
//             SALE!
//           </div>

//           <div className="relative w-40 h-40 mb-6">
//             <Image
//               src={prod.image}
//               alt={prod.name}
//               fill
//               style={{ objectFit: "contain" }}
//             />
//           </div>

//           <h3 className="text-center text-gray-800 font-semibold text-sm leading-tight min-h-[3rem] mb-4 px-2">
//             {prod.name}
//           </h3>

//           <div className="flex items-center justify-center space-x-2 mb-6">
//             <span className="text-red-600 text-sm font-medium line-through">
//               ${prod.oldPrice.toFixed(2)}
//             </span>
//             <span className="text-blue-600 text-lg font-bold">
//               ${prod.price.toFixed(2)}
//             </span>
//           </div>

//           {/* ✅ Add to Cart inserted ONLY here */}
//           <button
//             onClick={() => addToCart(prod)}
//             className="w-full bg-blue-600 text-white py-3 font-semibold rounded hover:bg-blue-700 transition-colors duration-200 text-sm"
//           >
//             Add to cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function Product() {
//   return (
//     <main className="bg-white min-h-screen py-8">
//       <div className="max-w-[1320px] mx-auto px-6">
        
//         <div className="flex justify-center space-x-4 py-8">
//           <button className="bg-gray-800 text-white px-6 py-2 font-bold rounded text-sm hover:bg-gray-900 transition-colors">
//             NORTON
//           </button>
//           <button className="bg-red-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-red-700 transition-colors">
//             SALE!
//           </button>
//           <button className="bg-blue-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-blue-700 transition-colors">
//             SALE!
//           </button>
//           <button className="bg-green-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-green-700 transition-colors">
//             SALE!
//           </button>
//         </div>

//         <ProductRow />
//         <ProductRow />

//         <section className="w-full flex justify-center items-center py-12">
//           <div
//             className="w-full rounded-lg overflow-hidden relative"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1637511336943-d1c5105c6c57?auto=format&fit=crop&w=1500&q=80')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

//             <div className="border border-white/30 p-8 flex flex-col md:flex-row justify-between items-center relative z-10">
//               <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">
//                 Norton Anti Virus Plus<br />1 Year 1 Device
//               </h2>

//               <button className="bg-transparent text-white font-bold border border-white px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm">
//                 BUY NOW
//               </button>
//             </div>
//           </div>
//         </section>

//         <ProductRow />
//         <ProductRow />
//       </div>
//     </main>
//   );
// }



// "use client";
// import Image from 'next/image';
// import { useCart } from "../context/CartContext";
// import { useState } from "react";

// const products = [
//   {
//     name: "Norton 360 for Gamers – 3 Devices 2024",
//     image: "/norton-360.jpg",
//     oldPrice: 44,
//     price: 42,
//   },
//   {
//     name: "Norton Utilities Ultimate – 10 Devices, Cleans and Speeds up your PC 2024",
//     image: "/norton-util.jpg",
//     oldPrice: 40,
//     price: 38,
//   },
//   {
//     name: "Norton Secure VPN for up to 5 Devices 2024",
//     image: "/norton-vpn.jpg",
//     oldPrice: 30,
//     price: 27,
//   },
//   {
//     name: "Norton AntiVirus Plus, Antivirus Software- 1 Device with Auto-Renewal 2024",
//     image: "/norton-av.jpg",
//     oldPrice: 24,
//     price: 22,
//   },
// ];

// function ProductRow() {
//   const { addToCart } = useCart();

//   const [clickedIndex, setClickedIndex] = useState(null);
//   const [messageIndex, setMessageIndex] = useState(null);

//   const handleAddToCart = (prod, index) => {
//     addToCart(prod);
//     setClickedIndex(index);
//     setMessageIndex(index);

//     setTimeout(() => {
//       setClickedIndex(null);
//       setMessageIndex(null);
//     }, 2000);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
//       {products.map((prod, idx) => (
//         <div key={idx} className="flex flex-col items-center">

//           <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1 mb-4 rounded">
//             SALE!
//           </div>

//           <div className="relative w-40 h-40 mb-6">
//             <Image
//               src={prod.image}
//               alt={prod.name}
//               fill
//               style={{ objectFit: "contain" }}
//             />
//           </div>

//           <h3 className="text-center text-gray-800 font-semibold text-sm leading-tight min-h-[3rem] mb-4 px-2">
//             {prod.name}
//           </h3>

//           <div className="flex items-center justify-center space-x-2 mb-6">
//             <span className="text-red-600 text-sm font-medium line-through">
//               ${prod.oldPrice.toFixed(2)}
//             </span>
//             <span className="text-blue-600 text-lg font-bold">
//               ${prod.price.toFixed(2)}
//             </span>
//           </div>

//           {/* ADD TO CART BUTTON WITH EFFECT */}
//           <button
//             onClick={() => handleAddToCart(prod, idx)}
//             className={`w-full text-white py-3 font-semibold rounded transition-colors duration-200 text-sm
//               ${clickedIndex === idx 
//                 ? "bg-green-600 hover:bg-green-700"
//                 : "bg-blue-600 hover:bg-blue-700"
//               }
//             `}
//           >
//             {clickedIndex === idx ? "Added!" : "Add to cart"}
//           </button>

//           {/* SUCCESS MESSAGE */}
//           {messageIndex === idx && (
//             <p className="text-green-600 text-sm mt-2 font-medium">
//               Product added to cart
//             </p>
//           )}

//         </div>
//       ))}
//     </div>
//   );
// }

// export default function Product() {
//   return (
//     <main className="bg-white min-h-screen py-8">
//       <div className="max-w-[1320px] mx-auto px-6">

//         <div className="flex justify-center space-x-4 py-8">
//           <button className="bg-gray-800 text-white px-6 py-2 font-bold rounded text-sm hover:bg-gray-900 transition-colors">
//             NORTON
//           </button>
//           <button className="bg-red-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-red-700 transition-colors">
//             SALE!
//           </button>
//           <button className="bg-blue-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-blue-700 transition-colors">
//             SALE!
//           </button>
//           <button className="bg-green-600 text-white px-4 py-2 font-bold rounded text-sm hover:bg-green-700 transition-colors">
//             SALE!
//           </button>
//         </div>

//         <ProductRow />
//         <ProductRow />

//         <section className="w-full flex justify-center items-center py-12">
//           <div
//             className="w-full rounded-lg overflow-hidden relative"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1637511336943-d1c5105c6c57?auto=format&fit=crop&w=1500&q=80')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

//             <div className="border border-white/30 p-8 flex flex-col md:flex-row justify-between items-center relative z-10">
//               <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">
//                 Norton Anti Virus Plus<br />1 Year 1 Device
//               </h2>

//               <button className="bg-transparent text-white font-bold border border-white px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm">
//                 BUY NOW
//               </button>
//             </div>
//           </div>
//         </section>

//         <ProductRow />
//         <ProductRow />
//       </div>
//     </main>
//   );
// }




"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Norton 360 Deluxe – 5 Devices 2024",
    image: "/img1.jpg",
    oldPrice: 49,
    price: 44,
  },
  {
    id: 2,
    name: "Norton 360 Premium – 10 Devices 2024",
    image: "/img3.jpg",
    oldPrice: 59,
    price: 52,
  },
  {
    id: 3,
    name: "Norton 360 for Gamers – 3 Devices",
     image: "/img5.jpg",
    oldPrice: 55,
    price: 48,
  },
  {
    id: 4,
    name: "Norton Secure VPN – 5 Devices",
    image: "/img6.jpg",
    oldPrice: 30,
    price: 27,
  },
  {
    id: 5,
    name: "Norton Utilities Ultimate – 10 Devices",
    image: "/img7.jpg",
    oldPrice: 40,
    price: 36,
  },
  {
    id: 6,
    name: "Norton AntiVirus Plus – 1 Device",
    image: "/img8.jpg",
    oldPrice: 24,
    price: 21,
  },
  {
    id: 7,
    name: "Norton 360 Standard – 1 Device",
    image: "/img9.png",
    oldPrice: 29,
    price: 25,
  },
  {
    id: 8,
    name: "Norton Mobile Security for Android",
    image: "/img10.png",
    oldPrice: 19,
    price: 16,
  },
  {
    id: 9,
    name: "Norton Password Manager Premium",
    image: "/img12.png",
    oldPrice: 22,
    price: 18,
  },
  {
    id: 10,
    name: "Norton Identity Theft Protection – 1 Year",
    image: "/img13.png",
    oldPrice: 60,
    price: 55,
  },
  {
    id: 11,
    name: "Norton Family – Parental Control 2024",
    image: "/img15.png",
    oldPrice: 35,
    price: 32,
  },
  {
    id: 12,
    name: "Norton 360 + LifeLock Select",
     image: "/img16.png",
    oldPrice: 85,
    price: 79,
  },
  {
    id: 13,
    name: "Norton AntiTrack – Online Privacy 2024",
    image: "/img17.png",
    oldPrice: 34,
    price: 31,
  },
  {
    id: 14,
    name: "Norton Driver Updater 2024",
    image: "/img19.png",
    oldPrice: 28,
    price: 24,
  },
  {
    id: 15,
    name: "Norton PC Cleaner Ultimate",
    image: "/img14.png",
    oldPrice: 32,
    price: 29,
  },
  {
    id: 16,
    name: "Norton 360 Multi-Device Bundle – 2024",
     image: "/img20.png",
    oldPrice: 70,
    price: 65,
  },
];

function ProductRow() {
  const { addToCart } = useCart();
  const [addedMessage, setAddedMessage] = useState(null);
  const [activeBtn, setActiveBtn] = useState(null);

  const handleAdd = (prod) => {
    addToCart(prod);

    // show added message
    setAddedMessage(prod.id);
    setActiveBtn(prod.id);

    setTimeout(() => {
      setAddedMessage(null);
      setActiveBtn(null);
    }, 1300);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
      {products.map((prod) => (
        <div key={prod.id} className="flex flex-col items-center">

          <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1 mb-4 rounded">
            SALE!
          </div>

          <div className="mb-6 flex justify-center w-[240px] h-[230px]" >
              <Image
    src={prod.image}
    alt={prod.name}
    width={240}
    height={230}
    style={{ objectFit: "contain" }}
  />

          </div>

          <h3 className="text-center text-gray-800 font-semibold text-sm leading-tight min-h-[3rem] mb-4 px-2">
            {prod.name}
          </h3>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-red-600 text-sm font-medium line-through">
              ${prod.oldPrice.toFixed(2)}
            </span>
            <span className="text-[#045D8A] text-lg font-bold">
              ${prod.price.toFixed(2)}
            </span>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => handleAdd(prod)}
            className={`w-full py-3 font-semibold rounded text-sm transition-colors duration-200
            ${activeBtn === prod.id 
              ? "bg-green-600 text-white" 
              : "bg-gray-400 text-white hover:bg-[#C61F31]"
            }`}
          >
            {addedMessage === prod.id ? "Product added to cart" : "Add to cart"}
          </button>

        </div>
      ))}
    </div>
  );
}

export default function Product() {
  return (
    <main className="bg-white min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">

  <ProductRow />
      

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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

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

      
       

      </div>
    </main>
  );
}
