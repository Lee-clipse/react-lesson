export function reqProductList() {
  return {
    code: 200,
    data: ProductList,
  };
}

export const ProductList = [
  {
    rpNumber: "RP-001",
    weight: 5,
    width: 15,
    length: 15,
    height: 20,
    createdAt: "2024. 8. 22. 오후 1:55:37",
  },
  {
    rpNumber: "RP-002",
    weight: 3,
    width: 30,
    length: 30,
    height: 20,
    createdAt: "2024. 8. 23. 오전 2:24:28",
  },
];
