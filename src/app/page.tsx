import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({orderBy: {createdAt: "desc"}});
  console.log(products);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              Our Products
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
              Discover our amazing collection of products, carefully curated just for you
            </p>
            
            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{products.length}</div>
                <div className="text-blue-200 text-sm">Products Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">✨</div>
                <div className="text-blue-200 text-sm">Premium Quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">🚚</div>
                <div className="text-blue-200 text-sm">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        {products.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-8xl mb-6">📦</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No Products Found</h3>
            <p className="text-gray-500 text-center max-w-md mb-8">
              It looks like there are no products available at the moment. Check back later or add some products to get started.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Add First Product
            </button>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  imageUrl={product.imageUrl}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  createdAt={product.createdAt}
                />
              ))
            }
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-accent border-t border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-accent-content mb-2">Quality Guarantee</h3>
              <p className="text-accent-content/70">All products are carefully tested and verified for quality.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-accent-content mb-2">Fast Shipping</h3>
              <p className="text-accent-content/70">Quick and reliable delivery to your doorstep.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-accent-content mb-2">24/7 Support</h3>
              <p className="text-accent-content/70">Our customer support team is always here to help.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}