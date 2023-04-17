import styles from "./Store.module.scss";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useProductsApi } from "../hooks/useProductsApi";
import MediaQuery from "react-responsive";
import FilterMobile from "../components/FilterMobile.tsx/FilterMobile";

const Store = () => {
  const { apiResponse, activeCategory, categories, setActiveCategory } =
    useProductsApi();

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main className={styles.main}>
        <MediaQuery maxWidth={767}>
          <FilterMobile
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          ></Sidebar>
        </MediaQuery>
      </main>
    </>
  );
};

export default Store;
