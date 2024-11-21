import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Props } from "./Loaders";

const Loader: React.FC<Props> = ({ className, name }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Skeleton className={className} />
      {name === "categories" && <Skeleton className="h-4 w-24 bg-primary" />}
    </div>
  );
};

export default Loader;
