import classNames from "classnames";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  return (
    <ul className={classNames(styles.menu, { [styles.open]: isMenuOpen })}>
      <li className={styles.item}>
        <a href="/home">Home</a>
      </li>
      <li className={styles.item}>
        <a href="/store">Store</a>
      </li>
      <li className={styles.item}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default MobileMenu;
