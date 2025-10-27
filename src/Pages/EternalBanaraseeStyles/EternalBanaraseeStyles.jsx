import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 



const products = [
  {
    name: "Banarasee organza mix saree with zari border pink ",
    price: "₹6,499",
                path:"/card_detail",

    img: "https://www.banarasee.in/cdn/shop/files/IMG_8216_687c436f-4131-46b0-a6b0-b1a22c6f2788_1400x.jpg?v=1697175584",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8224_11344d89-73a0-4d90-9865-8e7b8dda1bbb_1400x.jpg?v=1697175625",
  },
  {
    name: "Banarasee salwar kameez semi katan silk fabric with zari work blue pink tone",
    price: "₹7,499",
                path:"/card_detail",

    img: "https://www.banarasee.in/cdn/shop/files/IMG_8652_2dd7b74a-bb61-400e-80d6-5774c9c81c46_1400x.jpg?v=1697090057",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8654_1400x.jpg?v=1697090057",
  },
  {
    name: "Banarasee handwoven tissue= saree with swarovski work gold",
    price: "₹5,499",
                path:"/card_detail",

    img: "https://www.banarasee.in/cdn/shop/files/IMG_5152_1200x.jpg?v=1693986832",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_51457_1200x.jpg?v=1693986832",
  },
  {
    name: "Banarasee handwoven plain tissue skirt border saree grey",
    price: "₹8,499",
                path:"/card_detail",

    img: "https://www.banarasee.in/cdn/shop/files/IMG_3266_1200x.jpg?v=1690955457",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_3260_1200x.jpg?v=1690955457",
  },
  {
    name: "Banarasee handwoven plain tissue skirt border saree pink",
    price: "₹7,999",
                path:"/card_detail",

    img: "https://www.banarasee.in/cdn/shop/files/IMG_2055_1200x.jpg?v=1690955017",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_2050_1200x.jpg?v=1690955017",
  },
  {
    name: "Banarasee organza mix saree with zari border pink",
    price: "₹7,999",
                path:"/card_detail",

    img: "https://www.banarasee.in/cdn/shop/files/IMG_3691_1200x.jpg?v=1690878802",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8216_687c436f-4131-46b0-a6b0-b1a22c6f2788_1400x.jpg?v=1697175584",
  },
];

const EternalBanaraseeStyles = () => {
          const navigate = useNavigate(); 

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
        Eternal Banarasee Styles
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Check the Top Sellers of Yesteryear
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {products.map((product, idx) => (
          <div key={idx}
          onClick={() => product.path && navigate(product.path)} // ✅ move here

           className="group cursor-pointer">
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <img
                src={product.hoverImg}
                alt={`${product.name}-hover`}
                className="absolute top-0 left-0 w-full h-[300px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            {/* Stars */}
            <div className="flex justify-start mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Brand Name */}
            <p className="text-red-700 py-3 font-semibold mt-1">Banarasee</p>

            {/* Product Info */}
            <div className="text-start mt-1">
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                {product.name}
              </p>

              {/* Price */}
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

export default EternalBanaraseeStyles;
