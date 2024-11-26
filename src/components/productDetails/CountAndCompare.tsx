import { useState } from "react";
import { Button } from "../ui/button";

const CountAndCompare = () => {
  const [count, setCount] = useState(1);

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
      <Button variant="destructive">Add to cart</Button>
      <Button variant="destructive">+ compare</Button>
    </div>
  );
};

export default CountAndCompare;
