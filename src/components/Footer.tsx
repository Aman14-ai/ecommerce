import { Copyright, Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-ring/30 border-base-200 rounded-2xl border-t shadow-lg">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 text-center">
            <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <span className="text-primary-content text-2xl">🛡️</span>
            </div>
            <h3 className="text-accent-content mb-2 text-xl font-semibold">
              Quality Guarantee
            </h3>
            <p className="text-accent-content/70">
              All products are carefully tested and verified for quality.
            </p>
          </div>

          <div className="p-6 text-center">
            <div className="bg-secondary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <span className="text-secondary-content text-2xl">🚀</span>
            </div>
            <h3 className="text-accent-content mb-2 text-xl font-semibold">
              Fast Shipping
            </h3>
            <p className="text-accent-content/70">
              Quick and reliable delivery to your doorstep.
            </p>
          </div>

          <div className="p-6 text-center">
            <div className="bg-info mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <span className="text-info-content text-2xl">💬</span>
            </div>
            <h3 className="text-accent-content mb-2 text-xl font-semibold">
              24/7 Support
            </h3>
            <p className="text-accent-content/70">
              Our customer support team is always here to help.
            </p>
          </div>
        </div>
        <p className="flex items-center justify-center gap-1 text-center text-sm text-gray-500">
          <Copyright className="h-4 w-4" />
          {new Date().getFullYear()} Aman Choudhary. All rights reserved.
          <span><Heart className="fill-current text-red-500" /></span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
