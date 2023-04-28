import styles from "./Hero.module.scss";
import HeroTransparentCard from "../../components/HeroTransparentCard/HeroTransparentCard";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <HeroTransparentCard />
    </section>
  );
};

export default Hero;
