import React from "react";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";

const NewCart = ({ data }) => {
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch({ type: "INC_CART", payload: product });
  };

  const handleDecrement = (product) => {
    dispatch({ type: "DEC_CART", payload: product });
  };

  const handleRemove = (product) => {
    dispatch({ type: "REMOVE_CART", payload: product });
  };

  return (
    <div className="container mx-auto mt-7 mb-6">
      <div className="grid grid-cols-2 gap-6">
        {data?.map((product) => (
          <Card
            key={product.id}
            className="relative shadow-md rounded-lg p-4 border border-[#e0e0e0] hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex justify-center items-center">
                <img
                  className="w-full h-[200px] object-contain rounded-lg transform transition-transform duration-300 hover:scale-105"
                  src={product.images[0]}
                  alt={product.title}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#253D4E]">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#7A7A7A] mt-1">
                    {product.category}
                  </p>
                  <p className="text-sm text-[#ADADAD] mt-2">
                    {product.description.length > 100
                      ? `${product.description.slice(0, 100)}...`
                      : product.description}
                  </p>
                </div>
                <div className="flex flex-col mt-4">
                  <p className=" text-[20px] flex items-center gap-3 font-bold text-yellow-500">
                  <FaStar />

                    {product.rating}
                  </p>
                  <p className="text-[20px] font-bold text-[#3BB77E]">
                    ${product.price}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      disabled={product.quantity <= 1}
                      onClick={() => handleDecrement(product)}
                      className="w-10 h-10 border border-[#3BB77E] rounded-lg text-lg flex items-center justify-center text-[#3BB77E] hover:bg-[#f0fff4] transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="w-12 h-10 border border-[#3BB77E] text-lg flex items-center justify-center rounded-lg">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(product)}
                      className="w-10 h-10 border border-[#3BB77E] rounded-lg text-lg flex items-center justify-center text-[#3BB77E] hover:bg-[#f0fff4] transition-colors duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => handleRemove(product)}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewCart;



// import React from "react";
// import { Card } from "antd";
// import { useDispatch } from "react-redux";

// const NewCart = ({ data }) => {
//   const dispatch = useDispatch();

//   const handleIncrement = (product) => {
//     dispatch({ type: "INC_CART", payload: product });
//   };

//   const handleDecrement = (product) => {
//     dispatch({ type: "DEC_CART", payload: product });
//   };

//   const handleRemove = (product) => {
//     dispatch({ type: "REMOVE_CART", payload: product });
//   };

//   return (
//     <div className="container mx-auto mt-7 mb-6">
//       <div className="grid grid-cols-1 gap-6">
//         {data?.map((product) => (
//           <Card
//             key={product.id}
//             className="relative shadow-lg rounded-lg p-4 border border-[#f0f0f0] hover:shadow-2xl transition-shadow duration-300"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div className="flex justify-center">
//                 <img
//                   className="w-full h-[200px] object-contain rounded-lg transform transition-transform duration-300 hover:scale-105"
//                   src={product.images[0]}
//                   alt={product.title}
//                 />
//               </div>
//               <div className="flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#253D4E]">
//                     {product.title}
//                   </h3>
//                   <p className="text-sm text-[#7A7A7A] mt-1">
//                     {product.category}
//                   </p>
//                   <p className="text-sm text-[#ADADAD] mt-2">
//                     {product.description.length > 100
//                       ? `${product.description.slice(0, 100)}...`
//                       : product.description}
//                   </p>
//                 </div>
//                 <div className="flex flex-col mt-4">
//                   <p className="text-2xl font-bold text-[#3BB77E]">
//                     ${product.price}
//                   </p>
//                   <div className="flex items-center gap-3 mt-4">
//                     <button
//                       disabled={product.quantity <= 1}
//                       onClick={() => handleDecrement(product)}
//                       className="w-10 h-10 border border-[#3BB77E] rounded-full text-lg flex items-center justify-center text-[#3BB77E] hover:bg-[#e0f4e1] transition-colors duration-200"
//                     >
//                       -
//                     </button>
//                     <span className="w-12 h-10 border border-[#3BB77E] text-lg flex items-center justify-center">
//                       {product.quantity}
//                     </span>
//                     <button
//                       onClick={() => handleIncrement(product)}
//                       className="w-10 h-10 border border-[#3BB77E] rounded-full text-lg flex items-center justify-center text-[#3BB77E] hover:bg-[#e0f4e1] transition-colors duration-200"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute top-4 right-4">
//               <button
//                 onClick={() => handleRemove(product)}
//                 className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300"
//               >
//                 Delete
//               </button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewCart;




// import React from "react";
// import { Card } from "antd";
// import { useDispatch } from "react-redux";

// const NewCart = ({ data }) => {
//   const dispatch = useDispatch();

//   const handleIncrement = (product) => {
//     dispatch({ type: "INC_CART", payload: product });
//   };

//   const handleDecrement = (product) => {
//     dispatch({ type: "DEC_CART", payload: product });
//   };

//   const handleRemove = (product) => {
//     dispatch({ type: "REMOVE_CART", payload: product });
//   };

//   return (
//     <div className="container mx-auto mt-7 mb-6">
//       <div className="grid grid-cols-1 gap-4">
//         {data?.map((product) => (
//           <Card key={product.id} className="relative shadow-lg rounded-lg">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="flex justify-center">
//                 <img
//                   className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
//                   src={product.images[0]}
//                   alt={product.title}
//                 />
//               </div>
//               <div className="flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#253D4E]">
//                     {product.title}
//                   </h3>
//                   <p className="text-sm text-[#ADADAD]">{product.category}</p>
//                   <p className="text-sm text-[#ADADAD] mt-1">
//                     {product.description}
//                   </p>
//                 </div>
//                 <div className="flex flex-col mt-2">
//                   <p className="text-xl font-bold text-[#3BB77E]">${product.price}</p>
//                   <div className="flex items-center gap-2 mt-3">
//                     <button
//                       disabled={product.quantity <= 1}
//                       onClick={() => handleDecrement(product)}
//                       className="w-8 h-8 border border-[#3BB77E] rounded-full text-lg flex items-center justify-center text-[#3BB77E] hover:bg-[#e0f4e1]"
//                     >
//                       -
//                     </button>
//                     <span className="w-12 h-8 border border-[#3BB77E] text-center flex items-center justify-center">
//                       {product.quantity}
//                     </span>
//                     <button
//                       onClick={() => handleIncrement(product)}
//                       className="w-8 h-8 border border-[#3BB77E] rounded-full text-lg flex items-center justify-center text-[#3BB77E] hover:bg-[#e0f4e1]"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute top-2 right-2">
//               <button
//                 onClick={() => handleRemove(product)}
//                 className="px-3 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
//               >
//                 Remove
//               </button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewCart;

