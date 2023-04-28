import classNames from "classnames";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MenuProps {
  isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: MenuProps) => {
  const { i18n } = useTranslation();

  const language = localStorage.getItem("language");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };

  return (
    <ul className={classNames(styles.menu, { [styles.open]: isMenuOpen })}>
      <li className={styles.item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.i18n}>
        <select
          name="language"
          id="language-select"
          className={styles.select}
          onChange={handleSelectChange}
        >
          <option value="en" selected={language === "en"}>
            ENG
          </option>
          <option value="ptbr" selected={language === "ptbr"}>
            PT-BR
          </option>
        </select>
      </li>
    </ul>
  );
};

export default Menu;
