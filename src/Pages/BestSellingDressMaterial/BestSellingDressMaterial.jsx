import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 



const BestSellingDressMaterial = () => {
       const navigate = useNavigate(); 

  const products = [
    {
      name: "Handloom khadi cotton hand dyed batik pattern salwar kameez dupatta set beige yellow",
      price: "₹6,499",
      img: "https://www.banarasee.in/cdn/shop/products/DSC_0885_47db8e91-9380-4ced-8d2a-c31c7980ec82_720x.jpg?v=1641557097",
      hoverImg:"https://www.banarasee.in/cdn/shop/products/DSC_0886_b4de85a5-bc68-452a-b03d-f86230ae47f7_720x.jpg?v=1641557097",
    },
    {
      name: "Banarasee salwar kameez cotton silk resham buti woven fabric peach",
      price: "₹7,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_0947_e2b783f3-264e-499c-8576-9c57bbc2ede5_720x.jpg?v=1690285987",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0948_995ecc3c-5f9e-41f9-a6a3-1d3676d71a5b_720x.jpg?v=1690285986",
    },
    {
      name: "Banarasee semi katan silk salwar kameez fabric with dupatta zari work grey",
      price: "₹5,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_0268_720x.jpg?v=1712657574",
      hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0258_7f6dae99-c383-4fe5-8308-fb2ebc52c0b0_720x.jpg?v=1712657574",
    },
    {
      name: "Banarasee chanderi cotton stripes salwar kameez fabric with dupatta yellow",
      price: "₹8,499",
      img: "https://www.banarasee.in/cdn/shop/products/DSC_0340_4b558c0e-9865-4784-ad9d-9fc855c5b24f_600x.jpg?v=1631277555",
      hoverImg:"https://www.banarasee.in/cdn/shop/products/DSC_0341_2209734f-abaf-40ae-a251-defed113be49_600x.jpg?v=1631277555",
    },
    {
      name: "banarasee chanderi cotton stripes salwar kameez fabric with dupatta pink",
      price: "₹7,999",
      img: "https://www.banarasee.in/cdn/shop/products/DSC_0326_0fc4d027-b663-46e2-96c2-190c2eaa8227_600x.jpg?v=1631277113",
      hoverImg:"https://www.banarasee.in/cdn/shop/products/DSC_0327_deb916bd-13d0-41e7-abe7-f0ff63d16bad_600x.jpg?v=1631277113",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
        Best Selling Dress Material
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Style Yourself with trendiest of the lot
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

export default BestSellingDressMaterial;
