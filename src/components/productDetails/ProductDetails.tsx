import { URL } from "@/utils/constants";
import ProductImage from "../productImage/ProductImage";
import { Button } from "../ui/button";
import { useState } from "react";
import { SvgIcon } from "../svgIcon/SvgIcon";

export interface DetailsProps {
  product: {
    id: number;
    attributes: {
      name: string;
      price: number | string;
      long_desc: string;
      sku: string;
      content: string;
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
  };
}

interface RatingProps {
  numberOfStars: number | undefined;
}

const ProductDetails: React.FC<DetailsProps> = ({ product }) => {
  console.log(product);

  const [count, setCount] = useState(1);

  const Rating: React.FC<RatingProps> = ({ numberOfStars }) => {
    const stars = Array(numberOfStars).fill(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return stars.map((__) => {
      return <SvgIcon name="star" className="w-5 h-5" />;
    });
  };

  return (
    <section className="pt-4 pb-6 px-20 max-md:px-12 max-sm:px-8">
      <div className="grid lg:grid-cols-2 max-lg:gap-4 mb-14 max-sm:mb-7">
        <div>
          <ProductImage
            imageUrl={`${URL}${product?.attributes.image.data.attributes.url}`}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-normal text-4xl max-sm:text-2xl">
            {product?.attributes.name}
          </h1>
          <p className="text-gray-200 text-2xl max-sm:text-lg">
            Rs.{product?.attributes.price}.00
          </p>
          <div className="flex items-center gap-2">
            <Rating
              numberOfStars={
                product?.attributes.reviews.data[0].attributes.rating
              }
            />
          </div>
          <p className="text-sm w-3/4 font-normal max-sm:text-xs">
            {product?.attributes.long_desc}
          </p>
          <h1 className="capitalize text-gray-200 font-normal max-sm:text-sm">
            size
          </h1>
          <div className="flex items-center gap-3">
            <Button variant="third">L</Button>
            <Button variant="third">XL</Button>
            <Button variant="third">XS</Button>
          </div>
          <h1 className="capitalize text-gray-200 font-normal max-sm:text-sm">
            color
          </h1>
          <div className="flex items-center gap-3">
            <div className="bg-violet-400 rounded-full w-7 h-7 cursor-pointer max-sm:h-6 max-sm:w-6"></div>
            <div className="bg-black rounded-full w-7 h-7 cursor-pointer max-sm:h-6 max-sm:w-6"></div>
            <div className="bg-primary rounded-full w-7 h-7 cursor-pointer max-sm:h-6 max-sm:w-6"></div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline2">
              <p
                onClick={() => {
                  if (count > 1) setCount(count - 1);
                }}
              >
                -
              </p>
              <p>{count}</p>
              <p onClick={() => setCount(count + 1)}>+</p>
            </Button>
            <Button variant="destructive">Add to cart</Button>
            <Button variant="destructive">+ compare</Button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-end">
        <div className="border-t border-gray-100 mt-4 lg:w-1/2 flex gap-2 pt-10 ">
          <div className="font-normal text-gray-200 flex flex-col gap-3 max-sm:text-sm">
            <p>SKU</p>
            <p>CATEGORY</p>
            <p>Tags</p>
            <p>Share</p>
          </div>
          <div className="text-gray-200 flex flex-col gap-3 max-sm:text-sm">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="text-gray-200 flex flex-col gap-3 max-sm:text-sm">
            <p>{product?.attributes.sku}</p>
            <p>{product?.attributes.category.data.attributes.name}</p>
            <p>{product?.attributes.tag.data[0].attributes.name}</p>
            <p className="flex gap-6">
              <SvgIcon
                name="facebook"
                className="w-4 h-4 max-sm:w-3 max-sm:h-3"
              />
              <SvgIcon
                name="linkedin"
                className="w-4 h-4 max-sm:w-3 max-sm:h-3"
              />
              <SvgIcon
                name="twitter"
                className="w-4 h-4 max-sm:w-3 max-sm:h-3"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
