import styles from "./Cart.module.scss";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import { CartContext } from "../../contexts/CartContext";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import { Link } from "react-router-dom";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  let totalAmount = 0;
  const { cartItems } = useContext(CartContext);

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
          <h1 className={styles.title}>Your cart items</h1>
          <a href="/" className={styles.back}>
            Back to shopping
          </a>
        </div>
        <div className={styles.cart}>
          <div className={styles.label}>
            <span>Product</span>
            <span>Price</span>
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
                  <span className={styles.price}>{item.price}</span>
                </div>
                <div className={styles["product-control"]}>
                  <button className={styles["product-remove"]}>Remove</button>
                  <QuantitySelector quantity={item.quantity} id={item.id} />
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.subtotal}>
            <h3>Sub-total</h3>
            <h3>{subtotal}</h3>
          </div>
          <p className={styles["bottom-text"]}>
            Tax and shipping cost will be calculated later
          </p>
          <Link to="/checkout" className={styles.checkout}>
            Checkout
          </Link>
        </div>
      </main>
    </>
  );
};

export default Cart;
