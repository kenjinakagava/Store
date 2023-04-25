import styles from "./Nav.module.scss";
import Logo from "../../assets/svgs/logo.svg";
import { useState } from "react";
import Cart from "../../assets/svgs/Cart.svg";
import HamburgerButton from "../HamburgerMenu/HamburgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <HamburgerButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <Link to="/" aria-label="logo" className={styles.logo}>
          <img
            src={Logo}
            alt="Logo"
            aria-hidden="true"
            width={126}
            height={34}
            decoding="async"
          />
        </Link>
        <div className={styles.icons}>
          <Link className={styles.link} to="/cart" aria-label="Go to Cart">
            <span className={styles.description}>{t("Your Cart")}</span>
            <img
              src={Cart}
              alt="Shopping Cart"
              width={30}
              height={30}
              decoding="async"
              aria-hidden="true"
            />
          </Link>
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Nav;
