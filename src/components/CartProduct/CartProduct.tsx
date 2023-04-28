import { t } from "i18next";
import MediaQuery from "react-responsive";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import styles from "./CartProduct.module.scss";
import getCurrency from "../../functions/getCurrency";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CartProductProps {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

const CartProduct = (item: CartProductProps) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemove = () => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };
  const { symbol, exchangeRate } = getCurrency();

  return (
    <li className={styles.product} key={item.id}>
      <div className={styles["product-info"]}>
        <div className={styles["wrapper-title"]}>
          <img
            src={item.image}
            alt={`${item.quantity} units of ${t(item.title)}`}
            className={styles["product-preview"]}
          />
          <h2 className={styles["product-title"]}>{t(item.title)}</h2>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.price}>{`${symbol} ${(
            item.price * exchangeRate
          ).toFixed(2)}`}</span>
          <MediaQuery minWidth={1024}>
            <QuantitySelector quantity={item.quantity} id={item.id} />
          </MediaQuery>
          <MediaQuery minWidth={1024}>
            <span className={styles.price}>{`${symbol} ${(
              item.price *
              exchangeRate *
              item.quantity
            ).toFixed(2)}`}</span>
          </MediaQuery>
        </div>
      </div>
      <div className={styles["product-control"]}>
        <button className={styles["product-remove"]} onClick={handleRemove}>
          {t("Remove")}
        </button>
        <MediaQuery maxWidth={1023}>
          <QuantitySelector quantity={item.quantity} id={item.id} />
        </MediaQuery>
      </div>
    </li>
  );
};

export default CartProduct;
