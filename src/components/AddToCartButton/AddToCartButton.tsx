import styles from "./AddToCartButton.module.scss";
import Cart from "../../assets/svgs/Cart.svg";

interface AddToCartButtonProps {
  image: string;
  title: string;
  price: number;
}

const AddToCartButton = (props: AddToCartButtonProps) => {
  return (
    <button aria-label="add to cart">
      <img
        src={Cart}
        alt="cart"
        aria-hidden="true"
        width={30}
        height={30}
        loading="lazy"
        decoding="async"
      />
    </button>
  );
};

export default AddToCartButton;
