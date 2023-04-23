import classNames from "classnames";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  return (
    <ul className={classNames(styles.menu, { [styles.open]: isMenuOpen })}>
      <li className={styles.item}>
        <a href="/">Home</a>
      </li>
      <li className={styles.i18n}>
        <select name="language" id="language-select" className={styles.select}>
          <option value="ENG">ENG</option>
          <option value="PTBR">PT-BR</option>
        </select>
      </li>
    </ul>
  );
};

export default MobileMenu;
