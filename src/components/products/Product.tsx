import React, { useState } from "react";
import ProductIcon from "./ProductIcon";

interface ProductProps {
  imageUrl: string;
  name: string;
  price: number | string;
  discount: number | string;
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
            <div className="flex items-center justify-center gap-2 text-white   ">
              <ProductIcon name="share" />
              <ProductIcon name="compare" />
              <ProductIcon name="like" />
            </div>
          </div>
        </div>
      )}

      <img src={imageUrl} alt={name} className=" h-full w-full" />
      <p
        className={`absolute top-6 right-2 text-white rounded-full py-4
          ${discount ? " bg-red-50 px-2 " : " px-3 bg-blue-200"}`}
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
