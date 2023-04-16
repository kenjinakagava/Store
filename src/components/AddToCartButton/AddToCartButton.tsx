import styles from "./AddToCartButton.module.scss";
import Cart from "../../assets/svgs/Cart.svg";
import Icon from "../Icon/Icon";

interface AddToCartButtonProps {
  image: string;
  title: string;
  price: number;
}

const AddToCartButton = (props: AddToCartButtonProps) => {
  return (
    <Icon
      ariaLabel="add to cart"
      icon={Cart}
      description={"Add to Cart"}
      type={"link"}
      loading="lazy"
    />
  );
};

export default AddToCartButton;
