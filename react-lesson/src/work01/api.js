import { ProductList } from "./const";

// GET 요청
export function requestEveryProduct() {
  return {
    code: 200,
    data: ProductList,
  };
}
