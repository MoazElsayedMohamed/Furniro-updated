import React from "react";
import ShopPagination from "../pagination/ShopPagination";
import ProductElements from "../products/ProductElements";

export interface Props {
  nextPage: () => void;
  handlePageClick: (pageNumber: number) => void;
  startPage: number;
  endPage: number;
  adjustedStartPage: number;
  currentPage: number;
  pageSize: number;
}

const ShopProducts: React.FC<Props> = ({
  nextPage,
  handlePageClick,
  startPage,
  endPage,
  adjustedStartPage,
  currentPage,
  pageSize,
}) => {
  return (
    <div className="py-12">
      <ProductElements pageSize={pageSize} currentPage={currentPage} />
      <ShopPagination
        nextPage={nextPage}
        handlePageClick={handlePageClick}
        startPage={startPage}
        endPage={endPage}
        adjustedStartPage={adjustedStartPage}
        currentPage={0}
        pageSize={0}
      />
    </div>
  );
};

export default ShopProducts;
