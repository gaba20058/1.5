import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="w-full bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col">
      <div className="bg-[#F1F1F1] rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
        <div className="relative w-3/4 h-3/4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain"
          />
        </div>
      </div>

      <h3 className="text-lg font-bold mt-4 lowercase text-gray-900">
        {product.title}
      </h3>

      <p className="text-[13px] text-gray-500 mt-2 leading-snug">
        {product.description}
      </p>

      <p className="text-sm text-gray-900 mt-4">
        {product.price} ₽
      </p>

      <button className="mt-3 self-start bg-[#1E3A8A] text-white rounded-full px-5 py-2 uppercase text-[11px] font-medium tracking-wide hover:bg-[#1e40af] transition-colors duration-200">
        в корзину
      </button>
    </article>
  );
}