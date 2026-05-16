type Props = {
  price: number;
  discountedPrice?: number;
};

export const PriceCard = ({ price, discountedPrice }: Props) => {
  return (
    <div>
      {discountedPrice ? (
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-xl">${discountedPrice}</h1>
          <h1 className="text-xl text-gray-400 line-through ">${price}</h1>
          <p className="bg-[#FFEBEB] rounded-2xl p-2 text-[#FF7878] text-sm items-center w-12 h-6 flex justify-center font-semibold">
            -{Math.round(((price - discountedPrice) / price) * 100)}%
          </p>
        </div>
      ) : (
        <h1 className="font-bold text-xl">${price}</h1>
      )}
    </div>
  );
};
