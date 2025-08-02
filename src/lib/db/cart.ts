'use server'
import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { CartItem: { include: { product: true } } };
}>;

export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = (await cookies()).get("localCartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { CartItem: { include: { product: true } } },
      })
    : null;

    if(!cart) {
      return null;
    }

  return {
    ...cart,
    size: cart?.CartItem.reduce((total, item) => total + item.quantity, 0),
    subtotal: cart?.CartItem.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0,
    ),
  };
}

export async function createCart():Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({ data: {} });
  (await cookies()).set("localCartId", newCart.id);
  return {
    ...newCart,
    CartItem: [],
    size: 0,    
    subtotal: 0,
  }
}
