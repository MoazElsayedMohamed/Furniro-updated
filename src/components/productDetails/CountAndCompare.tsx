import React from "react";
import { Button } from "../ui/button";
import { DetailsProps } from "./ProductDetails";
import { useCart } from "./useCart";

const CountAndCompare: React.FC<DetailsProps> = ({ product }) => {
  const { addToCart, count, setCount } = useCart();

  return (
    <div className="flex gap-4">
      <Button variant="outline2">
        <p
          onClick={() => {
            if (count > 1) setCount(count - 1);
          }}
        >
          -
        </p>
        <p>{count}</p>
        <p onClick={() => setCount(count + 1)}>+</p>
      </Button>
      <Button variant="destructive" onClick={() => addToCart(product)}>
        Add to cart
      </Button>
      <Button variant="destructive">+ compare</Button>
    </div>
  );
};

export default CountAndCompare;
