import { URL } from "@/utils/constants";
import { useCategories } from "../../hooks/useCategories";
import Category from "./Category";
import Loaders from "../Loader/Loaders";
const Categories = () => {
  const { data: categories, isLoading } = useCategories();

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
    <section className="my-14 lg:mb-28 max-lg:mb-28 text-center px-8 container max-md:mb-14 ">
      <h3 className="text-3xl capitalize font-bold mb-4 text-gray-600 max-md:text-2xl">
        browse the range
      </h3>
      <p className="text-xl mb-12 text-gray-300 font-normal max-md:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {isLoading ? (
        <Loaders numberOfLoaders={3} />
      ) : (
        <div className=" grid md:grid-cols-3 xs:grid-cols-2 gap-x-8 gap-y-20 max-md:gap-4">
          {categoriesElements}
        </div>
      )}
    </section>
  );
};

export default Categories;
