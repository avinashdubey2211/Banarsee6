

import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 


const products = [
  {
    name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
    price: "₹6,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0640_32dabf50-fbc4-4c56-b636-64f9f2fa595a.jpg?v=1760705900",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0633_7f43ea3e-e294-4f73-bf70-fd5e301111a3.jpg?v=1760705923",
  },
  {
    name: "Banarasee Handwoven Cotton Silk Saree With Buti Design Contrast Pallu Black Maroon",
    price: "₹7,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0389_8f235f93-078b-48d8-94d3-a8dd34482fdf.jpg?v=1760705468",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0395_2a45c32c-2851-4a21-bb22-2877ef4989bd.jpg?v=1760705486",
  },
  {
    name: "Banarasee Handloom Plain Cotton Silk Saree With Contrast Border Navy Blue Red",
    price: "₹5,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0428_fd1c9943-4883-48cc-ae91-93585027ce3d.jpg?v=1760705321",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0433_b4d5ffa5-690f-4b1c-bc99-ed60b6d811f0.jpg?v=1760705321",
  },
  {
    name: "Banarasee Cotton Silk Saree With Gold Zari Border Contrast Pallu Burgundy Green",
    price: "₹8,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8947_742ab5ab-57c6-49b7-8fa9-5f7f723e9913.jpg?v=1759318946",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8958_df223fa7-7c0f-4f8a-b351-8c0d12a93471.jpg?v=1759318946",
  },
  {
    name: "Banarasee Cotton Silk Kota Checks Saree With Buti design Contrast border Navy blue orange",
    price: "₹7,999",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8742_5584a413-990a-40f2-b50a-52047df12837.jpg?v=1760098495",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8747_9564a2ac-552d-4a9d-a35e-a693ca8906dd.jpg?v=1760098495",
  },
  {
    name: "Banarasee Cotton Silk Kota Checks Saree With Buti Design Contrast border orange pink",
    price: "₹6,999",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8705_47048f80-4ba8-4e94-a03c-5e5e184aeb8a.jpg?v=1759318383",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d.jpg?v=1759318383",
  },
  {
    name: "Banarasee Cotton Silk Saree With Buti Design Contrast Border Burgundy pink",
    price: "₹8,999",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8672_4517910a-7668-47f4-81ed-0f5b83e1fd9a.jpg?v=1759318299",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d_1400x.jpg?v=1759318383",
  },
  {
    name: "Banarasee Cotton Silk Saree With Resham Work Tissue Border White red",
    price: "₹7,299",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_7920_e7807e87-5f98-489b-982e-15eaabcd590d_1400x.jpg?v=1758356807",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_7914_8dfc36fb-331e-4551-9166-59b4a2c202ce_1400x.jpg?v=1758356967",
  },
];

const Cutton_Silk_Sarees = () => {
        const navigate = useNavigate(); 
  
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 py-6 sm:mb-4">
        Be Summer Ready With Cutton Silk Sarees
      </h1>

      

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            <p className="text-gray-700 text-xs mt-2">Banarasee</p>

            {/* Product Info */}
            <div className="text-start mt-1">
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                {product.name}
              </p>

              {/* Price */}
              <p className="text-gray-700 font-semibold py-2 text-sm sm:text-base">
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

export default Cutton_Silk_Sarees;
