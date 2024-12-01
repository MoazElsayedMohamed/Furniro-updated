import { DetailsProps } from "../productDetails/ProductDetails";
import { SvgIcon } from "../svgIcon/SvgIcon";

const SingleProductHeader: React.FC<DetailsProps> = ({ product }) => {
  return (
    <section className="bg-secondary mt-24 py-10 pl-24 max-sm:mt-20 max-sm:py-8 max-sm:pl-12 max-xs:pl-8">
      <div className="flex items-center gap-3.5">
        <h1 className="font-normal text-gray-200 capitalize max-sm:text-sm">
          home
        </h1>
        <SvgIcon name="right-arrow" className="w-4 h-4" onClick={undefined} />
        <h2 className="font-normal text-gray-200 capitalize max-sm:text-sm">
          shop
        </h2>
        <SvgIcon name="right-arrow" className="w-4 h-4" onClick={undefined} />
        <h3 className="border-l-2 border-gray-200 pl-8 font-normal max-sm:text-sm">
          {product?.attributes.name}
        </h3>
      </div>
    </section>
  );
};

export default SingleProductHeader;
