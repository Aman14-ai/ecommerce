// components/EmptyCart.tsx
"use client";

import { ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen flex-col items-center justify-center gap-6 -mt-20 px-4 text-center"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="flex items-center justify-center rounded-full bg-white p-6 shadow-lg"
      >
        <ShoppingBag className="h-12 w-12 text-gray-400" />
      </motion.div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Your Shopping Cart is Empty
        </h1>
        <p className="text-gray-500 max-w-md">
          Looks like you have not added anything to your cart yet. Let us find something special!
        </p>
      </div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-md transition-colors hover:bg-indigo-700"
        >
          <span>Browse Products</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default EmptyCart;