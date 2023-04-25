import { useTranslation } from "react-i18next";
import styles from "./CategoryToggler.module.scss";

interface CategoryTogglerProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryToggler = ({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryTogglerProps) => {
  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.getAttribute("data-category");
    setActiveCategory(value ? value : "");
  };

  return (
    <ul className={styles.list}>
      {categories?.map((category) => (
        <li
          className={`${styles.item} ${
            activeCategory === category ? styles.active : null
          }`}
          key={category}
        >
          <button onClick={handleClick} data-category={category}>
            {t(category)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryToggler;
