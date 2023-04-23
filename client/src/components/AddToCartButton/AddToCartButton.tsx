import styles from "./AddToCartButton.module.scss";
import Cart from "../../assets/svgs/Cart.svg";
import { useContext } from "react";
import { CartContext, CartItem } from "../../contexts/CartContext";

interface AddToCartButtonProps extends CartItem {
  loading?: "lazy" | "eager";
}

const AddToCartButton = (props: AddToCartButtonProps) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = (item: CartItem) => {
    const newItem: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      // if not defined (like in the homescreen) add one unit of the product
      quantity: props.quantity ? props.quantity : 1,
    };
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === newItem.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      // if not defined (like in the homescreen) add one unit of the product
      updatedCartItems[existingItemIndex].quantity += props.quantity
        ? props.quantity
        : 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((previousCartItems) => [...previousCartItems, newItem]);
    }
  };
  return (
    <>
      <button
        aria-label={"Add item to cart"}
        className={styles.button}
        onClick={() => addToCart(props)}
      >
        <span className={styles.description}>Add item to cart</span>
        <img
          src={Cart}
          alt=""
          width={30}
          height={30}
          decoding="async"
          loading={props.loading ? props.loading : "lazy"}
        />
      </button>
    </>
  );
};

export default AddToCartButton;
