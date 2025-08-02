import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import React, { cache } from "react";

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
});

export async function generateMetadata({params}:{params:{id:string}}) : Promise<Metadata> {
  const product = await getProduct(params.id);
  return {
    title: product?.name,
    description: product?.description,
  }
}

const Page = async ({ params }: { params: { id: string } }) => {

  const product = await getProduct(params.id); 

  if (!product) {
    return (
      <div className="text-error flex min-h-screen items-center justify-center text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen px-4 py-12">
      <div className="bg-base-200 border-base-300 mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-xl">
        {/* Product Image */}
        <div className="relative h-64 w-full md:h-96">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="p-6 md:p-8">
          <h1 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
            {product.name}
          </h1>
          <p className="text-base-content/80 mb-6 text-lg">
            {product.description}
          </p>
          <div className="text-secondary text-2xl font-semibold">
            ₹{product.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
