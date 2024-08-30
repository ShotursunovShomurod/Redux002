import React from "react";
import { Button, Card } from "antd";
import { FaHeart } from "react-icons/fa";
import Skeletons from "../skelotons/skeletons";
import { useDispatch } from "react-redux";

const Products = ({ data, loading }) => {
  const dispatch = useDispatch();

  if (loading) {
    return <Skeletons limit={10} />;
  }

  const items = data?.map((product) => {
    return (
      <Card
        key={product.id}
        className="relative border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
        hoverable
      >
        <div className="overflow-hidden rounded-t-lg">
          <img
            className="w-full h-[200px] object-contain transform transition-transform duration-300 hover:scale-110"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-[16px] font-bold text-[#253D4E] text-start">
            {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
          </p>
          <p className="text-[14px] text-[#7A7A7A] text-start">
            {product.description.length > 60 ? `${product.description.slice(0, 60)}...` : product.description}
          </p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-[18px] text-[#3BB77E] font-bold">
              ${product.price}
            </p>
            <p className="text-[14px] text-[#FFD700] font-bold">
              {product.rating} ★
            </p>
          </div>
          <p className="text-start text-[12px] text-[#ADADAD]">
            {product.category}
          </p>
          <Button
            type="primary"
            className="bg-[#3BB77E] border-none mt-3"
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            Add to Cart
          </Button>
        </div>
        <div className="absolute top-3 right-3">
          <button
            onClick={() =>
              dispatch({ type: "TOGGLE_WISHLIST", payload: product })
            }
            className="rounded-full p-2 bg-white shadow-md hover:bg-[#FF4D4F]  transition-colors duration-300"
          >
            <FaHeart className="text-[#FF4D4F] hover:text-white" />
          </button>
        </div>
      </Card>
    );
  });

  return (
    <div className="container mx-auto mt-7 mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items}
      </div>
    </div>
  );
};

export default Products;