import classNames from "classnames";
import styles from "./Toast.module.scss";

interface ToastProps {
  text: string;
  showToast: boolean;
}

const Toast = ({ text, showToast }: ToastProps) => {
  return (
    <div className={classNames(styles.toast, { [styles.show]: showToast })}>
      {text}
    </div>
  );
};

export default Toast;
