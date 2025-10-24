 

import React from "react";

const Dupattas = () => {
  const products = [
    {
      name: "Banarasee art silk dupatta with hand embroidered motifs brown 1",
      price: "₹6,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_1950_360x.jpg?v=1688795223",
      hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_1949_360x.jpg?v=1688795223",
    },
    {
      name: "Banarasee cotton silk gichha work dupatta brown ",
      price: "₹7,499",
       img: "https://www.banarasee.in/cdn/shop/files/IMG_2012_360x.jpg?v=1688790104",
      hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_2014_360x.jpg?v=1688790104"
    },
    {
      name: "Art silk jaal design dupatta green 4",
      price: "₹5,499",
       img: "https://www.banarasee.in/cdn/shop/products/DSC_0213_bbd11271-9f50-4f02-9f44-b620e2c6758d_360x.jpg?v=1679312561",
      hoverImg:"https://www.banarasee.in/cdn/shop/products/DSC_0216_7749ff34-fff6-4e58-badb-ea7f11490728_360x.jpg?v=1679312561"
    },
    {
      name: "Banarasee pure desi tussar silk block print dupatta beige",
      price: "₹8,499",
      img: "https://www.banarasee.in/cdn/shop/products/IMG_6259_360x.jpg?v=1678446614",
      hoverImg:"https://www.banarasee.in/cdn/shop/products/IMG_6261_360x.jpg?v=1678446614"
    },
    {
      name: "Banarasee pure gajji silk patola design dupatta yellow",
      price: "₹7,999",
       img: "https://www.banarasee.in/cdn/shop/products/DSC_0370_f2070717-a738-4679-820d-63be19581f68_360x.jpg?v=1671105076",
      hoverImg:"https://www.banarasee.in/cdn/shop/products/DSC_0367_b97e2583-b74d-4fac-9fac-1d33fef52c72_360x.jpg?v=1671105076"
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
        You must have Dupattas this season

      </h1>


      <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Embellish your ethnic look with these best seller
      </p> 
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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

            {/* Brand Name */}
            <p className="text-gray-700 py-3 font-semibold mt-1">Banarasee</p>

            {/* Product Info */}
            <div className="text-start mt-1">
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                {product.name}
              </p>
              <p className="text-gray-700 py-2 text-xs sm:text-sm">
                {product.price}
              </p>
            </div>
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

export default Dupattas;
