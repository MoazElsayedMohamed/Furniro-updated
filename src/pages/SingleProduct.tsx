import ProductDescription from "@/components/productDescription/ProductDescription";
import ProductDetails from "@/components/productDetails/ProductDetails";
import RelatedPrdoucts from "@/components/relatedProducts/RelatedPrdoucts";
import SingleProductHeader from "@/components/singleProductHeader/SingleProductHeader";
import { useProducts } from "@/hooks/useProducts";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: products } = useProducts();
  const product = products?.data.find((product) => product.id === Number(id));
  return (
    <div>
      <SingleProductHeader product={product} />
      <ProductDetails product={product} />
      <ProductDescription product={product} />
      <RelatedPrdoucts />
    </div>
  );
};

export default SingleProduct;
