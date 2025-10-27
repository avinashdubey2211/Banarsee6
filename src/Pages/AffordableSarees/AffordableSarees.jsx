import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 


const AffordableSarees = () => {
          const navigate = useNavigate(); 
  
  
  const products = [
    {
      name: "Banarasee organza floral embroidery sequin work saree red",
      price: "₹6,499",
                  path:"/card_detail",

      img: "https://www.banarasee.in/cdn/shop/files/IMG_1668_1400x.jpg?v=1706172345",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1648_008b65f0-8d72-4e2e-a974-ccd7a2732cb2_1400x.jpg?v=1706172345",
    },
    {
      name: "Banarasee handwoven shibori tissue zari border saree olive green",
      price: "₹7,499",
                  path:"/card_detail",

      img: "https://www.banarasee.in/cdn/shop/files/IMG_9307_cdec8a92-6740-4bb7-8d58-48c769109c79_1400x.jpg?v=1705045174",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_93001_1400x.jpg?v=1706178140",
    },
    {
      name: "Banarasee organza floral embroidery sequin work saree orange",
      price: "₹5,499",
                  path:"/card_detail",

      img: "https://www.banarasee.in/cdn/shop/files/IMG_1681_2b965faa-1c0d-47c4-ad29-7566ad655900_1400x.jpg?v=1705994463",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1678_9316bc09-4c9e-4247-b761-d92be0df1f09_1400x.jpg?v=1705995704",
    },
    {
      name: "Banarasee Organza floral embroidery sequin work saree pink ",
      price: "₹8,499",
                  path:"/card_detail",

      img: "https://www.banarasee.in/cdn/shop/files/IMG_68716_1200x.jpg?v=1698917686",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_6877_1200x.jpg?v=1698917686",
    },
    {
      name: "Banarasee organza floral embroidery sequin work saree maroon",
      price: "₹7,999",
                  path:"/card_detail",

      img: "https://www.banarasee.in/cdn/shop/files/IMG_1770_1400x.jpg?v=1705997780",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1767_9f10820e-5baa-48f9-9553-1be18c92bc0a_1400x.jpg?v=1705998691",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
        View Our Most Affordable Sarees
      </h1>

      <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Get Your Sarees Below 2500
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, idx) => (
          <div key={idx}
                                    onClick={() => product.path && navigate(product.path)} // ✅ move here

           className="group cursor-pointer">
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

            <div className="flex justify-start mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-red-700 py-3 font-semibold mt-1">Banarasee</p>

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

export default AffordableSarees;
