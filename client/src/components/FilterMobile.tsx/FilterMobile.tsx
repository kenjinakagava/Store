import styles from "./FilterMobile.module.scss";
import FilterIcon from "../../assets/svgs/Filter.svg";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

interface FilterMobileProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const FilterMobile = (props: FilterMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{props.activeCategory}</h2>
        <button
          className={styles.button}
          aria-label="open filters"
          onClick={handleClick}
        >
          <img
            src={FilterIcon}
            alt="filter icon"
            width={30}
            height={30}
            decoding="async"
          />
          <span className={styles.label}>Shop By</span>
        </button>
      </div>
      <Sidebar
        categories={props.categories}
        setActiveCategory={props.setActiveCategory}
        activeCategory={props.activeCategory}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default FilterMobile;
