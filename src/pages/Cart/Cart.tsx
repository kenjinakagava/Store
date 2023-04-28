import styles from "./Cart.module.scss";
import { useContext, useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import Nav from "../../layouts/Nav/Nav";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getCurrency from "../../functions/getCurrency";
import CartProduct from "../../components/CartProduct/CartProduct";

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
            <span className={styles.left}>{t("Product")}</span>
            <div className={styles.wrapper}>
              <span>{t("Price")}</span>
              <span className={styles["label-desktop"]}>{t("Quantity")}</span>
              <span className={styles["label-desktop"]}>{t("Total")}</span>
            </div>
          </div>
          <ul className={styles["products-list"]}>
            {cartItems.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
            {cartItems.length > 0 ? null : (
              <p className={styles.empty}>{t("The cart is empty")}</p>
            )}
          </ul>
          <div className={styles.subtotal}>
            <h3>Subtotal</h3>
            <h3>{`${symbol} ${(subtotal * exchangeRate).toFixed(2)}`}</h3>
            <button className={styles.purchase}>{t("Purchase")}</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
