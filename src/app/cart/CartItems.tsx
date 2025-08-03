"use client";
import { decrementQuantity, incrementQunatity } from "@/actions/action";
import { CartItemWithProduct } from "@/lib/db/cart";
import {  Loader2, Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const CartItems = ({ item }: { item: CartItemWithProduct }) => {
  const { name, price, imageUrl, description } = item.product;
  const [isLoadingPlus, setIsLoadingPlus] = React.useState(false);
  const [isLoadingMinus  , setIsLoadingMinus] = useState(false)

  const handleIncrement = async () => {
    setIsLoadingPlus(true);
    try {
      const res = await incrementQunatity(item.id);
      toast.success(res?.message);
      // reload the page
      window.location.reload();

    } catch (error) {
      console.log(error);
      toast.error("Error while incrementing quantity");
    } finally {
      setIsLoadingPlus(false);
    }
  };
  const handleDecrement = async() =>{
    setIsLoadingMinus(true);
    try {
      const res = await decrementQuantity(item.id);
      toast.success(res?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Error while decrementing quantity");
    } finally {
      setIsLoadingMinus(false);
    }
  }

  return (
    <div className="flex max-w-3xl gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:shadow-md">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 96px"
        />
      </div>

      {/* Product Info */}
      <div className="min-w-0 flex-1">
        {/* Product Name */}
        <h2 className="truncate text-lg font-semibold text-gray-900">{name}</h2>

        {/* Product Description with proper ellipsis */}
        <p className="mt-1 line-clamp-3 text-sm text-gray-600">{description}</p>

        {/* Price and Quantity Controls */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-indigo-700">
            ${price.toFixed(2)}
          </p>

          {/* Enhanced Quantity Selector */}
          <div className="flex items-center gap-3 rounded-full bg-gray-100 px-3 py-1.5">
            <button
              className="rounded-full p-1 text-gray-600 transition-colors hover:bg-gray-200 hover:text-indigo-700"
              aria-label="Decrease quantity"
            >
              {!isLoadingMinus ? <Minus onClick={handleDecrement} className="size-4" />: <Loader2 className="animate-spin size-4 text-blue-500" />}
            </button>
            <span className="w-6 text-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              className="rounded-full p-1 text-gray-600 transition-colors hover:bg-gray-200 hover:text-indigo-700"
              aria-label="Increase quantity"
            >
              {!isLoadingPlus ? <Plus onClick={handleIncrement} className="size-4" />: <Loader2 className="animate-spin size-4 text-blue-500" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
