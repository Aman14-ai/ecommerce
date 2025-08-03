"use client";
import React, { useContext, useEffect, useState } from "react";
import { ShoppingCart, Search, Menu, X, User, Heart, Moon } from "lucide-react";
import { getCart } from "@/lib/db/cart";
import { addedToCartContext } from "@/context/addedToCartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const addedToCartContextState = useContext(addedToCartContext);
  //console.log("Radhe Radhe from navbar \n\n", addedToCartContextState);
  const addedToCartState = addedToCartContextState?.addedToCart;
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const getSize = async () => {
    const cart = await getCart();
    setCartCount(cart?.size || 0);
  };
  useEffect(() => {
    getSize();
  }, [addedToCartState]);

  return (
    <div className="bg-base-100 backdrop-blur-40 backdrop-bxl fixed top-0 z-50 w-full rounded-lg border-b border-gray-200 p-4 shadow-sm backdrop-saturate-200">
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
              <span className="text-xl font-bold text-white">A</span>
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                AMAN
              </h1>
              <p className="-mt-1 text-xs text-gray-500">Cart</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group text-secondary-content relative font-medium transition-colors duration-200 hover:text-blue-600"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden w-80 items-center rounded-full bg-gray-100 px-4 py-2 md:flex">
            <Search className="mr-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button className="text-secondary-content rounded-full p-2 transition-colors hover:bg-gray-100 md:hidden">
              <Search className="h-5 w-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <button className="text-secondary-content relative hidden rounded-full p-2 transition-colors hover:bg-gray-100 hover:text-black sm:flex">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                2
              </span>
            </button>

            {/* User Account */}
            <button className="text-secondary-content hidden rounded-full p-2 transition-colors hover:bg-gray-100 hover:text-black sm:flex">
              <User className="h-5 w-5" />
            </button>

            {/* Shopping Cart */}
            <Link
              href="/cart"
              className={`relative flex items-center justify-between rounded-xl   transition-all duration-300 ${
                path === "/cart"
                  ? "animate-pulse-once border-yellow-300 bg-yellow-50 shadow-lg hover:shadow-yellow-200/50 border"
                  : ""
              } `}
            >
              <button className="group relative cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-100 hover:text-black">
                <ShoppingCart className="text-primary-content h-6 w-6 group-hover:text-blue-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-2 transition-colors hover:bg-gray-100 lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-gray-200 pb-4 lg:hidden">
            {/* Mobile Search */}
            <div className="mt-4 mb-4 md:hidden">
              <div className="flex items-center rounded-full bg-gray-100 px-4 py-2">
                <Search className="mr-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile-only links */}
              <div className="border-t border-gray-200 pt-2 sm:hidden">
                <a
                  href="#"
                  className="flex items-center rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  <Heart className="mr-3 h-5 w-5" />
                  Wishlist (2)
                </a>

                <a
                  href="#"
                  className="flex items-center rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  <User className="mr-3 h-5 w-5" />
                  My Account
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
