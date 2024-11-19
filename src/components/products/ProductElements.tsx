import Product from "./Product";
import { URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import React from "react";
import { useProducts } from "../hooks/useProducts";
import Loader from "../Loader/Loader";

interface Size {
  PAGE_SIZE: number;
}

const ProductElements: React.FC<Size> = ({ PAGE_SIZE }) => {
  const { data: products, isLoading } = useProducts();
  if (isLoading) return <Loader />;

  const currentPage = 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const productsToDisplay = products?.data.slice(startIndex, endIndex);

  const productsElements = productsToDisplay?.map((product) => {
    return (
      <Link to={`/product/${product.id}`}>
        <Product
          key={product.id}
          name={product.attributes.name}
          price={product.attributes.price}
          discount={product.attributes.discount}
          shortDesc={product.attributes.short_desc}
          imageUrl={`${URL}${product.attributes.image.data.attributes.url}`}
        />
      </Link>
    );
  });

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 px-8 gap-4 mb-16">
      {productsElements}
    </div>
  );
};

export default ProductElements;
