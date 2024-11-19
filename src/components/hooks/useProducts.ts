import { getProducts, ProductResponse } from "@/services/apiProducts";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useProducts(): UseQueryResult<ProductResponse> {
  return useQuery<ProductResponse>({
    queryKey: ["product"],
    queryFn: getProducts,
  });
}
