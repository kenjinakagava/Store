import styles from "./Cart.module.scss";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import { CartContext } from "../../contexts/CartContext";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getCurrency from "../../functions/getCurrency";
import MediaQuery from "react-responsive";
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

  const handleRemove = () => {};

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
              // <li className={styles.product} key={item.id}>
              //   <div className={styles["product-info"]}>
              //     <div className={styles["wrapper-title"]}>
              //       <img
              //         src={item.image}
              //         alt={`${item.quantity} units of ${item.title}`}
              //         className={styles["product-preview"]}
              //       />
              //       <h2 className={styles["product-title"]}>{item.title}</h2>
              //     </div>
              //     <div className={styles.wrapper}>
              //       <span className={styles.price}>{`${symbol} ${
              //         item.price * exchangeRate
              //       }`}</span>
              //       <MediaQuery minWidth={1024}>
              //         <QuantitySelector quantity={item.quantity} id={item.id} />
              //       </MediaQuery>
              //       <MediaQuery minWidth={1024}>
              //         <span className={styles.price}>{`${symbol} ${
              //           item.price * exchangeRate * item.quantity
              //         }`}</span>
              //       </MediaQuery>
              //     </div>
              //   </div>
              //   <div className={styles["product-control"]}>
              //     <button
              //       className={styles["product-remove"]}
              //       onClick={handleRemove}
              //     >
              //       {t("Remove")}
              //     </button>
              //     <MediaQuery maxWidth={1023}>
              //       <QuantitySelector quantity={item.quantity} id={item.id} />
              //     </MediaQuery>
              //   </div>
              // </li>
              <CartProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </ul>
          <div className={styles.subtotal}>
            <h3>Subtotal</h3>
            <h3>{`${symbol} ${subtotal * exchangeRate}`}</h3>
            <button className={styles.purchase}>{t("Purchase")}</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
