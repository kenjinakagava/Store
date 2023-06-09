import { useContext, useState } from "react";
import styles from "./QuantitySelector.module.scss";
import { CartContext } from "../../contexts/CartContext";
import { useTranslation } from "react-i18next";

interface QuantitySelectorProps {
  quantity: number;
  id: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelector = ({
  quantity,
  setQuantity,
  id,
}: QuantitySelectorProps) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { t } = useTranslation();

  const adjustQuantity = (amount: number) => {
    // button is from product page
    if (setQuantity) {
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
    }
    // button is from cart
    else {
      // find the item inside cartItems array based on its id
      const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      // get cartItems
      const updatedCartItems = [...cartItems];
      // check if the quantity amount will go below 1
      if (updatedCartItems[existingItemIndex].quantity + amount < 1) {
        // prevent it from going below 1
        updatedCartItems[existingItemIndex].quantity = 1;
      } else {
        updatedCartItems[existingItemIndex].quantity += amount;
      }
      // update the state and cause a rerender
      setCartItems(updatedCartItems);
    }
  };
  return (
    <div className={styles["quantity-selector"]}>
      <h3 className={styles.title}>{t("Quantity")}</h3>
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
