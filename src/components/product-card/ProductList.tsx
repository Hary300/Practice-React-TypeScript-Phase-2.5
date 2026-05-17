import { useEffect, useState } from 'react';
import type { Product } from '../types/product-type';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch('/product.jon');

        if (!res.ok) {
          throw new Error(`Error Status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) {
    return <p>Loading Product...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
