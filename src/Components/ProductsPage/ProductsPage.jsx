

// import React, { useState } from "react";

// // ✅ Sample data generator (you can replace this with your real API/products)
// const products = [
//   {
//     id: 1,
//     name: "Banarasee Handloom Satin Saree Pink",
//     price: 120,
//     type: "Saree",
//     fabric: "Silk",
//     baseColor: "Pink",
//     additionalColor: "White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//   {
//     id: 2,
//     name: "Banarasee Cotton Salwar Blue",
//     price: 80,
//     type: "Salwar",
//     fabric: "Cotton",
//     baseColor: "Blue",
//     additionalColor: "Red",
//      img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  
//   },
//   {
//     id: 3,
//     name: "Banarasee Chiffon Saree Green",
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
//   },
//    {
//     id: 4,
//     name: "Banarasee Handloom Satin Saree Pink",
//     price: 120,
//     type: "Saree",
//     fabric: "Silk",
//     baseColor: "Pink",
//     additionalColor: "White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//   {
//     id: 5,
//     name: "Banarasee Cotton Salwar Blue",
//     price: 80,
//     type: "Salwar",
//     fabric: "Cotton",
//     baseColor: "Blue",
//     additionalColor: "Red",
//        img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
//   },
//   {
//     id: 6,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handwoven Broad Border Zari Jaal Design Tissue Saree Blue Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_7096_0be3f13d-aa60-4bbc-a23b-f027021ebf56.jpg?v=1703504409",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_71081.jpg?v=1703504442",
//   },
//    {
//     id: 7,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handwoven Broad Border Tissue Saree With Embroidered Floral Buta Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_6877.jpg?v=1698917686",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_2307.jpg?v=1706013439",
//   },
//    {
//     id: 8,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Handloom MulM Cotton Hand Block Print Saree Black White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0151.jpg?v=1711540907",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0145.jpg?v=1711540907",
//   },
//    {
//     id: 9,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Semi Chiffon Saree With Antique Gold Zari Work Maroon",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_3598_1400x.jpg?v=1690611586",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_3603_b0b4aaa1-dce3-4790-8820-187d0cf3ca8a_1400x.jpg?v=1690611598",
//   },
//    {
//     id: 10,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handwoven Plain Tissue Skirt Border Saree Grey",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_3260_1400x.jpg?v=1690955457",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_3266_1400x.jpg?v=1690955457",
//   },
//    {
//     id: 11,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0640_32dabf50-fbc4-4c56-b636-64f9f2fa595a.jpg?v=1760705900",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0633_7f43ea3e-e294-4f73-bf70-fd5e301111a3.jpg?v=1760705923",
//   }, {
//     id: 12,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//    name: "Banarasee Handwoven Cotton Silk Saree With Buti Design Contrast Pallu Black Maroon",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0389_8f235f93-078b-48d8-94d3-a8dd34482fdf.jpg?v=1760705468",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0395_2a45c32c-2851-4a21-bb22-2877ef4989bd.jpg?v=1760705486",
//   }, {
//     id: 13,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handloom Plain Cotton Silk Saree With Contrast Border Navy Blue Red",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0428_fd1c9943-4883-48cc-ae91-93585027ce3d.jpg?v=1760705321",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0433_b4d5ffa5-690f-4b1c-bc99-ed60b6d811f0.jpg?v=1760705321",
//   }, {
//     id: 14,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//       name: "Banarasee Cotton Silk Saree With Gold Zari Border Contrast Pallu Burgundy Green",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_8947_742ab5ab-57c6-49b7-8fa9-5f7f723e9913.jpg?v=1759318946",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8958_df223fa7-7c0f-4f8a-b351-8c0d12a93471.jpg?v=1759318946",
//   }, {
//     id: 15,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Cotton Silk Kota Checks Saree With Buti design Contrast border Navy blue orange",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_8742_5584a413-990a-40f2-b50a-52047df12837.jpg?v=1760098495",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8747_9564a2ac-552d-4a9d-a35e-a693ca8906dd.jpg?v=1760098495",
//   },
//   {
//     id: 16,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//       name: "Banarasee Cotton Silk Kota Checks Saree With Buti Design Contrast border orange pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_8705_47048f80-4ba8-4e94-a03c-5e5e184aeb8a.jpg?v=1759318383",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d.jpg?v=1759318383",
//   },
//   {
//     id: 17,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Cotton Silk Saree With Buti Design Contrast Border Burgundy pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_8672_4517910a-7668-47f4-81ed-0f5b83e1fd9a.jpg?v=1759318299",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d_1400x.jpg?v=1759318383",
//   },
//   {
//     id: 18,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Cotton Silk Saree With Resham Work Tissue Border White red",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_7920_e7807e87-5f98-489b-982e-15eaabcd590d_1400x.jpg?v=1758356807",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_7914_8dfc36fb-331e-4551-9166-59b4a2c202ce_1400x.jpg?v=1758356967",
//   },
//   {
//     id: 19,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//    {
//     id: 20,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
//   },
//    {
//     id: 21,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//    {
//     id: 22,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handloom Semi Dupion Saree With Zari Buta Work contrast border Blush Pinkdual Tone",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0681_b84fdaf7-8e0c-49de-a48e-ee7dfbf380f8_940x.jpg?v=1760851709",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0692_2e4032cc-c4b7-4bf0-adfe-d309a49febb0_940x.jpg?v=1760852413",
//   },
//    {
//     id: 23,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handwoven Plain Tissue Saree With Zari Border Salmon Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0524_7e1fc66d-0b70-49f1-a2d4-c82bbf3f5399_1066x.jpg?v=1760849803",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0530_7698102e-0610-484d-81a9-40b682649243_1066x.jpg?v=1760849803",
//   },
//    {
//     id: 24,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee organza floral embroidery sequin work saree orange",
//       price: "₹5,499",
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_1681_2b965faa-1c0d-47c4-ad29-7566ad655900_1400x.jpg?v=1705994463",
//       hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1678_9316bc09-4c9e-4247-b761-d92be0df1f09_1400x.jpg?v=1705995704",
//     },
//   {
//     id: 25,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Organza floral embroidery sequin work saree pink ",
//       price: "₹8,499",
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_68716_1200x.jpg?v=1698917686",
//       hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_6877_1200x.jpg?v=1698917686",
//     },
//   {
//     id: 26,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee organza floral embroidery sequin work saree maroon",
//       price: "₹7,999",
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_1770_1400x.jpg?v=1705997780",
//       hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1767_9f10820e-5baa-48f9-9553-1be18c92bc0a_1400x.jpg?v=1705998691",
//     },
//   {
//     id: 27,
//     name: "Banarasee Handloom Satin Saree Pink",
//     price: 120,
//     type: "Saree",
//     fabric: "Silk",
//     baseColor: "Pink",
//     additionalColor: "White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//   {
//     id: 28,
//     name: "Banarasee Cotton Salwar Blue",
//     price: 80,
//     type: "Salwar",
//     fabric: "Cotton",
//     baseColor: "Blue",
//     additionalColor: "Red",
//      img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  
//   },
//   {
//     id: 29,
//     name: "Banarasee Chiffon Saree Green",
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
//   },
//    {
//     id: 30,
//     name: "Banarasee Handloom Satin Saree Pink",
//     price: 120,
//     type: "Saree",
//     fabric: "Silk",
//     baseColor: "Pink",
//     additionalColor: "White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//   {
//     id: 31,
//     name: "Banarasee Cotton Salwar Blue",
//     price: 80,
//     type: "Salwar",
//     fabric: "Cotton",
//     baseColor: "Blue",
//     additionalColor: "Red",
//        img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
//   },
//   {
//     id: 32,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handwoven Broad Border Zari Jaal Design Tissue Saree Blue Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_7096_0be3f13d-aa60-4bbc-a23b-f027021ebf56.jpg?v=1703504409",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_71081.jpg?v=1703504442",
//   },
//    {
//     id: 33,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handwoven Broad Border Tissue Saree With Embroidered Floral Buta Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_6877.jpg?v=1698917686",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_2307.jpg?v=1706013439",
//   },
//    {
//     id: 34,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Handloom MulM Cotton Hand Block Print Saree Black White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0151.jpg?v=1711540907",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0145.jpg?v=1711540907",
//   },
//    {
//     id: 35,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Semi Chiffon Saree With Antique Gold Zari Work Maroon",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_3598_1400x.jpg?v=1690611586",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_3603_b0b4aaa1-dce3-4790-8820-187d0cf3ca8a_1400x.jpg?v=1690611598",
//   },
//    {
//     id: 36,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handwoven Plain Tissue Skirt Border Saree Grey",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_3260_1400x.jpg?v=1690955457",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_3266_1400x.jpg?v=1690955457",
//   },
//    {
//     id: 37,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0640_32dabf50-fbc4-4c56-b636-64f9f2fa595a.jpg?v=1760705900",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0633_7f43ea3e-e294-4f73-bf70-fd5e301111a3.jpg?v=1760705923",
//   }, {
//     id: 38,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//    name: "Banarasee Handwoven Cotton Silk Saree With Buti Design Contrast Pallu Black Maroon",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0389_8f235f93-078b-48d8-94d3-a8dd34482fdf.jpg?v=1760705468",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0395_2a45c32c-2851-4a21-bb22-2877ef4989bd.jpg?v=1760705486",
//   }, {
//     id: 39,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handloom Plain Cotton Silk Saree With Contrast Border Navy Blue Red",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0428_fd1c9943-4883-48cc-ae91-93585027ce3d.jpg?v=1760705321",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0433_b4d5ffa5-690f-4b1c-bc99-ed60b6d811f0.jpg?v=1760705321",
//   }, {
//     id: 40,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//       name: "Banarasee Cotton Silk Saree With Gold Zari Border Contrast Pallu Burgundy Green",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_8947_742ab5ab-57c6-49b7-8fa9-5f7f723e9913.jpg?v=1759318946",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8958_df223fa7-7c0f-4f8a-b351-8c0d12a93471.jpg?v=1759318946",
//   }, {
//     id: 41,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Cotton Silk Kota Checks Saree With Buti design Contrast border Navy blue orange",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_8742_5584a413-990a-40f2-b50a-52047df12837.jpg?v=1760098495",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8747_9564a2ac-552d-4a9d-a35e-a693ca8906dd.jpg?v=1760098495",
//   },
//   {
//     id: 42,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//       name: "Banarasee Cotton Silk Kota Checks Saree With Buti Design Contrast border orange pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_8705_47048f80-4ba8-4e94-a03c-5e5e184aeb8a.jpg?v=1759318383",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d.jpg?v=1759318383",
//   },
//   {
//     id: 43,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Cotton Silk Saree With Buti Design Contrast Border Burgundy pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_8672_4517910a-7668-47f4-81ed-0f5b83e1fd9a.jpg?v=1759318299",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d_1400x.jpg?v=1759318383",
//   },
//   {
//     id: 44,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Cotton Silk Saree With Resham Work Tissue Border White red",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_7920_e7807e87-5f98-489b-982e-15eaabcd590d_1400x.jpg?v=1758356807",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_7914_8dfc36fb-331e-4551-9166-59b4a2c202ce_1400x.jpg?v=1758356967",
//   },
//   {
//     id: 45,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//    {
//     id: 46,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
//   },
//    {
//     id: 47,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//    {
//     id: 48,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handloom Semi Dupion Saree With Zari Buta Work contrast border Blush Pinkdual Tone",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0681_b84fdaf7-8e0c-49de-a48e-ee7dfbf380f8_940x.jpg?v=1760851709",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0692_2e4032cc-c4b7-4bf0-adfe-d309a49febb0_940x.jpg?v=1760852413",
//   },
//    {
//     id: 49,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handwoven Plain Tissue Saree With Zari Border Salmon Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0524_7e1fc66d-0b70-49f1-a2d4-c82bbf3f5399_1066x.jpg?v=1760849803",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0530_7698102e-0610-484d-81a9-40b682649243_1066x.jpg?v=1760849803",
//   },
//    {
//     id: 50,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee organza floral embroidery sequin work saree orange",
//       price: "₹5,499",
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_1681_2b965faa-1c0d-47c4-ad29-7566ad655900_1400x.jpg?v=1705994463",
//       hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1678_9316bc09-4c9e-4247-b761-d92be0df1f09_1400x.jpg?v=1705995704",
//     },
//   {
//     id: 51,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Organza floral embroidery sequin work saree pink ",
//       price: "₹8,499",
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_68716_1200x.jpg?v=1698917686",
//       hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_6877_1200x.jpg?v=1698917686",
//     },
//   {
//     id: 52,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee organza floral embroidery sequin work saree maroon",
//       price: "₹7,999",
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_1770_1400x.jpg?v=1705997780",
//       hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1767_9f10820e-5baa-48f9-9553-1be18c92bc0a_1400x.jpg?v=1705998691",
//     },
 
