import React from "react";

const fabrics = [
  {
    name: "Organza",
    img: "https://www.banarasee.in/cdn/shop/files/Organza_37f53904-0938-4bde-b1b5-185c3b7b0f85_940x.png?v=1708357311",
  },
  {
    name: "Tissue Sarees",
    img: "https://www.banarasee.in/cdn/shop/files/Tissue_Sarees_940x.png?v=1708357348",
  },
  {
    name: "Cotton Silk",
    img: "https://www.banarasee.in/cdn/shop/files/Cotton_Silk_9cd0fdd8-2c8e-4c56-a6eb-64152e379f8b_940x.png?v=1708357555",
  },
  {
    name: "Chiffon",
    img: "https://www.banarasee.in/cdn/shop/files/Chiffon_2d71e5fc-2e00-47ff-abe4-66921cce80f5_940x.png?v=1708357374",
  },
  {
    name: "Linen",
    img: "https://www.banarasee.in/cdn/shop/files/Linen_Sarees_c8a044cf-438a-48fb-bcd2-179f55fffc27_940x.png?v=1708357442",
  },
  {
    name: "Chanderi",
    img: "https://www.banarasee.in/cdn/shop/files/Chanderi_7d2ee58b-7332-4161-9f70-781d925552e7_940x.png?v=1708357468",
  },
];

const BrowseByFabric = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Browse Sarees by Fabric
      </h1>

      {/* Fabric Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {fabrics.map((fabric, idx) => (
          <div
            key={idx}
            className="group cursor-pointer flex flex-col items-center text-center"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-36 md:h-36 lg:w-48 lg:h-48 overflow-hidden rounded-full">
              <img
                src={fabric.img}
                alt={fabric.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-2 font-medium text-gray-900">{fabric.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByFabric;
