import React from "react";
import { FaStar } from "react-icons/fa";

const products = [
  {
    name: "Banarasee Handwoven Broad Border Zari Jaal Design Tissue Saree Blue Pink",
      price: "₹6,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_7096_0be3f13d-aa60-4bbc-a23b-f027021ebf56.jpg?v=1703504409",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_71081.jpg?v=1703504442",
  },
  {
    name: "Banarasee Handwoven Broad Border Tissue Saree With Embroidered Floral Buta Pink",
      price: "₹7,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_6877.jpg?v=1698917686",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_2307.jpg?v=1706013439",
  },
  {
    name: "Handloom MulM Cotton Hand Block Print Saree Black White",
      price: "₹5,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0151.jpg?v=1711540907",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0145.jpg?v=1711540907",
  },
  {
    name: "Banarasee Semi Chiffon Saree With Antique Gold Zari Work Maroon",
      price: "₹8,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_3598_1400x.jpg?v=1690611586",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_3603_b0b4aaa1-dce3-4790-8820-187d0cf3ca8a_1400x.jpg?v=1690611598",
  },
  {
    name: "Banarasee Handwoven Plain Tissue Skirt Border Saree Grey",
      price: "₹7,999",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_3260_1400x.jpg?v=1690955457",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_3266_1400x.jpg?v=1690955457",
  },
];

const Best_Selling = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
        Best Selling Sarees  From  Banarasee
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Only Community love those design !
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
                


               {/* Stars */}
              <div className="flex justify-start mt-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>  

                {/* Brand Name */}
              <p className="text-red-700  py-3  font-semibold mt-1">Banarasee</p> 


            {/* Product Info */}
            <div className="text-start mt-1">
              <p className="font-medium text-gray-900 text-sm sm:text-base ">
                {product.name}
              </p>
             

             {/* Price */}
              <p className="text-gray-700   py-2 text-xs sm:text-sm">
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

export default Best_Selling;
