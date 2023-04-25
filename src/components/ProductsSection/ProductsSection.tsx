import { useTranslation } from "react-i18next";
import { useProductsApi } from "../../hooks/useProductsApi";
import { productsApiProps } from "../../interfaces/Product";
import CategoryToggler from "../CategoryToggler/CategoryToggler";
import CategoryTogglerMobile from "../CategoryTogglerMobile/CategoryTogglerMobile";
import ProductsCard from "../ProductsCard/ProductsCard";
import styles from "./ProductsSection.module.scss";
import MediaQuery from "react-responsive";

// Define an interface for an array that accepts the properties defined in the productsApiProps interface
// we'll use this new interface to type the data we'll get from the api response

const ProductsSection = () => {
  const { apiResponse, activeCategory, categories, setActiveCategory } =
    useProductsApi();
  const { t } = useTranslation();

  return (
    <section className={styles.products} id="products">
      <h2 className={styles.title}>{t("Products")}</h2>
      <p className={styles.description}>
        {t("Check out what we have in store for you")}
      </p>
      {/* Render mobile or desktop CategoryToggler based on screen width */}
      <MediaQuery maxWidth={767}>
        <CategoryTogglerMobile
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <CategoryToggler
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </MediaQuery>
      <div className={styles.container}>
        {apiResponse
          ?.filter(
            (product: productsApiProps) => product.category === activeCategory
          )
          .map((data) => (
            <ProductsCard
              key={data.id}
              quantity={1}
              id={data.id}
              image={data.image}
              title={data.title}
              price={data.price}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductsSection;
