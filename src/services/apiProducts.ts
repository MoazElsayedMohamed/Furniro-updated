import { PRODUCTS_URL } from "../utils/constants";

interface ProductAttributes {
  name: string;
  price: number;
  discount: number;
  short_desc: string;
  long_desc: string;
  sku: string;
  size: string;
  content: string;
  color: string;
  count: number;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductResponse {
  data: ProductData[];
}

export async function getProducts(): Promise<ProductResponse> {
  const response = await fetch(`${PRODUCTS_URL}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductResponse = await response.json();
  return data;
}
