export const URL = "http://localhost:1337";
export const CATEGORIES_URL = `${URL}/api/categories?pagination[page]=1&pagination[pageSize]=10&populate=image`;
export const PRODUCTS_URL = `${URL}/api/products?pagination[page]=1&pagination[pageSize]=100&populate[0]=image&sort=name&populate[1]=reviews&populate[2]=tag&populate[3]=category`;
export const SIGN_IN_URL = `${URL}/api/auth/local`;
