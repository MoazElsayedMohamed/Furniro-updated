import React from "react";

interface Data {
  name: string;
  imageUrl: string;
}

const Category: React.FC<Data> = ({ imageUrl, name }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} className="w-full" />
      <h3 className="text-2xl font-semibold text-gray-600 mt-8 max-md:text-lg max-md:mt-4">
        {name}
      </h3>
    </div>
  );
};

export default Category;
