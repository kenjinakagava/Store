import { useState } from "react";
import styles from "./QuantitySelector.module.scss";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const adjustQuantity = (amount: number) => {
    setQuantity((currentQuantity) => {
      const newQuantity = currentQuantity + amount;
      if (newQuantity < 1) {
        return 1;
      } else {
        return newQuantity;
      }
    });
  };

  return (
    <div className={styles["quantity-selector"]}>
      <h3 className={styles.title}>Quantity</h3>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={() => adjustQuantity(1)}>
          +
        </button>
        <span>{quantity}</span>
        <button className={styles.button} onClick={() => adjustQuantity(-1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
