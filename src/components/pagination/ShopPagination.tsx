import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import React from "react";
import { Props } from "../shopProducts/ShopProducts";

const ShopPagination: React.FC<Props> = ({
  nextPage,
  handlePageClick,
  adjustedStartPage,
  endPage,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = adjustedStartPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem>
          <PaginationLink onClick={() => handlePageClick(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pageNumbers;
  };
  return (
    <Pagination>
      <PaginationContent className="flex gap-6 max-md:gap-4 ">
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            className="p-4 text-xl max-md:text-base font-light"
            onClick={() => nextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ShopPagination;
