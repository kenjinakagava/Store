import styles from "./HeroTransparentCard.module.scss";
import CodeIcon from "../../assets/svgs/Code.svg";

const HeroTransparentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={CodeIcon}
          alt="Icon"
          className={styles.icon}
          decoding="async"
          aria-hidden="true"
          width={48}
          height={48}
        />
        <h1 className={styles.title}>Teq Store</h1>
        <p className={styles.paragraph}>
          From Clothings to Hardware, Teq Store's got you
        </p>
        <a href="/store" className={styles.cta}>
          Discover our products
        </a>
      </div>
    </div>
  );
};

export default HeroTransparentCard;
