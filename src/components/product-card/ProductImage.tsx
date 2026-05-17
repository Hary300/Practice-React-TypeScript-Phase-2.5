type ProductImageProps = {
  name: string;
  image: string;
};

export default function ProductImage({ name, image }: ProductImageProps) {
  return (
    <div className='h-50 rounded-2xl overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.5)] mb-5'>
      <img
        src={image}
        alt={`${name} image`}
        className='size-full object-center object-cover'
      />
    </div>
  );
}
