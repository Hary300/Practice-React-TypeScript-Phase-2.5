type ProductButtonProps = {
  setDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductButton({ setDetail }: ProductButtonProps) {
  return (
    <button
      className='cursor-pointer px-4 py-1 bg-blue-500 text-white rounded-2xl transition-shadow shadow-[0_0_5px_rgba(0,0,0,0.5)] active:shadow-none duration-100'
      onClick={() => {
        // e.stopPropagation();
        setDetail(true);
      }}
    >
      Detail
    </button>
  );
}
