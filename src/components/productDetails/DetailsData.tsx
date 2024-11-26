import React from "react";
import { DetailsProps } from "./ProductDetails";
import { SvgIcon } from "../svgIcon/SvgIcon";

const DetailsData: React.FC<DetailsProps> = ({ product }) => {
  return (
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
            <SvgIcon name="twitter" className="w-4 h-4 max-sm:w-3 max-sm:h-3" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsData;
