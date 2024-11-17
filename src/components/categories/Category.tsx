import React from "react";

interface Data {
  name: string;
  imageUrl: string;
}

const Category: React.FC<Data> = ({ imageUrl, name }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} className="w-full lg:h-96 max-lg:h-full" />
      <h3 className="text-2xl font-semibold text-gray-600 mt-8">{name}</h3>
    </div>
  );
};

export default Category;
