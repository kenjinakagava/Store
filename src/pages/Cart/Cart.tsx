import styles from "./Cart.module.scss";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import { CartContext } from "../../contexts/CartContext";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getCurrency from "../../functions/getCurrency";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  let totalAmount = 0;
  const { cartItems } = useContext(CartContext);

  const { t } = useTranslation();

  const { symbol, exchangeRate } = getCurrency();

  useEffect(() => {
    cartItems.forEach((item) => (totalAmount += item.price * item.quantity));
    setSubtotal(totalAmount);
  }, [cartItems]);

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main>
        <div className={styles["top-container"]}>
          <h1 className={styles.title}>{t("Your cart items")}</h1>
          <Link to="/" className={styles.back}>
            {t("Back to shopping")}
          </Link>
        </div>
        <div className={styles.cart}>
          <div className={styles.label}>
            <span>{t("Product")}</span>
            <span>{t("Price")}</span>
          </div>
          <ul className={styles["products-list"]}>
            {cartItems.map((item) => (
              <li className={styles.product} key={item.id}>
                <div className={styles["product-info"]}>
                  <img
                    src={item.image}
                    alt={`${item.quantity} units of ${item.title}`}
                    className={styles["product-preview"]}
                  />
                  <h2 className={styles["product-title"]}>{item.title}</h2>
                  <span className={styles.price}>{`${symbol} ${
                    item.price * exchangeRate
                  }`}</span>
                </div>
                <div className={styles["product-control"]}>
                  <button className={styles["product-remove"]}>
                    {t("Remove")}
                  </button>
                  <QuantitySelector quantity={item.quantity} id={item.id} />
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.subtotal}>
            <h3>Subtotal</h3>
            <h3>{`${symbol} ${subtotal * exchangeRate}`}</h3>
          </div>
          <button className={styles.purchase}>{t("Purchase")}</button>
        </div>
      </main>
    </>
  );
};

export default Cart;
