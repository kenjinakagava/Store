import styles from "./AddToCartButton.module.scss";
import Cart from "../../assets/svgs/Cart.svg";
import { useContext, useState } from "react";
import { CartContext, CartItem } from "../../contexts/CartContext";
import { useTranslation } from "react-i18next";
import Toast from "../Toast/Toast";

interface AddToCartButtonProps extends CartItem {
  loading?: "lazy" | "eager";
}

const AddToCartButton = (props: AddToCartButtonProps) => {
  const [showToast, setShowToast] = useState(false);
  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const { cartItems, setCartItems } = useContext(CartContext);

  const { t } = useTranslation();

  const addToCart = (item: CartItem) => {
    // create newItem object using the props passed to this (addToCartButton) component
    const newItem: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      // if not defined (like in the homescreen) add one unit of the product
      quantity: props.quantity ? props.quantity : 1,
    };
    // find whether the item our "add to cart button" is referring to is already on the cart
    // if so get it's id on the cartItems array
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === newItem.id
    );
    // if the product already exists on the cart
    // we make this distinction so we don't overwrite the product with a copy of itself, this way we can keep track of the quantity
    if (existingItemIndex !== -1) {
      // create a new array with the current cartItems
      const updatedCartItems = [...cartItems];
      // change the quantity of the cartItem this button reefers
      updatedCartItems[existingItemIndex].quantity += props.quantity
        ? props.quantity
        : // in the homepage we don't show the quantity selector, so we add one unit every time
          1;
      setCartItems(updatedCartItems);
    } else {
      // if it's a new product add the new product to the cart
      setCartItems((previousCartItems) => [...previousCartItems, newItem]);
    }
    // opens the toast after clicking the add to cart button
    handleToast();
  };
  return (
    <>
      <button
        aria-label={`${t("Add item to cart")}`}
        className={styles.button}
        onClick={() => {
          addToCart(props);
        }}
      >
        <span className={styles.description}>{t("Add item to cart")}</span>
        <img
          src={Cart}
          alt=""
          width={30}
          height={30}
          decoding="async"
          loading={props.loading ? props.loading : "lazy"}
        />
      </button>
      <Toast text={t("Item added to cart")} showToast={showToast} />
    </>
  );
};

export default AddToCartButton;
