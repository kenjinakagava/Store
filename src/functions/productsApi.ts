export const fetchProducts = () => {
  return fetch("https://fakestoreapi.com/products/").then((res) => res.json());
};

export const fetchCategories = () => {
  return fetch("https://fakestoreapi.com/products/categories").then((res) =>
    res.json()
  );
};
