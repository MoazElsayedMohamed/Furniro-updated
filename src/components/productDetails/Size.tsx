import { useState } from "react";
import { Button } from "../ui/button";

const Size = () => {
  const [activeSize, setActiveSize] = useState("L");

  return (
    <>
      <h1 className="capitalize text-gray-200 font-normal max-sm:text-sm">
        size
      </h1>
      <div className="flex items-center gap-3">
        <Button
          variant="third"
          className={activeSize === "L" ? "bg-primary text-white" : ""}
          onClick={() => setActiveSize("L")}
        >
          L
        </Button>
        <Button
          variant="third"
          className={activeSize === "XL" ? "bg-primary text-white" : ""}
          onClick={() => setActiveSize("XL")}
        >
          XL
        </Button>
        <Button
          variant="third"
          className={activeSize === "XS" ? "bg-primary text-white" : ""}
          onClick={() => setActiveSize("XS")}
        >
          XS
        </Button>
      </div>
    </>
  );
};

export default Size;
