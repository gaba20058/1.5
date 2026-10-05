import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBEAE8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

          <div className="flex justify-center mt-12">
          <button className="bg-[#1E3A8A] text-white uppercase rounded-full px-12 py-3.5 text-xs font-medium tracking-wider hover:bg-[#1e40af] transition-colors duration-200">
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}