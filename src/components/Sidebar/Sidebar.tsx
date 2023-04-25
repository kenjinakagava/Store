import CloseArea from "../CloseArea/CloseArea";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  categories: string[];
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = (props: SidebarProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.textContent;
    props.setActiveCategory(value ? value : "");
  };
  return (
    <>
      {props.isOpen ? <CloseArea setIsOpen={props.setIsOpen} /> : null}
      <div className={`${styles.sidebar} ${props.isOpen ? styles.open : ""}`}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>filters</h2>
          <h3 className={styles.subtitle}>Categories</h3>
          <ul className={styles.categories}>
            {props.categories.map((category) => (
              <li
                className={`${styles.item} ${
                  props.activeCategory === category ? styles.active : ""
                }`}
                key={category}
              >
                <button onClick={handleClick}>{category}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
