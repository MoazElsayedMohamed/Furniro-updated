import { CATEGORIES_URL } from "../utils/constants";

interface CategoryAttributes {
  name: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}

export interface CategoriesResponse {
  data: CategoryData[];
}

export const getCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetch(`${CATEGORIES_URL}`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: CategoriesResponse = await response.json();
  return data;
};
