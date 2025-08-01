import { addProduct } from "@/actions/product";
import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Add Product",
};


const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="py-6 text-center text-3xl font-bold tracking-wide text-white">
            Add Product
          </h1>
        </div>
      </div>

      {/* Form Container */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-lg">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
            {/* Form Header */}
            <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6">
              <h2 className="text-center text-xl font-semibold text-gray-800">
                Product Information
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Fill in the details below to add a new product
              </p>
            </div>

            {/* Form Fields */}
            <form action={addProduct} className="space-y-6 p-8">
              {/* Product Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Product Name *
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Enter Product Name"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 transition-all duration-200 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  required
                  name="description"
                  placeholder="Enter Description"
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 transition-all duration-200 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Image URL *
                </label>
                <input
                  required
                  name="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 transition-all duration-200 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Price *
                </label>
                <div className="relative">
                  <span className="absolute top-1/2 left-4 -translate-y-1/2 transform font-medium text-gray-500">
                    $
                  </span>
                  <input
                    required
                    name="price"
                    type="number"
                    step="1"
                    placeholder="0"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pr-4 pl-8 transition-all duration-200 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <FormSubmitButton className="pt-4">Add Product</FormSubmitButton>
            </form>
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              * Required fields must be filled out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
