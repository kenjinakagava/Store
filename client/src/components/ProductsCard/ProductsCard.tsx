import { CartItem } from "../../contexts/CartContext";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import styles from "./ProductsCard.module.scss";

const ProductsCard = (props: CartItem) => {
  return (
    <div className={styles.card}>
      <a href={`product/${props.id}`} className={styles["image-container"]}>
        <img
          src={props.image}
          alt={props.title}
          className={styles.image}
          width={318}
          height={340}
          decoding="async"
          loading="lazy"
        />
      </a>
      <div className={styles["text-container"]}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles["buy-info-container"]}>
          <div className={styles["price-container"]}>
            <span className={styles.topper}>Price:</span>
            <h3 className={styles.price}>${props.price}</h3>
          </div>
          <AddToCartButton {...props} />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
