import React from "react";
import Loader from "./Loader";

interface Props {
  numberOfLoaders: number;
}

const Loaders: React.FC<Props> = ({ numberOfLoaders }) => {
  const loaders = Array(numberOfLoaders).fill(0);
  return (
    <div className="grid grid-cols-3">
      {loaders.map((_, index) => (
        <Loader key={index} />
      ))}
    </div>
  );
};

export default Loaders;
