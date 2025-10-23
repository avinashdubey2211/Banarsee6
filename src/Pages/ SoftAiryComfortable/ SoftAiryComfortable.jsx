


import React from "react";

const products = [
  {
    name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
        price: "₹6,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
  },
  {
    name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
        price: "₹7,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  },
  {
    name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Blue",
        price: "₹9,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
  },
  {
    name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
        price: "₹13,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
  {
    name: "Banarasee Handloom Semi Dupion Saree With Zari Buta Work contrast border Blush Pinkdual Tone",
        price: "₹9,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0681_b84fdaf7-8e0c-49de-a48e-ee7dfbf380f8_940x.jpg?v=1760851709",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0692_2e4032cc-c4b7-4bf0-adfe-d309a49febb0_940x.jpg?v=1760852413",
  },
  {
    name: "Banarasee Handwoven Plain Tissue Saree With Zari Border Salmon Pink",
        price: "₹17,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0524_7e1fc66d-0b70-49f1-a2d4-c82bbf3f5399_1066x.jpg?v=1760849803",
    hoverImg:
      "https://www.banarasee.in/cdn/shop/files/IMG_0530_7698102e-0610-484d-81a9-40b682649243_1066x.jpg?v=1760849803",
  },
];

const  SoftAiryComfortable = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
Soft Airy and comfortable      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Be Adorned in Gold and Elegane in the Finest Silks
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <img
                src={product.hoverImg}
                alt={`${product.name}-hover`}
                className="absolute top-0 left-0 w-full h-[350px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            {/* Brand Name */}
            <p className="text-gray-700 text-xs mt-2">Banarasee</p>

            <p className="text-start mt-2 font-medium text-gray-900 text-sm sm:text-base">
              {product.name}
            </p>

             {/* Price */}
              <p className="text-gray-700  py-2 text-xs sm:text-xs ">
                {product.price}
              </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <button className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition text-sm sm:text-base">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default  SoftAiryComfortable;
