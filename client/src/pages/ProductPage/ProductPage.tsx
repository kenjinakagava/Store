import styles from "./ProductPage.module.scss";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import { productsApiProps } from "../../interfaces/Product";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import StarRating from "../../components/StarRating/StarRating";
import { useState } from "react";

const ProductPage = (props: productsApiProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main className={styles.container}>
        <div className={styles["flex-container"]}>
          <div className={styles["image-container"]}>
            <img
              className={styles["product-image"]}
              src={props.image}
              alt={props.title}
              decoding="async"
              width={346}
              height={277}
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.ratings}>
              <StarRating
                rating={props.rating?.rate}
                count={props.rating?.count}
              />
            </div>
            <div className={styles["buy-info"]}>
              <h2 className={styles.price}>$ {props.price}</h2>
              <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
                id={props.id}
              />
              <AddToCartButton
                id={props.id}
                quantity={quantity}
                image={props.image}
                title={props.title}
                price={props.price}
              />
            </div>
          </div>
        </div>
        <p className={styles.paragraph}>{props.description}</p>
      </main>
    </>
  );
};

export default ProductPage;
