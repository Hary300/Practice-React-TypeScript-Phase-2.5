// import { useEffect } from 'react';
import type { Product } from '../types/product-type';

type ProductDetailCardProp = {
  product: Product;
  showDetail: boolean;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductDetailCard({
  product,
  // showDetail,
  setShowDetail,
}: ProductDetailCardProp) {
  // useEffect(() => {
  //   function overlayClick(event: MouseEvent) {
  //     if (!showDetail) return;
  //     const target = event.target as HTMLElement;
  //     const isDetail = target.closest('.detail-card');

  //     if (!isDetail) {
  //       setShowDetail(false);
  //     }
  //   }

  //   document.addEventListener('click', overlayClick);

  //   return () => {
  //     document.removeEventListener('click', overlayClick);
  //   };
  // }, [showDetail, setShowDetail]);

  const closeSvg = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18 18 6M6 6l12 12'
      />
    </svg>
  );

  return (
    <div
      className='overlay flex px-4 justify-center items-center min-h-screen fixed inset-0 before:absolute before:inset-0 before:bg-black/50'
      onClick={() => setShowDetail(false)}
    >
      <div
        className='detail-card bg-white relative z-10 p-5 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.5)] md:max-w-120 flex flex-col gap-3'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='ml-auto flex justify-center rounded-full items-center p-1 shadow-[0_0_5px_rgba(0,0,0,0.5)] cursor-pointer'
          onClick={() => setShowDetail(false)}
        >
          {closeSvg}
        </button>
        <p>
          <strong>Nama: </strong>
          {product.name}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>

        <p>
          <strong>Brand: </strong>
          {product.specs.brand}
        </p>
        <p>
          <strong>Weight: </strong>
          {product.specs.weight}
        </p>
        <p>
          <strong>Dimensions: </strong>
          {product.specs.dimensions}
        </p>
        <p>
          <strong>Warranty: </strong>
          {product.specs.warranty}
        </p>
      </div>
    </div>
  );
}
