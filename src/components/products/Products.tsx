import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import ProductElements from "./ProductElements";
import { useProducts } from "@/hooks/useProducts";
import Loaders from "../Loader/Loaders";

const Products = () => {
  const { isLoading } = useProducts();
  return (
    <section className="text-center mb-12 container">
      <h2 className="text-3xl capitalize  mb-12 font-bold text-gray-900 max-sm:text-2xl">
        our products
      </h2>
      {isLoading ? (
        <Loaders
          numberOfLoaders={8}
          className="h-96 w-full bg-primary rounded-none"
          name="products"
        />
      ) : (
        <>
          <ProductElements pageSize={8} currentPage={1} />
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "base",
            })}
            to="/shop"
          >
            Show more
          </Link>
        </>
      )}
    </section>
  );
};

export default Products;
