import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CategoriesResponse, getCategories } from "@/services/apiCategories";

export function useCategories(): UseQueryResult<CategoriesResponse> {
  return useQuery<CategoriesResponse>({
    queryKey: ["category"],
    queryFn: getCategories,
  });
}
