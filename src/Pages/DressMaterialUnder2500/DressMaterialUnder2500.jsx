import React from "react";
import { useNavigate } from "react-router-dom"; 

const DressMaterialUnder2500 = () => {
         const navigate = useNavigate(); 
  
  const products = [
    {
      name: "Banarasee cotton silk salwar kameez fabric with dupatta set resham work green",
      price: "₹6,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_3074_81fbeade-f7c8-4609-bb3f-4f9d856d7966_360x.jpg?v=1749021942",
      hoverImg:
        "https://www.banarasee.in/cdn/shop/files/IMG_3081_e250c7d3-c4e4-4f56-b093-ac7400f9502e_360x.jpg?v=1749021957",
    },
    {
      name: "Banarasee cotton silk salwar kameez fabric with dupatta set resham work maroon ",
      price: "₹7,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_3159_360x.jpg?v=1749016874",
      hoverImg:
        "https://www.banarasee.in/cdn/shop/files/IMG_3160_360x.jpg?v=1749016874",
    },
    {
      name: "Banarasee cotton silk salwar kameez fabric with dupatta set resham work maroon",
      price: "₹5,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_3238_c06adf33-dc18-4bf6-b89c-a7b23e598660_360x.jpg?v=1749015105",
      hoverImg:
        "https://www.banarasee.in/cdn/shop/files/IMG_3241_d3968cf7-e9d5-48fb-b36d-bcea4a85b8b5_360x.jpg?v=1749015105",
    },
    {
      name: "Banarasee cotton silk salwar kameez fabric with dupatta set resham work green",
      price: "₹8,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_3300_6a412f7a-7e74-4d0d-8fe0-b786fb760e71_360x.jpg?v=1749013734",
      hoverImg:
        "https://www.banarasee.in/cdn/shop/files/IMG_3081_e250c7d3-c4e4-4f56-b093-ac7400f9502e_360x.jpg?v=1749021957",
    },
    {
      name: "Banarasee cotton silk salwar kameez fabric with dupatta set resham work violet",
      price: "₹7,999",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_3334_f1f4bc7e-2fe1-43f2-ba2f-daabe02927a6_360x.jpg?v=1749013240",
      hoverImg:
        "https://www.banarasee.in/cdn/shop/files/IMG_3335_1d2c2c40-f16c-45a1-83dd-e860aecb2b9f_360x.jpg?v=1749013240",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
        Dress Materials Under 2500
      </h1>

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
        <button 
                         onClick={() => navigate("/productspage")} 

         className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition text-sm sm:text-base">
          View All
        </button>
      </div>
    </div>
  );
};

export default DressMaterialUnder2500;
