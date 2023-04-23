import HeroTransparentCard from "../HeroTransparentCard/HeroTransparentCard";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <HeroTransparentCard />
    </section>
  );
};

export default Hero;
