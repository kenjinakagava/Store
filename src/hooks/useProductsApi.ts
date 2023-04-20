import { useState, useEffect } from "react";
import { fetchCategories, fetchProducts } from "../functions/productsApi";
import { productsApiPropsList } from "../interfaces/Product";

export const useProductsApi = () => {
  const [apiResponse, setApiResponse] = useState<productsApiPropsList>();
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([""]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setApiResponse(data);
    });
    fetchCategories().then((data) => {
      setActiveCategory(data[0]);
      setCategories(data);
    });
  }, []);

  return {
    apiResponse,
    activeCategory,
    categories,
    setActiveCategory,
  };
};
