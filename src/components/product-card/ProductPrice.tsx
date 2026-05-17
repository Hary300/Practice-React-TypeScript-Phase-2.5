type ProductPriceProp = {
  price: number;
};

export default function ProductPrice({ price }: ProductPriceProp) {
  return (
    <>
      <p className='text-2xl pl-5 font-bold py-5'>
        Rp. {price.toLocaleString('id-ID')}
      </p>
    </>
  );
}
