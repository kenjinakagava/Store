import styles from "./HeroTransparentCard.module.scss";
import CodeIcon from "../../assets/svgs/Code.svg";
import { useTranslation } from "react-i18next";

const HeroTransparentCard = () => {
  const { t } = useTranslation();

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
          {t("From Clothings to Hardware, Teq Store's got you")}
        </p>
        <a href="#products" className={styles.cta}>
          {t("Discover our products")}
        </a>
      </div>
    </div>
  );
};

export default HeroTransparentCard;