//     {
//     id: 53,
//     name: "Banarasee Handloom Satin Saree Pink",
//     price: 120,
//     type: "Saree",
//     fabric: "Silk",
//     baseColor: "Pink",
//     additionalColor: "White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//   {
//     id: 54,
//     name: "Banarasee Cotton Salwar Blue",
//     price: 80,
//     type: "Salwar",
//     fabric: "Cotton",
//     baseColor: "Blue",
//     additionalColor: "Red",
//      img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  
//   },
//   {
//     id: 55,
//     name: "Banarasee Chiffon Saree Green",
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
//   },
//    {
//     id: 56,
//     name: "Banarasee Handloom Satin Saree Pink",
//     price: 120,
//     type: "Saree",
//     fabric: "Silk",
//     baseColor: "Pink",
//     additionalColor: "White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//   {
//     id: 57,
//     name: "Banarasee Cotton Salwar Blue",
//     price: 80,
//     type: "Salwar",
//     fabric: "Cotton",
//     baseColor: "Blue",
//     additionalColor: "Red",
//        img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
//   },
//   {
//     id: 58,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handwoven Broad Border Zari Jaal Design Tissue Saree Blue Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_7096_0be3f13d-aa60-4bbc-a23b-f027021ebf56.jpg?v=1703504409",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_71081.jpg?v=1703504442",
//   },
//    {
//     id: 59,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handwoven Broad Border Tissue Saree With Embroidered Floral Buta Pink",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_6877.jpg?v=1698917686",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_2307.jpg?v=1706013439",
//   },
//    {
//     id: 60,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Handloom MulM Cotton Hand Block Print Saree Black White",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0151.jpg?v=1711540907",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0145.jpg?v=1711540907",
//   },
//    {
//     id: 61,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Semi Chiffon Saree With Antique Gold Zari Work Maroon",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_3598_1400x.jpg?v=1690611586",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_3603_b0b4aaa1-dce3-4790-8820-187d0cf3ca8a_1400x.jpg?v=1690611598",
//   },
//    {
//     id: 62,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//      name: "Banarasee Handwoven Plain Tissue Skirt Border Saree Grey",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_3260_1400x.jpg?v=1690955457",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_3266_1400x.jpg?v=1690955457",
//   },
//    {
//     id: 63,
   
