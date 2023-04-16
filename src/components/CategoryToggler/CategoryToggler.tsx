import { useState } from "react";
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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.textContent;
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
          <button onClick={handleClick}>{category}</button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryToggler;
