import React from "react";
import { DetailsProps } from "./ProductDetails";
import Stars from "./Stars";
import Size from "./Size";
import Colors from "./Colors";
import CountAndCompare from "./CountAndCompare";

const ProductData: React.FC<DetailsProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-normal text-4xl max-sm:text-2xl">
        {product?.attributes.name}
      </h1>
      <p className="text-gray-200 text-2xl max-sm:text-lg">
        Rs.{product?.attributes.price}.00
      </p>
      <Stars product={product} />
      <p className="text-sm w-3/4 font-normal max-sm:text-xs">
        {product?.attributes.long_desc}
      </p>
      <Size />
      <Colors />
      <CountAndCompare product={product} />
    </div>
  );
};

export default ProductData;
