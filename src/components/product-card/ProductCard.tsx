import { useState } from 'react';
import type { Product } from '../types/product-type';
import ProductButton from './ProductButton';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductDetailCard from './ProductDetailCard';

type ProductCardProp = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProp) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className='p-8 shadow-[0_0_5px_rgba(0,0,0,0.5)] rounded-2xl '>
      <ProductImage name={product.name} image={product.image} />
      <p>
        <strong>Name: </strong>
        {product.name}
      </p>
      <p>
        <strong>Rating: </strong>
        {product.rating}
      </p>

      <ProductPrice price={product.price} />

      <div className='flex gap-1'>
        <ProductButton setDetail={setShowDetail} />
        <p
          className={`border px-4 py-1 w-fit rounded-2xl font-bold ${product.inStock ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}
        >
          {product.inStock ? 'Available' : 'Out of stock'}
        </p>
      </div>

      {/* Detail */}
      <div
        className={`transition-all duration-400 ${showDetail ? 'opacity-100   pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}
      >
        <ProductDetailCard
          product={product}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
        />
      </div>
    </div>
  );
}
