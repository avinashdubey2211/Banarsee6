// import React from "react";

// const products = [
//   {
//     name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Blue",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//   {
//     name: "Banarasee Handwoven Tissue Saree With Zari Thread Work Gold",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
//   },
// ];

// const NewArrivals = () => {
//   return (
//     <div className="w-full px-4 md:px-8 py-12 bg-gray-50">
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">New Arrivals</h1>
//       {/* Subtitle sections */}
//       <p className="text-center text-gray-600 mb-10">
//         Fresh Session | New Design | Latest Trend
//       </p>

//       {/* Products grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
//         {products.map((product, idx) => (
//           <div key={idx} className="w-full group cursor-pointer">
//             <div className="relative w-full overflow-hidden">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <img
//                 src={product.hoverImg}
//                 alt={`${product.name}-hover`}
//                 className="absolute top-0 left-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               />
//             </div>
//             <p className="text-center mt-2 font-medium text-gray-900">{product.name}</p>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-10">
//         <button className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewArrivals;





// import React, { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const products = [
//   {
//     name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Blue",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//   {
//     name: "Banarasee Handwoven Tissue Saree With Zari Thread Work Gold",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
//   },
// ];

// const NewArrivals = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const scrollAmount = direction === "left" ? -250 : 250;
//     scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50 relative">
//       {/* Title */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
//         New Arrivals
//       </h1>

//       {/* Subtitle */}
//       <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
//         Fresh Session | New Design | Latest Trend
//       </p>

//       {/* Mobile scroll row */}
//       <div className="md:hidden relative">
//         {/* Left arrow */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//         >
//           <FaChevronLeft className="text-gray-600" />
//         </button>

//         {/* Scrollable row */}
//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
//         >
//           {products.map((product, idx) => (
//             <div
//               key={idx}
//               className="min-w-[180px] shrink-0 group cursor-pointer"
//             >
//               <div className="relative w-full overflow-hidden rounded-lg">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <img
//                   src={product.hoverImg}
//                   alt={`${product.name}-hover`}
//                   className="absolute top-0 left-0 w-full h-48 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                 />
//               </div>
//               <p className="text-center mt-2 font-medium text-gray-900 text-sm">
//                 {product.name}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Right arrow */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//         >
//           <FaChevronRight className="text-gray-600" />
//         </button>
//       </div>

//       {/* Tablet (3 columns) and Desktop (5 columns) */}
//       <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {products.map((product, idx) => (
//           <div key={idx} className="group cursor-pointer">
//             <div className="relative w-full overflow-hidden rounded-lg">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <img
//                 src={product.hoverImg}
//                 alt={`${product.name}-hover`}
//                 className="absolute top-0 left-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               />
//             </div>
//             <p className="text-center mt-2 font-medium text-gray-900 text-sm sm:text-base">
//               {product.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center mt-8 sm:mt-10">
//         <button className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition text-sm sm:text-base">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewArrivals;


// import React, { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const products = [
//   {
//     name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg:
//       "https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg:
//       "https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Blue",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
//     hoverImg:
//       "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg:
//       "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//   {
//     name: "Banarasee Handwoven Tissue Saree With Zari Thread Work Gold",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
//     hoverImg:
//       "https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
//   },
// ];

// const NewArrivals = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const cardWidth = scrollRef.current.firstChild.offsetWidth;
//     const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
//     scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50 relative">
//       {/* Title */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
//         New Arrivals
//       </h1>

//       {/* Subtitle */}
//       <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
//         Fresh Session | New Design | Latest Trend
//       </p>

//       {/* Mobile View */}
//       <div className="md:hidden relative">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//         >
//           <FaChevronLeft className="text-gray-600" />
//         </button>

//         {/* Scrollable Single Card Row */}
//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
//         >
//           {products.map((product, idx) => (
//             <div
//               key={idx}
//               className="min-w-full shrink-0 group cursor-pointer"
//             >
//               <div className="relative w-full overflow-hidden rounded-lg">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-full h-[300px]  sm:h-[60vh] object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <img
//                   src={product.hoverImg}
//                   alt={`${product.name}-hover`}
//                   className="absolute top-0 left-0 w-full h-[420px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                 />
//               </div>
//               <p className="text-center mt-3 font-medium text-gray-900 text-base px-2">
//                 {product.name}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//         >
//           <FaChevronRight className="text-gray-600" />
//         </button>
//       </div>

//       {/* Desktop / Tablet */}
//       <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {products.map((product, idx) => (
//           <div key={idx} className="group cursor-pointer">
//             <div className="relative w-full overflow-hidden rounded-lg">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <img
//                 src={product.hoverImg}
//                 alt={`${product.name}-hover`}
//                 className="absolute top-0 left-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               />
//             </div>
//             <p className="text-center mt-2 font-medium text-gray-900 text-sm sm:text-base">
//               {product.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center mt-8 sm:mt-10">
//         <button className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition text-sm sm:text-base">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewArrivals;



import React from "react";

const products = [
  {
    name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
  },
  {
    name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  },
  {
    name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Blue",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
  },
  {
    name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
  {
    name: "Banarasee Handwoven Tissue Saree With Zari Thread Work Gold",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
  },
];

const NewArrivals = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
        New Arrivals
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Fresh Session | New Design | Latest Trend
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <img
                src={product.hoverImg}
                alt={`${product.name}-hover`}
                className="absolute top-0 left-0 w-full h-[350px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
            <p className="text-center mt-2 font-medium text-gray-900 text-sm sm:text-base">
              {product.name}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <button className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition text-sm sm:text-base">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
