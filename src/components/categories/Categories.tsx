// import React from "react";
import Category from "./Category";
import { useCategories } from "../../services/apiCategories";
import { URL } from "../../utils/constants";

const Categories = () => {
  const { data: categories, error, isLoading } = useCategories();

  if (isLoading) return <p>loading</p>;
  if (error) return <p>Error loading categories</p>;

  const categoriesElements = categories?.data.map((category) => {
    return (
      <Category
        key={category.id}
        name={category.attributes.name}
        imageUrl={`${URL}${category.attributes.image.data.attributes.url}`}
      />
    );
  });

  return (
    <section className="mt-14 text-center px-8">
      <h3 className="text-3xl uppercase font-bold mb-4 text-gray-600">
        browse the range
      </h3>
      <p className="text-xl mb-12 text-gray-300 font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Exercitationem, ad incidunt nihil
      </p>
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 sm:gap-4 max-sm:gap-0">
        {categoriesElements}
      </div>
    </section>
  );
};

export default Categories;