//     price: 150,
//     type: "Saree",
//     fabric: "Chiffon",
//     baseColor: "Green",
//     additionalColor: "Purple",
//     name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0640_32dabf50-fbc4-4c56-b636-64f9f2fa595a.jpg?v=1760705900",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0633_7f43ea3e-e294-4f73-bf70-fd5e301111a3.jpg?v=1760705923",
//   },

  
// ];



// const priceRange = { min: 50, max: 200 };

// const ProductsPage = () => {
//   const [selectedProduct, setSelectedProduct] = useState(products[0]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [priceFilterOpen, setPriceFilterOpen] = useState(false);
//   const [typeFilterOpen, setTypeFilterOpen] = useState(false);
//   const [fabricFilterOpen, setFabricFilterOpen] = useState(false);
//   const [baseColorFilterOpen, setBaseColorFilterOpen] = useState(false);
//   const [addColorFilterOpen, setAddColorFilterOpen] = useState(false);

//   const [price, setPrice] = useState([50, 200]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedFabrics, setSelectedFabrics] = useState([]);
//   const [selectedBaseColors, setSelectedBaseColors] = useState([]);
//   const [selectedAddColors, setSelectedAddColors] = useState([]);

//   const toggleSelection = (item, arr, setArr) => {
//     setArr(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
//   };

//   const filteredProducts = products.filter(
//     (p) =>
//       p.price >= price[0] &&
//       p.price <= price[1] &&
//       (selectedTypes.length ? selectedTypes.includes(p.type) : true) &&
//       (selectedFabrics.length ? selectedFabrics.includes(p.fabric) : true) &&
//       (selectedBaseColors.length ? selectedBaseColors.includes(p.baseColor) : true) &&
//       (selectedAddColors.length ? selectedAddColors.includes(p.additionalColor) : true)
//   );

