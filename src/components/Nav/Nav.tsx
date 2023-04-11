import styles from "./Nav.module.scss";
import Logo from "../../assets/svgs/logo.svg";
import { useState } from "react";
import Cart from "../../assets/svgs/Cart.svg";
import Wishlist from "../../assets/svgs/Wishlist.svg";
import HamburgerButton from "../HamburgerMenu/HamburgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <HamburgerButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <a href="/" aria-label="logo" className={styles.logo}>
          <img
            src={Logo}
            alt="Logo"
            aria-hidden="true"
            width={126}
            height={34}
            decoding="async"
          />
        </a>
        <div className={styles.icons}>
          <a
            className={styles.link}
            href="/wishlist"
            aria-label="Go to Wishlist"
          >
            <span className={styles.description}>Wishlist</span>
            <img
              src={Wishlist}
              alt="Wishlist"
              width={30}
              height={30}
              decoding="async"
              aria-hidden="true"
            />
          </a>
          <a className={styles.link} href="/cart" aria-label="Go to Cart">
            <span className={styles.description}>Your Cart</span>
            <img
              src={Cart}
              alt="Shopping Cart"
              width={30}
              height={30}
              decoding="async"
              aria-hidden="true"
            />
          </a>
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Nav;
