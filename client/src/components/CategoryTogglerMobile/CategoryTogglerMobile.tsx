import styles from "./CategoryTogglerMobile.module.scss";

interface CategoryTogglerMobileProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryToggler = ({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryTogglerMobileProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveCategory(event.target.value);
  };
  return (
    <select
      value={activeCategory}
      name="categories"
      id="categories-select"
      className={styles.select}
      onChange={handleSelectChange}
    >
      {categories.map((category) => (
        <option key={category} value={category} className={styles.option}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryToggler;
