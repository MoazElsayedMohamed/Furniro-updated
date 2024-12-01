import Filter from "@/components/filter/Filter";
import ShopHero from "@/components/shopHero/ShopHero";
import ShopProducts from "@/components/shopProducts/ShopProducts";
import Work from "@/components/work/Work";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";

const Shop = () => {
  const { data: products } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const visiblePages = 3;
  const [pageSize, setPageSize] = useState(16);

  function handlePageClick(pageNumber: number) {
    setCurrentPage(pageNumber);
  }
  const totalProducts = products?.data.length;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(
    totalPages,
    Math.floor(startPage + visiblePages - 1)
  );
  const adjustedStartPage = Math.max(1, endPage - visiblePages + 1);
  function nextPage() {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <ShopHero />
      <Filter
        totalProducts={totalProducts}
        currentPage={currentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
      <ShopProducts
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        nextPage={nextPage}
        adjustedStartPage={adjustedStartPage}
        startPage={startPage}
        endPage={endPage}
        pageSize={pageSize}
      />
    </>
  );
};

export default Shop;
