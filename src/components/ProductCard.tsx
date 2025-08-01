import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
};

const ProductCard = ({
  id,
  imageUrl,
  name,
  price,
  description,
  createdAt,
}: Props) => {
  return (
    <Link href={`/product/${id}`}>
      <div
        key={id}
        className="group transform overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Product Image */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Price Badge */}
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-3 py-2 text-sm font-bold text-white shadow-lg">
            ${price}
          </div>

          {/* New Badge (if created within 7 days) */}
          {new Date().getTime() - new Date(createdAt).getTime() <
            7 * 24 * 60 * 60 * 1000 && (
            <div className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
              NEW
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-6">
          {/* Product Name */}
          <h3 className="mb-2 line-clamp-2 text-xl font-bold text-gray-800 transition-colors group-hover:text-blue-600">
            {name}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
            {description || "No description available"}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-xs text-gray-500">
              {new Date(createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>

            <button className="focus:ring-opacity-50 transform rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-800 focus:ring-4 focus:ring-blue-500">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
