import styles from "./AddToCartButton.module.scss";
import Cart from "../../assets/svgs/Cart.svg";
import Icon from "../Icon/Icon";

interface AddToCartButtonProps {
  image: string;
  title: string;
  price: number;
  forceShowDescription?: boolean;
  loading?: "lazy" | "eager";
}

const AddToCartButton = (props: AddToCartButtonProps) => {
  return (
    <Icon
      ariaLabel="add to cart"
      icon={Cart}
      forceShowDescription={props.forceShowDescription}
      description={"Add to Cart"}
      type={"button"}
      loading={props.loading ? props.loading : "lazy"}
    />
  );
};

export default AddToCartButton;
