"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function addProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const imageUrl = formData.get("imageUrl") as string;
  // console.log(formData);

  if (!name || !description || !price || !imageUrl) {
    throw new Error("All fields are required");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  });
  redirect("/");
}

export async function addToCart(productId: string) {
  try {
    const cart = (await getCart()) ?? (await createCart());
    //  now i see if productId is in cart then increase quantity or add to cart

    const productInCart = cart.CartItem.find(
      (item) => item.productId === productId,
    );

    if (productInCart) {
      await prisma.cartItem.update({
        where: { id: productInCart.id },
        data: { quantity: { increment: 1 } },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          quantity: 1,
          cartId: cart.id,
          productId: productId,
        },
      });
    }
    return {
      message: "Product added to cart successfully",
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}