//   // ✅ Show 7 rows × 3 columns = 21 products per page
//   const productsPerPage = 21;
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const indexOfLast = currentPage * productsPerPage;
//   const indexOfFirst = indexOfLast - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

//   return (

//     <>
//         <div className="w-full py-12 bg-white">
//           {/* Title */}
//       <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-gray-800 mb-10">
//         Newly Added Collection
//       </h2>
//     <div className="bg-gray-100 min-h-screen flex lg:flex-row flex-col">
//       {/* Left Sidebar */}
//       <div className="lg:w-1/4 bg-white p-6 shadow-lg lg:h-screen overflow-y-auto sticky top-0 z-10 space-y-6">
//         <h2 className="text-2xl font-bold mb-4 border-b pb-2">Filters</h2>

//         {/* Price Filter */}
//         <div>
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => setPriceFilterOpen(!priceFilterOpen)}
//           >
//             <span className="font-semibold">Price</span>
//             <span>{priceFilterOpen ? "▲" : "▼"}</span>
//           </div>
//           {priceFilterOpen && (
//             <div className="mt-2">
//               <div className="flex justify-between text-sm text-gray-600 mb-1">
//                 <span>${price[0]}</span>
//                 <span>${price[1]}</span>
//               </div>
//               <input
//                 type="range"
//                 min={priceRange.min}
//                 max={priceRange.max}
//                 value={price[0]}
//                 onChange={(e) => setPrice([Number(e.target.value), price[1]])}
//                 className="w-full"
//               />
//               <input
//                 type="range"
//                 min={priceRange.min}
//                 max={priceRange.max}
//                 value={price[1]}
//                 onChange={(e) => setPrice([price[0], Number(e.target.value)])}
//                 className="w-full mt-1"
//               />
//             </div>
//           )}
//         </div>

//         {/* Product Type Filter */}
//         <div>
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => setTypeFilterOpen(!typeFilterOpen)}
//           >
//             <span className="font-semibold">Product Type</span>
//             <span>{typeFilterOpen ? "▲" : "▼"}</span>
//           </div>
//           {typeFilterOpen && (
//             <div className="mt-2 flex flex-col gap-1">
//               {["Saree", "Salwar"].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => toggleSelection(type, selectedTypes, setSelectedTypes)}
//                   className={`px-2 py-1 border rounded text-sm ${
//                     selectedTypes.includes(type)
//                       ? "bg-orange-600 text-white"
//                       : "bg-white text-gray-700"
//                   }`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Fabric Filter */}
//         <div>
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => setFabricFilterOpen(!fabricFilterOpen)}
//           >
//             <span className="font-semibold">Fabric</span>
//             <span>{fabricFilterOpen ? "▲" : "▼"}</span>
//           </div>
//           {fabricFilterOpen && (
//             <div className="mt-2 flex flex-wrap gap-2">
//               {[
//                 "Silk","Cotton","Chiffon","Georgette","Linen","Velvet","Crepe","Net",
//                 "Organza","Rayon","Brocade","Tussar","Khadi","Madhubani","Jacquard"
//               ].map((fabric) => (
//                 <button
//                   key={fabric}
//                   onClick={() => toggleSelection(fabric, selectedFabrics, setSelectedFabrics)}
//                   className={`px-2 py-1 border rounded text-sm ${
//                     selectedFabrics.includes(fabric)
//                       ? "bg-purple-600 text-white"
//                       : "bg-white text-gray-700"
//                   }`}
//                 >
//                   {fabric}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Base Color Filter */}
//         <div>
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => setBaseColorFilterOpen(!baseColorFilterOpen)}
//           >
//             <span className="font-semibold">Base Color</span>
//             <span>{baseColorFilterOpen ? "▲" : "▼"}</span>
//           </div>
//           {baseColorFilterOpen && (
//             <div className="mt-2 flex flex-wrap gap-2">
//               {[
//                 "Red","Blue","Green","Yellow","Orange","Pink","White","Purple","Brown",
//                 "Black","Beige","Maroon","Peach","Gray","Gold"
//               ].map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => toggleSelection(color, selectedBaseColors, setSelectedBaseColors)}
//                   className={`px-2 py-1 border rounded text-sm ${
//                     selectedBaseColors.includes(color)
//                       ? "bg-red-600 text-white"
//                       : "bg-white text-gray-700"
//                   }`}
//                 >
//                   {color}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Additional Color Filter */}
//         <div>
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => setAddColorFilterOpen(!addColorFilterOpen)}
//           >
//             <span className="font-semibold">Additional Color</span>
//             <span>{addColorFilterOpen ? "▲" : "▼"}</span>
//           </div>
//           {addColorFilterOpen && (
//             <div className="mt-2 flex flex-wrap gap-2">
//               {[
//                 "Red","Blue","Green","Yellow","Orange","Pink","White","Purple","Brown",
//                 "Black","Beige","Maroon","Peach","Gray","Gold"
//               ].map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => toggleSelection(color, selectedAddColors, setSelectedAddColors)}
//                   className={`px-2 py-1 border rounded text-sm ${
//                     selectedAddColors.includes(color)
//                       ? "bg-blue-600 text-white"
//                       : "bg-white text-gray-700"
//                   }`}
//                 >
//                   {color}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ✅ Right Section */}
//       <div className="lg:w-3/4 p-6 flex flex-col items-center">
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
//           {currentProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
//               onClick={() => setSelectedProduct(product)}
//             >
//               <div className="relative w-64 h-96 overflow-hidden">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <img
//                   src={product.hoverImg}
//                   alt={`${product.name}-hover`}
//                   className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                 />
//               </div>
//               <div className="p-5 flex flex-col items-center text-center">
//                 <h3 className="font-bold text-xl text-gray-900">{product.name}</h3>
//                 <p className="text-orange-600 font-semibold text-lg mt-2">${product.price}</p>
//                 <p className="text-gray-700 mt-2">{product.fabric}</p>
//                 <p className="text-gray-400 text-sm mt-1">{product.type}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ✅ Pagination */}
//         <div className="mt-8 flex justify-center gap-3 overflow-x-auto w-full">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded min-w-10 ${
//                 currentPage === i + 1
//                   ? "bg-orange-600 text-white"
//                   : "bg-white border text-gray-700"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default ProductsPage;







