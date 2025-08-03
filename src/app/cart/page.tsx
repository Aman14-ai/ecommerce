import { getCart } from "@/lib/db/cart";
import React from "react";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import Subtotal from "./Subtotal";

export const metadata = {
  title: "Cart",
};

const page = async () => {
  const cart = await getCart();
  console.log(cart?.CartItem);

  return (
    <div className="bg-base-100 px-4">
      {cart && cart?.CartItem.length > 0 ? (
        <>
          <div className="mt-4 flex flex-col items-center space-y-4">
            {cart?.CartItem.map((item) => (
              <CartItems key={item.id} item={item} />
            ))}
            <div>
              <Subtotal />
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default page;
