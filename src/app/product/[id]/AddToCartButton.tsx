"use client";

import { addToCart } from "@/actions/action";
import { addedToCartContext } from "@/context/addedToCartContext";
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "sonner";

const AddToCartButton = ({ productId }: { productId: string }) => {
  const [loading, setLoading] = useState(false);
  const addedToCartContextState = useContext(addedToCartContext)
  

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const res = await addToCart(productId);
      if (res.status === 200) {
        toast.success("Product added to cart");
        addedToCartContextState?.setAddedToCart((prev) => !prev);
        
      }
    } catch (error) {
      console.log("Error while adding items to cart", error);
      toast.error("Error while adding items to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleAddToCart}
      className={`group relative  overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:shadow-indigo-500/25 active:translate-y-0 ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      {loading ? (
        <>
          <span className="relative z-10 flex items-center gap-2">
            Adding
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
              <Loader2 className="animate-spin" />
            </span>
          </span>
        </>
      ) : (
        <>
          <span className="relative z-10 flex items-center gap-2">
            Add To Cart
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
              🛒
            </span>
          </span>
        </>
      )}
    </button>
  );
};
export default AddToCartButton;