import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Banarasee Handloom Satin Saree Pink",
    price: 120,
    type: "Saree",
    fabric: "Silk",
    baseColor: "Pink",
    additionalColor: "White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
  },
  {
    id: 2,
    name: "Banarasee Cotton Salwar Blue",
    price: 80,
    type: "Salwar",
    fabric: "Cotton",
    baseColor: "Blue",
    additionalColor: "Red",
     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  
  },
  {
    id: 3,
    name: "Banarasee Chiffon Saree Green",
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
  },
   {
    id: 4,
    name: "Banarasee Handloom Satin Saree Pink",
    price: 120,
    type: "Saree",
    fabric: "Silk",
    baseColor: "Pink",
    additionalColor: "White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
  {
    id: 5,
    name: "Banarasee Cotton Salwar Blue",
    price: 80,
    type: "Salwar",
    fabric: "Cotton",
    baseColor: "Blue",
    additionalColor: "Red",
       img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
  },
  {
    id: 6,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handwoven Broad Border Zari Jaal Design Tissue Saree Blue Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_7096_0be3f13d-aa60-4bbc-a23b-f027021ebf56.jpg?v=1703504409",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_71081.jpg?v=1703504442",
  },
   {
    id: 7,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handwoven Broad Border Tissue Saree With Embroidered Floral Buta Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_6877.jpg?v=1698917686",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_2307.jpg?v=1706013439",
  },
   {
    id: 8,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Handloom MulM Cotton Hand Block Print Saree Black White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0151.jpg?v=1711540907",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0145.jpg?v=1711540907",
  },
   {
    id: 9,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Semi Chiffon Saree With Antique Gold Zari Work Maroon",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_3598_1400x.jpg?v=1690611586",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_3603_b0b4aaa1-dce3-4790-8820-187d0cf3ca8a_1400x.jpg?v=1690611598",
  },
   {
    id: 10,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handwoven Plain Tissue Skirt Border Saree Grey",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_3260_1400x.jpg?v=1690955457",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_3266_1400x.jpg?v=1690955457",
  },
   {
    id: 11,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0640_32dabf50-fbc4-4c56-b636-64f9f2fa595a.jpg?v=1760705900",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0633_7f43ea3e-e294-4f73-bf70-fd5e301111a3.jpg?v=1760705923",
  }, {
    id: 12,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
   name: "Banarasee Handwoven Cotton Silk Saree With Buti Design Contrast Pallu Black Maroon",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0389_8f235f93-078b-48d8-94d3-a8dd34482fdf.jpg?v=1760705468",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0395_2a45c32c-2851-4a21-bb22-2877ef4989bd.jpg?v=1760705486",
  }, {
    id: 13,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handloom Plain Cotton Silk Saree With Contrast Border Navy Blue Red",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0428_fd1c9943-4883-48cc-ae91-93585027ce3d.jpg?v=1760705321",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0433_b4d5ffa5-690f-4b1c-bc99-ed60b6d811f0.jpg?v=1760705321",
  }, {
    id: 14,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
      name: "Banarasee Cotton Silk Saree With Gold Zari Border Contrast Pallu Burgundy Green",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8947_742ab5ab-57c6-49b7-8fa9-5f7f723e9913.jpg?v=1759318946",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8958_df223fa7-7c0f-4f8a-b351-8c0d12a93471.jpg?v=1759318946",
  }, {
    id: 15,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Cotton Silk Kota Checks Saree With Buti design Contrast border Navy blue orange",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8742_5584a413-990a-40f2-b50a-52047df12837.jpg?v=1760098495",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8747_9564a2ac-552d-4a9d-a35e-a693ca8906dd.jpg?v=1760098495",
  },
  {
    id: 16,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
      name: "Banarasee Cotton Silk Kota Checks Saree With Buti Design Contrast border orange pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8705_47048f80-4ba8-4e94-a03c-5e5e184aeb8a.jpg?v=1759318383",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d.jpg?v=1759318383",
  },
  {
    id: 17,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Cotton Silk Saree With Buti Design Contrast Border Burgundy pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8672_4517910a-7668-47f4-81ed-0f5b83e1fd9a.jpg?v=1759318299",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d_1400x.jpg?v=1759318383",
  },
  {
    id: 18,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Cotton Silk Saree With Resham Work Tissue Border White red",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_7920_e7807e87-5f98-489b-982e-15eaabcd590d_1400x.jpg?v=1758356807",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_7914_8dfc36fb-331e-4551-9166-59b4a2c202ce_1400x.jpg?v=1758356967",
  },
  {
    id: 19,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
  },
   {
    id: 20,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  },
   {
    id: 21,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
   {
    id: 22,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handloom Semi Dupion Saree With Zari Buta Work contrast border Blush Pinkdual Tone",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0681_b84fdaf7-8e0c-49de-a48e-ee7dfbf380f8_940x.jpg?v=1760851709",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0692_2e4032cc-c4b7-4bf0-adfe-d309a49febb0_940x.jpg?v=1760852413",
  },
   {
    id: 23,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handwoven Plain Tissue Saree With Zari Border Salmon Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0524_7e1fc66d-0b70-49f1-a2d4-c82bbf3f5399_1066x.jpg?v=1760849803",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0530_7698102e-0610-484d-81a9-40b682649243_1066x.jpg?v=1760849803",
  },
   {
    id: 24,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee organza floral embroidery sequin work saree orange",
      price: "₹5,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_1681_2b965faa-1c0d-47c4-ad29-7566ad655900_1400x.jpg?v=1705994463",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1678_9316bc09-4c9e-4247-b761-d92be0df1f09_1400x.jpg?v=1705995704",
    },
  {
    id: 25,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Organza floral embroidery sequin work saree pink ",
      price: "₹8,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_68716_1200x.jpg?v=1698917686",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_6877_1200x.jpg?v=1698917686",
    },
  {
    id: 26,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee organza floral embroidery sequin work saree maroon",
      price: "₹7,999",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_1770_1400x.jpg?v=1705997780",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1767_9f10820e-5baa-48f9-9553-1be18c92bc0a_1400x.jpg?v=1705998691",
    },
  {
    id: 27,
    name: "Banarasee Handloom Satin Saree Pink",
    price: 120,
    type: "Saree",
    fabric: "Silk",
    baseColor: "Pink",
    additionalColor: "White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
  },
  {
    id: 28,
    name: "Banarasee Cotton Salwar Blue",
    price: 80,
    type: "Salwar",
    fabric: "Cotton",
    baseColor: "Blue",
    additionalColor: "Red",
     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  
  },
  {
    id: 29,
    name: "Banarasee Chiffon Saree Green",
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
  },
   {
    id: 30,
    name: "Banarasee Handloom Satin Saree Pink",
    price: 120,
    type: "Saree",
    fabric: "Silk",
    baseColor: "Pink",
    additionalColor: "White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
  {
    id: 31,
    name: "Banarasee Cotton Salwar Blue",
    price: 80,
    type: "Salwar",
    fabric: "Cotton",
    baseColor: "Blue",
    additionalColor: "Red",
       img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
  },
  {
    id: 32,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handwoven Broad Border Zari Jaal Design Tissue Saree Blue Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_7096_0be3f13d-aa60-4bbc-a23b-f027021ebf56.jpg?v=1703504409",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_71081.jpg?v=1703504442",
  },
   {
    id: 33,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handwoven Broad Border Tissue Saree With Embroidered Floral Buta Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_6877.jpg?v=1698917686",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_2307.jpg?v=1706013439",
  },
   {
    id: 34,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Handloom MulM Cotton Hand Block Print Saree Black White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0151.jpg?v=1711540907",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0145.jpg?v=1711540907",
  },
   {
    id: 35,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Semi Chiffon Saree With Antique Gold Zari Work Maroon",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_3598_1400x.jpg?v=1690611586",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_3603_b0b4aaa1-dce3-4790-8820-187d0cf3ca8a_1400x.jpg?v=1690611598",
  },
   {
    id: 36,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handwoven Plain Tissue Skirt Border Saree Grey",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_3260_1400x.jpg?v=1690955457",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_3266_1400x.jpg?v=1690955457",
  },
   {
    id: 37,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0640_32dabf50-fbc4-4c56-b636-64f9f2fa595a.jpg?v=1760705900",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0633_7f43ea3e-e294-4f73-bf70-fd5e301111a3.jpg?v=1760705923",
  }, {
    id: 38,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
   name: "Banarasee Handwoven Cotton Silk Saree With Buti Design Contrast Pallu Black Maroon",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0389_8f235f93-078b-48d8-94d3-a8dd34482fdf.jpg?v=1760705468",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0395_2a45c32c-2851-4a21-bb22-2877ef4989bd.jpg?v=1760705486",
  }, {
    id: 39,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handloom Plain Cotton Silk Saree With Contrast Border Navy Blue Red",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0428_fd1c9943-4883-48cc-ae91-93585027ce3d.jpg?v=1760705321",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0433_b4d5ffa5-690f-4b1c-bc99-ed60b6d811f0.jpg?v=1760705321",
  }, {
    id: 40,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
      name: "Banarasee Cotton Silk Saree With Gold Zari Border Contrast Pallu Burgundy Green",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8947_742ab5ab-57c6-49b7-8fa9-5f7f723e9913.jpg?v=1759318946",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8958_df223fa7-7c0f-4f8a-b351-8c0d12a93471.jpg?v=1759318946",
  }, {
    id: 41,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Cotton Silk Kota Checks Saree With Buti design Contrast border Navy blue orange",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8742_5584a413-990a-40f2-b50a-52047df12837.jpg?v=1760098495",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8747_9564a2ac-552d-4a9d-a35e-a693ca8906dd.jpg?v=1760098495",
  },
  {
    id: 42,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
      name: "Banarasee Cotton Silk Kota Checks Saree With Buti Design Contrast border orange pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8705_47048f80-4ba8-4e94-a03c-5e5e184aeb8a.jpg?v=1759318383",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d.jpg?v=1759318383",
  },
  {
    id: 43,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Cotton Silk Saree With Buti Design Contrast Border Burgundy pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_8672_4517910a-7668-47f4-81ed-0f5b83e1fd9a.jpg?v=1759318299",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_8699_d0998edd-cf7d-48af-a939-a52b0134e54d_1400x.jpg?v=1759318383",
  },
  {
    id: 44,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Cotton Silk Saree With Resham Work Tissue Border White red",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_7920_e7807e87-5f98-489b-982e-15eaabcd590d_1400x.jpg?v=1758356807",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_7914_8dfc36fb-331e-4551-9166-59b4a2c202ce_1400x.jpg?v=1758356967",
  },
  {
    id: 45,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
  },
   {
    id: 46,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  },
   {
    id: 47,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
   {
    id: 48,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handloom Semi Dupion Saree With Zari Buta Work contrast border Blush Pinkdual Tone",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0681_b84fdaf7-8e0c-49de-a48e-ee7dfbf380f8_940x.jpg?v=1760851709",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0692_2e4032cc-c4b7-4bf0-adfe-d309a49febb0_940x.jpg?v=1760852413",
  },
   {
    id: 49,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handwoven Plain Tissue Saree With Zari Border Salmon Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0524_7e1fc66d-0b70-49f1-a2d4-c82bbf3f5399_1066x.jpg?v=1760849803",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0530_7698102e-0610-484d-81a9-40b682649243_1066x.jpg?v=1760849803",
  },
   {
    id: 50,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee organza floral embroidery sequin work saree orange",
      price: "₹5,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_1681_2b965faa-1c0d-47c4-ad29-7566ad655900_1400x.jpg?v=1705994463",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1678_9316bc09-4c9e-4247-b761-d92be0df1f09_1400x.jpg?v=1705995704",
    },
  {
    id: 51,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Organza floral embroidery sequin work saree pink ",
      price: "₹8,499",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_68716_1200x.jpg?v=1698917686",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_6877_1200x.jpg?v=1698917686",
    },
  {
    id: 52,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee organza floral embroidery sequin work saree maroon",
      price: "₹7,999",
      img: "https://www.banarasee.in/cdn/shop/files/IMG_1770_1400x.jpg?v=1705997780",
      hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_1767_9f10820e-5baa-48f9-9553-1be18c92bc0a_1400x.jpg?v=1705998691",
    },
 
    {
    id: 53,
    name: "Banarasee Handloom Satin Saree Pink",
    price: 120,
    type: "Saree",
    fabric: "Silk",
    baseColor: "Pink",
    additionalColor: "White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
  },
  {
    id: 54,
    name: "Banarasee Cotton Salwar Blue",
    price: 80,
    type: "Salwar",
    fabric: "Cotton",
    baseColor: "Blue",
    additionalColor: "Red",
     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  
  },
  {
    id: 55,
    name: "Banarasee Chiffon Saree Green",
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
  },
   {
    id: 56,
    name: "Banarasee Handloom Satin Saree Pink",
    price: 120,
    type: "Saree",
    fabric: "Silk",
    baseColor: "Pink",
    additionalColor: "White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
  {
    id: 57,
    name: "Banarasee Cotton Salwar Blue",
    price: 80,
    type: "Salwar",
    fabric: "Cotton",
    baseColor: "Blue",
    additionalColor: "Red",
       img: "https://www.banarasee.in/cdn/shop/files/IMG_0745_16c9ce45-7598-47f6-ae9a-4f1c3226a67b.jpg?v=1760863580",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0752_90f71c22-dd9c-4ef1-9161-5eb5e4a44afa.jpg?v=1760863580",
  },
  {
    id: 58,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handwoven Broad Border Zari Jaal Design Tissue Saree Blue Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_7096_0be3f13d-aa60-4bbc-a23b-f027021ebf56.jpg?v=1703504409",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_71081.jpg?v=1703504442",
  },
   {
    id: 59,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handwoven Broad Border Tissue Saree With Embroidered Floral Buta Pink",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_6877.jpg?v=1698917686",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_2307.jpg?v=1706013439",
  },
   {
    id: 60,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Handloom MulM Cotton Hand Block Print Saree Black White",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0151.jpg?v=1711540907",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0145.jpg?v=1711540907",
  },
   {
    id: 61,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Semi Chiffon Saree With Antique Gold Zari Work Maroon",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_3598_1400x.jpg?v=1690611586",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_3603_b0b4aaa1-dce3-4790-8820-187d0cf3ca8a_1400x.jpg?v=1690611598",
  },
   {
    id: 62,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
     name: "Banarasee Handwoven Plain Tissue Skirt Border Saree Grey",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_3260_1400x.jpg?v=1690955457",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_3266_1400x.jpg?v=1690955457",
  },
   {
    id: 63,
   
    price: 150,
    type: "Saree",
    fabric: "Chiffon",
    baseColor: "Green",
    additionalColor: "Purple",
    name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0640_32dabf50-fbc4-4c56-b636-64f9f2fa595a.jpg?v=1760705900",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0633_7f43ea3e-e294-4f73-bf70-fd5e301111a3.jpg?v=1760705923",
  },

  
];
const priceRange = { min: 50, max: 200 };

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const [priceFilterOpen, setPriceFilterOpen] = useState(false);
  const [typeFilterOpen, setTypeFilterOpen] = useState(false);
  const [fabricFilterOpen, setFabricFilterOpen] = useState(false);
  const [baseColorFilterOpen, setBaseColorFilterOpen] = useState(false);
  const [addColorFilterOpen, setAddColorFilterOpen] = useState(false);

  const [price, setPrice] = useState([50, 200]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFabrics, setSelectedFabrics] = useState([]);
  const [selectedBaseColors, setSelectedBaseColors] = useState([]);
  const [selectedAddColors, setSelectedAddColors] = useState([]);

  const toggleSelection = (item, arr, setArr) => {
    setArr(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
  };

  const filteredProducts = products.filter(
    (p) =>
      p.price >= price[0] &&
      p.price <= price[1] &&
      (selectedTypes.length ? selectedTypes.includes(p.type) : true) &&
      (selectedFabrics.length ? selectedFabrics.includes(p.fabric) : true) &&
      (selectedBaseColors.length ? selectedBaseColors.includes(p.baseColor) : true) &&
      (selectedAddColors.length ? selectedAddColors.includes(p.additionalColor) : true)
  );

  const productsPerPage = 21;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  // Dropdown state
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Best Selling");

  const handleSortSelect = (option) => {
    setSortOption(option);
    setSortDropdownOpen(false);
  };

  return (
    <div className="w-full py-12 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-gray-800 mb-10">
        Newly Added Collection
      </h2>

      <div className="bg-gray-100 min-h-screen flex lg:flex-row flex-col">
        {/* Left Sidebar */}
        <div className="lg:w-1/4 bg-white p-6 shadow-lg lg:h-screen overflow-y-auto sticky top-0 z-10 space-y-6">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Filters</h2>

          {/* Price Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPriceFilterOpen(!priceFilterOpen)}
            >
              <span className="font-semibold">Price</span>
              <span>{priceFilterOpen ? "▲" : "▼"}</span>
            </div>
            {priceFilterOpen && (
              <div className="mt-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>${price[0]}</span>
                  <span>${price[1]}</span>
                </div>
                <input
                  type="range"
                  min={priceRange.min}
                  max={priceRange.max}
                  value={price[0]}
                  onChange={(e) =>
                    setPrice([Number(e.target.value), price[1]])
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min={priceRange.min}
                  max={priceRange.max}
                  value={price[1]}
                  onChange={(e) =>
                    setPrice([price[0], Number(e.target.value)])
                  }
                  className="w-full mt-1"
                />
              </div>
            )}
          </div>

          {/* Product Type Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setTypeFilterOpen(!typeFilterOpen)}
            >
              <span className="font-semibold">Product Type</span>
              <span>{typeFilterOpen ? "▲" : "▼"}</span>
            </div>
            {typeFilterOpen && (
              <div className="mt-2 flex flex-col gap-1">
                {["Saree", "Salwar"].map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      toggleSelection(type, selectedTypes, setSelectedTypes)
                    }
                    className={`px-2 py-1 border rounded text-sm ${
                      selectedTypes.includes(type)
                        ? "bg-orange-600 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Fabric Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setFabricFilterOpen(!fabricFilterOpen)}
            >
              <span className="font-semibold">Fabric</span>
              <span>{fabricFilterOpen ? "▲" : "▼"}</span>
            </div>
            {fabricFilterOpen && (
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Silk","Cotton","Chiffon","Georgette","Linen","Velvet","Crepe","Net",
                  "Organza","Rayon","Brocade","Tussar","Khadi","Madhubani","Jacquard"
                ].map((fabric) => (
                  <button
                    key={fabric}
                    onClick={() =>
                      toggleSelection(fabric, selectedFabrics, setSelectedFabrics)
                    }
                    className={`px-2 py-1 border rounded text-sm ${
                      selectedFabrics.includes(fabric)
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {fabric}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Base Color Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setBaseColorFilterOpen(!baseColorFilterOpen)}
            >
              <span className="font-semibold">Base Color</span>
              <span>{baseColorFilterOpen ? "▲" : "▼"}</span>
            </div>
            {baseColorFilterOpen && (
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Red","Blue","Green","Yellow","Orange","Pink","White","Purple","Brown",
                  "Black","Beige","Maroon","Peach","Gray","Gold"
                ].map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      toggleSelection(color, selectedBaseColors, setSelectedBaseColors)
                    }
                    className={`px-2 py-1 border rounded text-sm ${
                      selectedBaseColors.includes(color)
                        ? "bg-red-600 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Additional Color Filter */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setAddColorFilterOpen(!addColorFilterOpen)}
            >
              <span className="font-semibold">Additional Color</span>
              <span>{addColorFilterOpen ? "▲" : "▼"}</span>
            </div>
            {addColorFilterOpen && (
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Red","Blue","Green","Yellow","Orange","Pink","White","Purple","Brown",
                  "Black","Beige","Maroon","Peach","Gray","Gold"
                ].map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      toggleSelection(color, selectedAddColors, setSelectedAddColors)
                    }
                    className={`px-2 py-1 border rounded text-sm ${
                      selectedAddColors.includes(color)
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ✅ Right Section */}
        <div className="lg:w-3/4 p-6 flex flex-col items-center w-full">
          {/* 🔹 Header Row (Products count + Sort dropdown) */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                233 Products
              </h3>
            </div>

            <div className="relative">
              <button
                className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center justify-between w-60 text-gray-700"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              >
                <span>{sortOption}</span>
                <i className="fas fa-chevron-down text-gray-500 ml-2"></i>
              </button>

              {sortDropdownOpen && (
                <div className="absolute z-10 mt-1 w-60 bg-white border border-gray-300 rounded-md shadow-lg">
                  <div className="py-1">
                    {[
                      "Best Selling",
                      "Alphabetically, A-Z",
                      "Alphabetically, Z-A",
                      "Price, low to high",
                      "Price, high to low",
                      "Date, old to new",
                      "Date, new to old",
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSortSelect(opt)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 🔹 Product Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative w-64 h-96 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <img
                    src={product.hoverImg}
                    alt={`${product.name}-hover`}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="p-5 flex flex-col items-center text-center">
                  <h3 className="font-bold text-xl text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-orange-600 font-semibold text-lg mt-2">
                    ${product.price}
                  </p>
                  <p className="text-gray-700 mt-2">{product.fabric}</p>
                  <p className="text-gray-400 text-sm mt-1">{product.type}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Pagination */}
          <div className="mt-8 flex justify-center gap-3 overflow-x-auto w-full">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded min-w-10 ${
                  currentPage === i + 1
                    ? "bg-orange-600 text-white"
                    : "bg-white border text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
