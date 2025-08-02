import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({orderBy: {createdAt: "desc"}});
  // console.log(products);

  return (
<div className="min-h-screen bg-base-100">
  {/* Header Section */}
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-primary-content text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          Our Products
        </h1>
        <p className="text-secondary-content text-lg md:text-xl max-w-2xl mx-auto">
          Discover our amazing collection of products, carefully curated just for you
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-content">{products.length}</div>
            <div className="text-secondary-content text-sm">Products Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-content">✨</div>
            <div className="text-secondary-content text-sm">Premium Quality</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-content">🚚</div>
            <div className="text-secondary-content text-sm">Fast Delivery</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Products Section */}
  <div className="container mx-auto px-4 py-12 bg-base-100">
    {products.length === 0 ? (
      /* Empty State */
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-8xl mb-6">📦</div>
        <h3 className="text-2xl font-bold text-base-content mb-4">No Products Found</h3>
        <p className="text-base-content/60 text-center max-w-md mb-8">
          It looks like there are no products available at the moment. Check back later or add some products to get started.
        </p>
        <button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-content px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
          Add First Product
        </button>
      </div>
    ) : (
      /* Products Grid */
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            description={product.description}
            createdAt={product.createdAt}
          />
        ))}
      </div>
    )}
  </div>  
</div>

  );
}