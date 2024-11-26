import React, { useState } from "react";
import { DetailsProps } from "../productDetails/ProductDetails";

const ProductDescription: React.FC<DetailsProps> = ({ product }) => {
  const [description, setDescription] = useState(true);
  return (
    <section className="border-y border-gray-100 py-11">
      <div className="capitalize flex items-center justify-center text-2xl gap-16 max-sm:text-lg">
        <h1
          className={`cursor-pointer ${description ? "" : "text-gray-200"}`}
          onClick={() => setDescription(true)}
        >
          description
        </h1>
        <h1
          onClick={() => setDescription(false)}
          className={`cursor-pointer ${description ? "text-gray-200" : ""}`}
        >
          Reviews[{product?.attributes.reviews.data[0].attributes.rating}]
        </h1>
      </div>
      <div className="mt-9 font-normal text-gray-200 w-full flex justify-center max-sm:text-sm ">
        <div className="w-3/4">
          {description
            ? product?.attributes.content
            : product?.attributes.reviews.data[0].attributes.content}
        </div>
      </div>
      <div className="flex max-md:flex-col items-center justify-center gap-7 mt-9">
        <img
          src="/Description-1.webp"
          alt="description image"
          className="bg-secondary rounded-md max-lg:w-2/5 max-md:w-3/4"
        />
        <img
          src="/Description-2.webp"
          alt="description image"
          className="bg-secondary rounded-md max-lg:w-2/5 max-md:w-3/4"
        />
      </div>
    </section>
  );
};

export default ProductDescription;
