import React from "react";
import Loader from "./Loader";
import { Skeleton } from "../ui/skeleton";

export interface Props {
  numberOfLoaders: number;
  className: string;
  name: string;
}

const Loaders: React.FC<Props> = ({ numberOfLoaders, className, name }) => {
  const loaders = Array(numberOfLoaders).fill(0);
  return (
    <>
      <div
        className={`grid grid-cols-${
          numberOfLoaders > 3 ? numberOfLoaders / 2 : numberOfLoaders
        } grid-rows-${name === "products" && "2"} gap-2`}
      >
        {loaders.map((_, index) => (
          <Loader key={index} className={className} name={name} />
        ))}
      </div>
      {name === "products" && (
        <div className="w-full flex items-center justify-center">
          <Skeleton className="h-8 w-32 rounded-none mt-8 bg-primary" />
        </div>
      )}
    </>
  );
};

export default Loaders;
