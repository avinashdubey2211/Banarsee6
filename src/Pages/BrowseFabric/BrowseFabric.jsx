import React from "react";

const fabrics = [
  {
    name: "Chanderi Dresh Matrial",
    img: "https://www.banarasee.in/cdn/shop/files/Chanderi_Dress_Material_f8ae4ed5-bfe8-4d66-a802-042e7d1c888c_940x.png?v=1708357748",
  },
  {
    name: "Linen  Dresh Matrial",
    img: "https://www.banarasee.in/cdn/shop/files/Linen_Dress_Material_940x.png?v=1708357773",
  },
  {
    name: "Cotton Silk Dresh Matrial",
    img: "https://www.banarasee.in/cdn/shop/files/Cotton_Silk_Dress_Material_8564ab51-0025-4729-80b6-83be6c0e6f4b_940x.png?v=1708357796",
  },
  {
    name: "Chiffon Dresh Matrial",
    img: "https://www.banarasee.in/cdn/shop/files/Chiffon_Dress_Material_874afce9-c012-4187-b086-2d9140265081_940x.png?v=1708357822",
  },
  {
    name: "Katon Silk Dresh Matrial ",
    img: "https://www.banarasee.in/cdn/shop/files/Katan_Silk_Dress_Material_0d5abcf9-1627-4ee0-b438-af801ebdaf6d_940x.png?v=1708357846",
  },
  {
    name: "Brocode Dresh Matrial",
    img: "https://www.banarasee.in/cdn/shop/files/Brocade_dress_material_1.jpg?v=1700202332",
  },
];

const BrowseFabric = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Browse Dress Materials by Fabric
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

export default BrowseFabric;
