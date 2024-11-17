// import React from "react";
import Category from "./Category";
// import { useCategories } from "../../services/apiCategories";
import { categories } from "@/services/categories";

const Categories = () => {
  // const { data: categories, error, isLoading } = useCategories();

  // if (isLoading) return <p>loading</p>;
  // if (error) return <p>Error loading categories</p>;

  const categoriesElements = categories?.data.map((category) => {
    return (
      <Category
        key={category.id}
        name={category.attributes.name}
        imageUrl={category.attributes.image}
      />
    );
  });

  return (
    <section className="my-14 lg:mb-28 max-lg:mb-28 text-center px-8 container ">
      <h3 className="text-3xl capitalize font-bold mb-4 text-gray-600">
        browse the range
      </h3>
      <p className="text-xl mb-12 text-gray-300 font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Exercitationem, ad incidunt nihil
      </p>
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-8 gap-y-20 max-sm:gap-24">
        {categoriesElements}
      </div>
    </section>
  );
};

export default Categories;
