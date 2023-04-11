import classNames from "classnames";
import styles from "./HamburgerButton.module.scss";

interface HamburgerButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton = ({
  isMenuOpen,
  setIsMenuOpen,
}: HamburgerButtonProps) => {
  return (
    <button
      aria-label="open hamburger menu"
      className={styles.hamburger}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div
        className={classNames(styles.rectangle, { [styles.top]: isMenuOpen })}
      ></div>
      <div
        className={classNames(styles.rectangle, {
          [styles.hidden]: isMenuOpen,
        })}
      ></div>
      <div
        className={classNames(styles.rectangle, {
          [styles.bottom]: isMenuOpen,
        })}
      ></div>
    </button>
  );
};

export default HamburgerButton;
