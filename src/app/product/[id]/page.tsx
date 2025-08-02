import { addToCart } from "@/actions/action";
import { prisma } from "@/lib/db/prisma";
import { Heart } from "lucide-react";
import Image from "next/image";
import React, { cache } from "react";
import { toast } from "sonner";
import AddToCartButton from "./AddToCartButton";

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
});

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } =  params;
  console.log("Product ID:", id, "Type:", typeof id);
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="text-error flex min-h-screen items-center justify-center text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12">
      <div className="hover:shadow-3xl mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 shadow-indigo-200/50 ring-slate-200/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-300/30">
        {/* Product Image */}
        <div className="group relative h-64 w-full overflow-hidden md:h-116">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            priority
          />
          <div className="absolute top-4 right-4 z-20">
            <div className="rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-white/20 backdrop-blur-sm">
              <Heart className="h-6 w-6 cursor-pointer text-slate-600 transition-all duration-300 hover:scale-110" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 z-20">
            <div className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              Premium Quality
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="relative p-6 md:p-8">
          <div className="absolute top-0 left-1/2 h-1 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

          <h1 className="mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-3xl leading-tight font-bold text-transparent md:text-4xl">
            {product.name}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-indigo-600">
                ₹{product.price}
              </span>
              <span className="text-sm text-slate-500 line-through">
                ₹{product.price * 1.2}
              </span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                20% OFF
              </span>
            </div>

            <div className="flex items-center gap-4">
              <AddToCartButton productId={JSON.parse(JSON.stringify(id))} />
            </div>
          </div>

          {/* Additional features */}
          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-slate-50 p-4">
            <div className="text-center">
              <div className="mb-2 text-2xl">🚚</div>
              <div className="text-xs font-semibold text-slate-700">
                Free Delivery
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl">🔄</div>
              <div className="text-xs font-semibold text-slate-700">
                Easy Returns
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl">🛡️</div>
              <div className="text-xs font-semibold text-slate-700">
                2 Year Warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
