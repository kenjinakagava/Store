import { useState } from "react";
import styles from "./QuantitySelector.module.scss";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelector = ({ quantity, setQuantity }: QuantitySelectorProps) => {
  const adjustQuantity = (amount: number) => {
    setQuantity((currentQuantity) => {
      // set new Quantity
      const newQuantity = currentQuantity + amount;

      // make sure quantity always is at least 1
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
