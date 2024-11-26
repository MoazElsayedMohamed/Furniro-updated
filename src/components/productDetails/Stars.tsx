import React from "react";
import Rating from "./Rating";
import { DetailsProps } from "./ProductDetails";

const Stars: React.FC<DetailsProps> = ({ product }) => {
  return (
    <div className="flex items-center gap-2">
      <Rating
        numberOfStars={product?.attributes.reviews.data[0].attributes.rating}
      />
    </div>
  );
};

export default Stars;
