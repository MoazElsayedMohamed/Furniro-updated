import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import ProductElements from "./ProductElements";

const Products = () => {
  return (
    <section className="text-center mb-12 container">
      <h2 className="text-3xl capitalize  mb-12 font-bold text-gray-900 max-sm:text-2xl">
        our products
      </h2>
      <ProductElements PAGE_SIZE={8} />
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "base",
        })}
        to="/shop"
      >
        Show more
      </Link>
    </section>
  );
};

export default Products;
