type ProfileImageProps = {
  name: string;
  imageUrl: string;
};

export default function ProfileImage({ name, imageUrl }: ProfileImageProps) {
  return (
    <div className='size-50 rounded-full aspect-square overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
      <img
        src={imageUrl}
        alt={`${name} Image`}
        className='size-full object-cover object-center'
      />
    </div>
  );
}
