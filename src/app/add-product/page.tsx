import { addProduct } from "@/actions/product";
import FormSubmitButton from "@/components/FormSubmitButton";
import React from "react";

export const metadata = {
  title: "Add Product",
};

const page = () => {
  return (
    <div className="bg-base-100 min-h-screen">
  <div className="container mx-auto px-4 py-12">
    <div className="mx-auto max-w-lg">
      <div className="bg-base-200 border border-base-300 rounded-2xl shadow-xl overflow-hidden">
        
        {/* Form Header */}
        <div className="bg-gradient-to-r from-primary to-secondary border-b border-base-300 px-8 py-6">
          <h2 className="text-primary-content text-center text-xl font-semibold">
            Product Information
          </h2>
          <p className="text-secondary-content mt-2 text-center text-sm">
            Fill in the details below to add a new product
          </p>
        </div>

        {/* Form Fields */}
        <form action={addProduct} className="space-y-6 p-8">
          
          {/* Product Name */}
          <div className="space-y-2">
            <label className="text-base-content block text-sm font-medium">
              Product Name *
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Enter Product Name"
              className="w-full rounded-lg border border-base-300 bg-base-100 px-4 py-3 text-base-content transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-base-content block text-sm font-medium">
              Description *
            </label>
            <textarea
              required
              name="description"
              placeholder="Enter Description"
              rows={5}
              className="w-full resize-none rounded-lg border border-base-300 bg-base-100 px-4 py-3 text-base-content transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="text-base-content block text-sm font-medium">
              Image URL *
            </label>
            <input
              required
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-base-300 bg-base-100 px-4 py-3 text-base-content transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <label className="text-base-content block text-sm font-medium">
              Price *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 transform font-medium text-base-content">
                $
              </span>
              <input
                required
                name="price"
                type="number"
                step="1"
                placeholder="0"
                className="w-full rounded-lg border border-base-300 bg-base-100 py-3 pr-4 pl-8 text-base-content transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Submit Button */}
          <FormSubmitButton className="btn btn-primary btn-block text-primary-content pt-4">
            Add Product
          </FormSubmitButton>
        </form>
      </div>

      {/* Help Text */}
      <div className="mt-6 text-center">
        <p className="text-sm text-base-content/50">
          * Required fields must be filled out
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default page;
