// import { useProducts } from "@/hooks/useProducts";
// import { useState } from "react";

// const useShopProducts = () => {
//   const { data: products } = useProducts();
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * 16;
//   const endIndex = startIndex + 16;
//   const productsToDisplay = products?.data.slice(startIndex, endIndex);

//   const start = (currentPage - 1) * 16 + 1;
//   const end = start + 16 - 1;

//   return {
//     totalPages,
//     startPage,
//     endPage,
//     adjustedStartPage,
//     totalProducts,
//     start,
//     end,
//     startIndex,
//     endIndex,
//     nextPage,
//     handlePageClick,
//     productsToDisplay,
//     currentPage,
//   };
// };

// export default useShopProducts;
