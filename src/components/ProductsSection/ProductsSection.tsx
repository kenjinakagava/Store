import ProductsCard from "../ProductsCard/ProductsCard";
import styles from "./ProductsSection.module.scss";
import { useState, useEffect } from "react";

interface productsApiProps {
  image: string;
  title: string;
  price: number;
  id: number;
}

// Define an interface for an array that accepts the properties defined in the productsApiProps interface
// we'll use this new interface to type the data we'll get from the api response
interface productsApiPropsList extends Array<productsApiProps> {}

const ProductsSection = () => {
  const [apiResponse, setApiResponse] = useState<productsApiPropsList>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => setApiResponse(data));
  }, []);
  console.log(apiResponse);

  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Products</h2>
      <p className={styles.description}>
        Check out what we have in store for you
      </p>
      <div className={styles.container}>
        {apiResponse
          // Show products from id 1 to 6
          ?.filter((product) => product.id <= 6)
          .map((data) => (
            <ProductsCard
              key={data.id}
              image={data.image}
              title={data.title}
              price={data.price}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductsSection;
