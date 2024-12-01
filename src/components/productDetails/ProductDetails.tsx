import { URL } from "@/utils/constants";
import ProductImage from "../productImage/ProductImage";
import DetailsData from "./DetailsData";
import ProductData from "./ProductData";

export interface DetailsProps {
  product:
    | {
        id: number;
        attributes: {
          name: string;
          price: number | string;
          long_desc: string;
          sku: string;
          content: string;
          count: number;
          image: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
          category: {
            data: {
              attributes: {
                name: string;
              };
            };
          };
          tag: {
            data: [
              {
                attributes: {
                  name: string;
                };
              }
            ];
          };
          reviews: {
            data: [
              {
                attributes: {
                  rating: number;
                  content: string;
                };
              }
            ];
          };
        };
      }
    | undefined;
}

const ProductDetails: React.FC<DetailsProps> = ({ product }) => {
  return (
    <section className="pt-4 pb-6 px-20 max-md:px-12 max-sm:px-8">
      <div className="grid lg:grid-cols-2 max-lg:gap-4 mb-14 max-sm:mb-7">
        <ProductImage
          imageUrl={`${URL}${product?.attributes.image.data.attributes.url}`}
        />
        <ProductData product={product} />
      </div>
      <DetailsData product={product} />
    </section>
  );
};

export default ProductDetails;
