import React, { useState } from "react";
import { SvgIcon } from "../svgIcon/SvgIcon";

interface ProductProps {
  imageUrl: string;
  name: string;
  price: number | string;
  discount: number | null;
  shortDesc: string;
}

const Product: React.FC<ProductProps> = ({
  imageUrl,
  name,
  price,
  discount,
  shortDesc,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  return (
    <div
      className=" relative cursor-pointer w-full"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && (
        <div className="absolute w-full h-full z-50 bg-gray-500">
          <div className="flex flex-col items-center justify-center gap-6 relative top-44">
            <div>
              <button className="bg-white text-primary font-bold border-none py-3 px-14">
                Add to cart
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 text-white   ">
              <div className="flex gap-1 items-center">
                <SvgIcon name="share" className="w-6 h-5" />
                <p className="capitalize font-semibold">share</p>
              </div>
              <div className="flex gap-1 items-center">
                <SvgIcon name="compare" className="w-6 h-5" />
                <p className="capitalize font-semibold">compare</p>
              </div>
              <div className="flex gap-1 items-center">
                <SvgIcon name="like" className="w-6 h-5" />
                <p className="capitalize font-semibold">like</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <img src={imageUrl} alt={name} className=" h-full w-full" />
      <p
        className={
          discount
            ? "absolute top-6 right-2 bg-red-50  text-white rounded-full px-2 py-4"
            : " absolute top-6 right-2 rounded-full text-white px-3 py-4 bg-blue-200"
        }
      >
        {discount ? `-${discount}%` : "New"}
      </p>
      <div className="text-left flex flex-col gap-4  bg-gray-50 pl-4 py-4">
        <h4 className="text-2xl font-bold">{name}</h4>
        <p className="text-gray-400">{shortDesc}</p>
        <p className="text-xl font-semibold mb-2">Rp {price}.000</p>
      </div>
    </div>
  );
};

export default Product;
